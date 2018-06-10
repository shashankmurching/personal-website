import React, { Component } from 'react';
import logo from './logo.svg';
//import './Styles/App.css';

import styled from 'styled-components';

import Welcome from './Welcome.js';
import AboutMe from './AboutMe.js';
import Slider from './Slider.js';



import {Button} from 'react-md';

const Container = styled.div`
  text-align: center;
  height: 100%;
`;

class App extends Component {
  render() {
    return (
      <Container>
        <Welcome />
        <Slider />
      </Container>
    );
  }
}

export default App;
