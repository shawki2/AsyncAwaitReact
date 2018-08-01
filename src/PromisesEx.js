// Example with Promises 
//To run it you need to change the name file to App.js instead of PromisesEx
import React, { Component } from "react";
import logo from "./logo.png";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = { data: [] };
  }
  // to fetch the data from API
  componentDidMount() {
    fetch(`https://api.coinmarketcap.com/v1/ticker/?limit=10`)
      .then(res => res.json())
      .then(json => this.setState({ data: json }));
  }
  // Grabing the name of currency and equivalent it in USD as first app in React
  render() {
    return <div className="App" style={{ flex: 1, flexDirection: "row" }}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Promises in React</h1>
        </header>
        <h2 className="App-intro" style={{ color: "skyblue" }}>
          An example of rabing the name of currency and equivalent it in USD{" "}
        </h2>
        <ul style={{ textAlign: "left" }}>
          {this.state.data.map(elem => <li>
              {elem.name}: {elem.price_usd}
            </li>)}
        </ul>
      </div>;
  }
}

export default App;
