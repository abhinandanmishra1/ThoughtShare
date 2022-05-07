import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import { config } from "dotenv";
import postRoutes from "./routes/posts.js";

//Cross-origin resource sharing (CORS) is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain
config();
const app = express(); // always done in every express
//Creating middleware

app.use(
	bodyParser.json({
		limit: "30mb",
		extended: true,
	})
);
app.use(
	bodyParser.urlencoded({
		limit: "30mb",
		extended: true,
	})
);

app.use(cors());
app.use("/posts", postRoutes);
// setting up the bodyparser to send request properly
const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT || 5000;

mongoose
	.connect(CONNECTION_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() =>
		app.listen(PORT, () => console.log("Server is Running on Port", PORT))
	)
	.catch((err) => console.log("Message", err.message));

// mongoose.set("useFindAndModify", false);
