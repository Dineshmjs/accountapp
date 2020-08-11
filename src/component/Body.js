import React from 'react'
import Credit from './Credit'
import Debit from './Debit'
import View from './View'

function Body() {
    return (
        <div>
            <div className="tab-content">
                <div className="container tab-pane active" id="credite">
                    <Credit />
                </div>
                <div className="container tab-pane fade" id="debite">
                    <Debit />
                </div>
                <div className="container tab-pane fade" id="view">
                    <View />
                </div>
            </div>
        </div>
    )
}

export default Body
