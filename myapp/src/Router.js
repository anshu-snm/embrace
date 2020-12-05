import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './Login';
import Cart from './Cart';

class Router extends React.Component {
    render() {
        return (
            <React.Fragment>
                <BrowserRouter>
                    <Route exact path="/" component={Login} />
                    <Route path="/cart" component={Cart} />
                </BrowserRouter>
            </React.Fragment>
        )
    }
}
export default Router;