import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

window.$fallbackLogo = "/assets/images/manu__logo.png";
window.$opponentsLogo = "/assets/images/bucks.png";
window.$fallbackFlag  = "/assets/images/manu__logo.png";
window.$verifyBackDrop  = "/assets/images/verify.png";
window.$clubName = "Manchester United";
window.$clubShortenedName = "Man Utd";
window.$stadiumImageLink = "/assets/images/stadiums/football.jpg";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
