import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { createRoot } from 'react-dom/client';
import App from '../../App';
import Login from '../Login';
import Signup from '../Signup';
import MapView from '../MapView';
import Logout from '../Logout';
import ReadWrite from '../Routes/ReadWrite';
import Profile from '../Profile';
import SavedRoute from '../SavedRoute';
import Directions from '../Directions';
import CreateRoutePage from '../CreateRoutePage';
import Settings from '../Settings';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('index', () => {
  //Verify that the index renders without throwing an error
  it('should render without crashing', () => {
    const div = document.createElement('div');
    createRoot(div).render(
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
      </Router>);
  });

});