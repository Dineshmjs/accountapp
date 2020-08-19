import React, { useState, useEffect } from 'react';
import Axios from 'axios';


function ViewDebit(props) {

    const offline = "http://localhost:2000"
    //const online = "https://accountnote.herokuapp.com"

    const { data, reload, credit } = props
    console.log(reload, data)

    const [getData, setgetData] = useState([])
    const [amount, setAmount] = useState(0)

    useEffect(() => {
        Axios.get(offline + "/debit", { params: { credit: credit } })
            .then(res => {
                console.log(res.data)
                setgetData(res.data.debit)
                setAmount(res.data.amount)
            })

    }, [reload,credit])
    if (getData) {
        var x;
        var totalDebit = 0;
        
        for (x of getData) {
            totalDebit = totalDebit + x.amount            
        }


    }
    return (
        <div>
            {
                getData.map((debit, index) => {
                    return (
                        <div className="row" key={index}>
                            <div className="col-6">{debit.reason}</div>
                            <div className="col-6 text-danger">{debit.amount}</div>
                        </div>
                    )
                })
            }
            <div className="row">
                <div className="col-4">Total</div>
                <div className="col-4">{totalDebit}</div> 
                <div className="col-4">{amount-totalDebit}</div>               
            </div>            
        </div>
    )
}

export default ViewDebit
