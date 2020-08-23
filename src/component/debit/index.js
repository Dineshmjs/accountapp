import React from 'react'
import {useSelector} from 'react-redux'
import DebitForm from './DebitForm'
import ViewDebit from './ViewDebit'
import DebitButton from './DebitButton'
import CreditDetail from './CreditDetail'
// import { Link } from 'react-router-dom'

function Debit() {
    const id = useSelector(state=>state.creditId)
    const hide = useSelector(state=>state.debitSubmit)    
    console.log("creditId",id,hide)
    return (
        <div>
            {/* <Link to="/">
                <button className="btn btn-primary">Back</button>
            </Link> */}
            <CreditDetail />
            {
                hide && <DebitForm />
            }            
            <ViewDebit />
            <DebitButton />
        </div>
    )
}

export default Debit
