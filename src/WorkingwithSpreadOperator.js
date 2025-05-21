// function getStudents(classroom) {
//   const { hasTeachingAssistant, class: classList } = classroom;

//   // If there's a teaching assistant, students start from index 2
//   // Otherwise, they start from index 1
//   const studentStartIndex = hasTeachingAssistant ? 2 : 1;

//   // Extract and return only the students
//   return classList.slice(studentStartIndex);
// }

// const classroom1 = {
//   hasTeachingAssistant: true,
//   class: ["Mr. Smith", "Ms. Johnson", "Alice", "Bob", "Charlie"]
// };

// const classroom2 = {
//   hasTeachingAssistant: false,
//   class: ["Mr. Lee", "Dave", "Eve"]
// };

// console.log(getStudents(classroom1)); // ["Alice", "Bob", "Charlie"]
// console.log(getStudents(classroom2)); // ["Dave", "Eve"]
