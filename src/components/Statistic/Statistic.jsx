import React from 'react';
import { Area, AreaChart,LinearGradient,Stop, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export const Statistic = ({statistic}) => {
  return (
    <>
    <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          height={400}
          data={statistic}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid stroke="#ccc" strokeDasharray="1 1" />
          <YAxis orientation="right" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <defs>
          <linearGradient id="uvGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="50%" stopColor="#FFD5D3 " stopOpacity={0.8} />
            <stop offset="100%" stopColor="#FF6662" stopOpacity={0} />
          </linearGradient>
          </defs>
          <Area type="monotone" dataKey="type" stroke="#94071D" fill="url(#uvGradient)" strokeWidth={3} />
        </AreaChart>
      </ResponsiveContainer>
      </>
  );
};
