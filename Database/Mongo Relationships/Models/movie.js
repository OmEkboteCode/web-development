const mongoose = require("mongoose");
const { Schema } = mongoose;
main()
  .then(() => console.log("Connection Successful"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const movieSchema = new Schema({
  title: String,
  cast: [
    {
      type: Schema.Types.ObjectId,
      ref: "Actor",
    },
  ],
});

const actorSchema = new Schema({
  name: String,
  age: Number,
});

const Movie = mongoose.model("Movie", movieSchema);
const Actor = mongoose.model("Actor", actorSchema);

const addMovie = async () => {
  const movie1 = new Movie({
    title: "Intersteller",
  });
  const actor1 = new Actor({
    name: "Matthew McConaaughey",
    age: 56,
  });
  const actor2 = new Actor({
    name: "Anne Hathaway",
    age: 43,
  });
  const actor3 = new Actor({
    name: "Jessica Chastain",
    age: 49,
  });

  await actor1.save();
  await actor2.save();
  await actor3.save();

  movie1.cast.push(actor1._id);
  movie1.cast.push(actor2._id);
  movie1.cast.push(actor3._id);

  let result = await movie1.save();
  console.log(result);

  let result1 = await Movie.findOne({title: "Intersteller"}).populate("cast", "name age");
  console.log(result1.cast.map(actor => actor.name));
  console.log(result1.cast);
};

addMovie();
