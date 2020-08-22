import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { http } from '../../axios'
import { Link } from 'react-router-dom'

function CreditDetail() {
    const id = useSelector(state => state.creditId)
    const reload = useSelector(state => state.debitSubmit)

    const initialState = {
        reason: "",
        amount: "",
        availableAmount: ""
    }

    const [credit, setcredit] = useState(initialState)

    useEffect(() => {
        http.get("credit/id", { params: { id: id } })
            .then(res => {
                console.log(res.data)
                setcredit(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [reload, id])


    return (
        <div className="container mt-2">
            <div className="jumbotron w3-blue w3-center">
                <div className="row">
                    <div className="col-6">{credit.reason} - {credit.amount} </div>
                    <div className="col-3">{credit.availableAmount}</div>
                    <div className="col-3">
                        <Link to="/edit">
                            <i className="material-icons w3-text-danger w3-small">border_color </i>
                            <span> Edit</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CreditDetail
