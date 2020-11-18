import React, {Component} from "react";
import Card from "./imageCard.jsx";

class StaticSlider extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div>
        <div className="view-port" style={styles.view_port}>
          <div className="image-container" style={styles.card_container}>
            <img src="https://feccampingimages.s3.us-east-2.amazonaws.com/glen-jackson-mzZVGFfMOkA-unsplash.jpg" style={styles.image} />
            <img src="https://feccampingimages.s3.us-east-2.amazonaws.com/myles-tan-IWCljYv1TJw-unsplash.jpg" style={styles.image} />
            <img src="https://feccampingimages.s3.us-east-2.amazonaws.com/jesse-gardner-wTVr4HR4SBI-unsplash.jpg" style={styles.image} />
            <img src="https://feccampingimages.s3.us-east-2.amazonaws.com/grant-ritchie-c1XZjkM_-q8-unsplash.jpg" style={styles.image} />
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
    height: "500px"
  },
  card_container: {
    display: "flex",
    flexDirection: 'flex-start',
    height: '500px',
    objectFit: "cover"
  },
  image: {
    float: 'left',
    width: '700px',
    height: 'auto',
    borderLeft: '15px solid white',
    objectFit: "cover"

  }
}


export default StaticSlider;