const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/mongoose");
const dbschema = new mongoose.Schema(
	{
		name: String,
		age: Number,
	}
);
const db = mongoose.model("users", dbschema);

const zelalem = new db(
	{
		name: "zelalem",
		age: 30
	}
);
// zelalem.save();
db.deleteOne({age : 30});
