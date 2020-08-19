import React, {useState, useEffect } from 'react';
import {http} from '../../axios';


function ViewDebit(props) {


    const { reload, availableAmount } = props
    
    const [data, setData] = useState([]) 


    useEffect(() => {
        console.log("dataprops",props.credit)
        http.get("debit", { params: { credit: props.credit } })
            .then(res => {
                console.log("resdata",res.data)  
                setData(res.data.debit)  

            })
            .catch(err=>{
                console.log(err)
            })

    }, [reload])
    

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
