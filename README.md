### Project Learning - MERN stack

## Backend Folder Structure

- `routes` is a folder where all the routes is created
- `controllers` folder contains all the handlers like getPosts,createPost,updatePost
- `models` folder is for creating the mongoose models for the collections like for `PostMessages` Collection `PostMessage` model is created.

### Learnings

**Backend Learning**

- `mongoos.Schema({})` is used to create schema of the data
- then `mongoose.model(firsArg,secondArg)` is used to create model of the Schema created
- `mongoose.model` takes two arguments -> firstArg is singular name of the collection for which model is defined
- secondArg is copy of the schema

**Frontend Learning**

- Redux Knowledge
  - I will write here about redux
  - Folders used for redux are `actions` and `reducers`.
- **How things are working?**

- For creating any functionality what I am doing is ->

- Like I have to create `likePost` functionality.

- Backend Work

  - In server -> `routes` create route for the likePost
  - `router.patch("/:id/likePost",likePost)`
  - where the second argument of patch is `likePost` which is a function inside controlers.

  - Now create this function inside controler which is an asynchronous function and takes two arguments `req,res`-> get the post using id and then increase the likecount and update the post.

  - This was all for backend.

- Frontend Work

  - Inside the `client ` folder.
  - Three folders are to be taken care of.
  - `api` --> `actions` --> `reducers` then use this functionality inside the frontend.

  - Let's take example of likePost
  - Inside api create a `likePost` function which is intiating a `patch`request (patch for update).
  - api ---> Index.js

  ```js
  export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
  ```

  - This is only function created not yet used.
  - In the actions folder create an action function --> which will be used as an action for our frontend calls and actions are not called directly. Actions are dispatched.
  - actions ---> posts.js

  ```js
  // This is the way how actions are written
  export const likePost = (id) => async (dispatch) => {
  	try {
  		// getting the data using
  		// the function in api
  		const { data } = await api.likePost(id);
  		// creating the action
  		const action = { type: "LIKE_POST", payload: data };
  		// action has two keys type and payload

  		// then dispatching it
  		dispatch(action);
  	} catch (err) {
  		console.log(err);
  	}
  };
  ```

  - Third part is `reducers`.
  - Reducers are defined for a state and action.
  - Based on the type of action it returns something.

  ```js
  // This is how reducers are defined
  const reducer = (state = [], action) {
    switch (action.type) {
    	case "FETCH_ALL":
    		return state;
        // implement the logic
        // of what should it return
        // For fetch all simply return
        // action.payload
    	case "CREATE_POST":
    		return state;
        // Like for create
        // we have to return [...state,action.payload]
    	default:
    		return state;
  }
  ```

- This is how the functionality is created.

- Now for using this functionality just import the function from `actions/posts` to the component where it is to be used.
- Like in our case like feature will be for a `Post` component.
- For using any action

  - `import {useDispatcher} from 'react-redux'`
  - `import {likePost} from ---actions---`
  - `const dispatcher=useDispatcher()`
  - Now just write `onClick={()=>dispatch(likePost(post._id))}`

- That's all about it.
