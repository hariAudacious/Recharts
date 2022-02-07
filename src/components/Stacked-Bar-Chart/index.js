import React from "react";
import {BarChart, Bar,XAxis,YAxis,CartesianGrid,Tooltip,Legend} from "recharts";
const JavaScript = [
    {
        topic : "Object",
        current : 80,
        need : 90
    },
    {
        topic : "Functions",
        current : 95,
        need : 100
    },
    {
        topic : "Array",
        current :100,
        need : 100
    },
    {
        topic : "String",
        current : 40,
        need : 60
    },
    {
        topic : "Promise",
        current : 60,
        need : 90
    },
    {
        topic : "Async-Await",
        current : 95,
        need : 91
    }
]

const StackedBars = () =>{
    return(
      <div>
             <h1 className="chart-headign">Java-Script</h1>
         <BarChart
            width={900}
            height={300}
            data={JavaScript}
            margin={{
                    top: 5,
                    left: 300,
                    bottom: 5
                   }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="topic" />
      <YAxis domain={[0,100]} />
      <Tooltip />
      <Legend />
      <Bar dataKey="current" stackId="a" fill="#8884d8" />
      <Bar dataKey="need" stackId="a" fill="#82ca9d" />
    </BarChart>
      </div>
    )
}
export default StackedBars