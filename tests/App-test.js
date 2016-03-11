import expect from 'expect'
import React from 'react'
import {render, unmountComponentAtNode} from 'react-dom'
import {increase, decrease}  from '../src/actions/actionsCreater'
import reducer from '../src/reducer/timeReducer.js'

import App from 'src/App'

describe('reducers', () => {

  it('after dispatch ，state should be 2', () => {
    expect(reducer(undefined, {type: 'INCREASE', stepSize: 2}))
    .toEqual({time: 2})
  })
})
