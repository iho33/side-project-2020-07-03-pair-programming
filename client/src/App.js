import React from 'react';
//import InteractivePiano from '../src/piano/demo/components/InteractivePiano';
import './App.css';
import Display from "../src/components/Display"
import axios from 'axios';
import Buttons from "../src/components/Buttons"
//import { set } from 'lodash';



class App extends React.Component {
  state = {
    key: '',
    file: ''
  }
  
  playAudio = (file) => {
    new Audio(file).play();
  }

  componentDidMount() {
    axios.get("http://localhost:8080/")
    .then(res => {
      let randomIndex = Math.floor(Math.random()*3);
      this.setState({
        key: res.data[randomIndex].key,
        file: res.data[randomIndex].file
      })
      console.log(res.data[randomIndex].key)
    })
  }

  updateComponent = () => {
    axios.get("http://localhost:8080/")
    .then(res => {
      let randomIndex = Math.floor(Math.random()*3);
      this.setState({
        key: res.data[randomIndex].key,
        file: res.data[randomIndex].file
      })
      console.log(res.data[randomIndex].key)
    })
  }

  buttonMatch = (event) => {
    event.preventDefault();
    let buttonId = parseInt(event.target.name)
    let displayNumber = parseInt(this.state.key)
    if (buttonId === displayNumber) {
      this.playAudio(this.state.file)
      console.log(this.state)
      setTimeout(function(){window.location.reload()}, 2000)
    }
  }


  // addScore = (event) => {
  //   event.preventDefault();
  //   let buttonId = parseInt(event.target.name)
  //   let displayNumber = parseInt(this.state.key)
  //   let score = 0;
  //   if (buttonId === displayNumber) {
  //     score += 1;
  //     console.log(score);
  //   }
  // }

  render() {
      return(
      <div className={'app__fullscreen-container'}>
        <div className={'app__body'}>
          <Display updateComponent={this.updateComponent} pianoKey={this.state.key}/>
          <Buttons addScore={this.addScore} buttonMatch={this.buttonMatch}/>
          {/* <InteractivePiano /> */}
        </div>
      </div>
    )
  }
}

export default App;