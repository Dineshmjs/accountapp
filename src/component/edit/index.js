import React from 'react'
import Credit from './Credit'
import Debit from './Debit'
import Default from './Default'
import Ddebit from './Ddebit'
import { useSelector } from 'react-redux'

function Edit() {
    const edit = useSelector(state => state.edit)
    // console.log("edit", edit)
    return (
        <div>
            {edit === "credit" && <Credit />}
            {edit === "debit" && <Debit />}
            {edit === "default" && <Default />} 
            {edit === "ddebit" && <Ddebit />}       
                       
        </div>
    )
}

export default Edit
