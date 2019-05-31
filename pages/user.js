import React, { Component } from 'react';
import GhPolyglot from 'gh-polyglot';
import Chart from 'chart.js';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { user, repos, languages } from '../data';

const StyledContainer = styled.main`
  padding: 50px 100px;
  img {
    max-width: 200px;
  }
  .chart {
    max-width: 500px;
  }
`;

class User extends Component {
  state = {
    username: '',
    user: {},
    userLanguages: [],
    chartType: 'bar',
    repos,
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

    //   this.setState({ userLanguages: stats }, () => this.buildChart());
    // });
    this.buildChart();

    this.getTopRepos();
  }

  buildChart = () => {
    const { userLanguages, chartType } = this.state;
    const ctx = document.getElementById('langChart');

    window.mychart = new Chart(ctx, {
      type: chartType,
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
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

  getTopRepos = () => {
    const { repos } = this.state;
    const topFive = repos.sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 5);
    this.setState({ topRepos: topFive });
  };

  render() {
    const { username, user, topRepos } = this.state;
    // console.log(topRepos);

    return (
      <StyledContainer>
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

        {/* eslint-disable-next-line */}
        <select name="chartType" id="chartType" onChange={this.changeChartType}>
          <option value="bar">Bar</option>
          <option value="polarArea">Polar Area</option>
          <option value="doughnut">Doughnut</option>
          <option value="pie">Pie</option>
        </select>

        <canvas id="langChart" className="chart" width="400" height="400" />

        <h2>Top 5 Repos by stars</h2>
        <ul>
          {topRepos &&
            topRepos.map(repo => (
              <li key={repo.id}>
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
      </StyledContainer>
    );
  }
}

User.propTypes = {
  query: PropTypes.object,
};

export default User;
