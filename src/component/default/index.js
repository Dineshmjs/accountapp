import React from 'react'
import {useSelector} from 'react-redux'
<<<<<<< HEAD
import BackButton from '../BackButton'
import Load from '../Load'
=======
import DefaultForm from './DefaultForm'
import DefaultButton from './DefaultButton'
import ViewDefault from './ViewDefault'
>>>>>>> 1bcd86d8da2f49e4086e4f72dde9a7f04a29ac56

function Default() {
    const hide = useSelector(state=>state.defaultSubmit)
    return (
<<<<<<< HEAD
        <div>
            <BackButton path="/" title="Default" color="w3-deep-orange" />

            <DefaultDetails />
            <Load />            
            <ViewSpend />
            {
                hide && <SpendForm />
            } 
            <SpendButton />
=======
        <div>            
            {
                hide && <DefaultForm />
            }            
            <ViewDefault />
            <DefaultButton />
>>>>>>> 1bcd86d8da2f49e4086e4f72dde9a7f04a29ac56
        </div>
    )
}

export default Default
