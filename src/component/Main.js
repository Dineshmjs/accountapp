import React from 'react'
import Header from './Header';
import Credit from './Credit'
import ViewDefault from './default/ViewDefault'
import Load from '../component/Load'

function Main() {
    return (
        <div>
            <Header /> 
            <Load />  
            <ViewDefault /> 
            <Credit />          
        </div>
    )
}

export default Main
