import React, { useState } from 'react';
import Modal from './components/modal.jsx';
import FontAwesome from 'react-fontawesome'
import HorizontalSlider from './components/horizontalSlider.jsx';
import StaticSlider from './components/staticSlider.jsx';

import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  overflow: hidden;
  height: 100vh;
  width: 100vw;
`;

const ProfilePic = styled.div`
  background-image: url('https://i.imgur.com/NKdeiGH.jpg');
  height: 80px;
  width: 80px;
  border-radius: 50%;
  position: fixed;
  left: 24vw;
  top: 2vh;
`;

const Name = styled.h1`
  color: white;
  font-size: 30px;
  font-family: sans-serif;
  position: fixed;
  left: 30vw;
  top: 2vh;
`;

const PostedOn = styled.h3`
  color: #5C5C5C;
  font-size: 12px;
  font-family: sans-serif;
  position: fixed;
  left: 30vw;
  top: 8vh;
`;

const Location = styled.h1`
  color: white;
  font-size: 16px;
  font-family: sans-serif;
  position: fixed;
  left: 25vw;
  top: 12vh;
`;

const Description = styled.h1`
  color: white;
  font-size: 16px;
  font-family: sans-serif;
  position: fixed;
  left: 40vw;
  bottom: 5vh;
`;

const HelpfulBtn = styled.button`
  background-color: #40d9ac;
  color: #FFF;
  position: fixed;
  right: 10vw;
  top: 4vh;
  padding: 15px 32px;
  font-size: 1.07143rem;
`;

const Help = styled.button`
  background-color: #40d9ac;
  color: #1D5242;
  position: fixed;
  bottom: 2vh;
  right: 2vw;
  text-align: center;
  padding: 15px 32px;
  border-radius: 999rem;
  font-size: 1.07143rem;
`;

const thumbsup = () => {
  <FontAwesome
    name='thumbs-up'
    style={{
      fontSize: '14px',
      color: '#FFF',
      padding: '10px',
      cursor: 'pointer',
      backgroundColor: 'transparent',
      border: 0,
      positon: 'fixed',
      top: '8vh',
      right: '10vw',
      zIndex: '1000'
    }}
  />
};

const mappinicon = () => (
  <FontAwesome
  name="map-marker"
  style={{
    fontSize: '14px',
    color: '#FFF',
    padding: '10px',
    cursor: 'pointer',
    backgroundColor: 'transparent',
    border: 0,
    position: 'absolute',
    marginTop: '-10px',
    marginLeft: '-20px',
    zIndex: '1000'
  }}
  />
);

function App() {
  const [status, setStatus] = useState(false);
  return (
    <div>


      { status && (<Modal closeModal={() => setStatus(false)}>
        <HorizontalSlider />
        <ProfilePic></ProfilePic>
        <Name>Brittany S.</Name>
        <PostedOn>Posted on September 28th, 2020</PostedOn>
        <HelpfulBtn>{ thumbsup() }✓ Helpful   4</HelpfulBtn>
        <Location>{ mappinicon() }Hummingbird Hollow Farm Sanctuary</Location>
        <Description>Perfect way for us to get away and be in nature.</Description>
        <Help>❂ Help</Help>
      </Modal>)}

      <Container>
        <button onClick={() => setStatus(true)}><StaticSlider /></button>
      </Container>
    </div>
  );
}

export default App;