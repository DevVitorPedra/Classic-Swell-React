import React from 'react'
import { getAPI } from '../../utils/api/api'
export default function WeekForecast() {
    return (
        <div>
            <button onClick={getAPI}> get data</button>
        </div>
    )
}
