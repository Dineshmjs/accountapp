import React, { useEffect } from 'react';
import {http} from '../../axios';


function ViewDebit(props) {


    const { data, reload, availableAmount } = props
    console.log("data",data)
   
    console.log(reload, data)

  

    useEffect(() => {
        console.log(reload)
        http.get("debit", { params: { credit: data.reason } })
            .then(res => {
                console.log(res.data)                
            })
            .catch(err=>{
                console.log(err)
            })

    }, [data])
    

    var amounts = 0
    
    return (
        <div>
            {
                
                data.map((debit, index) => {    
                    amounts = debit.amount + amounts   
                                  
                    return (
                        <div className="row" key={index}>
                            <div className="col-4">{debit.reason}</div>
                            <div className="col-4 text-danger">{debit.amount}</div>
                            <div className="col-4 text-success">{availableAmount - amounts}</div>
                        </div>
                    )
                })
            }
            <div className="row">
                <div className="col-6">Total</div>
                <div className="col-6">{amounts}</div>                                
            </div>            
        </div>
    )
}

export default ViewDebit
