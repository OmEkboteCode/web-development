export default function CourseList({ courses }) {
  return (
    <div>
      {courses.map((course) => {
        return  (
          <div key={course.id}>
            <h2>{course.name}</h2>
            <p>Instructor: {course.instructor}</p>
            <p>Duration: {course.duration}</p>
          </div>
        );
      })}
    </div>
  );
}
