import React from 'react';
import ReactDOM from 'react-dom'
import { shallow, mount } from 'enzyme'
import { BrowserRouter } from 'react-router-dom'
import Footer from '../../components/Footer/Footer';

describe('[Component] Footer', () => {
  it('render without crashing', () => {
    expect(shallow(<Footer />));    
  })
    
})
