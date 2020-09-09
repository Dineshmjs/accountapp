import React from 'react'
import {useSelector} from 'react-redux'
import DefaultForm from './DefaultForm'
import DefaultButton from './DefaultButton'
import ViewDefault from './ViewDefault'

function Default() {
    const hide = useSelector(state=>state.defaultSubmit)
    return (
        <div>            
            {
                hide && <DefaultForm />
            }            
            <ViewDefault />
            <DefaultButton />
        </div>
    )
}

export default Default
