import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import FontAwesome from 'react-fontawesome';
import styled from 'styled-components';

class ImageInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      name: '',
      postedOn: ''
    };
  }

  componentDidMount () {
    axios.get('/api/images')
      .then(result => {
        var inputTitle = result.data[0].title;
        var inputDescription = result.data[0].description;
        var inputDate = result.data[0].postedOn;
        var inputName = result.data[0].name;
        this.setState({
          title: inputTitle,
          description: inputDescription,
          name: inputName,
          postedOn: inputDate
        })
      })
      .catch((err) => console.log('error in axios get request for data: ', err));
  }

  render() {
    return (
      <div>
        <HelpfulBtn>{ thumbsup() }✓ Helpful   4</HelpfulBtn>
        <ProfilePic />
        <Name>{this.state.name}</Name>
        <PostedOn>{this.state.postedOn}</PostedOn>
        <Location>{ mappinicon() }{this.state.title}</Location>
        <Description>{this.state.description}</Description>
        <Help>❂ Help</Help>
      </div>
    )
  }
}

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
  text-align: center;
  max-width: 31vw;
  position: fixed;
  left: 36vw;
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

export default ImageInfo;