import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Main from '../component/Main'
import Debit from '../component/debit'
import Ddebit from '../component/ddebit'
import View from '../component/view'
import Edit from '../component/edit'



function index() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path = "/" component={Main} />
                <Route exact path = "/debit" component={Debit} />
                <Route exact path = "/ddebit" component={Ddebit} />
                <Route exact path = "/edit" component={Edit} />                      
                <Route exact path = "/view" component={View} />
                             
            </Switch>
        </BrowserRouter>
    )
}

export default index
