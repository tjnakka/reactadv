import React, {Component} from 'react';
import ErrorContainer from './components/Container';
import './css/error.css';

class ErrorPage extends Component{
    render(){
        return(
            <div id="error-container">
                <ErrorContainer />
            </div>
        );
    }
}

export default ErrorPage;