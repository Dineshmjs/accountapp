import React,{useState,useEffect} from 'react'
import {http} from '../../axios'
import { useSelector } from 'react-redux'

function View() {
    const [amount,setAmount] = useState(0)
    const reload = useSelector(state=>state)
    console.log("reload",reload)
    useEffect(()=>{
        http.get("default")
        .then(res=>{
            console.log(res.data)
            setAmount(res.data.amount)
        })
        .catch(err=>{
            console.log(err)
        })
    },[reload])
    return (
        <div className="container mt-2">
            <div className="jumbotron w3-center">
                <div className="row">
                    <div className="col-6 text-success">Default</div>
                    <div className="col-6 text-danger">spendAmount - {amount}</div>                    
                </div>
            </div>
        </div>
    )
}

export default View
