import React from 'react';
import ReactDOM from 'react-dom/client';
import { FirebaseProvider } from './context/firebase'; // isse ye hoga ki saari files k paas firebase context ka access hoga
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // isse ye hoga ki saari files k paas firebase context ka access hoga
  <React.StrictMode>
    <BrowserRouter>
    <FirebaseProvider>  
    <App /> 
    </FirebaseProvider>
    </BrowserRouter>
  </React.StrictMode>

  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
