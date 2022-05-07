import React, { useState } from "react";
import useStyles from "./styles";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { createPost } from "../../actions/posts";
const Form = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const [postData, setPostData] = useState({
		creator: "",
		title: "",
		message: "",
		tags: [""],
		selectedFile: "",
	});
	const handleSubmit = (e) => {
		e.preventDefault();

		dispatch(createPost(postData));
	};
	const clear = () => {};
	return (
		<Paper className={classes.paper}>
			<form
				autoComplete="off"
				noValidate
				className={`${classes.form} ${classes.root}`}
				onSubmit={handleSubmit}>
				<Typography variant="h6">Create a new post</Typography>
				<TextField
					name="creator"
					variant="outlined"
					label="Creator"
					fullWidth
					className={classes.m}
					onChange={(event) =>
						setPostData({ ...postData, creator: event.target.value })
					}
				/>
				<TextField
					name="title"
					variant="outlined"
					label="Title"
					fullWidth
					onChange={(event) =>
						setPostData({ ...postData, title: event.target.value })
					}
				/>
				<TextField
					name="message"
					variant="outlined"
					label="Message"
					fullWidth
					onChange={(event) =>
						setPostData({ ...postData, message: event.target.value })
					}
				/>
				<TextField
					name="tags"
					variant="outlined"
					label="Tags"
					fullWidth
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
					Submit
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
