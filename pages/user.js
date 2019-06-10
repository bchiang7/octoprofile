import React from 'react';
import PropTypes from 'prop-types';
import Head from '../components/Head';
import UserInfo from '../components/UserInfo';
import Languages from '../components/Languages';
import Repos from '../components/Repos';

const User = props => {
  const username = props.query.id;

  return (
    <main>
      <Head title="OctoProfile" />
      <UserInfo username={username} />
      <Languages username={username} />
      <Repos username={username} />
    </main>
  );
};

User.propTypes = {
  query: PropTypes.object,
};

export default User;
