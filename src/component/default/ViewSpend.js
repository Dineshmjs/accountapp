import React, { useState, useEffect } from 'react'
import { http } from '../../axios'
import { useSelector, useDispatch } from 'react-redux'
import { spendId, Edit, spendDelete } from '../../redux/Action'
import { Link } from 'react-router-dom'

function ViewSpend() {
    const dispatch = useDispatch()
    const reload = useSelector(state => state)
    console.log("reload",reload)
    const [data, setData] = useState([])
    const style = {
        paddingTop: "10px",
        paddingBottom: "10px"
    }
    useEffect(() => {
        getData()
    }, [reload])

    const getData = () => {
        http.get("spend")
            .then(res => {
                console.log(res.data)
                setData(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const Delete = (deleteId, amount) => {
        http.delete("spend", { params: { id: deleteId, amount: amount } })
            .then(res => {
                console.log(res.data)
                if (res.data.ok === 1) {
                    alert("Deleted Success")
                    dispatch(spendDelete())
                    getData()
                }
                if (res.data.ok === 0) {
                    alert("Delete unSuccess")
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    const Dis = (data) => {
        dispatch(spendId(data))
        dispatch(Edit("spend"))
    }


    return (
        <div className="container">

            {
                data.map(data => {
                    return (
                        <div className="card w3-center mt-2 mb-2 " key={data._id} style={style}>
                            <div className="row">
                                <div className="col-4">{data.reason}</div>
                                <div className="col-4 text-success">{data.amount}</div>
                                <div className="col-2">
                                    <Link to="/edit" onClick={() => Dis(data._id)}>
                                        <i className="material-icons w3-text-danger w3-small">border_color </i>
                                    </Link>
                                </div>
                                <div className="col-2">
                                    <Link to="/default" onClick={() => Delete(data._id, data.amount)}>
                                        <i className="material-icons w3-text-danger w3-small" >delete </i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default ViewSpend
