import * as api from "../api";
// now we can use all functions in api

// Action Creators

export const getPosts = () => async (dispatch) => {
	// fecthing data is asynchronous work
	// that's why this type of fucntion is used
	try {
		const { data } = await api.fetchPosts();
		const action = { type: "FETCH_POSTS", payload: data };
		dispatch(action); // dispatching the action instead of returning it
	} catch (err) {
		console.log(err);
	}
};

export const createPost = (post) => async (dispatch) => {
	try {
		const { data } = await api.createPost(post);
		const action = { type: "CREATE_POST", payload: data };
		dispatch(action);
	} catch (err) {
		console.log(err);
	}
};

export const updatePost = (id, post) => async (dispatch) => {
	console.log("Action: ", id);
	try {
		const { data } = await api.updatePost(id, post);
		const action = { type: "UPDATE_POST", payload: data };
		dispatch(action);
	} catch (err) {
		console.log(err);
	}
};
