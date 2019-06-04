import React, { Component } from 'react';
import GhPolyglot from 'gh-polyglot';
import Chart from 'chart.js';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { user, repos, languages } from '../data';

const StyledContainer = styled.main`
  padding: 50px 100px;
  section {
    margin: 100px 0;
  }
  img {
    max-width: 200px;
  }
  .chart {
    max-width: 500px;
  }
  ul.grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(300px, 1fr));
    grid-gap: 1rem;

    .repo {
      background-color: #323e4f;
      padding: 20px;
    }
  }
`;

class User extends Component {
  state = {
    username: '',
    user: {},
    languages: languages,
    chartType: 'bar',
    repos,
    sortType: 'stars',
  };

  componentDidMount() {
    this.setState({ username: this.props.query.id });
    const username = this.props.query.id;

    // fetch(`https://api.github.com/users/${username}`)
    //   .then(response => response.json())
    //   .then(json => {
    //     console.log(json);
    //     setUser(json);
    //   });
    this.setState({ user });

    // const me = new GhPolyglot(`${username}`);
    // me.userStats((err, stats) => {
    //   if (err) {
    //     throw new Error(err);
    //   }
    //   this.setState({ languages: stats }, () => this.buildChart());
    // });

    this.buildChart();

    this.getTopRepos();
  }

  buildChart = () => {
    const { languages, chartType } = this.state;
    const ctx = document.getElementById('langChart');

    const labels = languages.map(lang => lang.label);
    const data = languages.map(lang => lang.value);
    const backgroundColor = languages.map(
      ({ color }) => `#${color.length > 4 ? color.slice(1) : color.slice(1).repeat(2)}77`,
    );
    const borderColor = languages.map(lang => `${lang.color}`);

    window.mychart = new Chart(ctx, {
      type: chartType,
      data: {
        labels,
        datasets: [
          {
            label: 'Languages',
            data,
            backgroundColor,
            borderColor,
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  };

  changeChartType = e => {
    window.mychart.destroy();
    this.setState({ chartType: e.target.value }, () => this.buildChart());
  };

  changeRepoSort = e => {
    this.setState({ sortType: e.target.value }, () => this.getTopRepos());
  };

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
    console.log(sortProperty);
    const topRepos = repos.sort((a, b) => b[sortProperty] - a[sortProperty]).slice(0, 6);
    this.setState({ topRepos });
  };

  render() {
    const { username, user, topRepos } = this.state;

    return (
      <StyledContainer>
        <section>
          <h1>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">
              {username}
            </a>
          </h1>
          <h2>{user.name}</h2>
          <h3>{user.company}</h3>
          <p>{user.blog}</p>
          <p>{user.location}</p>
          <p>{user.email}</p>
          <p>{user.hireable ? 'Hireable' : 'Not Available'}</p>
          <p>{user.bio}</p>
          <p>Repos: {user.public_repos}</p>
          <p>Followers: {user.followers}</p>
          <p>Following: {user.following}</p>
          <p>
            Member since &nbsp;
            {new Date(user.created_at).toLocaleDateString('en-US', {
              month: 'short',
              year: 'numeric',
            })}
          </p>

          <img src={user.avatar_url} alt="" />
        </section>

        <section>
          <h2>Top Languages</h2>
          {/* eslint-disable-next-line */}
          <select name="chartType" onChange={this.changeChartType}>
            <option value="bar">Bar</option>
            <option value="polarArea">Polar Area</option>
            <option value="doughnut">Doughnut</option>
            <option value="pie">Pie</option>
          </select>

          <canvas id="langChart" className="chart" width="400" height="400" />
        </section>

        <section>
          <h2>Top Repos</h2>
          {/* eslint-disable-next-line */}
          <select name="repoType" onChange={this.changeRepoSort}>
            <option value="stars">Stars</option>
            <option value="forks">Forks</option>
            <option value="watchers">Watchers</option>
            <option value="size">Size</option>
          </select>

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
                  </a>
                </li>
              ))}
          </ul>
        </section>
      </StyledContainer>
    );
  }
}

User.propTypes = {
  query: PropTypes.object,
};

export default User;
