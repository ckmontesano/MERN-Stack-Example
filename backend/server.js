const express = require("express");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");

const app = express();
const port = 8080;

app.use(express.static(path.join(__dirname, "build")))

app.get("/", (req, res) => {
	console.clear();
	console.log("Getting index...");
	let pathname = path.join(__dirname, "build/index.html");
	console.log("Index page requested: " + pathname);
	res.sendFile(path.join(__dirname, "build", "index.html"));	
});

app.use(cors({
	origin: "*"
}))

mongoose.connect("mongodb://127.0.0.1:27017/PeopleDirectory", {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

mongoose.connection.once("open", () => {
	console.log("MongoDB is connected.")
});

const personSchema = new mongoose.Schema({
	name: String,
	email_address: String
}, {
	collection: "users"
});

const personModel = mongoose.model("Users", personSchema, "users");

// TODO: Add query parameters for search
app.get("/get_users", (req, res) => {
	console.log("Get user requested.");
	personModel.find({}, (err, result) => {
		if ( err ) {
			res.send(err);
		} else {
			res.json(result);
		}		
	});
});

app.listen(port, () => {
	console.clear();
	console.log(`API Server is listening on port ${port}...`);
});
