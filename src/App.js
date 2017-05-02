import AppBar from 'material-ui/AppBar'
import { Chart } from 'react-google-charts'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Paper from 'material-ui/Paper'
import React, { Component } from 'react'

import './App.css';

//Example chart
class ExampleChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        title: 'Age vs. Weight comparison',
        hAxis: { title: 'Age', minValue: 0, maxValue: 15 },
        vAxis: { title: 'Weight', minValue: 0, maxValue: 15 },
        legend: 'none',
      },
      data: [
        ['Age', 'Weight'],
        [8, 12],
        [4, 5.5],
        [11, 14],
        [4, 5],
        [3, 3.5],
        [6.5, 7],
      ],
    };
  }
  render() {
    return (
      <Chart
        chartType="ScatterChart"
        data={this.state.data}
        options={this.state.options}
        graph_id="ScatterChart"
        width="100%"
        height="400px"
        legend_toggle
      />
    );
  }
}
////
///
//Example chart
class ExampleChart2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        title: 'Age vs. Weight comparison',
        hAxis: { title: 'Age', minValue: 0, maxValue: 15 },
        vAxis: { title: 'Weight', minValue: 0, maxValue: 15 },
        legend: 'none',
      },
      data: [
        ['Age', 'Weight'],
        [8, 12],
        [4, 5.5],
        [11, 14],
        [4, 5],
        [3, 3.5],
        [6.5, 7],
      ],
    };
  }
  render() {
    return (
      <Chart
        chartType="AreaChart"
        data={this.state.data}
        options={this.state.options}
        graph_id="AreaChart"
        width="100%"
        height="400px"
        legend_toggle
      />
    );
  }
}
///
const style = {
  height: 100,
  width: '90%',
  height: 'auto',
  margin: 20,
  textAlign: 'center',
  display: 'inline-block'
};

class Dashboard extends Component {
 
  render () {
    return (
      <div>
        <AppBar
          title="Film"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        <Paper style={style} zDepth={1} >
          <Chart
            chartType="ColumnChart"
            data={[
  [
    "name",
    "rating"
  ],
  [
    "Toy Story (1995)",
    4.14684641309581
  ],
  [
    "Toy Story (1995)",
    4.14684641309581
  ],
  [
    "Father of the Bride Part II (1995)",
    3.00675675675676
  ],
  [
    "Father of the Bride Part II (1995)",
    3.00675675675676
  ],
  [
    "Seven (Se7en) (1995)",
    4.10642040457344
  ],
  [
    "Seven (Se7en) (1995)",
    4.10642040457344
  ],
  [
    "Usual Suspects, The (1995)",
    4.5171060011217
  ],
  [
    "Usual Suspects, The (1995)",
    4.5171060011217
  ],
  [
    "Professional, The (a.k.a. Leon: The Professional) (1994)",
    4.10617551462622
  ],
  [
    "Professional, The (a.k.a. Leon: The Professional) (1994)",
    4.10617551462622
  ]
]}
            options={{}}
            graph_id="ScatterChart2"
            width="100%"
            height="600px"
            legend_toggle
          />
        </Paper>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <Dashboard />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
