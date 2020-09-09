import React from 'react'
import Header from './Header';
import Credit from './Credit'
import ViewDefault from './default/ViewDefault'
import Load from '../component/Load'
import Menu from './Menu';

function Main() {
    return (
        <div>
            <Header /> 
            {/* <Load />  
            <ViewDefault /> 
            <Credit />           */}
            <Menu />
        </div>
    )
}

export default Main
