import { ADD_POST } from '../actions/types';

const intitalState = {
	posts: [],
	port: {},
	loading: false
};

export default function(state = intitalState, action) {
	switch (action.type) {
		case ADD_POST:
			return {
				...state,
				posts: [action.payload, ...state.posts]
			};
		default:
			return state;
	}
}
