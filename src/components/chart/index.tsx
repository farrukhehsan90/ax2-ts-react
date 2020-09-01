import React from 'react';
import { ResponsiveLine } from '@nivo/line'

const Chart = ({ chartData }:any) => {
    if (chartData) {
        return (
            <div className="col-12 px-0" style={{ height: 300 }}>
                <ResponsiveLine
                    data={chartData}
                    margin={{ top: 32, right: 18, bottom: 32, left: 48 }}
                    xScale={{ type: 'point' }}
                    yScale={{
                        type: 'linear',
                        min: 'auto',
                        max: 'auto',
                        stacked: true,
                        reverse: false,
                    }}
                    axisTop={null}
                    axisRight={null}
                    axisBottom={{
                        orient: 'bottom',
                        tickSize: 5,
                        tickPadding: 15,
                        tickRotation: 0,
                        legendPosition: 'middle'
                    }}
                    axisLeft={{
                        orient: 'left',
                        tickSize: 0,
                        tickPadding: 15,
                        tickRotation: 0,
                        legendPosition: 'middle',
                    }}
                    enablePoints={false}
                    useMesh={true}
                />
            </div>
        )
    } else {
        return null
    }

}



export default Chart;
