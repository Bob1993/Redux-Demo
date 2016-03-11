import React from 'react'
import {increase, decrease} from './actions/actionsCreater'
import {connect} from 'react-redux'

class App extends React.Component{

	componentDidMount () {
		this.props.dispatch(increase(2))
	}

	componentWillUnmount() {
    clearInterval(this.interval);
	}
  
  render() {
    return (
    <div>
      <h1>{this.props.time}</h1>
    </div>)
  }
}

function select (state) { // 手动注入props的state，dispatch分发器被connect自动注入
	return {
		time: state.time
	}
}

export default connect(select)(App)

// bindActionCreators（actionCreator，dispatch） 表示把Redux最重要的两个分发事件的参数包装，然后可以作为props传递给子组件，也可以分开传递