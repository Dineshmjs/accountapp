import React from 'react'
import Credit from './Credit'
import Debit from './Debit'
import Spend from './Spend'
import { useSelector } from 'react-redux'

function Edit() {
    const edit = useSelector(state => state.edit)
    console.log("edit", edit)
    return (
        <div>
            {edit === "credit" && <Credit />}
            {edit === "debit" && <Debit />}
            {edit === "spend" && <Spend />}            
        </div>
    )
}

export default Edit
