// This is how reducer is used

// const reducer = (state = [], action) => {
// 	switch (action.type) {
// 		case "FETCH_ALL":
// 			return state;
// 		case "CREATE_POST":
// 			return state;
// 		default:
// 			return state;
// 	}
// };
const reducer = (posts = [], action) => {
	switch (action.type) {
		case "UPDATE_POST":
			return posts.map((post) =>
				post._id === action.payload._id ? action.payload : post
			);
		case "FETCH_POSTS":
			return action.payload;
		case "CREATE_POST":
			return [...posts, action.payload];
		default:
			return posts;
	}
};

export default reducer;
