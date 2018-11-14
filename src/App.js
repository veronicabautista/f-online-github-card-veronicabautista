import React, { Component } from 'react';
import './App.css';

const apiList = "https://api.github.com/orgs/adalab/members";

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      users: [],
      name: "",
    }

    this.selectUser = this.selectUser.bind(this);
  }

  componentDidMount () {
    this.fetchGithubUsers()
  }

  fetchGithubUsers (){
    fetch(apiList)
    .then((response) => response.json())
    .then((data) => {
      let userID = [];
      for (let i=0; i <data.lenght; i ++) {
        userID[i]= {
          ...data[i],
          id: i
        }
      }
      (console.log("usuarios: " + userID))
      this.setState ({
        users: userID
      })
    })
  }

  selectUser(event) {
    const mySearch = event.currentTarget.value;

    this.setState({
      name: mySearch
    });
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <select className="selectUsers">
            <option className="option-user">Selecciona una usuaria</option>
          </select>
        </header>
      </div>
    );
  }
}

export default App;
