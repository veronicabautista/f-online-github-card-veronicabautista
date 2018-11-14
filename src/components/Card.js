import React, { Component } from 'react';

class Card extends Component {
    render() {
        const { adalabUsers, userName } = this.props;

            // show date
            // "avatar": json.avatar_url,
            // "login": json.login,
            // "name": json.name,
            // "location": json.location,
            // "repos": json.public_repos,
            // "followers": json.followers,
            // "following": json.following,
            // "date": json.created_at

            return (
                    <div className="card">
                      <div>
                        <img />
                      </div>
                      <div>
                        <p>@ Usuaria</p>
                        <p>Nombre</p>
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
    }
}

export default Card;