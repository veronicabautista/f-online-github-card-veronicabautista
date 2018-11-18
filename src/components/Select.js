import React, { Component } from 'react';

class Select extends Component {
  render() {
    const { adalabUsers, selectHandler} = this.props;

    return (
      <header className="App-header">
        <select className="selectUsers" onChange={selectHandler}>
          <option className="option" value=''>Selecciona una usuaria</option>
          {adalabUsers.map(user => {
            return (
              <option key={user.id} className="option" value={user.login}>{user.login}</option>
            );
          })}
        </select>
      </header >
    );
  }
}

export default Select;