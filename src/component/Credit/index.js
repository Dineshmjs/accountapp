import React from 'react';
import CreditForm from './CreditForm';
import ViewCredit from './ViewCredit';
import CreditButton from './CreditButton';
import {useSelector} from 'react-redux';


function Credit() {
    const hide = useSelector(state=>state.creditSubmit)    
    return (
        <div>
            
            {
                hide && <CreditForm />
            }            
            <ViewCredit />
            <CreditButton />
        </div>
    )
}

export default Credit
