const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/shopDB");
const productschema = new mongoose.schema({
	name: String,
	rating: Number,
	review: String
});


const Fruit = mongoose.model("Fruit", productsschema);

const fruit = new Fruit({
	name: "Apple",
	rating: 7,
	review: "it ia good"
});
fruit.save();
