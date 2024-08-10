import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './components/App.js';
import { Provider } from 'react-redux';
import store from './components/store/store.js';
import Addtocartprovider from "./context/Addtocartcontext.js";
import { BrowserRouter } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
<BrowserRouter>
  <Provider store={store}>
        <Addtocartprovider>
    <App/>
    </Addtocartprovider>

       </Provider>
       </BrowserRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
