import React, { Component } from 'react';
import Select from './components/Select';
import Card from './components/Card';
import Footer from './components/Footer';
import './App.css';

const usersData = [];
const apiList = "https://api.github.com/orgs/adalab/members?per_page=125";

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      adalabUsers: [],
      userName: "",
    }

    this.selectHandler = this.selectHandler.bind(this);
  }

  componentDidMount() {
    this.fetchGithubUsers();
  }


  fetchGithubUsers (){
    fetch(apiList)
    .then((response) => response.json())
    .then(users => {
      for (let i = 0; i < users.length; i++) {
        this.getUser(users[i].url)
      }
    })
  }

  getUser(url) {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        usersData.push(data)
        usersData.sort((a, b) => (a.login > b.login) ? 1 : (b.login > a.login) ? -1 : 0);
        this.setState({ adalabUsers: [...usersData] })
      })
  }

  selectHandler(e) {
    this.setState({ userName: e.target.value })
  }

  
  render() {
    return (
      <div className="App">
        <Select
          adalabUsers={this.state.adalabUsers} 
          selectHandler={this.selectHandler}/>
        <Card
          adalabUsers={this.state.adalabUsers}
          userName={this.state.userName}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
