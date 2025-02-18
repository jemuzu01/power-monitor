import React, { useState, useEffect } from 'react';
import { Area, AreaChart, XAxis, YAxis, CartesianGrid, Brush ,Tooltip, ResponsiveContainer } from 'recharts';
import dayjs from 'dayjs';

export const Statistic = ({ statistic }) => {




  return (
    <div style={{ width: '100%', height: '100%' }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={statistic}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid stroke="#ccc" strokeDasharray="1 1" />
          <YAxis orientation="right" />
          <XAxis
            dataKey="dateTime"
            tickFormatter={(time) => dayjs(time).format('HH:mm')}
          />
          <Tooltip />
          <defs>
            <linearGradient id="uvGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="50%" stopColor="#FFD5D3" stopOpacity={0.8} />
              <stop offset="100%" stopColor="#FF6662" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Brush
            dataKey="dateTime"
            height={30}
            stroke="#8884d8"
            startIndex={0}
            endIndex={statistic.length - 1}
          />
          <Area isAnimationActive={false} type="monotone" dataKey="Output" stroke="#94071D" fill="url(#uvGradient)" strokeWidth={3} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};