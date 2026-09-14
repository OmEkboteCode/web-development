const mongoose = require("mongoose");
const { Schema } = mongoose;
main()
  .then(() => console.log("Connection Successful"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const universitySchema = new Schema({
  name: String,
  courses: [
    {
      type: Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
});

const courseSchema = new Schema({
  course: {
    name: String,
    credits: Number,
  },
});

const University = mongoose.model("University", universitySchema);
const Course = mongoose.model("Course", courseSchema);

const addUniversity = async () => {
  let university1 = new University({
    name: "Stanford",
  });
  let course1 = new Course({
    name: "Artificial Intelligence",
    credits: 4,
  });
  let course2 = new Course({
    name: "Operating System",
    credits: 3,
  });
  let course3 = new Course({
    name: "Computer Networks",
    credits: 3,
  });

  await course1.save();
  await course2.save();
  await course3.save();

  university1.courses.push(course1._id);
  university1.courses.push(course2._id);
  university1.courses.push(course3._id);

  let result = await university1.save();
  console.log(result)
};


addUniversity()