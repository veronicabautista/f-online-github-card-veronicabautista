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
            <p className="card-username">@{profile.login}</p>
            <p className="card-name">{profile.name}</p>
            <p>{profile.lotacion}</p>
          </div>
          <div className="card-github">
            <div>
              <p>{profile.repos}</p>
            </div>
            <div>
              <p>{profile.followers}</p>
            </div>
            <div>
              <p>{profile.following}</p>
            </div>
          </div>
        </div>
        <div>
          <p>{profile.created_at}</p>
        </div>
      </div>
      );
    } else {
      return null;
    }
  }
}

export default Card;