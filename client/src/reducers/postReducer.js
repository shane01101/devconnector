import {
	ADD_POST,
	GET_POSTS,
	DELETE_POST,
	POST_LOADING
} from '../actions/types';

const intitalState = {
	posts: [],
	port: {},
	loading: false
};

export default function(state = intitalState, action) {
	switch (action.type) {
		case POST_LOADING:
			return {
				...state,
				loading: true
			};
		case GET_POSTS:
			return {
				...state,
				posts: action.payload,
				loading: false
			};
		case ADD_POST:
			return {
				...state,
				posts: [action.payload, ...state.posts]
			};
		case DELETE_POST:
			return {
				...state,
				posts: state.posts.filter(post => post._id !== action.payload)
			};
		default:
			return state;
	}
}
