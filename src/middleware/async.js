export default () => {
	return next => action => {
		const promise = Promise.resolve(action.payload)
		promise.then(response => {
			const data = response.data
			next({...action, payload: data })
		})
	}
}