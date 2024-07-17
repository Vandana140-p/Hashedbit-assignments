const studentsData = {
    student1: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 },
    student2: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 },
    student3: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 }
};

const res = Object.keys(studentsData).map(student => {
    const scores = Object.values(studentsData[student]);
    const average = scores.reduce((acc, score) => acc + score, 0) / scores.length;
    return { [student]: { average: average } };
});

console.log(res);