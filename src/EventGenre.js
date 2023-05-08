import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const EventGenre = ({ events }) => {
  const [data, setData] = useState([]);
  const colors = ["#96ceb4", "#d3a625", "#ff6f69", "#ffcc5c", "#88d8b0"];

  useEffect(() => {
    setData(() => {
      const genres = ["React", "JavaScript", "Node", "jQuery", "Angular"];
      const data = genres.map((genre) => {
        const value = events.filter((event) =>
          event.summary.toUpperCase().includes(genre.toUpperCase())
        ).length;
        return { name: genre, value };
      });
      return data.filter((entry) => entry.value > 0);
    });
  }, [events]);

  return (
    <ResponsiveContainer height={400} className="pie">
      <PieChart height={400}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          labelLine={false}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#82ca9d"
          label={({ name, percent }) =>
            `${name} ${(percent * 100).toFixed(0)} %`
          }
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default EventGenre;
