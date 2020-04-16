import { INCREMENT, DECREMENT, CHANGE_THEME } from './types'


export function increment() {
	return {
		type: INCREMENT
	}
}
export function decrement() {
	return {
		type: DECREMENT
	}
}
export function changeTheme(newTheme) {
	return {
		type: CHANGE_THEME,
		payload: newTheme
	}
}