import React, { Component } from 'react';

class Card extends Component {
  render() {
    const { adalabUsers, userName } = this.props;

    if (userName !== '') {
      let profile;
      const filterUser = adalabUsers.filter(profile => profile.login === userName)
      profile = filterUser[0];

      (console.log(profile))

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
            <span><i class="fas fa-map-marker-alt"></i>{profile.location}</span>
          </div>
          <div className="card-github">
            <div>
              <span>{profile.public_repos}</span>
            </div>
            <div>
              <span>{profile.followers}</span>
            </div>
            <div>
              <span>{profile.following}</span>
            </div>
          </div>
        </div>
        <div className="date-created">
          <span>{profile.created_at}</span>
        </div>
      </div>
      );
    } else {
      return null;
    }
  }
}

export default Card;