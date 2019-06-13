import React from 'react';
import PropTypes from 'prop-types';
import { Head, UserInfo, Charts, Repos, Footer, Corner } from '../components';

const User = props => {
  const username = props.query.id;

  return (
    <main>
      <Head title="OctoProfile" />
      <Corner />
      <UserInfo username={username} />
      <Charts username={username} />
      <Repos username={username} />
      <Footer />
    </main>
  );
};

User.propTypes = {
  query: PropTypes.object,
};

export default User;
