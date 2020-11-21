import React, {Component} from "react";
import ReactDom from 'react-dom';
import axios from 'axios';
import Card from "./imageCard.jsx";

class StaticSlider extends Component {
  constructor(props){
    super(props)

    this.state = {
      staticUrls: []
    }
  }

  componentDidMount() {
    axios.get('/api/images')
        .then(result => {
          var inputURLS = [];
          for (let i=0; i<result.data.length; i++) {
            inputURLS.push(result.data[i].url);
          }
          this.setState({
            staticUrls: inputURLS
          })
        })
        .catch((err) => console.log('error in axios get request for data: ', err));
  }

  render() {
    return (
      <div>
        <div style={styles.view_port}>
          <div style={styles.card_container}>
            <img src={this.state.staticUrls[1]} style={styles.image} />
            <img src={this.state.staticUrls[2]} style={styles.image} />
            <img src={this.state.staticUrls[3]} style={styles.image} />
            <img src={this.state.staticUrls[4]} style={styles.image} />
          </div>
        </div>
      </div>
    )
  }
}

const styles = {
  view_port: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: '100vw',
    height: "600px"
  },
  card_container: {
    display: "flex",
    flexDirection: 'flex-start',
    height: '600px',
    objectFit: "cover"
  },
  image: {
    float: 'left',
    width: '70vw',
    height: 'auto',
    borderLeft: '15px solid white',
    objectFit: "cover"

  }
}


export default StaticSlider;