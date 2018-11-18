import React, { Component } from 'react';

class Card extends Component {
  render() {
    const { adalabUsers, userName } = this.props;

    if (userName !== '') {
      let profile;
      const filterUser = adalabUsers.filter(profile => profile.login === userName)
      profile = filterUser[0];
      (console.log(profile))

      const created_at = profile.created_at;
      (console.log(created_at))
      const created = created_at.slice(0, 9);
      const createdYearString = created.slice(0, 4);
      const createdMonthString = created.slice(5, 7)
      const date = new Date();
      const actualYear = date.getFullYear();
      const actualMonth = date.getMonth();
      const createdYear = parseInt(createdYearString);
      const createdMonth = parseInt(createdMonthString);

      let actualDate;
      if (actualYear === createdYear) {
        actualDate = (actualMonth - createdMonth) + ' meses';
      } else if (actualYear === createdYear && actualMonth - createdMonth === 1) {
        actualDate = '1 mes';
      } else if (actualYear - createdYear === 1) {
        actualDate = '1 año';
      } else {
        actualDate = (actualYear - createdYear) + ' años';
      }

      return (
        <div className="card-container">
        <div className="card">
          <div>
            <img src={profile.avatar_url}
              className="card-image"
              alt={`Foto de la usuaria ${profile.login}`} />
          </div>
          <div className="card-personal">
            <span className="card-username">@{profile.login}</span>
            <h2 className="card-name">{profile.name}</h2>
            <span className="card-location">
              <i className="fas fa-map-marker-alt"></i>{profile.location}
            </span>
          </div>
          <div className="card-github">
            <div className="github-data">
              <span className="card-github-number">{profile.public_repos}</span>
              <span className="card-github-text">Repos</span> 
            </div>
            <div className="github-data">
              <span className="card-github-number">{profile.followers}</span>
              <span className="card-github-text">Follower</span>
            </div>
            <div className="github-data">
              <span className="card-github-number">{profile.following}</span>
              <span className="card-github-text">Following</span>
            </div>
          </div>
        </div>
        <div className="date-created">
          <span>Miembro desde hace {actualDate}</span>
        </div>
      </div>
      );
    } else {
      return null;
    }
  }
}

export default Card;