import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));

function MyInfo() {
    return (
        <div>
            <h1>Kishan Trivedi</h1>
            <p>I am learning React JS</p>
            <ol>
                <li>Europe</li>
                <li>Asia</li>
                <li>Australia</li>
            </ol>
        </div>
    );
}

ReactDOM.render(<MyInfo />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
