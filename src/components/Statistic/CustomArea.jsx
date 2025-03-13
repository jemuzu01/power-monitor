import React from 'react'
import { Area, AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const CustomArea = (data) => {
  return (
    <>
      <ResponsiveContainer width="100%" height={350}>
        <AreaChart data={data?.data}
                   margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorCurrent" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ff7300" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#ff7300" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area isAnimationActive={false} type="monotone" dataKey="power" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
          <Area isAnimationActive={false} type="monotone" dataKey="voltage" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
          <Area isAnimationActive={false} type="monotone" dataKey="current" stroke="#ff7300" fillOpacity={1} fill="url(#colorCurrent)" />
        </AreaChart>
      </ResponsiveContainer>
    </>
  )
}

export default CustomArea