import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 600 },
  { name: 'Mar', value: 300 },
];

const Chart = () => (
  <ResponsiveContainer width="100%" height={300}>
    <BarChart data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="value" fill="#3b82f6" />
    </BarChart>
  </ResponsiveContainer>
);

export default Chart;
