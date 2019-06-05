import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserInfo from '../components/UserInfo';
import Languages from '../components/Languages';
import Repos from '../components/Repos';
import styled from 'styled-components';

const StyledContainer = styled.main`
  padding: 50px;
  section {
    margin-bottom: 100px;
  }
  header {
    display: flex;
  }
`;

class User extends Component {
  render() {
    const username = this.props.query.id;

    return (
      <StyledContainer>
        {/* <header> */}
        <UserInfo username={username} />

        <Languages username={username} />
        {/* </header> */}

        <Repos username={username} />
      </StyledContainer>
    );
  }
}

User.propTypes = {
  query: PropTypes.object,
};

export default User;
