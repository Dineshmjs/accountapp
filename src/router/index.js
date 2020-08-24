import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Main from '../component/Main'
import Debit from '../component/debit'
import View from '../component/view'
import Edit from '../component/edit'
import Default from '../component/default'


function index() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path = "/" component={Main} />
                <Route exact path = "/debit" component={Debit} />
                <Route exact path = "/edit" component={Edit} />                      
                <Route exact path = "/view" component={View} />
                <Route exact path = "/default" component={Default} />                
            </Switch>
        </BrowserRouter>
    )
}

export default index
