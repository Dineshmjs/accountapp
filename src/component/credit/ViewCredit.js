import React, { useState, useEffect } from 'react';
import { http } from '../../axios'
import {useSelector,useDispatch} from 'react-redux';
import {creditId} from '../../redux/Action'
import {Link} from 'react-router-dom'

function ViewCredit() {

    const reload = useSelector(state=>state)
    const dispatch = useDispatch()
    const [data, setData] = useState([])
    useEffect(() => {
        http.get("credit")
            .then(res => {
                //console.log(res.data)
                setData(res.data)
            })
            .catch(err => {
                //console.log(err)
            })
    }, [reload])

    const style = {
        paddingTop: "10px",
        paddingBottom: "10px"
    }
    const decoration = {
        textDecoration:"none"
    }

    return (
        <div className="container">
            {
                data.map(data =>
                    <Link to="/debit" key={data._id} style={decoration}>
                        <div className="card w3-center mt-2 mb-2 " style={style} onClick={()=>dispatch(creditId(data._id))}>
                            <div className="row" >
                                <div className="col-4">{data.reason}</div>
                                <div className="col-4 text-success">{data.amount}</div>
                                <div className="col-4 text-danger">{data.availableAmount}</div>
                            </div>
                        </div>
                    </Link>
                )
            }
        </div>
    )
}

export default ViewCredit
