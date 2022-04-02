import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
// import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// было :
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// переход на 19 версию смотреть https://github.com/reactwg/react-18/discussions/5
// стало:
ReactDOMClient.createRoot(document.getElementById('root'))
    .render(<App tab="home"/>);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
