import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { http } from '../../axios'
import { Link } from 'react-router-dom'

function CreditDetail() {
    const id = useSelector(state => state.creditId)
    const reload = useSelector(state =>state)
    
    

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

    const Delete = () => {
        http.delete("credit", { params: { id: id } })
            .then(res => {
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }




    return (
        <div className="container mt-2">
            <div className="jumbotron w3-blue w3-center">
                <div className="row">
                    <div className="col-6">{credit.reason} - {credit.amount} </div>
                    <div className="col-2">{credit.availableAmount}</div>
                    <div className="col-2">
                        <Link to="/edit">
                            <i className="material-icons w3-text-danger w3-small">border_color </i>
                        </Link>
                    </div>
                    <div className="col-2">
                        <Link to="/">
                            <i className="material-icons w3-text-danger w3-small" onClick={Delete}>delete </i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CreditDetail
