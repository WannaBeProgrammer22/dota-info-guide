import React, { Component } from 'react';
import Navbar from './Navbar';
import './styles/App.css';
import HeroCardList from './HeroCardList';

class App extends Component {

  constructor() {
    super();
    this.state = {
      heroes: [],
      teams: []
    };

  }

  componentDidMount() {
    fetch('https://api.opendota.com/api/heroes')
      .then(res => res.json())
      .then(data => this.setState({ heroes: data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <Navbar>
          <li><a href="/heroes">Heroes</a></li>
          <li><a href="/teams">Teams</a></li>
        </Navbar>
        <div className="tc">
          <HeroCardList heroes={this.state.heroes}></HeroCardList>
        </div>

      </div>
    );
  }
}

export default App;
