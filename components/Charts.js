import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import GhPolyglot from 'gh-polyglot';
import { langData, reposData, buildChart } from '../utils';
import ChartsStyles from './styles/ChartsStyles';
import { Section } from '../style';

class Charts extends Component {
  static propTypes = {
    username: PropTypes.string.isRequired,
  };

  state = {
    languages: langData,
    repos: reposData,
    langChartType: 'pie',
    starChartType: 'bar',
    thirdChartType: 'doughnut',
  };

  componentDidMount() {
    // const { username } = this.props;
    // const me = new GhPolyglot(`${username}`);
    // me.userStats((err, stats) => {
    //   if (err) {
    //     throw new Error(err);
    //   }
    //   this.setState({ languages: stats }, () => this.initLangChart());
    // });
    this.initLangChart();
    this.initStarChart();
    this.initThirdChart();
  }

  initLangChart = () => {
    const { languages, langChartType } = this.state;
    const chartType = langChartType;
    const ctx = document.getElementById('langChart');
    const labels = languages.map(lang => lang.label);
    const data = languages.map(lang => lang.value);
    const backgroundColor = languages.map(
      ({ color }) => `#${color.length > 4 ? color.slice(1) : color.slice(1).repeat(2)}99`,
    );
    const borderColor = languages.map(lang => `${lang.color}`);
    const axes = false;
    const legend = true;
    const config = { ctx, chartType, labels, data, backgroundColor, borderColor, axes, legend };
    buildChart(config);
  };

  initStarChart = () => {
    const { repos, starChartType } = this.state;
    const ctx = document.getElementById('starChart');
    const chartType = starChartType;
    const LIMIT = 5;
    const sortProperty = 'stargazers_count';
    const mostStarredRepos = repos
      .filter(repo => !repo.fork)
      .sort((a, b) => b[sortProperty] - a[sortProperty])
      .slice(0, LIMIT);
    const labels = mostStarredRepos.map(repo => repo.name);
    const data = mostStarredRepos.map(repo => repo[sortProperty]);

    const backgroundColor = [
      'rgba(255, 99, 132, 0.5)',
      'rgba(54, 162, 235, 0.5)',
      'rgba(255, 206, 86, 0.5)',
      'rgba(75, 192, 192, 0.5)',
      'rgba(153, 102, 255, 0.5)',
    ];
    const borderColor = [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
    ];

    const axes = true;
    const legend = false;
    const config = { ctx, chartType, labels, data, backgroundColor, borderColor, axes, legend };
    buildChart(config);
  };

  initThirdChart = () => {
    const { repos, thirdChartType } = this.state;
    const ctx = document.getElementById('thirdChart');
    const chartType = thirdChartType;
    const uniqueLangs = new Set(repos.map(repo => repo.language));
    const labels = Array.from(uniqueLangs.values()).filter(l => l);
    const data = labels
      .map(lang => repos.filter(repo => repo.language === lang))
      .map(a => a.length);

    const backgroundColor = [
      'rgba(255, 99, 132, 0.5)',
      'rgba(54, 162, 235, 0.5)',
      'rgba(255, 206, 86, 0.5)',
      'rgba(75, 192, 192, 0.5)',
      'rgba(153, 102, 255, 0.5)',
      'rgba(255, 159, 64, 0.5)',
    ];
    const borderColor = [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)',
    ];

    const axes = false;
    const legend = true;
    const config = { ctx, chartType, labels, data, backgroundColor, borderColor, axes, legend };
    buildChart(config);
  };

  render() {
    return (
      <Section>
        <ChartsStyles>
          <div className="chart">
            <header>
              <h2>Top Languages</h2>
            </header>
            <div className="chart-container">
              <canvas id="langChart" width="400" height="400" />
            </div>
          </div>

          <div className="chart">
            <header>
              <h2>Most Starred</h2>
            </header>
            <div className="chart-container">
              <canvas id="starChart" width="400" height="400" />
            </div>
          </div>

          <div className="chart">
            <header>
              <h2>Stars per Language</h2>
            </header>
            <div className="chart-container">
              <canvas id="thirdChart" width="400" height="400" />
            </div>
          </div>
        </ChartsStyles>
      </Section>
    );
  }
}

export default Charts;
