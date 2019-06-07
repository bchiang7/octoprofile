import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Octicon, { Repo, Star, RepoForked, TriangleDown } from '@primer/octicons-react';
import { repos, langColors } from '../utils';
import styled from 'styled-components';
import { theme, mixins } from '../style';
const { colors, fonts } = theme;

const StyledSection = styled.section`
  .sort {
    display: flex;
    align-items: center;
    font-size: 1rem;
    color: ${colors.grey};
    .dropdown {
      width: 120px;
    }
  }
`;
const StyledRepoList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 1rem;

  li {
    .repo {
      ${mixins.flexBetween};
      flex-direction: column;
      padding: 30px;
      height: 100%;
      color: ${colors.grey2};
      background-color: ${colors.white};
      border-radius: 0.25rem;
      box-shadow: 0 5px 30px -15px rgba(0, 0, 0, 0.2);
      &:hover,
      &:focus {
        box-shadow: 0 15px 30px -15px rgba(0, 0, 0, 0.2);
        transform: scale(1.009);
      }

      h3 {
        ${mixins.ellipsis};
        color: ${colors.darkGrey};
        margin-bottom: 0.75rem;
        font-size: 20px;
        font-family: ${fonts.mono};
        font-weight: 700;
        letter-spacing: -0.5px;
      }

      p {
        font-size: 14px;
        margin-bottom: 2rem;
        line-height: 1.3;
      }

      &__header {
        margin-bottom: 2rem;
      }

      &__name {
        display: flex;
        align-items: center;
        svg {
          margin-right: 0.5rem;
          min-width: 16px;
        }
        h3 {
          margin: 0;
        }
      }

      &__stats {
        ${mixins.flexBetween};
        font-size: 13px;
        color: ${colors.grey};

        &--left {
          flex-grow: 1;
          display: flex;

          span {
            display: flex;
            align-items: center;
            margin-right: 0.75rem;
            svg {
              margin-right: 0.25rem;
            }
            .language {
              border-radius: 100%;
              width: 10px;
              height: 10px;
              background-color: blue;
              margin-right: 0.25rem;
            }
          }
        }
      }
    }
  }
`;

const DropdownList = styled.ul`
  position: absolute;
  overflow: hidden;
  z-index: 2;
  transition: ${theme.transition};
  box-shadow: 0 5px 30px -15px rgba(0, 0, 0, 0.2);
`;
const DropdownListItem = styled.li`
  background-color: ${colors.white};
  padding: 1rem;
  border-radius: 0;
  cursor: pointer;
  transition: ${theme.transition};
  &:last-of-type {
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
  }
  &:hover,
  &:focus {
    background-color: ${colors.offWhite};
  }
`;
const ButtonLabel = styled.span`
  transition: ${theme.transition};
`;
const DropdownButton = styled.button`
  ${mixins.flexBetween};
  padding: 0.5rem 5px;
  width: 100%;
  font-size: 1rem;
  background-color: transparent;
  border-bottom: 2px solid ${colors.grey};
  line-height: 1;
  svg {
    margin-left: 1rem;
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

  changeRepoSort = e => this.setState({ sortType: e.target.value }, () => this.getTopRepos());

  toggleDropdown = () => console.log('toggle dropdown');

  render() {
    const { topRepos, sortType } = this.state;
    const sortTypes = ['stars', 'forks', 'watchers', 'size'];

    return (
      <StyledSection>
        <header>
          <h2>Top Repos</h2>
          <div className="sort">
            <span>&nbsp; sorted by &nbsp;</span>
            {/* eslint-disable-next-line */}
            {/* <select name="repoType" onChange={this.changeRepoSort}>
              {sortTypes &&
                sortTypes.map((type, i) => (
                  <option key={i} value={type}>
                    {type}
                  </option>
                ))}
            </select> */}

            <div className="dropdown">
              <DropdownButton onClick={() => this.toggleDropdown('list')}>
                <ButtonLabel>{sortType}</ButtonLabel>
                <Octicon icon={TriangleDown} />
              </DropdownButton>
              <DropdownList>
                {sortTypes.map((type, i) => (
                  <DropdownListItem
                    key={i}
                    onClick={() => this.changeRepoSort('value')}
                    active={sortType === type}>
                    {type}
                  </DropdownListItem>
                ))}
              </DropdownList>
            </div>
          </div>
        </header>

        <StyledRepoList>
          {topRepos &&
            topRepos.map(repo => (
              <li key={repo.id}>
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="repo">
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
        </StyledRepoList>
      </StyledSection>
    );
  }
}

export default Repos;
