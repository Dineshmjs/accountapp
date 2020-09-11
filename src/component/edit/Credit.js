import React, { useState, useEffect } from 'react'
import {useSelector} from 'react-redux'
import {http} from '../../axios'

import BackButton from '../BackButton';
import Menu from './Menu'
import AddMoney from './AddMoney';
import ReduceMoney from './ReduceMoney';
import ChangeReason from './ChangeReason';
// import {Link} from 'react-router-dom'

function Credit() {
    const menu = useSelector(state=>state.editMenu)
    const id = useSelector(state=>state.creditId)
    const [data, setData] = useState({})

    // const [reason, setReason] = useState("")  
    // const [av, setAv] = useState(0)
    // const [amount, setAmount] = useState(0)
    
    useEffect(()=>{
        http.get("credit/id", {params:{id:id}})
        .then(res=>{
            console.log("Reason",res.data)
            setData(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[menu])
    return (
        <div className="container">
            <BackButton path="/debit" title="Update Credit" color="w3-purple" />
            <Menu />            
            {
                menu === "addmoney" && <AddMoney amount={data.amount} av={data.availableAmount} reason={data.reason} id={data._id} />
            }
            {
                menu === "reducemoney" && <ReduceMoney />
            }
            {
                menu === "reason" && <ChangeReason />
            }
        </div>
    )
}

export default Credit
