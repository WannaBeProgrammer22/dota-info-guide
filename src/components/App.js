import React, { Component } from 'react';
import Navbar from './Navbar';
import HeroCard from './HeroCard';
import { heroes } from './../heroes';


import './styles/App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      heroes: heroes,
      teams: []
    };

  }
  render() {
    return (
      <div>
        <Navbar>
          <li><a href="/heroes">Heroes</a></li>
          <li><a href="/teams">Teams</a></li>
        </Navbar>
        <HeroCard details={this.state.heroes[0]}></HeroCard>
        <HeroCard details={this.state.heroes[1]}></HeroCard>
      </div>
    );
  }
}

export default App;
