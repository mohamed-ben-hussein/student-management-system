function calculateAverage(student) {
    return ((student.grades.javascript + student.grades.git + student.grades.problemSolving) / 3)
}

function getStudentStatus(student) {
    const Average = calculateAverage(student)
    if (Average >= 60) {
        return "Pass"
    }
    else {
        return "Fail"
    }

}

function getTopStudent(students) {
    if (students.length === 0) {
        return null
    }
    let mustAverage = calculateAverage(students[0])
    let student = students[0]
    for (let i = 1; i < students.length; i++) {
        const currentAverage = calculateAverage(students[i]);

        if (mustAverage < currentAverage) {
            mustAverage = currentAverage
            student = students[i]
        }
    }
    return student
}


function findStudentById(students, id) {
    if (students.length === 0) {
        return null
    }
    for (let i = 0; i < students.length; i++) {
        const currentStudentId = students[i].id
        const currentStudent = students[i]
        if (currentStudentId === id) {
            return currentStudent
        }
    }
    return null
}

function getStudentNames(students) {
    const namesStudents = students.map(student => student.name)
    return namesStudents
}

function getPassingStudents(students) {
    const filterStudents = students.filter(students => calculateAverage(students) >= 60)
    return filterStudents
}

export {
    calculateAverage,
    getStudentStatus,
    getTopStudent,
    findStudentById,
    getStudentNames,
    getPassingStudents
};