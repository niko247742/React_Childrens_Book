import React from 'react';
import { Component } from 'react';
//import logo from './logo.svg';
import Spider from './Spider.js';
import Cloud from './Cloud';
import Sun from './Sun'
import './App.css';

let book = ["Click the button to begin the story.","The itsy-bitsy spider climbed up the water spout", "Down came the rain and washed the spider out", "Out came the sun and dried up all the rain", "And the itsy-bitsy spider climbed up the spout again", "The end."];
let index = 0;
let spider = new Spider();
let cloud = new Cloud();
let sun = new Sun();
let images = [spider,spider,cloud,sun,spider];



class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        currentPage: book[index],
        index: index,
        currentImage: images[index]
      }
  }
  startStory = () => {
    document.location.reload();
  }
  

  nextPageHandler = () => {
    index += 1;
    if (book.length === 0) {
        console.log("The book is Over")      

    } else {
      this.setState({
        currentPage: book[index],
        currentImage: images[index] 
        //index: index + 1
      })
    }
  } 
  
  render() {
    return (
      <div className="App mt-2">
            <div className = "container ">
              <div className = "row">
                <div className = "col-sm">
                    <h1>Its-Bitsy Spider</h1>
                    <div> {this.state.currentImage}</div>
                    <h2 >{this.state.currentPage}</h2>
                     <button className = "btn btn-primary btn-lg m-3" type="submit" onClick={this.nextPageHandler.bind(this)}>Next Page</button>
                     <button className = "btn btn-danger btn-lg m-3" type="submit" onClick={this.startStory.bind(this)}>Start Over</button>
                </div>  
              </div>
            </div>
      </div>
    );
  } 
}

export default App;
