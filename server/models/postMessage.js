import mongoose from "mongoose";

// this is a schema for the postMessage model
const postSchema = mongoose.Schema({
	title: String, // post title
	message: String, // post message
	creator: String, // post creator
	likeCount: {
		type: Number,
		default: 0,
	},
	tags: [""], // post tags
	createdAt: {
		type: Date,
		default: new Date(),
	},
});

// This tells what data is used in each post

const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
