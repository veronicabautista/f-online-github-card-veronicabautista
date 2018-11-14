import React, { Component } from 'react';
import Card from './components/Card';
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
        this.setState({ adalabUsers: [...usersData] })
      })
  }

  selectHandler(e) {
    this.setState({ userName: e.target.value })
  }

  
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <select className="selectUsers" onChange={this.selectHandler}>
                <option className="option" value=''>Selecciona una usuaria</option>
                {this.state.adalabUsers.map(user => {
                    return (
                        <option key={user.id} className="option" value={user.login}>{user.login}</option>
                    );
                })}
            </select>
        </header>
        <Card
          adalabUsers={this.state.adalabUsers}
          userSelected={this.state.userNames}
        />
      </div>
    );
  }
}

export default App;
