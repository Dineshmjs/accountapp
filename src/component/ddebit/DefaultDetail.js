import React, { useState, useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { http } from '../../axios'
import { Link } from 'react-router-dom'
import { defaultDelete, Edit } from '../../redux/Action'

function CreditDetail() {
    const id = useSelector(state => state.defaultId)
    const reload = useSelector(state =>state)
    const dispatch = useDispatch()
    
    

    const initialState = {
        reason: "",
        amount: "",
        totalAmount: ""
    }

    const [Default, setDefault] = useState(initialState)

    useEffect(() => {
        http.get("default/id", { params: { id: id } })
            .then(res => {
                console.log(res.data)
                setDefault(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [reload, id])

    const Delete = () => {
        http.delete("default", { params: { id: id } })
            .then(res => {
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
        dispatch(defaultDelete())    
    }




    return (
        <div className="container mt-2">
            <div className="jumbotron w3-blue w3-center">
                <div className="row">
                    <div className="col-6">{Default.reason}</div>
                    <div className="col-2">{Default.totalAmount}</div>
                    <div className="col-2">
                        <Link to="/edit">
                            <i className="material-icons w3-text-danger w3-small" onClick={()=>dispatch(Edit("default"))}>border_color </i>
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
