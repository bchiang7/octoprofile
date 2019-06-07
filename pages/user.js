import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Head from '../components/Head';
import UserInfo from '../components/UserInfo';
import Languages from '../components/Languages';
import Repos from '../components/Repos';
import styled from 'styled-components';
import { mixins } from '../style';

const StyledContainer = styled.main`
  section {
    padding: 70px;
    header {
      display: flex;
      align-items: center;
      margin-bottom: 2rem;

      h2 {
        display: inline-block;
        margin: 0;
        font-size: 1.75rem;
        background-image: linear-gradient(90deg, #d1d5da 50%, hsla(0, 0%, 100%, 0) 0);
        background-position: bottom;
        background-repeat: repeat-x;
        background-size: 10px 2px;
        padding-bottom: 6px;
      }
    }
  }
`;

class User extends Component {
  render() {
    const username = this.props.query.id;

    return (
      <StyledContainer>
        <Head title="OctoProfile" />
        <UserInfo username={username} />
        <Languages username={username} />
        <Repos username={username} />
      </StyledContainer>
    );
  }
}

User.propTypes = {
  query: PropTypes.object,
};

export default User;
