import React from "react";
import { Label, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

function TemperatureGraph(props) {
  return (
    <div style={{ width: "90%", margin: "auto", textAlign: "center" }}>
      {/* <h2>Hourly Temperature Variation</h2> */}
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={props.hourlyData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" className="axis"><Label value="Time (Hours)" offset={-5} position="insideBottom" className="labelx"/></XAxis>
          <YAxis domain={["auto", "auto"]} className="axis"><Label value="Temperature (°C)" angle={-90} position="insideLeft" className="labely"  /></YAxis>
          <Tooltip formatter={(value) => `${value}°C`} className="tooltip"/>
          <Line type="monotone" dataKey="temp" stroke="#3674B5" strokeWidth={1} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default TemperatureGraph;
