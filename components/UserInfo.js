import React from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';
import Octicon, { Briefcase, Calendar, Location } from '@primer/octicons-react';
import UserInfoStyles from './styles/UserInfoStyles';
import { mixins, Section } from '../style';
import styled from 'styled-components';

const StyledButton = styled.div`
  button {
    padding: 8px 16px;
    border-radius: 4px;
    background: #24292e;
    color: rgba(200, 225, 255, 0.7);
    margintop: 6px;
  }

  button:hover {
    color: white;
  }
`;

const logOut = async () => {
  await localStorage.removeItem('username');
  Router.push({
    pathname: '/',
  });
};

const UserInfo = ({ userData }) => (
  <Section dark>
    {userData && (
      <UserInfoStyles>
        {userData.avatar_url && (
          <div className="avatar">
            <img src={userData.avatar_url} alt="avatar" />
          </div>
        )}

        {userData.name && <h1>{userData.name}</h1>}

        {userData.login && (
          <h2>
            <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
              @{userData.login}
            </a>
            <StyledButton>
              <button onClick={logOut}>Log out</button>
            </StyledButton>
          </h2>
        )}

        <div className="info">
          {userData.company && (
            <span className="info__item">
              <Octicon icon={Briefcase} size="small" />
              {userData.company}
            </span>
          )}

          {userData.location && (
            <span className="info__item">
              <Octicon icon={Location} size="small" />
              {userData.location}
            </span>
          )}

          {userData.created_at && (
            <span className="info__item">
              <Octicon icon={Calendar} size="small" />
              Joined{' '}
              {new Date(userData.created_at).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </span>
          )}
        </div>

        <div className="stats">
          <div className="stats__item">
            <span className="num">{userData.public_repos.toLocaleString()}</span>
            <span className="num-label">Repositories</span>
          </div>
          <div className="stats__item">
            <span className="num">{userData.followers.toLocaleString()}</span>
            <span className="num-label">Followers</span>
          </div>
          <div className="stats__item">
            <span className="num">{userData.following.toLocaleString()}</span>
            <span className="num-label">Following</span>
          </div>
        </div>
      </UserInfoStyles>
    )}
  </Section>
);

UserInfo.propTypes = {
  userData: PropTypes.object.isRequired,
};

export default UserInfo;
