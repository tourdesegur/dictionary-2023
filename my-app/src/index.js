import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToggleOn, faBookmark } from '@fortawesome/free-solid-svg-icons';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="container container-app">
        <div className="row row-toggle">
          <div className='col-6 col-logo'><h1 className="title-d">:D</h1></div>
          <div className='col-6 col-toggle'>
          <FontAwesomeIcon icon={faBookmark} className='bookmark-icon'/>
            <FontAwesomeIcon icon={faToggleOn} className='toggle-icon'/>
          </div>
        </div>
        <div className='row row-dictionary'>
          <App />
        </div>
        <div className="row row-footer">
            <p>Created by <a href="https://www.linkedin.com/in/perehuda/" target="_blank" rel="noreferrer">Viktoriia Perehuda</a>,</p>
            <p><a href="https://github.com/tourdesegur/DictionaryNew" target="_blank" rel="noreferrer">GitHub code</a></p>
        </div>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
