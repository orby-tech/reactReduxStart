export function createStore(rootReducer, initialState) {
	const initialState = {
		counter: 0,
		theme:{value: 'light'}
	}

	let state = rootReducer(initialState, {type: '__INIT__'})
	const subscribers = []
	return {
		dispatch(action) {
			state = rootReducer(state, action)
			subscribers.forEach(sub => sub())
		},
		subscribe(callback) {
			subscribers.push(callback)
		},
		getState() {
			return state
		}
	}
}