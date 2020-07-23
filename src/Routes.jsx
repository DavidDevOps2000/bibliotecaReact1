import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Livros from './Pages/Livros';
import QuemSomos from './Pages/QuemSomos';
import Body from './Pages/Body';


export default function Routes() {
    return (
        <>
            <BrowserRouter>
                    <Switch>
                        <Route path='/' exact component={Body} />
                        <Route path='/QuemSomos' component={QuemSomos} />
                        <Route path='/Livros' component={Livros} />
                    </Switch>
            </BrowserRouter>
        </>
    );
}