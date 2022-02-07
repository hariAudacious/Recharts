import React from "react";
import { LineChart, Line,CartesianGrid,Tooltip,XAxis,YAxis, Legend } from 'recharts';
const audaciousTechnologiesData = [
    {
        name : "Suraj Vishwakarma",
        newSalary : 50000,
        oldSalary : 35000,
        futureSalary : 100000 
    },
    {
        name : "Sunil Yadav",
        newSalary : 55000,
        oldSalary : 40000,
        futureSalary : 150000 
    },       
    {
        name : "Hariom Sharma",
        newSalary : 30000,
        futureSalary : 100000 
    }, 
    {
        name : "Sonu Bamniya",
        newSalary : 60000,
        oldSalary : 57000,
        futureSalary : 80000 
    }, 
    {
        name : "Aarti Yadav",
        newSalary : 35000,
        futureSalary : 60000    
    }, 
    {
        name : "Rani Yadav",
        newSalary : 60000,
        oldSalary : 20000,
        futureSalary : 90000 
    }, 
    {
        name : "Dolly Bisen",
        newSalary : 44000,
        futureSalary : 60000 
    }, 
    {
        name : "Ruchi Gour",
        newSalary : 60000 ,
        futureSalary : 100000  
    },
    {
         name : "Amit Palaiya",
         newSalary : 45000,
         oldSalary : 30000,
         futureSalary : 75000 
    }
]

const TwoLineChart = () =>{
    return(
        <div>
             <h1 className="chart-headign">Audacious-Technologies newSalary chart</h1>
             <LineChart
                 width={1200}
                 height={400}
                 data={audaciousTechnologiesData}
                 margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
             >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend/>
            <CartesianGrid strokeDasharray="3 3" /> 
            <Line dataKey="futureSalary" type="monotone" strokeWidth={2}  stroke="#6684d8" activeDot={{ r: 8 }}/>
            <Line dataKey="newSalary" type="monotone"  strokeWidth={2} stroke="#8884d8" activeDot={{ r: 8 }}/>
            <Line dataKey="oldSalary" type="monotone" strokeWidth={2}  connectNulls stroke="#82ca9d" activeDot={{ r: 8 }}/>
            </LineChart>
        </div>
    )
}
export default TwoLineChart;