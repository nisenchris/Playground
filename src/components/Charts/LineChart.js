import React from "react";
import ReactApexChart from "react-apexcharts";
import { lineChartData, lineChartOptions } from "variables/charts";
import { newLineChartData } from "variables/newChart";
import { withLDConsumer } from "launchdarkly-react-client-sdk";

class LineChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chartData: [],
      chartOptions: lineChartOptions,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { flags } = nextProps;
    const chartData = flags.newChartData ? newLineChartData : lineChartData;

    // Log an error when newChartData is true
    if (flags.newChartData) {
      console.error("Error: newChartData flag is enabled and causing issues.");
    }

    // Return the new state if it needs to be updated
    if (prevState.chartData !== chartData) {
      return {
        chartData,
      };
    }
    return null; // No state update needed
  }

  render() {
    return (
      <ReactApexChart
        options={this.state.chartOptions}
        series={this.state.chartData}
        type="area"
        width="100%"
        height="100%"
      />
    );
  }
}

export default withLDConsumer()(LineChart);
