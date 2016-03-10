import React from 'react'
import {increase, decrease} from './actions/actions'
import {connect} from 'react-redux'

class App extends React.Component{

	componentDidMount () {
		this.interval = setInterval(increase(1), 1000)
	}

	componentWillUnmount() {
    clearInterval(this.interval);
  }
  
  render() {
    return <div>
      <h1>{this.props.time}</h1>
    </div>
  }
}

function select (state) {
	return {
		time: state.time
	}
}

export default connect(select)(App)