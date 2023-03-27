import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './components/Login';
import Signup from './components/Signup';
import MapView from './components/MapView';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Logout from './components/Logout';
import ReadWrite from './components/Routes/ReadWrite';
import Profile from './components/Profile'
import SavedRoute from './components/SavedRoute';
import Directions from './components/Directions'
import CreateRoutePage from './components/CreateRoutePage';
import Settings from './components/Settings'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
  <Router>
    <Routes>
      <Route path = '/' element = {<App/>}/>
      <Route path = "/login" element = {<Login/>}/>
      <Route path = "/signup" element = {<Signup/>}/>
      <Route path = "/map" element = {<MapView/>}/>
      <Route path = "/logout" element = {<Logout/>}/>
      <Route path = "/readWrite" element = {<ReadWrite/>}/>
      <Route path = "/profile" element = {<Profile/>}/>
      <Route path = "/savedRoute" element = {<SavedRoute/>}/>
      <Route path = "/directions" element = {<Directions/>}/>
      <Route path = "/createRoutePage" element = {<CreateRoutePage/>}/>
      <Route path = "/settings" element = {<Settings/>}/>
    </Routes>
  </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
