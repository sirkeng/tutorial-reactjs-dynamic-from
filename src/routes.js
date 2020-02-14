import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import FormPage from './components/Form'
import ShowReportsPage from './components/ShowReports'
import NotFoundPage from './components/NotFoundPage'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            {/* <Route path="/dynamicform" component={FormPage} exact />
            <Route path="/report/:id" component={FormPage} />
            <Route path="/report/:id/viewpdf" component={ShowReportsPage} /> */}
            <Route path="/dynamicform/:query" component={NotFoundPage} exact />
        </Switch>
    </BrowserRouter>
)

export default Routes