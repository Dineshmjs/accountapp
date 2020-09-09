import React, { useState, useEffect } from 'react';
import { http } from '../../axios'
import {useSelector,useDispatch} from 'react-redux';
import {defaultId} from '../../redux/Action'
import {Link} from 'react-router-dom'

function ViewDefault() {

    const reload = useSelector(state=>state)
    const dispatch = useDispatch()
    const [data, setData] = useState([])
    useEffect(() => {
        http.get("default")
            .then(res => {
                console.log(res.data)
                setData(res.data)
            })
            .catch(err => {
                console.log(err)
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
                    <Link to="/ddebit" key={data._id} style={decoration}>
                        <div className="card w3-center mt-2 mb-2 " style={style} onClick={()=>dispatch(defaultId(data._id))}>
                            <div className="row" >
                                <div className="col-8">{data.reason}</div>                                
                                <div className="col-4 text-danger">{data.totalAmount}</div>
                            </div>
                        </div>
                    </Link>
                )
            }
        </div>
    )
}

export default ViewDefault
