import React, { Component, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Octicon, { Repo, Star, RepoForked, TriangleDown } from '@primer/octicons-react';
import { reposData, langColors } from '../utils';
import styled, { css } from 'styled-components';
import { theme, mixins, Section } from '../style';
const { colors, fonts } = theme;

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
const StyledSort = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
  color: ${colors.grey};

  .label {
    margin: 0 1rem;
  }
`;
const DropdownButton = styled.button`
  ${mixins.flexBetween};
  align-items: center;
  padding: 0.75rem;
  width: 100%;
  font-size: 14px;
  color: ${colors.darkGrey};
  text-align: left;
  background-color: transparent;
  border-bottom: 2px solid ${colors.grey};
  line-height: 1;
  &:hover,
  &:focus {
    color: ${colors.darkGrey};
    background-color: ${colors.white};
  }
  svg {
    margin-left: 0.5rem;
  }
  label {
    transition: ${theme.transition};
    cursor: pointer;
  }
`;
const DropdownList = styled.ul`
  position: absolute;
  overflow: hidden;
  width: 100%;
  z-index: 2;
  transition: ${theme.transition};
  box-shadow: 0 5px 30px -15px rgba(0, 0, 0, 0.2);
  opacity: 0;
  visibility: hidden;
`;
const DropdownListItem = styled.li`
  background-color: ${colors.white};
  padding: 0.75rem;
  border-radius: 0;
  cursor: pointer;
  transition: ${theme.transition};
  &:hover,
  &:focus {
    background-color: ${colors.offWhite};
  }
`;
const Dropdown = styled.div`
  position: relative;
  width: 100px;
  font-size: 14px;

  ${props =>
    props.active &&
    css`
      ${DropdownList} {
        opacity: 1;
        visibility: visible;
      }
      ${DropdownButton} {
        background-color: ${colors.white};
        border-color: ${colors.white};
        svg {
          transform: rotate(0.5turn);
        }
      }
    `}
`;

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
        <header>
          <h2>Top Repos</h2>

          <StyledSort>
            <span className="label">sorted by</span>
            <Dropdown active={activeDropdown === 'repos'}>
              <DropdownButton onClick={() => this.toggleDropdown('repos')}>
                <label>{sortType}</label>
                <Octicon icon={TriangleDown} />
              </DropdownButton>
              <DropdownList>
                {sortTypes.map((type, i) => (
                  <DropdownListItem
                    key={i}
                    onClick={() => this.changeRepoSort(type)}
                    active={sortType === type}>
                    {type}
                  </DropdownListItem>
                ))}
              </DropdownList>
            </Dropdown>
          </StyledSort>
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
      </Section>
    );
  }
}

export default Repos;
