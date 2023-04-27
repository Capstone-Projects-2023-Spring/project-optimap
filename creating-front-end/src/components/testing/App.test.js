import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import App from '../../App';
import Adapter from 'enzyme-adapter-react-16';
import Navbar from '../Navbar';

Enzyme.configure({ adapter: new Adapter() });

describe('App component', () => {
//Verify that the App component renders without throwing an error
  it('should render without throwing an error', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App')).toHaveLength(1);
  });

//Verify that the App component renders a Navbar component
  it('should render the Navbar component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.containsMatchingElement(<Navbar />)).toEqual(true);
  });

//Verify that the App component renders the Home Page header
  it('should render the Home Page header', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('h1')).toHaveLength(1);
    expect(wrapper.find('h1').text()).toEqual('Home Page');
  });
});