import {createStore} from 'redux'
import timeReducer from '../reducer/timeReducer'

export let store = createStore(timeReducer)