import moment from 'moment';

class utils {
    sortingChart(data: any) {

        let objectKeys = Object.keys(data)
        let chartData: any = []
        objectKeys.map(val => {
            let chartValues: any = []
            data[val].map((item: any) => {
                let obj = {
                    x: `${moment(item.x).format('MMM')} ${moment(item.x).format('DD')}`,
                    y: item.y,
                }
                if (chartValues.length === 15) {
                    return chartValues.shift()
                } else {
                    return chartValues.push(obj)
                }
            })
            let singleChart = {
                id: `${val}`,
                color: `hsl(${val === 'Open' ? 266 :
                    val === 'High' ? 340 :
                        val === 'Low' ? 297 :
                            val === 'Close' ? 115 : 306} , 70%, 50%)`,
                data: chartValues,
            }
            return chartData.push(singleChart)
        })
        return chartData
    }

}

export default new utils();
