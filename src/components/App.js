import React, { Component } from 'react';
import Navbar from './Navbar';
import './styles/App.css';
import HeroCardList from './HeroCardList';
import SearchBox from './SearchBox';

class App extends Component {

  constructor() {
    super();
    this.state = {
      heroes: [],
      teams: [],
      searchField: ''
    };

  }

  componentDidMount() {
    fetch('https://api.opendota.com/api/heroes')
      .then(res => res.json())
      .then(data => this.setState({ heroes: data }))
      .catch(err => console.log(err));
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  }

  render() {

    const filteredHeroes = this.state.heroes.filter(hero => {
      return hero.localized_name.toLowerCase().includes(this.state.searchField);
    });

    return (
      <div>
        <Navbar>
          <li><a href="/heroes">Heroes</a></li>
          <li><a href="/teams">Teams</a></li>
        </Navbar>
        <div className="tc">
          <SearchBox searchChange={this.onSearchChange} />
          <HeroCardList heroes={filteredHeroes}></HeroCardList>
        </div>

      </div>
    );
  }
}

export default App;
