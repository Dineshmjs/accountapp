import React, { useState, useEffect } from 'react';
import { http } from '../../axios'
import { useSelector } from 'react-redux';
// import { debitId } from '../../redux/Action'

function Edit() {

    const reload = useSelector(state => state.debitSubmit)
    const id = useSelector(state => state.creditId)

    const initialCredit = {
        reason: "",
        amount: "",
        availableAmount: ""
    }

    const [debit, setdebit] = useState([])
    const [credit, setcredit] = useState(initialCredit)
    useEffect(() => {
        http.get("debit", { params: { id: id } })
            .then(res => {
                console.log(res.data)
                setdebit(res.data)
            })
            .catch(err => {
                console.log(err)
            })

        http.get("credit/id", { params: { id: id } })
            .then(res => {
                console.log(res.data)
                setcredit(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [reload, id])

    const style = {
        paddingTop: "10px",
        paddingBottom: "10px"
    }
    // const decoration = {
    //     textDecoration: "none"
    // }

    var total = 0;

    return (
        <div className="container">
            <div className="card w3-teal w3-center mt-2 mb-2 " style={style} >
                <div className="row" >
                    <div className="col-4 ">{credit.reason}</div>
                    <div className="col-4 ">{credit.amount}</div>
                    <div className="col-2 ">
                        <i className="material-icons">done</i>
                    </div>
                    <div className="col-2">
                        <i className="material-icons">delete</i>
                    </div>
                </div>
            </div>
            {
                debit.map(data => {
                    total = data.amount + total
                    return (
                        <div className="card w3-center mt-2 mb-2 " key={data._id} style={style}>
                            <div className="row" >
                                <div className="col-4">{data.reason}</div>
                                <div className="col-4 text-success">{data.amount}</div>
                                <div className="col-2 text-success">
                                    <i className="material-icons">done</i>
                                </div>
                                <div className="col-2 text-danger">
                                    <i className="material-icons">delete</i>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Edit
