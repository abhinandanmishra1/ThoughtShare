import {
	CREATE_POST,
	UPDATE_POST,
	FETCH_POSTS,
	DELETE_POST,
	LIKE_POST,
} from "../constants/actionTypes";
const reducer = (posts = [], action) => {
	switch (action.type) {
		case DELETE_POST:
			return posts.filter((post) => post._id !== action.payload);
		// action.payload is the id of the post which is deleted
		// that's why we're filtering the posts array and returning the new one
		case UPDATE_POST:
		case LIKE_POST:
			return posts.map((post) =>
				post._id === action.payload._id ? action.payload : post
			);
		// action.payload is the updated post
		// that's why we're mapping the posts array and returning the new one
		case FETCH_POSTS:
			return action.payload;
		case CREATE_POST:
			return [...posts, action.payload];
		default:
			return posts;
	}
};

export default reducer;
