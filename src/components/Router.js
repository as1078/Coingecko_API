// Page with Routes to each Page
import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import App from "../App"
import CrypExchange from './CrypExchange';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route path = "/" component={App} exact/>
            <Route path = "/crypexchange/:id" component={CrypExchange}/>
        </Switch>
    </BrowserRouter>
    
)

export default Router;