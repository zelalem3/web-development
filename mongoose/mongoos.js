const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/shopDB');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled

  const fruitschema = mongoose.Schema({
    name: {
			type: String,
			required: [true, "you must fill the name!!"]
		},
    rating: Number,
    review: String
  });

  const Fruit = mongoose.model("Fruit", fruitschema);



const personschema = mongoose.Schema(

	{
		name: String,
		age: Number
	}
);
const Person = mongoose.model("Person", personschema);

const person = new Person(
	{
		name: "zelalem",
		age: 21
	}
)

  const fruit = new Fruit({
    name: "Banana",
    rating: 5,
    review: "it is bad"
  });

  // await fruit.save(); // Save the banana object to the database
	await person.save();
  console.log("Fruits saved successfully.");

  // Close the database connection
  await mongoose.disconnect();
}
