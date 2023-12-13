const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(students) {
  // Start coding here
  let sumStudentScore = 0;
  for(let i = 0 ; i < students.length; i++){
    sumStudentScore = sumStudentScore + students[i].score;
  }
  return sumStudentScore / students.length;
}

let updateStudent = getAverageStudentScore(students); // Output: 87.5
console.log(updateStudent)