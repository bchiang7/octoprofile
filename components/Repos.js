import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { repos } from '../data';
import styled from 'styled-components';
import { theme } from '../style';
const { colors, fonts } = theme;

const StyledSection = styled.section`
  ul {
    display: grid;
    grid-template-columns: repeat(3, minmax(300px, 1fr));
    grid-gap: 20px;
    li {
      background-color: ${colors.ebonyClay2};
      padding: 0 20px;
    }
  }
`;

class Repos extends Component {
  static propTypes = {
    username: PropTypes.string.isRequired,
  };

  state = {
    repos,
    sortType: 'stars',
  };

  componentDidMount() {
    this.getTopRepos();
  }

  getRepoPropName = type => {
    const map = {
      stars: 'stargazers_count',
      forks: 'forks_count',
      watchers: 'watchers_count',
      size: 'size',
    };
    return map[type];
  };

  getTopRepos = () => {
    const { repos, sortType } = this.state;
    const sortProperty = this.getRepoPropName(sortType);
    const topRepos = repos.sort((a, b) => b[sortProperty] - a[sortProperty]).slice(0, 6);
    this.setState({ topRepos });
  };

  changeRepoSort = e => {
    this.setState({ sortType: e.target.value }, () => this.getTopRepos());
  };

  render() {
    const { topRepos, sortType } = this.state;

    return (
      <StyledSection>
        <h2>Top Repos</h2>
        {/* eslint-disable-next-line */}
        {/* <select name="repoType" onChange={this.changeRepoSort}>
            <option value="stars">Stars</option>
            <option value="forks">Forks</option>
            <option value="watchers">Watchers</option>
            <option value="size">Size</option>
          </select> */}
        <form>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="stars"
                checked={sortType === 'stars'}
                onChange={this.changeRepoSort}
              />
              stars
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="forks"
                checked={sortType === 'forks'}
                onChange={this.changeRepoSort}
              />
              forks
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="watchers"
                checked={sortType === 'watchers'}
                onChange={this.changeRepoSort}
              />
              watchers
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="size"
                checked={sortType === 'size'}
                onChange={this.changeRepoSort}
              />
              size
            </label>
          </div>
        </form>

        <ul className="grid">
          {topRepos &&
            topRepos.map(repo => (
              <li key={repo.id} className="repo">
                <a href={repo.html_url}>
                  <h3>{repo.name}</h3>
                  <p>{repo.description}</p>
                  <p>{repo.homepage}</p>
                  <p>{repo.stargazers_count} stars</p>
                  <p>{repo.forks} forks</p>
                  <p>Top Language: {repo.language}</p>
                  <p>Size: {repo.size}KB</p>
                </a>
              </li>
            ))}
        </ul>
      </StyledSection>
    );
  }
}

export default Repos;
