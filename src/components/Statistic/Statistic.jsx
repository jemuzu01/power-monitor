import { Box } from '@mui/material';
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export const Statistic = () => {
    const data = [
        { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
        { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
        { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
        { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
        { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
      ];
    return (
        <>
        <Box>
            <ResponsiveContainer width={500} height={500}>
            <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
              {/* Position YAxis to the right */}
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
            </ResponsiveContainer>
      </Box>
      </>
    );
  };
