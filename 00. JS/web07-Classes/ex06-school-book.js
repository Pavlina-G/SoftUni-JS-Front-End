class Student {
    constructor(name, grade, score) {
        this.name = name;
        this.grade = grade;
        this.score = score;
    }
}

function schoolBook(listOfStudents) {
    let register = [];
    let result = {}

    for (const line of listOfStudents) {
        [studentInfo, studentGrade, studentScore] = line.split(', ');
        let studentName = studentInfo.split(': ')[1]
        let grade = Number(studentGrade.split(': ')[1])
        let averageScore = Number(studentScore.split(': ')[1])
        if (averageScore >= 3) {
            grade += 1;
            register.push(new Student(studentName, grade, averageScore));
        }

    }
    register.sort((a, b) => a.grade - b.grade).forEach(s => {
        if (s.grade in result) {
            result[s.grade].push(s)
        } else {
            result[s.grade] = [s]
        }
    });
    for (let grade in result) {
        let allLastGrade = 0;
        let students = [];
        console.log(`${grade} Grade`);

        for (let s of result[grade]) {
            students.push(s.name);
            allLastGrade += s.score;
        }

        console.log(`List of students: ${students.join(', ')}`);
        console.log(`Average annual score from last year: ${(allLastGrade / (result[grade].length)).toFixed(2)}`);
        console.log('===');
    }
}

// schoolBook([
//     "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
//     "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
//     "Student name: George, Grade: 8, Graduated with an average score: 2.83",
//     "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
//     "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
//     "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
//     "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
//     "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
//     "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
//     "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
//     "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
//     "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
// ]
// );

schoolBook([
    'Student name: George, Grade: 5, Graduated with an average score: 2.75',
    'Student name: Alex, Grade: 9, Graduated with an average score: 3.66',
    'Student name: Peter, Grade: 8, Graduated with an average score: 2.83',
    'Student name: Boby, Grade: 5, Graduated with an average score: 4.20',
    'Student name: John, Grade: 9, Graduated with an average score: 2.90',
    'Student name: Steven, Grade: 2, Graduated with an average score: 4.90',
    'Student name: Darsy, Grade: 1, Graduated with an average score: 5.15'
]
);

