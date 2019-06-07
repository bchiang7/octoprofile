import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Octicon, { Briefcase, Calendar, Globe, Location } from '@primer/octicons-react';
import { user } from '../utils';
import styled from 'styled-components';
import { theme, mixins } from '../style';
const { colors, fonts } = theme;

const StyledSection = styled.section`
  background-color: ${colors.black};
  color: ${colors.lightestBlue};
`;
const StyledUserInfo = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;

  .avatar {
    ${mixins.flexCenter};
    border: 4px solid ${colors.blue};
    border-radius: 100%;
    width: 180px;
    height: 180px;
    margin-right: 2rem;
    img {
      border-radius: 100%;
    }
  }

  h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
    color: ${colors.offWhite};
  }
  h2 {
    font-family: ${fonts.mono};
    font-size: 1.5rem;
    a {
      color: ${colors.blue};
    }
  }

  a {
    color: ${colors.lightestBlue};
    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }

  .info-list {
    display: flex;
    margin-top: 1rem;
  }

  .info {
    display: flex;
    align-items: center;
    margin-right: 2rem;

    svg {
      margin-right: 10px;
    }
  }
`;
const StyledUserStats = styled.div`
  margin-top: 50px;

  h4 {
    color: ${colors.offWhite};
    font-size: 1rem;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 20px;
  }

  .flex {
    display: grid;
    grid-template-columns: repeat(3, minmax(100px, 180px));
    grid-gap: 0.5rem;
    justify-content: center;

    div {
      ${mixins.flexCenter};
      flex-direction: column;
      background-color: ${colors.darkGrey};
      padding: 1.5rem 2rem;
      border-radius: 0.25rem;
      text-align: center;

      .num {
        color: ${colors.lightestBlue};
        font-size: 1.5rem;
      }
      .num-label {
        text-transform: uppercase;
        font-size: 0.75rem;
        letter-spacing: 1px;
        margin-top: 1rem;
        color: rgba(200, 225, 255, 0.7);
      }
    }
  }
`;

class UserInfo extends Component {
  static propTypes = {
    username: PropTypes.string.isRequired,
  };

  state = {
    user: {},
  };

  componentDidMount() {
    // fetch(`https://api.github.com/users/${username}`)
    //   .then(response => response.json())
    //   .then(json => {
    //     console.log(json);
    //     setUser(json);
    //   });
    this.setState({ user });
  }

  render() {
    const { user } = this.state;

    return (
      <StyledSection>
        <StyledUserInfo>
          {user.avatar_url && (
            <div className="avatar">
              <img src={user.avatar_url} alt="avatar" />
            </div>
          )}
          <div>
            <div>
              {user.name && <h1>{user.name}</h1>}

              {user.login && (
                <h2>
                  <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                    @{user.login}
                  </a>
                </h2>
              )}

              {user.bio && <h3>{user.bio}</h3>}
            </div>

            <div className="info-list">
              {user.company && (
                <span className="info">
                  <Octicon icon={Briefcase} size="small" />
                  {user.company.substring(1)}
                </span>
              )}
              {user.location && (
                <span className="info">
                  <Octicon icon={Location} size="small" />
                  {user.location}
                </span>
              )}

              {user.created_at && (
                <span className="info">
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

            <StyledUserStats>
              <div>{/* <h4>Stats</h4> */}</div>
              <div className="flex">
                {user.public_repos && (
                  <div>
                    <span className="num">{user.public_repos}</span>
                    <span className="num-label">Public Repos</span>
                  </div>
                )}
                {user.followers && (
                  <div>
                    <span className="num">{user.followers}</span>
                    <span className="num-label">Followers</span>
                  </div>
                )}
                {user.following && (
                  <div>
                    <span className="num">{user.following}</span>
                    <span className="num-label">Following</span>
                  </div>
                )}
              </div>
            </StyledUserStats>
          </div>
        </StyledUserInfo>
      </StyledSection>
    );
  }
}

export default UserInfo;
