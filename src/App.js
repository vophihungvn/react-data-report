import AppBar from 'material-ui/AppBar'
import { Chart } from 'react-google-charts'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Paper from 'material-ui/Paper'
import React, { Component } from 'react'

import './App.css';

const style = {
  height: 'auto',
  width: '90%',
  margin: 20,
  textAlign: 'center',
  display: 'inline-block'
}

class FilmRating extends Component {
  constructor(props) {
    super(props)
    this.state = {
      options: {
        title: 'Film rating',
        hAxis: { title: 'Film'},
        vAxis: { title: 'Rating'},
        legend: 'none',
        is3D:true
      },
      rows: [],
      columns: [
        {
          type: 'string',
          label: 'Film',
        },
        {
          type: 'number',
          label: 'Rating',
        },
      ],
    }
  }

  componentDidMount() {
    return fetch('http://localhost:4000/report/rating')
    .then(data => data.json())
    .then(data => {
      return this.setState({ rows : data })
    })
  }

  render () {
    return (
      <Paper style={style} zDepth={1} >
        <Chart
          chartType="ColumnChart"
          data={this.state.rows}
          options={this.state.options}
          graph_id="ScatterChart2"
          width="100%"
          height="600px"
          legend_toggle
        />
      </Paper>
    )
  }
}

class TagRating extends Component {
  constructor(props) {
    super(props)
    this.state = {
      options: {
        title: 'Tag rating',
        hAxis: { title: 'Tag'},
        vAxis: { title: 'Rating'},
        legend: 'none',
        chartArea: {
          height: '300px'
        }
      },
      rows: [],
      columns: [
        {
          type: 'string',
          label: 'Film',
        },
        {
          type: 'number',
          label: 'Rating',
        },
      ]
    }
  }

  componentDidMount() {
    return fetch('http://localhost:4000/report/tag')
    .then(data => data.json())
    .then(data => {
      return this.setState({ rows : data })
    })
  }

  render () {
    return (
      <Paper style={style} zDepth={1} >
        <Chart
          chartType="BarChart"
          data={this.state.rows}
          options={this.state.options}
          graph_id="ScatterChart3"
          width="100%"
          height="3200px"
          chartArea={this.state.chartArea}
          legend_toggle
        />
      </Paper>
    )
  }
}

class Dashboard extends Component {
  render () {
    return (
      <div>
        <AppBar
          title="Film"
        />
        <FilmRating />
        <TagRating />
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
