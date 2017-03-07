import { FETCH_USERS } from '../actions/types'

const FAKE_DATA = [
	{
		name: 'Bob',
		company: 'Company1',
		email: 'Email1'
	},
	{
		name: 'Sandy',
		company: 'Company2',
		email: 'Email2'
	},
	{
		name: 'Jim',
		company: 'Company3',
		email: 'Email3'
	},
	{
		name: 'Nate',
		company: 'Company4',
		email: 'Email4'
	},
	{
		name: 'Brenda',
		company: 'Company5',
		email: 'Email5'
	},
]

export default (state = [], action) => {
	switch(action.type) {
		case FETCH_USERS:
			return [...action.payload, ...state]
		default:
			return state
	}
}