// action创建函数, 返回一些列常量对应的的action对象

import actionType from './actionTypes'

export function increase(stepSize) {
	return {
		type: actionType.INCREASE,
		stepSize
	}
}

export function decrease(stepSize) {
	return {
		type: actionType.DECREASE,
		stepSize
	}
}

