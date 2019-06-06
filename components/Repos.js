import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { repos, langColors } from '../utils';
import { IconStar, IconFork } from '../components/icons';
import styled from 'styled-components';
import { theme, mixins } from '../style';
const { colors } = theme;

const StyledSection = styled.section`
  header {
    ${mixins.flexBetween};
    margin-bottom: 30px;
  }
  form {
    display: flex;
    .radio {
      display: flex;
      align-items: center;
      margin-right: 10px;
    }
  }
  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 30px;

    .repo-item {
      .repo {
        ${mixins.flexBetween};
        flex-direction: column;
        padding: 30px;
        height: 100%;
        color: rgba(0, 0, 0, 0.5);
        background-color: ${colors.white};
        box-shadow: 0 5px 30px -15px rgba(0, 0, 0, 0.2);

        &:hover,
        &:focus {
          box-shadow: 0 15px 30px -15px rgba(0, 0, 0, 0.2);
        }

        h3 {
          ${mixins.ellipsis};
          color: ${colors.darkGrey};
          margin: 0;
          font-size: 22px;
          margin-bottom: 0.75rem;
        }
        h4 {
          font-weight: 400;
          font-size: 14px;
          margin-bottom: 2rem;
          line-height: 1.3;
        }

        &__header {
          margin-bottom: 2rem;
        }

        &__stats {
          ${mixins.flexBetween};
          font-size: 13px;
          > div {
            display: flex;
          }
          span {
            display: flex;
            align-items: center;
            margin-right: 10px;
            svg {
              margin-right: 3px;
            }
            .color {
              border-radius: 100%;
              width: 10px;
              height: 10px;
              background-color: blue;
              margin-right: 5px;
            }
          }
        }
      }
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
    const LIMIT = 8;
    const sortProperty = this.getRepoPropName(sortType);
    const topRepos = repos.sort((a, b) => b[sortProperty] - a[sortProperty]).slice(0, LIMIT);
    this.setState({ topRepos });
  };

  changeRepoSort = e => {
    this.setState({ sortType: e.target.value }, () => this.getTopRepos());
  };

  render() {
    const { topRepos, sortType } = this.state;

    return (
      <StyledSection>
        <header>
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
        </header>

        <ul className="grid">
          {topRepos &&
            topRepos.map(repo => (
              <li key={repo.id} className="repo-item">
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="repo">
                  <div className="repo__name">
                    <h3>{repo.name}</h3>
                    <h4>{repo.description}</h4>
                  </div>
                  <div className="repo__stats">
                    <div>
                      <span>
                        <span
                          className="color"
                          style={{ backgroundColor: langColors[repo.language] }}
                        />
                        {repo.language}
                      </span>
                      <span>
                        <IconStar />
                        {repo.stargazers_count}
                      </span>
                      <span>
                        <IconFork />
                        {repo.forks}
                      </span>
                    </div>
                    <div>
                      <span>{repo.size.toLocaleString()} KB</span>
                    </div>
                  </div>
                </a>
              </li>
            ))}
        </ul>
      </StyledSection>
    );
  }
}

export default Repos;
