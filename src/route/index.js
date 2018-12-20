import React,{useState} from 'react';
import {Route,Switch} from 'react-router-dom';
import Records from './records';
import Login from './login'


const IndexRoute = (props) => {

    return(
        <Switch>
            <Route exact path='/' render ={props => <Login {...props}/>}/>
            <Route exact path='/records' render ={props => <Records {...props}/>}/>
        </Switch>
    )
}

export default IndexRoute