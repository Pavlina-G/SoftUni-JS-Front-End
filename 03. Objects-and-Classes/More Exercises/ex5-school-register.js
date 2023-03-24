function schoolRegister(listOfStudents) {
    let register = {};
    for (const line of listOfStudents) {
        [student, grade, averageScore] = line.split(', ');
        let studentGrade = Number(getStudentValue(grade));
        if (studentGrade in register) {
            register[studentGrade].push({name: getStudentValue(student), score: Number(getStudentValue(averageScore))});
        } else {
            register[studentGrade] = [{name: getStudentValue(student), score: Number(getStudentValue(averageScore))}];
        }

    }


    nextGrade = (grade) => {
        return grade += 1;
    }

    let newGradeRegister = {};


    for (const key in register) {
        newGradeRegister[Number(key) + 1] = register[key].filter(student => student.score >= 3);
    }


    for (const grade in newGradeRegister) {
        if (newGradeRegister[grade].length > 0) {
            let averageGradeScore = 0;
            let count = 0;
            console.log(`${grade} Grade`);

            let students = [];
            newGradeRegister[grade].forEach((s) => {
                students.push(s.name);
                averageGradeScore += s.score;
                count += 1;
            });

            console.log(`List of students: ${students.join(', ')}`);
            console.log(`Average annual score from last year: ${(averageGradeScore / count).toFixed(2)}`);
            console.log();

            averageGradeScore = 0;
            count = 0;
        }

    }

    function goToNextGrade(score) {
        if (score >= 3) {
            return true;
        }
    }

    function getStudentValue(line) {
        return line.split(': ')[1];
    }
}

// schoolRegister([
//         "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
//         "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
//         "Student name: George, Grade: 8, Graduated with an average score: 2.83",
//         "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
//         "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
//         "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
//         "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
//         "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
//         "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
//         "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
//         "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
//         "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
//     ]
// )

schoolRegister(
    [
        'Student name: George, Grade: 5, Graduated with an average score: 2.75',
        'Student name: Alex, Grade: 9, Graduated with an average score: 3.66',
        'Student name: Peter, Grade: 8, Graduated with an average score: 2.83',
        'Student name: Boby, Grade: 5, Graduated with an average score: 4.20',
        'Student name: John, Grade: 9, Graduated with an average score: 2.90',
        'Student name: Steven, Grade: 2, Graduated with an average score: 4.90',
        'Student name: Darsy, Grade: 1, Graduated with an average score: 5.15'
    ]
)