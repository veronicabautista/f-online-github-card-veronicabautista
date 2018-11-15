import React, { Component } from 'react';

class Card extends Component {
  render() {
    const { adalabUsers, userName } = this.props;

    if (userName !== '') {
      let profile;
      const filterUser = adalabUsers.filter(profile => profile.login === userName)
      profile = filterUser[0];

      (console.log(profile))

      // INFO
      // avatar_url
      // login
      // name
      // location
      // repos
      // followers
      // following
      // created_at

      return (
        <div className="card-container">
          <div>
            <img src={profile.avatar_url}
              className="card-image"
              alt={`Foto de la usuaria ${profile.login}`} />

          </div>
          <div>
            <p className="card-username">@{profile.login}</p>
            <p className="card-name">{profile.name}</p>

          </div>
          <div>
            <p>Localización</p>
          </div>
          <div>
            <div>
              <p>10 repos</p>
            </div>
            <div>
              <p>10 followers</p>
            </div>
            <div>
              <p>10 following</p>
            </div>
          </div>
          <p>Miembro desde hace</p>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Card;