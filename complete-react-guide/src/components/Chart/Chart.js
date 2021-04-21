import React from 'react'
import './Chart.css'

import ChartBar from './ChartBar'

const Chart = props => {

    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value)
    const totalMaximum = Math.max(...dataPointValues)

    return <div className="chart">
        {props.dataPoints.map(dataP => 
        <ChartBar value={dataP.value} 
        maxValue={totalMaximum}
        label={dataP.label} 
        key={dataP.label}/>
        )}
    </div>
}

export default Chart