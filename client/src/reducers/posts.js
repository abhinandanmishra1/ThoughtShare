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
		case "FETCH_ALL":
			return action.payload;
		case "CREATE_POST":
			return [...posts, action.payload];
		default:
			return posts;
	}
};

export default reducer;
