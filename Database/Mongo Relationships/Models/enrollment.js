const mongoose = require("mongoose");
const { Schema } = mongoose;
main()
  .then(() => console.log("Connection Successful"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const studentSchema = new Schema({
  name: String,
});

const courseSchema = new Schema({
  name: String,
});

const enrollmentSchema = new Schema({
  student: {
    type: Schema.Types.ObjectId,
    ref: "Student",
  },
  course: {
    type: Schema.Types.ObjectId,
    ref: "Course",
  },
});

const Student = mongoose.model("Student", studentSchema);
const Course = mongoose.model("Course", courseSchema);
const Enrollment = mongoose.model("Enrollment", enrollmentSchema);

const addEnrollment = async () => {
//   const student1 = new Student({
//     name: "Steve",
//   });
//   const student2 = new Student({
//     name: "Taylor",
//   });
//   const student3 = new Student({
//     name: "Aron",
//   });
//   const course1 = new Course({
//     name: "AI",
//   });
//   const course2 = new Course({
//     name: "Operating Systems",
//   });
//   const course3 = new Course({
//     name: "Computer Network",
//   });

//   const enrollment1 = new Enrollment({
//     student: student1._id,
//     course: course1._id,
//   });
//   const enrollment2 = new Enrollment({
//     student: student1._id,
//     course: course2._id,
//   });
//   const enrollment3 = new Enrollment({
//     student: student2._id,
//     course: course1._id,
//   });
//   const enrollment4 = new Enrollment({
//     student: student2._id,
//     course: course3._id,
//   });
//   const enrollment5 = new Enrollment({
//     student: student3._id,
//     course: course1._id,
//   });
//   const enrollment6 = new Enrollment({
//     student: student3._id,
//     course: course2._id,
//   });

//   await student1.save();
//   await student2.save();
//   await student3.save();

//   await course1.save();
//   await course2.save();
//   await course3.save();

//   await enrollment1.save();
//   await enrollment2.save();
//   await enrollment3.save();
//   await enrollment4.save();
//   await enrollment5.save();
//   await enrollment6.save();

//   let result1 = await Enrollment.find({ student: student1._id }).populate(
//     "course",
//   );
//   let result2 = await Enrollment.find({ course: course1._id }).populate(
//     "student",
//   );
  let result3 = await Enrollment.find().populate("student").populate("course");
//   console.log(result1);
//   console.log(result2);
  console.log(result3);
};

addEnrollment()

