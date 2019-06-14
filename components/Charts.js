import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { buildChart, backgroundColor, borderColor } from '../utils';
import ChartsStyles from './styles/ChartsStyles';
import { Section } from '../style';

const Charts = ({ langData, repoData }) => {
  // Create chart with langData
  const initLangChart = () => {
    const ctx = document.getElementById('langChart');
    const labels = langData.map(lang => lang.label);
    const data = langData.map(lang => lang.value);
    const backgroundColor = langData.map(
      ({ color }) => `#${color.length > 4 ? color.slice(1) : color.slice(1).repeat(2)}99`,
    );
    const borderColor = langData.map(lang => `${lang.color}`);
    const chartType = 'pie';
    const axes = false;
    const legend = true;
    const config = { ctx, chartType, labels, data, backgroundColor, borderColor, axes, legend };
    buildChart(config);
  };

  // Create Most Starred chart
  const initStarChart = () => {
    const ctx = document.getElementById('starChart');
    const LIMIT = 5;
    const sortProperty = 'stargazers_count';
    const mostStarredRepos = repoData
      .filter(repo => !repo.fork)
      .sort((a, b) => b[sortProperty] - a[sortProperty])
      .slice(0, LIMIT);
    const labels = mostStarredRepos.map(repo => repo.name);
    const data = mostStarredRepos.map(repo => repo[sortProperty]);
    const chartType = 'bar';
    const axes = true;
    const legend = false;
    const config = { ctx, chartType, labels, data, backgroundColor, borderColor, axes, legend };
    buildChart(config);
  };

  // Create Stars per language chart
  const initThirdChart = () => {
    const ctx = document.getElementById('thirdChart');
    const uniqueLangs = new Set(repoData.map(repo => repo.language));
    const labels = Array.from(uniqueLangs.values()).filter(l => l);
    const data = labels
      .map(lang => repoData.filter(repo => repo.language === lang))
      .map(a => a.length);
    const chartType = 'doughnut';
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
    if (langData.length && repoData.length) {
      init();
    }
  }, []);

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
  langData: PropTypes.array.isRequired,
  repoData: PropTypes.array.isRequired,
};

export default Charts;
