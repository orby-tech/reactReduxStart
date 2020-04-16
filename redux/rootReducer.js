import {combineReducers} from 'redux'
import { INCREMENT, DECREMENT, CHANGE_THEME } from './types'


function counterReducer(state = 0, action) {
	if (action.type === 'INCREMENT') {
		console.log("sf")
		return state + 1
	} else if (action.type === DECREMENT) {
		return state - 1
	}
	return state	
}

const initialThemeState = {
	value: 'light',
	  disabled: false

}

function themeReducer(state = initialThemeState, action) {
		console.log("adfs")

	switch(action.type) {
		case CHANGE_THEME:
			return {...state, value: action.payload}

		default: return state
	}
}
export const rootReducer = combineReducers({
  counter: counterReducer,
  theme: themeReducer
})