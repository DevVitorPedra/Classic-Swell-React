import React from 'react'
import { cloudCoverProcessor, swellDirectionProcessor, swellHeightProcessor } from '../../utils/dataControl/dataControl'
import './styles.css'

import { getAPI } from '../../utils/api/api'
import ForecastChart from '../../components/ForecastChart/ForecastChart'
export default function WeekForecast() {
   
    

    return (
        <div className="forecast-display">
            <button onClick={getAPI}> get data</button>
            <ForecastChart singleData={cloudCoverProcessor()}  dataType={'cloudCover'} />
            <ForecastChart singleData={swellDirectionProcessor()} dataType={'swellDirection'} />
            <ForecastChart singleData={swellHeightProcessor()} time={'time'} dataType={'swellHeight'} />
        </div>
    )
}
