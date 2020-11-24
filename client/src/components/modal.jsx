import React from "react";
import FontAwesome from 'react-fontawesome';
import styled from 'styled-components';

// const Overlay = styled.div`
//   position: absolute;
//   display: block;
//   overflow: auto;
//   width: 100%;
//   height: 100%;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   background-color: rgba(0,0,0,0.9);
//   z-index: 999;
//   cursor: pointer;
// `;

const Modal = (props) => {
  const { closeModal } = props;

  const closeicon = () => (
    <FontAwesome
    name="times"
    onClick={closeModal}
    style={{
      fontSize: '30px',
      color: '#FFF',
      padding: '10px',
      cursor: 'pointer',
      backgroundColor: 'transparent',
      border: 0,
      position: 'absolute',
      top: '0.3rem',
      right: '0.5rem',
      zIndex: '1000'
    }}
    />
  );

  const styles = {
    overlay: {
      position: 'absolute',
      display: 'block',
      overflow: 'auto',
      width: '100%',
      height: '100%',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      backgroundColor: 'rgba(0,0,0,0.9)',
      zIndex: '999',
      cursor: 'pointer'
    },
    xBtn: {
      fontSize: '30px',
      fontColor: '#FFF',
      padding: '10px',
      cursor: 'pointer',
      backgroundColor: 'transparent',
      border: 0,
      position: 'absolute',
      top: '0.3rem',
      right: '0.5rem',
      zIndex: '1000'
    }
  }

  return (
    <div style={styles.overlay}>

        { { closeicon() } }
<!--         <h1 onClick={closeModal}>X</h1> -->
        {props.children}

    </div>
  );
};

export default Modal;

