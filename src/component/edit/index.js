import React from 'react'
import Credit from './Credit'
import Debit from './Debit'
import {useSelector} from 'react-redux'

function Edit() {      
    const edit = useSelector(state=>state.edit) 
    console.log("edit",edit) 
    return (
        <div className="container">
            {
                edit === "credit" ? (<Credit />) : (<Debit />)
            }                
        </div>
    )
}

export default Edit
