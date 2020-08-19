import React, { useState, useEffect } from 'react'
import { http } from '../../axios'


function ViewCredit(props) {
    console.log("clickProps", props)

    const [data, setData] = useState([])


    useEffect(() => {
        http.get("credit")
            .then(res => {
                console.log(res.data)
                setData(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [props])

    const style = {
        paddingTop: "10px",
        paddingBottom: "10px"
    }

    return (
        <div>
            {
                data.map(data =>
                    <div className="card w3-center mt-2 mb-2 " style={style} key={data._id}>
                        <div className="row" >
                            <div className="col-4">{data.reason}</div>
                            <div className="col-4 text-success">{data.amount}</div>
                            <div className="col-4 text-danger">{data.availableAmount}</div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default ViewCredit
