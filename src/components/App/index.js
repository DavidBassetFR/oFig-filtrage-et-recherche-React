// == Import npm
import React from 'react';

// == Import
import games from '../data/games.js'
import './styles.scss';
import NavBar from './NavBar/Navbar.js'
import Header from './Header/Header.js'
import MainSearch from './MainSearch/MainSearch.js'
import characters from '../data/characters-full.js'
// == Composant
class App extends React.Component {
  constructor(props){
    super(props);

    this.state ={
      whatUserIsLookingFor : '',
      characters : characters,     
    }
  }
  clickOnNavBar (element) {
    event.preventDefault()
    this.setState({
      whatuserisTyping : element
    })
  }

  UserIsTyping (event) {
    this.setState({
      whatuserisTyping : event.target.value
    })
  }

  reinButton () {
    this.setState({
      whatuserisTyping: ''
    })
  }
  render () {
    return (
  <div className="app">
    <div className="container">
    < Header games ={games} UserIsTyping={this.UserIsTyping.bind(this)} whatuserisTyping={this.state.whatuserisTyping}  />
    < NavBar games ={games} clickOnNavBar={this.clickOnNavBar.bind(this)} whatuserisTyping={this.state.whatuserisTyping} reinButton={this.reinButton.bind(this)}/>
    < MainSearch  whatuserisTyping={this.state.whatuserisTyping? this.state.whatuserisTyping : '' } characters={this.state.whatUserIsLookingFor !== ""? characters.filter(e => e.game === this.state.whatUserIsLookingFor) : characters}/>
    </div>
  </div>
  )
  }
};

// == Export
export default App;
