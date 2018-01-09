import React, { Component } from 'react';
import Hero from './components/Hero';
import Card from './components/Card';
import Map from './components/Map';
import data from "./pho_anh_sang.json";
import './App.css';

class App extends Component {
  render() {

    return (
      <div className="app">
      <Hero data={data.hero}/>
      <Card data={data.cards}/>
      <Map data={data.map}/>
      </div>
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
    );
  }
}

export default App;
