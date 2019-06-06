import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { user } from '../utils';
import styled from 'styled-components';
import { theme, mixins } from '../style';
const { colors, fonts } = theme;

const StyledSection = styled.section`
  background-color: ${colors.black};
  color: ${colors.lightestBlue};
  text-align: center;

  h1 {
    font-weight: 500;
    font-size: 40px;
    margin-bottom: 0;
  }

  h2 {
    font-family: ${fonts.mono};
  }

  .avatar {
    ${mixins.flexCenter};
    margin: 0 auto 20px;
    border: 2px solid ${colors.blue};
    border-radius: 100%;
    width: 180px;
    height: 180px;
    img {
      border-radius: 100%;
    }
  }

  .flex {
    ${mixins.flexBetween}
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
        <div className="flex">
          <div>{user.company}</div>
          <div>{user.blog}</div>
          <div>{user.location}</div>
          <p>
            Joined{' '}
            {new Date(user.created_at).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
          </p>
        </div>
        <div className="flex">
          <div>
            <h4>{user.public_repos}</h4>
            <p>Repos</p>
          </div>
          <div>
            <h4>{user.followers}</h4>
            <p>Followers</p>
          </div>
          <div>
            <h4>{user.following}</h4>
            <p>Following</p>
          </div>
        </div>
      </StyledSection>
    );
  }
}

export default UserInfo;
