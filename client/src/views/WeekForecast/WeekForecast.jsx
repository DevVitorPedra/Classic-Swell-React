import React from 'react'
import { cloudCoverProcessor } from '../../utils/dataControl/dataControl'


import { getAPI } from '../../utils/api/api'
import ForecastChart from '../../components/ForecastChart/ForecastChart'
export default function WeekForecast() {
   
    

    return (
        <div className="forecast-display">
            <button onClick={getAPI}> get data</button>
            <ForecastChart singleData={cloudCoverProcessor()} time={'time'} dataType={'cloudCover'} />
        </div>
    )
}
