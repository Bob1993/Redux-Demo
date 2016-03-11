const initialState = {time: 0}

function timeReducer(state = initialState, action) {
	switch(action.type) {
		case 'INCREASE':
			return {time: state.time + action.stepSize} 
		case 'DECREASE':
			return {time: state.time - action.stepSize}
		default: return state
	}
}

export default timeReducer