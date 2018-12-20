import React,{useState} from 'react';
import {connect} from 'react-redux';
import {success} from '../../_action';
import logo from '../../logo.svg';
import {Link} from 'react-router-dom';


const Login = (props) => {
    return(
        <div>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <Link
                    className="App-link"
                    to="/records"
                    rel="noopener noreferrer"
                >
                    Learn React
                </Link>
            </header>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    test:success
})

const mapStateToProps = (state) => ({
    store:state
})

export default connect(mapStateToProps,mapDispatchToProps)(Login)