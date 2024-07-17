const students = [
    { name: "Ram", scores: [80, 70, 60] },
    { name: "Mohan", scores: [80, 70, 90] },
    { name: "Sai", scores: [60, 70, 80] },
    { name: "Hemang", scores: [90, 90, 80, 80] },
];
const output = students.map(student => {
    const averageScore = student.scores.reduce((acc, score) => acc + score, 0) / student.scores.length;
    return { name: student.name, average: averageScore };
});
console.log(output)

//Output
/* [{
  average: 70,
  name: "Ram"
}, {
  average: 80,
  name: "Mohan"
}, {
  average: 70,
  name: "Sai"
}, {
  average: 85,
  name: "Hemang"
}] */