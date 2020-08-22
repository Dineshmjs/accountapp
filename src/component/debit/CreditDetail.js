import React, {useState,useEffect} from 'react'
import {useSelector} from 'react-redux'
import { http } from '../../axios'

function CreditDetail() {
    const id = useSelector(state=>state.creditId)
    const reload = useSelector(state=>state.debitSubmit)

    const initialState={
        reason:"",
        amount:"",
        availableAmount:""
    }

    const [credit,setcredit] = useState(initialState)

    useEffect(() => {
       http.get("credit/id",{params:{id:id}})
       .then(res=>{
           console.log(res.data)
           setcredit(res.data)
       })
       .catch(err=>{
           console.log(err)
       })
    }, [reload])
    

    return (
        <div className="jumbotron w3-center">
            <div className="row">
                <div className="col-4">{credit.reason}</div>
                <div className="col-4">{credit.amount}</div>
                <div className="col-4">{credit.availableAmount}</div>
            </div>
        </div>
    )
}

export default CreditDetail
