import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import GhPolyglot from 'gh-polyglot';
import { langData, reposData, buildChart } from '../utils';
import ChartsStyles from './styles/ChartsStyles';
import { Section } from '../style';

const Charts = props => {
  const [languages, setLanguages] = useState([]);
  const [repos, setRepos] = useState([]);

  const initLangChart = () => {
    const ctx = document.getElementById('langChart');
    const chartType = 'pie';
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

  const initStarChart = () => {
    const ctx = document.getElementById('starChart');
    const chartType = 'bar';
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

  const initThirdChart = () => {
    const ctx = document.getElementById('thirdChart');
    const chartType = 'doughnut';
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

  const init = () => {
    initLangChart();
    initStarChart();
    initThirdChart();
  };

  useEffect(() => {
    const { username } = props;
    // const me = new GhPolyglot(`${username}`);
    // me.userStats((err, stats) => {
    //   if (err) {
    //     throw new Error(err);
    //   }
    //   this.setState({ languages: stats }, () => this.initLangChart());
    // });

    setLanguages(langData);
    setRepos(reposData);
    if (languages.length && repos.length) {
      init();
    }
  }, [languages, repos]);

  const chartSize = 300;

  return (
    <Section>
      <ChartsStyles>
        <div className="chart">
          <header>
            <h2>Top Languages</h2>
          </header>
          <div className="chart-container">
            <canvas id="langChart" width={chartSize} height={chartSize} />
          </div>
        </div>

        <div className="chart">
          <header>
            <h2>Most Starred</h2>
          </header>
          <div className="chart-container">
            <canvas id="starChart" width={chartSize} height={chartSize} />
          </div>
        </div>

        <div className="chart">
          <header>
            <h2>Stars per Language</h2>
          </header>
          <div className="chart-container">
            <canvas id="thirdChart" width={chartSize} height={chartSize} />
          </div>
        </div>
      </ChartsStyles>
    </Section>
  );
};

Charts.propTypes = {
  username: PropTypes.string.isRequired,
};

export default Charts;
