import React, { useState, useRef, useEffect } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import dayjs from "dayjs";

export const Statistic = ({ statistic }) => {
  const [zoomDomain, setZoomDomain] = useState([0, statistic.length - 1]);
  const chartRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(null);

  useEffect(() => {
    setZoomDomain([0, statistic.length - 1]);
  }, [statistic]);

  // Disable text selection globally when dragging
  useEffect(() => {
    if (isDragging) {
      document.body.style.userSelect = "none";
    } else {
      document.body.style.userSelect = "auto";
    }
  }, [isDragging]);

  const handleWheel = (e) => {
    e.preventDefault();
    const zoomFactor = e.deltaY > 0 ? 1.1 : 0.9;
    const [start, end] = zoomDomain;
    const mid = (start + end) / 2;
    const range = (end - start) * zoomFactor;

    const newStart = Math.max(0, Math.floor(mid - range / 2));
    const newEnd = Math.min(statistic.length - 1, Math.ceil(mid + range / 2));

    if (newEnd - newStart > 5) {
      setZoomDomain([newStart, newEnd]);
    }
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const diff = startX - e.clientX;
    setStartX(e.clientX);

    let shift = Math.floor(diff / 10);
    let [start, end] = zoomDomain;
    start = Math.max(0, start + shift);
    end = Math.min(statistic.length - 1, end + shift);

    if (end - start > 5) {
      setZoomDomain([start, end]);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      ref={chartRef}
      style={{
        width: "100%",
        height: "500px",
        overflow: "hidden",
        cursor: isDragging ? "grabbing" : "grab",
        userSelect: "none", // Prevents highlighting
      }}
      onWheel={handleWheel}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={statistic.slice(zoomDomain[0], zoomDomain[1])}>
          <CartesianGrid stroke="#ccc" strokeDasharray="1 1" />
          <YAxis orientation="right" />
          <XAxis
            dataKey="dateTime"
            tickFormatter={(time) => dayjs(time).format("HH:mm")}
          />
          <Tooltip />
          <defs>
            <linearGradient id="uvGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="50%" stopColor="#FFD5D3" stopOpacity={0.8} />
              <stop offset="100%" stopColor="#FF6662" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Area
            isAnimationActive={false}
            type="monotone"
            dataKey="Output"
            stroke="#94071D"
            fill="url(#uvGradient)"
            strokeWidth={1}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
