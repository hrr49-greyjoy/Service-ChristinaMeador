import React, { useState } from 'react';
import Modal from './components/modal.jsx';
import HorizontalSlider from './components/horizontalSlider.jsx';
import StaticSlider from './components/staticSlider.jsx';
import ImageInfo from './components/imageInfo.jsx';

import styled from 'styled-components';

function App() {

  const [status, setStatus] = useState(false);
  return (
    <div>
      { status && (<Modal closeModal={() => setStatus(false)}>
        <HorizontalSlider />
        <ImageInfo />
      </Modal>)}

      <Container onClick={() => setStatus(true)}>
        <StaticSlider />
      </Container>
    </div>
  );
}

const Container = styled.div`
  position: relative;
  overflow: hidden;
  height: 100vh;
  width: 100vw;
`;

export default App;