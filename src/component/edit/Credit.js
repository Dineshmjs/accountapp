import React, { useState, useEffect } from 'react'
import {useSelector} from 'react-redux'
import {http} from '../../axios'

import BackButton from '../BackButton';
import Menu from './Menu'
import AddMoney from './AddMoney';
import ReduceMoney from './ReduceMoney';
import ChangeReason from './ChangeReason';
import Details from './Details'
// import {Link} from 'react-router-dom'

function Credit() {
    const menu = useSelector(state=>state.editMenu)
    const id = useSelector(state=>state.creditId)
    const [data, setData] = useState({})
    const [load, setLoad] = useState(0)
    console.log(load)

    // const [reason, setReason] = useState("")  
    // const [av, setAv] = useState(0)
    // const [amount, setAmount] = useState(0)
    
    useEffect(()=>{
        http.get("credit/id", {params:{id:id}})
        .then(res=>{            
            console.log("creditData",res.data)
            setData(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[menu,load])

    const loadData = ()=>{
        setLoad(load+1)
    }
   
    return (
        <div className="">
            <BackButton path="/debit" title="Update Credit" color="w3-purple" />
            <Details data={data} name="credit" />
            <Menu />            
            {
                menu === "addmoney" && <AddMoney data={data}  loadData={loadData} />
            }
            {
                menu === "reducemoney" && <ReduceMoney data={data}  loadData={loadData} />
            }
            {
                menu === "reason" && <ChangeReason data={data}  loadData={loadData} />
            }
        </div>
    )
}

export default Credit
