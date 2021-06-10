import React from 'react';
import { KUIConnect } from '@kleeen/core-react';
import { CardWidget } from '@kleeen/react/atomic-elements';
import { RadialBarChart, RadialBar, Legend } from 'recharts';

const data = [
  {
    name: 'CPUs',
    uv: 31.47,
    pv: 2400,
    fill: '#8884d8',
  },
  {
    name: 'Memory',
    uv: 26.69,
    pv: 4567,
    fill: '#83a6ed',
  },
  {
    name: 'Network interfaces',
    uv: 15.69,
    pv: 1398,
    fill: '#8dd1e1',
  },
  {
    name: 'Storage devices',
    uv: 8.22,
    pv: 9800,
    fill: '#82ca9d',
  },
  {
    name: 'Controllers',
    uv: 8.63,
    pv: 3908,
    fill: '#a4de6c',
  },
  {
    name: 'Interconnect',
    uv: 2.63,
    pv: 4800,
    fill: '#d0ed57',
  },
];

const style = {
  top: 0,
  left: 350,
  lineHeight: '24px',
};

function Widget1MRtKroSqrEgddnEs9CjDv({ translate, ...widget }) {
  return (
    <CardWidget {...widget}>
      <RadialBarChart
        width={500}
        height={300}
        cx={150}
        cy={150}
        innerRadius={20}
        outerRadius={140}
        barSize={10}
        data={data}
      >
        <RadialBar
          minAngle={15}
          label={{ position: 'insideStart', fill: '#fff' }}
          background
          clockWise
          dataKey="uv"
        />
        <Legend
          iconSize={10}
          width={120}
          height={140}
          layout="vertical"
          verticalAlign="middle"
          wrapperStyle={style}
        />
      </RadialBarChart>
    </CardWidget>
  );
}

export default KUIConnect(({ translate }) => ({ translate }))(Widget1MRtKroSqrEgddnEs9CjDv);
