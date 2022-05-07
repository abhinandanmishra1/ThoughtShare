import React from "react";
import Post from "./Post/Post";
import useStyles from "./styles";
import { CircularProgress, Grid } from "@material-ui/core";
import { useSelector } from "react-redux";
// useSelector is a hook that allows us to access the state of the store
const Posts = () => {
	const posts = useSelector((state) => state.posts);
	const classes = useStyles();
	console.log(posts);
	return !posts.length ? (
		<CircularProgress />
	) : (
		<Grid
			className={classes.container}
			alignItems="stretch"
			container
			spacing={3}>
			{posts.map((post) => (
				<Grid item key={post._id} xs={12} sm={6}>
					<Post post={post} />
				</Grid>
			))}
		</Grid>
	);
};

export default Posts;
