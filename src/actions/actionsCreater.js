// action创建函数, 返回一些列常量对应的的action对象

export function increase(stepSize) {
	return {
		type: 'INCREASE',
		stepSize
	}
}

export function decrease(stepSize) {
	return {
		type: 'DECREASE',
		stepSize
	}
}

