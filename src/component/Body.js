import React from 'react'
import Credit from './credit/Credit'
import Debit from './debit/Debit'
import View from './view/View'


function Body({ component }) {
    // const credit = useSelector(state => state.credit)
    // console.log("credit", credit)    

    return(
        
        <div>
            {
                component === "Credit" && <Credit />  
            }
            {    
                component === "Debit" && <Debit />
            }
            {            
                component === "View" && <View />

            }
        </div>
            
        
    )

}

export default Body
