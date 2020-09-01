import { connect } from "react-redux";
import React, { Component } from "react";
import io from 'socket.io-client';
// import data from "../../utils/data.json";
import { CustomTable, Cards, Chart } from "../../components";
import utils from "../../utils";
import { request as request_get_data } from "../../redux/actions/GETDATA";
import { formateDate } from "../../services/formatDate";

interface MyState {
    data: any,
    columns: any
    toggleValue: string,
    chartData: any,
    isLoading: boolean

}

interface MyProps {
    request_get_data: any
}

class Home extends Component<MyProps, MyState> {
    socket: any;
    constructor(props: any) {
        super(props)
        this.state = {
            data: null,
            isLoading: false,
            columns: [
                { Header: 'Date', accessor: 'Date' },
                { Header: 'Open', accessor: 'Open' },
                { Header: 'High', accessor: 'High' },
                { Header: 'Low', accessor: 'Low' },
                { Header: 'Close', accessor: 'Close' },
                { Header: 'Volume', accessor: 'Volume' },
            ],
            toggleValue: 'table',
            chartData: [],
        }
    }

    UNSAFE_componentWillMount() {
        this.props.request_get_data({});
        this.socket = io('https://dataassignment.herokuapp.com');
        this.socket.on('visualizeData', (data: any) => {
            let chartData = utils.sortingChart(data)
            // let objectKeys = Object.keys(data)
            // let chartData = []
            // objectKeys.map(val => {
            //     let chartValues = []
            //     data[val].map(item => {
            //         let obj = {
            //             x: `${moment(item.x).format('MMM')} ${moment(item.x).format('DD')}`,
            //             y: item.y,
            //         }
            //         if (chartValues.length === 15) {
            //             chartValues.shift()
            //         } else {
            //             chartValues.push(obj)
            //         }
            //     })
            //     let singleChart = {
            //         id: `${val}`,
            //         color: `hsl(${val === 'Open' ? 266 :
            //             val === 'High' ? 340 :
            //                 val === 'Low' ? 297 :
            //                     val === 'Close' ? 115 : 306} , 70%, 50%)`,
            //         data: chartValues,
            //     }
            //     chartData.push(singleChart)
            // })
            this.setState({ chartData: chartData })
        });
    }

    UNSAFE_componentWillReceiveProps(nextProps: any) {
        if (nextProps.getData) {
            if (
                !nextProps.getData.failure &&
                !nextProps.getData.isFetching &&
                !nextProps.getData.errorMessage &&
                nextProps.getData.data
            ) {
                this.setState({ isLoading: false, data: nextProps.getData.data });
            } else if (
                nextProps.getData.failure &&
                !nextProps.getData.isFetching &&
                nextProps.getData.errorMessage
            ) {
                this.setState({ isLoading: false });
            }
        }
    }

    renderCustomTable = () => {
        const { columns, data } = this.state;
        return (
            <div className="col-12 px-3 pt-3">
                {console.log(data.data)}
                <CustomTable columns={columns} data={formateDate(data)} />
            </div>
        )
    }

    renderCards = () => {
        const { data } = this.state;
        return (
            <div className="col-12 px-3 pt-3">
                <Cards data={formateDate(data)} />
            </div>
        )
    }

    renderChart = () => {
        const { chartData } = this.state;
        return (
            <div className="col-12 px-3 pt-3">
                <div className="col-12 p-3 pt-3 shadow rounded">
                    <h1 className="h3">Overall Smmary</h1>
                    {chartData.length > 0 ? (<Chart chartData={chartData} />) : <p>Loading...</p>}

                </div>
            </div>
        )
    }

    render() {
        const { toggleValue, data } = this.state;
        return (
            <div className="container-fluid bg-light">
                <div className="container min-vh-100">
                    <div className="row">
                        <div className="col-12 px-3 pt-3">
                            <div className="btn-group btn-group-toggle" onChange={(event: any) => this.setState({ toggleValue: event.target.value })} data-toggle="buttons">
                                <label className={
                                    toggleValue === 'table' ?
                                        'btn btn-secondary active' :
                                        'btn btn-secondary'
                                }>
                                    <input type="radio" name="options" id="option1" value="table" checked={toggleValue === 'table'} />
                                    {'Table'}
                                </label>
                                <label className={
                                    toggleValue === 'cards' ?
                                        'btn btn-secondary active' :
                                        'btn btn-secondary'
                                }>
                                    <input type="radio" name="options" id="option2" value="cards" checked={toggleValue === 'cards'} />
                                    {'Cards'}
                                </label>
                                <label className={
                                    toggleValue === 'chart' ?
                                        'btn btn-secondary active' :
                                        'btn btn-secondary'
                                }>
                                    <input type="radio" name="options" id="option3" value="chart" checked={toggleValue === 'chart'} />
                                    {'Chart'}
                                </label>
                            </div>
                        </div>
                        {toggleValue === 'table' ?
                            data && data.data.length > 0 &&
                            this.renderCustomTable() :
                            toggleValue === 'cards' ?
                                data && data.data.length > 0 &&
                                this.renderCards()
                                : this.renderChart()}
                    </div>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state: any) => ({ getData: state.getData });

const action = { request_get_data };

export default connect(mapStateToProps, action)(Home);


