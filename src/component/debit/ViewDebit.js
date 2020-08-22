import React, { useState, useEffect } from 'react';
import { http } from '../../axios'
import { useSelector } from 'react-redux';
// import { debitId } from '../../redux/Action'

function ViewDebit() {

    const reload = useSelector(state => state.debitSubmit)
    const id = useSelector(state => state.creditId)
    // const dispatch = useDispatch()
    const [data, setData] = useState([])
    useEffect(() => {
        http.get("debit", { params: { id: id } })
            .then(res => {
                console.log(res.data)
                setData(res.data)
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
            {
                data.map(data =>{
                    total = data.amount + total
                    return(
                        <div className="card w3-center mt-2 mb-2 " key={data._id} style={style}>
                            <div className="row" >
                                <div className="col-6">{data.reason}</div>
                                <div className="col-6 text-success">{data.amount}</div>                                
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
        </div>
    )
}

export default ViewDebit
