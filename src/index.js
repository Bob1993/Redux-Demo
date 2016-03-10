import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import timeReducer from './reducer/timeReducer'
import App from './App'

let store = createStore(timeReducer)
render(
	<Provider store = {store}>
		<App/>
	</Provider>
	, document.querySelector('#app')
)
