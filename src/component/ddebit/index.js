import React from 'react'
import {useSelector} from 'react-redux'
import DebitForm from './DebitForm'
import ViewDebit from './ViewDebit'
import DebitButton from './DebitButton'
import DefaultDetail from './DefaultDetail'
import BackButton from '../BackButton'
// import { Link } from 'react-router-dom'

function Debit() {
    const id = useSelector(state=>state.creditId)
    const hide = useSelector(state=>state.debitSubmit)    
    console.log("creditId",id,hide)
    return (
        <div>
            <BackButton path="/" title="Default Debit" color="w3-indigo" />
            <DefaultDetail />
            {
                hide && <DebitForm />
            }            
            <ViewDebit />
            <DebitButton />
        </div>
    )
}

export default Debit
