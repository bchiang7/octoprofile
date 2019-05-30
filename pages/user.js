import PropTypes from 'prop-types';

const User = props => (
  <main>
    <h1>{props.query.id}</h1>
  </main>
);

User.propTypes = {
  query: PropTypes.object,
};

export default User;
