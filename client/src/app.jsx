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
      <div style={styles.modalContainer}>
        { status && (<Modal closeModal={() => setStatus(false)}>
          <HorizontalSlider />
          <ImageInfo />
        </Modal>)}
      </div>

      <div style={styles.container} onClick={() => setStatus(true)}>
        <StaticSlider />
      </div>
    </div>
  );
}

const styles = {
  container: {
    position: 'relative',
    overflow: 'hidden',
    height: '100vh',
    width: '100vw'
  },
  // modalContainer: {
  //   position: 'absolute'
  // }
}

// const Container = styled.div`
//   position: relative;
//   overflow: hidden;
//   height: 100vh;
//   width: 100vw;
// `;

export default App;