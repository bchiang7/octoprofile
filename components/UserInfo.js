import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { user } from '../data';
import styled from 'styled-components';
import { theme } from '../style';
const { colors, fonts } = theme;

const StyledSection = styled.section`
  /* text-align: center; */

  h1 {
    font-weight: 500;
    font-size: 40px;
    margin-bottom: 0;
  }

  h2 {
    font-family: ${fonts.mono};
  }

  .avatar {
    border: 2px solid ${colors.blue};
    border-radius: 100%;
    max-width: 200px;

    &:hover {
      img {
        filter: grayscale(0);
      }
    }

    img {
      border-radius: 100%;
      filter: grayscale(1);
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
        <div className="avatar">
          <img src={user.avatar_url} alt="" />
        </div>
        <h1>{user.name}</h1>
        <h2>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">
            @{user.login}
          </a>
        </h2>
        <h3>{user.bio}</h3>
        <p>{user.company}</p>
        <p>{user.blog}</p>
        <p>{user.location}</p>
        <p>{user.email}</p>
        <p>Repos: {user.public_repos}</p>
        <p>Followers: {user.followers}</p>
        <p>Following: {user.following}</p>
        <p>
          Joined{' '}
          {new Date(user.created_at).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          })}
        </p>
      </StyledSection>
    );
  }
}

export default UserInfo;
