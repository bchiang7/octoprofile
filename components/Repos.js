import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Octicon, { Repo, Star, RepoForked, TriangleDown } from '@primer/octicons-react';
import FlipMove from 'react-flip-move';
import { reposData, langColors } from '../utils';
import ReposStyles from './styles/ReposStyles';
import DropdownStyles from './styles/DropdownStyles';
import { Section } from '../style';

class Repos extends Component {
  static propTypes = {
    username: PropTypes.string.isRequired,
  };

  state = {
    repos: reposData,
    sortType: 'stars',
    activeDropdown: '',
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
    const LIMIT = 8;
    const sortProperty = this.getRepoPropName(sortType);
    const topRepos = repos
      .filter(repo => !repo.fork)
      .sort((a, b) => b[sortProperty] - a[sortProperty])
      .slice(0, LIMIT);
    this.setState({ topRepos });
  };

  changeRepoSort = sortType => {
    this.setState({ sortType }, () => {
      this.getTopRepos();
      this.toggleDropdown('repos');
    });
  };

  toggleDropdown = (type = '') => {
    if (!type) {
      return;
    }
    const { activeDropdown } = this.state;
    this.setState({ activeDropdown: activeDropdown === type ? '' : type });
  };

  render() {
    const { topRepos, sortType, activeDropdown } = this.state;
    const sortTypes = ['stars', 'forks', 'watchers', 'size'];

    return (
      <Section>
        <ReposStyles>
          <header>
            <h2>Top Repos</h2>

            <div className="dropdown-wrapper">
              <span className="label">sorted by</span>
              <DropdownStyles active={activeDropdown === 'repos'}>
                <button className="dropdown__button" onClick={() => this.toggleDropdown('repos')}>
                  <label>{sortType}</label>
                  <Octicon icon={TriangleDown} />
                </button>
                <ul className="dropdown__list">
                  {sortTypes.map((type, i) => (
                    <li className="dropdown__list-item" key={i}>
                      <button onClick={() => this.changeRepoSort(type)}>{type}</button>
                    </li>
                  ))}
                </ul>
              </DropdownStyles>
            </div>
          </header>

          <div className="repo-list">
            <FlipMove typeName="ul">
              {topRepos &&
                topRepos.map(repo => (
                  <li key={repo.id}>
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="repo">
                      <div className="repo__top">
                        <div className="repo__name">
                          <Octicon icon={Repo} />
                          <h3>{repo.name}</h3>
                        </div>
                        <p>{repo.description}</p>
                      </div>
                      <div className="repo__stats">
                        <div className="repo__stats--left">
                          <span>
                            <div
                              className="language"
                              style={{ backgroundColor: langColors[repo.language] }}
                            />
                            {repo.language}
                          </span>
                          <span>
                            <Octicon icon={Star} />
                            {repo.stargazers_count.toLocaleString()}
                          </span>
                          <span>
                            <Octicon icon={RepoForked} />
                            {repo.forks.toLocaleString()}
                          </span>
                        </div>
                        <div className="repo__stats--right">
                          <span>{repo.size.toLocaleString()} KB</span>
                        </div>
                      </div>
                    </a>
                  </li>
                ))}
            </FlipMove>
          </div>
        </ReposStyles>
      </Section>
    );
  }
}

export default Repos;
