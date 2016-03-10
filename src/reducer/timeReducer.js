import actionType from '../actions/actionTypes.js'
const initialState = {time: 0}

function timeReducer(state = initialState, action) {
	switch(action.type) {
		case actionType.INCREASE:
			return {time: state.time + action.stepSize} 
		break;
		case actionType.DECREASE:
			return {time: state.time - action.stepSize}
		break;
		default: return state
	}
}

export default timeReducer