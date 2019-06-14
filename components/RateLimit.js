import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme } from '../style';
const { colors } = theme;

const LimitStyles = styled.main`
  .limit {
    position: absolute;
    top: 0;
    left: 0;
    padding: 1rem;
  }
  .num {
    color: ${colors.grey};
    font-size: 20px;
    margin-bottom: 0.5rem;
  }
  p {
    text-transform: uppercase;
    font-size: 10px;
    letter-spacing: 1px;
    margin: 0;
    color: ${colors.grey2};
  }
`;

const RateLimit = ({ rateLimit }) => (
  <LimitStyles>
    {rateLimit && (
      <div className="limit">
        <div className="num">{`${rateLimit.remaining} / ${rateLimit.limit}`}</div>
        <p>Requests Left</p>
      </div>
    )}
  </LimitStyles>
);

RateLimit.propTypes = {
  rateLimit: PropTypes.object.isRequired,
};

export default RateLimit;
