import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const data = [
  { name: 'page1 Canonical', value: 6.14 },
  { name: 'Non canonical', value: 2.35 },
  { name: 'Page2 Canonical', value: 24.56 },
  { name: 'Non Canonical', value: 5.41 },
  { name: 'Page3 Canonical', value: 4.18 },
  { name: 'Non Canonical)', value: 17.64 },
  { name: 'Page4 Canonical', value: 12.80 },
  { name: 'Non canonical', value: 29.92 },
];

const COLORS = ['#8884d8', '#83a6ed', '#8dd1e1', '#82ca9d', '#a4de6c', '#d0ed57', '#ffc658', '#ff8042'];

const DonutChartComponent = () => {
  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        innerRadius={80}
        outerRadius={150}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
        startAngle={90}
        endAngle={-270}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        className="chart-label"
        style={{ fontSize: '24px', fill: '#000' }}
      >
        2000
      </text>
    </PieChart>
  );
};

export default DonutChartComponent;
