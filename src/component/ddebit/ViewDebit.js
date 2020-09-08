import React, { useState, useEffect } from 'react';
import { http } from '../../axios'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { ddebitDelete, ddebitId, Edit } from '../../redux/Action';



function ViewDebit() {

    var reload = useSelector(state => state.ddebitSubmit)
    const id = useSelector(state => state.defaultId)

    const dispatch = useDispatch()

    const [data, setData] = useState([])
    // const [deleteInfo, setdeleteInfo] = useState("")
    useEffect(() => {
        getData()
    }, [reload, id])

    const getData = () => {
        http.get("ddebit", { params: { id: id } })
            .then(res => {
                console.log(res.data)
                setData(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const style = {
        paddingTop: "10px",
        paddingBottom: "10px"
    }
    // const decoration = {
    //     textDecoration: "none"
    // }

    var total = 0;

    const Delete = (deleteId, amount) => {
        http.delete("ddebit", { params: { id: deleteId, defaultId: id } })
            .then(res => {
                console.log(res.data)
                if (res.data.ok === 1) {
                    alert("Deleted Success")
                    dispatch(ddebitDelete())
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
        dispatch(ddebitId(data))
        dispatch(Edit("ddebit"))
    }

    return (
        <div className="container">
            {
                data.map(data => {
                    total = data.amount + total
                    return (
                        <div className="card w3-center mt-2 mb-2 " key={data._id} style={style}>
                            <div className="row" >
                                <div className="col-4">{data.reason}</div>
                                <div className="col-4 text-success">{data.amount}</div>
                                <div className="col-2">
                                    <Link to="/edit" onClick={() => Dis(data._id)}>
                                        <i className="material-icons w3-text-danger w3-small">border_color </i>
                                    </Link>
                                </div>
                                <div className="col-2">
                                    <Link to="/ddebit" onClick={() => Delete(data._id)}>
                                        <i className="material-icons w3-text-danger w3-small" >delete </i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            <div className="card w3-center mt-2 mb-2 " style={style} >
                <div className="row" >
                    <div className="col-6 text-danger">Total</div>
                    <div className="col-6 text-danger">{total}</div>
                </div>
            </div>
        </div >
    )
}

export default ViewDebit
