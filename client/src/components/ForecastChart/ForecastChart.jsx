import React from 'react'
import { AreaChart, Area,XAxis, YAxis,CartesianGrid, Tooltip, ResponsiveContainer, Label } from 'recharts'

export default function ForecastChart(props) {

    return (
      <ResponsiveContainer width="100%" height={200} >
        
        <AreaChart
        width={1400}
        height={250}
        data={props.singleData}
        margin={{top:10, right:30, left:0, bottom:0}}
        >
          
                <CartesianGrid strokeDasharray="3 3"/>
                <YAxis/>
                <XAxis><Label value="Monday" offset={0} position="insideBottom"/></XAxis>
                <Tooltip/>
                <Area 
                type='monotone'
                dataKey={props.dataType}
                stroke='#8884d8'
                fill='#8884d8'/>
        </AreaChart>
        </ResponsiveContainer>
    )
}
