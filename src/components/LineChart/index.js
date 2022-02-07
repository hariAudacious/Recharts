import React from "react";
import { LineChart, Line,CartesianGrid,Tooltip,XAxis,YAxis, Legend } from 'recharts';
const audaciousTechnologiesData = [
    {
        name : "Suraj Vishwakarma",
        salary : 50000 
    },
    {
        name : "Amit Palaiya",
        salary : 45000 
    },       
     {
        name : "Sunil Yadav",
        salary : 55000 
    },       
    {
        name : "Hariom Sharma",
        salary : 30000 
    }, 
    {
        name : "Sonu Bamniya",
        salary : 60000 
    }, 
    {
        name : "Aarti Yadav",
        salary : 35000    
    }, 
    {
        name : "Rani Yadav",
        salary : 60000 
    }, 
    {
        name : "Dolly Bisen",
        salary : 44000 
    }, 
    {
        name : "Ruchi Gour",
        salary : 60000 
    }
]
const LineCharts = () =>{
    return(
        <div>
             <h1 className="chart-headign">Audacious-Technologies Salary chart</h1>
             <LineChart
                 width={1200}
                 height={400}
                 data={audaciousTechnologiesData}
                 margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
              >
             <XAxis dataKey="name" />
             <YAxis  domain={[15000, "dataMax + 5000"]}/>
             <Tooltip />
             <Legend/>
             <CartesianGrid strokeDasharray="3 3" /> 
             <Line dataKey="salary" type="monotone"  stroke="#82ca9d" activeDot={{ r: 8 }}/>
             </LineChart>
        </div>
    )
}
export default LineCharts;