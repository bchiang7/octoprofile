import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Chart from 'chart.js';
// import GhPolyglot from 'gh-polyglot';
import { langData } from '../utils';
import ChartsStyles from './styles/ChartsStyles';
import { theme, Section } from '../style';
const { fonts } = theme;

class Charts extends Component {
  static propTypes = {
    username: PropTypes.string.isRequired,
  };

  state = {
    languages: langData,
    chartType: 'pie',
  };

  componentDidMount() {
    // const { username } = this.props;
    // const me = new GhPolyglot(`${username}`);
    // me.userStats((err, stats) => {
    //   if (err) {
    //     throw new Error(err);
    //   }
    //   this.setState({ languages: stats }, () => this.buildChart());
    // });

    this.buildChart();
  }

  buildChart = () => {
    const { languages, chartType } = this.state;
    const ctx = document.getElementById('langChart');

    const labels = languages.map(lang => lang.label);
    const data = languages.map(lang => lang.value);
    const backgroundColor = languages.map(
      ({ color }) => `#${color.length > 4 ? color.slice(1) : color.slice(1).repeat(2)}99`,
    );
    const borderColor = languages.map(lang => `${lang.color}`);

    window.mychart = new Chart(ctx, {
      type: chartType,
      responsive: true,
      maintainAspectRatio: false,
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
          xAxes: [
            {
              gridLines: {
                // color: 'rgba(0,0,0,0.5)',
              },
              ticks: {
                fontFamily: fonts.inter,
                fontSize: 12,
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                // color: 'rgba(0,0,0,0.5)',
              },
              ticks: {
                beginAtZero: true,
                fontFamily: fonts.inter,
                fontSize: 12,
              },
            },
          ],
        },
        legend: {
          position: 'right',
          labels: {
            fontFamily: fonts.inter,
          },
        },
        tooltips: {
          titleFontFamily: fonts.inter,
          bodyFontFamily: fonts.inter,
          cornerRadius: 3,
        },
      },
    });
  };

  changeChartType = e => {
    window.mychart.destroy();
    this.setState({ chartType: e.target.value }, () => this.buildChart());
  };

  render() {
    return (
      <Section>
        <ChartsStyles>
          <div className="chart">
            <header>
              <h2>Top Languages</h2>
              <div>
                {/* eslint-disable-next-line */}
                <select name="chartType" onChange={this.changeChartType}>
                  <option value="pie">Pie</option>
                  <option value="doughnut">Doughnut</option>
                  <option value="polarArea">Polar Area</option>
                  <option value="bar">Bar</option>
                </select>
              </div>
            </header>

            <div className="chart-container">
              <canvas id="langChart" width="400" height="400" />
            </div>
          </div>

          <div className="chart">
            <header>
              <h2>Most Starred</h2>
              <div>
                {/* eslint-disable-next-line */}
                <select name="chartType" onChange={this.changeChartType}>
                  <option value="pie">Pie</option>
                  <option value="doughnut">Doughnut</option>
                  <option value="polarArea">Polar Area</option>
                  <option value="bar">Bar</option>
                </select>
              </div>
            </header>

            {/* <div className="chart-container">
              <canvas id="langChart" width="400" height="400" />
            </div> */}
          </div>

          <div className="chart">
            <header>
              <h2>Most Starred</h2>
              <div>
                {/* eslint-disable-next-line */}
                <select name="chartType" onChange={this.changeChartType}>
                  <option value="pie">Pie</option>
                  <option value="doughnut">Doughnut</option>
                  <option value="polarArea">Polar Area</option>
                  <option value="bar">Bar</option>
                </select>
              </div>
            </header>

            {/* <div className="chart-container">
              <canvas id="langChart" width="400" height="400" />
            </div> */}
          </div>
        </ChartsStyles>
      </Section>
    );
  }
}

export default Charts;
