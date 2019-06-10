import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Octicon, { Briefcase, Calendar, Location } from '@primer/octicons-react';
import { userData } from '../utils';
import UserInfoStyles from './styles/UserInfoStyles';
import { Section } from '../style';

const UserInfo = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // fetch(`https://api.github.com/users/${username}`)
    //   .then(response => response.json())
    //   .then(json => {
    //     console.log(json);
    //     setUser(json);
    //   });
    setUser(userData);
  }, []);

  return (
    <Section dark>
      {user && (
        <UserInfoStyles>
          {user.avatar_url && (
            <div className="avatar">
              <img src={user.avatar_url} alt="avatar" />
            </div>
          )}

          {user.name && <h1>{user.name}</h1>}

          {user.login && (
            <h2>
              <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                @{user.login}
              </a>
            </h2>
          )}

          {user.bio && <h3>{user.bio}</h3>}

          <div className="info">
            {user.company && (
              <span className="info__item">
                <Octicon icon={Briefcase} size="small" />
                {user.company}
              </span>
            )}

            {user.location && (
              <span className="info__item">
                <Octicon icon={Location} size="small" />
                {user.location}
              </span>
            )}

            {user.created_at && (
              <span className="info__item">
                <Octicon icon={Calendar} size="small" />
                Joined{' '}
                {new Date(user.created_at).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
            )}
          </div>

          <div className="stats">
            {user.public_repos && (
              <div className="stats__item">
                <span className="num">{user.public_repos}</span>
                <span className="num-label">Repositories</span>
              </div>
            )}
            {user.followers && (
              <div className="stats__item">
                <span className="num">{user.followers}</span>
                <span className="num-label">Followers</span>
              </div>
            )}
            {user.following && (
              <div className="stats__item">
                <span className="num">{user.following}</span>
                <span className="num-label">Following</span>
              </div>
            )}
          </div>
        </UserInfoStyles>
      )}
    </Section>
  );
};

UserInfo.propTypes = {
  username: PropTypes.string.isRequired,
};

export default UserInfo;
