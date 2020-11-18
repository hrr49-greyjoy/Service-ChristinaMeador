import React, {Component} from "react";
import axios from 'axios';
import Card from "./imageCard.jsx";

class HorizontalSlider extends Component {
  constructor(props){
    super(props)

    this.state = {
      images : [],
      current_card : 1,
      current_img_width_as_percentage: 0
    }
    this.handle_next = this.handle_next.bind(this);
    this.handle_previous = this.handle_previous.bind(this);
  }

  componentWillMount() {
    const img_width_as_percentage = window.innerWidth < styles.media.min_width ? 100 :(styles.media.max_img_size / window.screen.availWidth) * 100;

    this.setState({ current_img_width_as_percentage: img_width_as_percentage });
  }

  componentDidMount() {
    axios.get('/api/images')
      .then( res => {
        this.setState({
          images : res.data
        });
      })
      .catch( error => {
        console.log('Error getting images in slider: ' + error);
    });
    // window.addEventListener('load', () => {
      this.view_port.style.width = `${this.state.current_img_width_as_percentage}vw`;
      const img_width_in_pixels = this.card_container.children[0].getBoundingClientRect().width;

      let first_card_clone = this.card_container.children[0].cloneNode(true);
      let last_card_clone = this.card_container.children[this.card_container.children.length - 1].cloneNode(true);

      this.card_container.insertBefore(last_card_clone, this.card_container.children[0]);
      this.card_container.append(first_card_clone);

      this.card_container.style.transitionDuration = "0.0s";
      this.card_container.style.transform = `translate(-${img_width_in_pixels}px)`;

      window.addEventListener('resize', () => {
        const img_width_as_percentage = window.innerWidth < styles.media.min_width ? 100 :(styles.media.max_img_size / window.screen.availWidth) * 100;
        const img_width_in_pixels = this.card_container.children[0].getBoundingClientRect().width;

        this.view_port.style.width = `${img_width_as_percentage}vw`;

        this.card_container.style.transitionDuration = '0.0s';
        this.card_container.style.transform = `translate(-${this.state.current_card * img_width_in_pixels}px)`
      // });
    });
  }

  handle_next() {
    if (this.state.current_card < this.card_container.children.length - 1) {
      let new_current_card = this.state.current_card + 1;
      const img_width_in_pixels = this.card_container.children[0].getBoundingClientRect().width;

      this.setState({ current_card: new_current_card }, () => {
        this.card_container.style.transitionDuration = "0.5s";
        this.card_container.style.transform = `translate(-${img_width_in_pixels * this.state.current_card}px)`;

        if (this.state.current_card === this.card_container.children.length - 1) {
          setTimeout(() => {
            this.card_container.style.transitionDuration = "0.0s";
            this.card_container.style.transform = `translate(-${img_width_in_pixels}px)`;

            this.setState({current_card: 1});
          }, 502)
        }
      });
    } else {
      return;
    }
  }

  handle_previous() {
    if (this.state.current_card > 0 ){
      let new_current_card = this.state.current_card -1 ;
      const img_width_in_pixels = this.card_container.children[0].getBoundingClientRect().width;

      this.setState({current_card : new_current_card},() =>{
        this.card_container.style.transitionDuration = "0.5s";
        this.card_container.style.transform = `translate(-${img_width_in_pixels * this.state.current_card}px)`;

        if (this.state.current_card === 0){
          setTimeout(() => {
            this.card_container.style.transitionDuration = "0.0s";
            this.card_container.style.transform = `translate(-${img_width_in_pixels * (this.card_container.children.length - 2)}px)`;

            this.setState({current_card: this.card_container.children.length - 2 });
          }, 502)
        }
      });
    } else {
      return;
    }
  }

  render() {
    return (
      <div>
        <div ref={ref_id => this.button_container = ref_id} style={styles.button_container}>
          <img src='https://i.imgur.com/Xnz6k9j.png' ref={ref_id => this.button_previous = ref_id} style={styles.previous_button} onClick={this.handle_previous} />
          <img src='https://i.imgur.com/RDrZA6q.png' ref={ref_id => this.button_next = ref_id} style={styles.next_button} onClick={this.handle_next} />
        </div>

        <div ref={ref_id => this.view_port = ref_id} className="view-port" style={styles.view_port}>
          <div ref={ref_id => this.card_container = ref_id} className="card-container" style={styles.card_container}>
            <Card card_number='https://feccampingimages.s3.us-east-2.amazonaws.com/glen-jackson-mzZVGFfMOkA-unsplash.jpg' resize_width={this.state.current_img_width_as_percentage}/>
            <Card card_number='https://feccampingimages.s3.us-east-2.amazonaws.com/myles-tan-IWCljYv1TJw-unsplash.jpg' resize_width={this.state.current_img_width_as_percentage}/>
            <Card card_number="https://feccampingimages.s3.us-east-2.amazonaws.com/jesse-gardner-wTVr4HR4SBI-unsplash.jpg" resize_width={this.state.current_img_width_as_percentage}/>
            <Card card_number="https://feccampingimages.s3.us-east-2.amazonaws.com/grant-ritchie-c1XZjkM_-q8-unsplash.jpg" resize_width={this.state.current_img_width_as_percentage}/>
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
    height: "auto",
    overflow: "hidden"
  },
  card_container: {
    display: "flex",
    flexDirection : "row",
    width: "fit-content"
  },
  media: {
    max_img_size: 700
  },
  previous_button: {
    width: 50,
    height: 50,
    paddingRight: '320px'
  },
  next_button: {
    width: 50,
    height: 50,
    paddingLeft: '320px'
  },
  button_container: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    zIndex: 3000
  }

}


export default HorizontalSlider;