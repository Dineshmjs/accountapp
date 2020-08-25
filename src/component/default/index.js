import React from 'react'
import DefaultDetails from './DefaultDetails'
import SpendForm from './SpendForm'
import ViewSpend from './ViewSpend'
import SpendButton from './SpendButton'
import {useSelector} from 'react-redux'
import BackButton from '../BackButton'

function Default() {
    const hide = useSelector(state=>state.spendSubmit)
    return (
        <div>
            <BackButton path="/" title="Default" color="w3-deep-orange" />
            <DefaultDetails />
            {
                hide && <SpendForm />
            }            
            <ViewSpend />
            <SpendButton />
        </div>
    )
}

export default Default
