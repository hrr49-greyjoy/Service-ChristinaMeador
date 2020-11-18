import React, { useState } from 'react';
import Modal from './components/modal.jsx';
import FontAwesome from 'react-fontawesome'
import HorizontalSlider from './components/horizontalSlider.jsx';
import StaticSlider from './components/staticSlider.jsx';

import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
`;

const Location = styled.h1`
  color: white;
  font-size: 16px;
  font-family: sans-serif;
  display: float;
  float: left;
  margin-left: 25vw;
  margin-top: 15vh;

  z-index: 150000;
`;

const Help = styled.button`
  background-color: #40d9ac;
  color: #1D5242;
  display: float;
  float: right;
  text-align: center;
  margin-top: 80vh;
  margin-right: 10px;
  padding: 15px 32px;
  border-radius: 999rem;
  font-size: 1.07143rem;
`;

const mappinicon = () => (
  <FontAwesome
  name="map-marker-alt"
  style={{
    fontSize: '14px',
    color: '#FFF',
    padding: '10px',
    cursor: 'pointer',
    backgroundColor: 'transparent',
    border: 0,
    position: 'absolute',
    marginTop: '-1vw',
    marginLeft: '-3vw',
    zIndex: '1000'
  }}
  />
);

function App() {
  const [status, setStatus] = useState(false);
  return (
    <div>


      { status && (<Modal closeModal={() => setStatus(false)}>
        <Location>{ mappinicon() }Hummingbird Hollow Farm Sanctuary</Location>
        <HorizontalSlider />
        <Help>❂ Help</Help>
      </Modal>)}

      <Container>
        <button onClick={() => setStatus(true)}><StaticSlider /></button>
      </Container>
    </div>
  );
}

export default App;