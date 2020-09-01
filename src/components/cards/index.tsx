import React from 'react';

const Cards = ({ data }:any) => {
    return (
        <div className="row">{data.map((val:any) => {
            return (
                <div className="col-md-6 col-lg-4 col-xl-3 p-3">
                    <div className="card">
                        <div className="card-header">Currency in USD</div>
                        <div className="card-body">
                            <div className="col-12 px-0">
                                <div className="row">
                                    <div className="col-6">
                                        <p style={{ fontSize: '0.875rem' }} className="mb-1 text-dark font-weight-bold">Open:</p>
                                    </div>
                                    <div className="col-6 text-right">
                                        <p style={{ fontSize: '0.875rem' }} className="mb-1 text-muted">{val.Open}</p>
                                    </div>
                                    <div className="col-6">
                                        <p style={{ fontSize: '0.875rem' }} className="mb-1 text-dark font-weight-bold">High:</p>
                                    </div>
                                    <div className="col-6 text-right">
                                        <p style={{ fontSize: '0.875rem' }} className="mb-1 text-success">{val.High}</p>
                                    </div>
                                    <div className="col-6">
                                        <p style={{ fontSize: '0.875rem' }} className="mb-1 text-dark font-weight-bold">Low:</p>
                                    </div>
                                    <div className="col-6 text-right">
                                        <p style={{ fontSize: '0.875rem' }} className="mb-1 text-danger">{val.Low}</p>
                                    </div>
                                    <div className="col-6">
                                        <p style={{ fontSize: '0.875rem' }} className="mb-1 text-dark font-weight-bold">Close:</p>
                                    </div>
                                    <div className="col-6 text-right">
                                        <p style={{ fontSize: '0.875rem' }} className="mb-1 text-muted">{val.Close}</p>
                                    </div>
                                    <div className="col-6">
                                        <p style={{ fontSize: '0.875rem' }} className="mb-1 text-dark font-weight-bold">Volume:</p>
                                    </div>
                                    <div className="col-6 text-right">
                                        <p style={{ fontSize: '0.875rem' }} className="mb-1 text-muted">{val.Volume}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer text-muted">
                            <p className="mb-1 text-right"><small>{val.Date}</small></p>
                        </div>
                    </div>
                </div>
            )
        })}</div>
    )
}

export default Cards