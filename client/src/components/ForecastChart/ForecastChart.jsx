import React from 'react'
import { AreaChart, Area, XAxis, YAxis,CartesianGrid } from 'recharts'

export default function ForecastChart(props) {

    return (
      
        <AreaChart
        width={1400}
        height={250}
        data={props.singleData}
        margin={{top:10, right:30, left:0, bottom:0}}
        >
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis datakey={props.time}/>
                <YAxis/>
                
                <Area 
                type='monotone'
                dataKey={props.dataType}
                stroke='#8884d8'
                fill='#8884d8'/>
        </AreaChart>
    )
}
