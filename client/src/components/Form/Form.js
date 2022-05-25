import React, { useState, useEffect } from "react";
import useStyles from "./styles";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../actions/posts";

const Form = ({ currentId, setCurrentId }) => {
	const post = useSelector((state) =>
		currentId ? state.posts.find((post) => post._id === currentId) : null
	);

	const classes = useStyles();
	const dispatch = useDispatch();
	const [postData, setPostData] = useState({
		creator: "",
		title: "",
		message: "",
		tags: [""],
		selectedFile: "",
	});
	useEffect(() => {
		if (post) {
			setPostData({
				creator: "",
				title: "",
				message: "",
				tags: [""],
				selectedFile: "",
			});
			setPostData(post);
		}
	}, [post]);
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(postData);
		if (currentId) {
			dispatch(updatePost(currentId, postData));
		} else {
			dispatch(createPost(postData));
		}
		clear();
	};
	const clear = () => {
		setCurrentId(null);
		setPostData({
			creator: "",
			title: "",
			message: "",
			tags: [""],
			selectedFile: "",
		});
	};
	return (
		<Paper className={classes.paper}>
			<form
				autoComplete="off"
				noValidate
				className={`${classes.form} ${classes.root}`}
				onSubmit={handleSubmit}>
				<Typography variant="h6">
					{!currentId ? "Create a" : "Updating the"} post
				</Typography>
				<TextField
					name="creator"
					variant="outlined"
					label="Creator"
					fullWidth
					className={classes.m}
					value={postData.creator}
					onChange={(event) =>
						setPostData({ ...postData, creator: event.target.value })
					}
				/>
				<TextField
					name="title"
					variant="outlined"
					label="Title"
					fullWidth
					value={postData.title}
					onChange={(event) =>
						setPostData({ ...postData, title: event.target.value })
					}
				/>
				<TextField
					name="message"
					variant="outlined"
					label="Message"
					fullWidth
					value={postData.message}
					onChange={(event) =>
						setPostData({ ...postData, message: event.target.value })
					}
				/>
				<TextField
					name="tags"
					variant="outlined"
					label="Tags"
					fullWidth
					value={postData.tags ? postData.tags.map((tag) => tag).join(" ") : ""}
					onChange={(event) =>
						setPostData({
							...postData,
							tags: event.target.value.split(" ").filter((tag) => tag !== " "),
						})
					}
				/>
				<div className={classes.fileInput}>
					<FileBase
						type="file"
						multiple={false}
						onDone={({ base64 }) => {
							setPostData({ ...postData, selectedFile: base64 });
							//console.log(base64);
						}}
					/>
				</div>
				<Button
					className={classes.buttonSubmit}
					type="submit"
					size="large"
					variant="contained"
					color="primary"
					fullWidth>
					{!currentId ? "Create" : "Update"}
				</Button>
				<Button
					size="small"
					variant="contained"
					color="secondary"
					onClick={clear}
					fullWidth>
					Clear
				</Button>
			</form>
		</Paper>
	);
};

export default Form;

// Adding a comment
