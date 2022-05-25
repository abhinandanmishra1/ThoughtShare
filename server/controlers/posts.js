import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js";
// This gives access to our real model

export const getPosts = async (req, res) => {
	try {
		const postMessages = await PostMessage.find();
		// since the PostMessage model belongs to PostMessages
		// collection that's why it will look for data from it
		// as we have not specified the particular data to be fetched
		// hence it will fetch all the data
		res.status(200).json(postMessages);
	} catch (err) {
		res.status(404).json({ message: err.message });
	}
};

export const createPost = async (req, res) => {
	const post = req.body; // The post body received from input form
	const newPost = new PostMessage(post);
	try {
		await newPost.save();
		// since the newPost is of PostMessage model type
		// we can use save method to save the data in PostMessages collection
		res.status(201).json(newPost);
	} catch (err) {
		res.status(409).json({ message: err.message });
	}
};

export const updatePost = async (req, res) => {
	const { id } = req.params;
	const { title, message, creator, selectedFile, tags } = req.body;
	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).send("No post with the given Id");
	}

	const updatedPost = {
		creator,
		title,
		message,
		tags,
		selectedFile,
		_id: id,
	};
	await PostMessage.findByIdAndUpdate(id, updatedPost, {
		new: true,
	});
	res.json(updatedPost);
};
