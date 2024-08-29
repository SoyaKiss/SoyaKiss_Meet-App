import React from "react";
import { useState, useEffect } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const EventGenresChart = ({ events }) => {
  const [data, setData] = useState([]);

  const genres = ["React", "JavaScript", "Node", "jQuery", "Angular"];
  const COLORS = ["#2a9d8e", "#4ebaac", "#71cfc3", "#9dece2", "#9dece2"];

  const getData = () => {
    const data = genres.map((genre) => {
      const filteredEvents = events.filter((event) =>
        event.summary.includes(genre)
      );

      const value = filteredEvents.length;
      return {
        name: genre,
        value: filteredEvents.length,
      };
    });
    return data;
  };

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    outerRadius,
    percent,
    index,
  }) => {
    const RADIAN = Math.PI / 180;
    const radius = outerRadius;
    const x = cx + radius * Math.cos(-midAngle * RADIAN) * 1.07;
    const y = cy + radius * Math.sin(-midAngle * RADIAN) * 1.07;
    return percent ? (
      <text
        x={x}
        y={y}
        fill="#264653"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
        fontWeight="bold"
      >
        {`${genres[index]} ${(percent * 100).toFixed(0)}%`}
      </text>
    ) : null;
  };

  useEffect(() => {
    setData(getData());
  }, [events]);

  return (
    <ResponsiveContainer width="99%" height={400}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          fill="#2a9d8e"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={150}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default EventGenresChart;
