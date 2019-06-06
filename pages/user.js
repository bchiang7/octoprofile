import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Head from '../components/Head';
import UserInfo from '../components/UserInfo';
import Languages from '../components/Languages';
import Repos from '../components/Repos';
import styled from 'styled-components';

const StyledContainer = styled.main`
  section {
    padding: 50px;
    h2 {
      font-size: 2rem;
    }
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
        <Head title="OctoProfile" />

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
