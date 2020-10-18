import React from 'react';
import {Route,Redirect} from 'react-router-dom';
import { render } from '@testing-library/react';

export default function ProtectedRoute({isLoggedIn , component:Component, ...rest}){
    return(
        <Route 
        {...rest}
        render = {(props) => {
            if(isLoggedIn){
                return <Component {...props}/>;
            } else {
                return <Redirect to='/signin' />;
            }
        }}
        />
    );
}