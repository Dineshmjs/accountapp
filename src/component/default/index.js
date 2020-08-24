import React from 'react'
import DefaultDetails from './DefaultDetails'
import SpendForm from './SpendForm'
import ViewSpend from './ViewSpend'
import SpendButton from './SpendButton'

function Default() {
    return (
        <div>
            <DefaultDetails />
            <SpendForm />
            <ViewSpend />
            <SpendButton />
        </div>
    )
}

export default Default
