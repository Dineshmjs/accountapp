import React from 'react'

function Details({data,name}) {
    if(data){
        const Dates = new Date(data.date)
        var dateString = Dates.toDateString()
    }
    else{
        var dateString=""
    }
    
   

    return (
        <div className="w3-container">
            <div className="card">
                <div className="row ml-1 mt-2">
                    <div className="col-sm-3">
                        <p>Reason : {data.reason}</p>
                    </div>
                    <div className="col-sm-3">
                        <p>Amount : {data.amount}</p>
                    </div>
                    <div className="col-sm-3">
                        <p>Available : {data.availableAmount}</p>
                    </div>
                    <div className="col-sm-3">
                        <p>Date : {dateString}</p>
                    </div>
                </div>
                 {/* <table className="table">
                    <tbody>
                        <tr>
                            <td>Reason</td>
                            <td>{data.reason}</td>
                        </tr>
                        <tr>
                            <td>Amount</td>
                            <td>{data.amount}</td>
                        </tr>
                        <tr>
                            <td>Available Amount</td>
                            <td>{data.availableAmount}</td>
                        </tr>
                        <tr>
                            <td>Date</td>
                            <td>{data.date}</td>
                        </tr>
                    </tbody>
                 </table> */}
            </div>            
        </div>
    )
}

export default Details
