const express = require("express");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");

const app = express();
const port = 8080;

app.use(express.static(path.join(__dirname, "build")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
	origin: "*"
}))

app.get("/", (req, res) => {
	console.clear();
	console.log("Getting index...");
	let pathname = path.join(__dirname, "build/index.html");
	console.log("Index page requested: " + pathname);
	res.sendFile(path.join(__dirname, "build", "index.html"));	
});



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
	console.clear();
	console.log("Get user requested.");
	personModel.find({}, (err, result) => {
		if ( err ) {
			res.send(err);
		} else {
			res.json(result);
		}		
	});
});

// TODO: Add check for unique email
// Note; This should use get_users endpoint
app.post("/create_user", (req, res) => {
	console.clear();
	console.log("Create user called.");

	const newUser = new personModel({
		name : req.body.name,
		email_address : req.body.email_address
	})

	newUser.save( (err, doc) => {
		if ( err ) {
			console.log(err);
			res.send("There was a problem.").status(400);
		}

		console.log("Doc created:\n" + doc);

		res.send(JSON.stringify({
			"message" : "Success"
		})).status(200);
	});
});

// TODO: This
app.delete("/delete_user", (req, res) => {

});

app.listen(port, () => {
	console.clear();
	console.log(`API Server is listening on port ${port}...`);
});
