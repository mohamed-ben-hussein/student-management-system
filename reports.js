import {
    calculateAverage,
    getStudentStatus,
    getTopStudent
} from "./functions.js"
import { students } from "./data.js"

function generateStudentReport(student) {
    const name = student.name
    const average_grade = calculateAverage(student)
    const status = getStudentStatus(student)
    return {
        name,
        average_grade,
        status
    }
}

function generateAllStudentsReports(students) {
    const allStudents = students.map(student => generateStudentReport(student))
    return allStudents
}

function generateTopStudentReport(students) {
    if (students.length === 0) {
        return null
    }
    const topStudent = getTopStudent(students)
    return generateStudentReport(topStudent)
}

export { generateStudentReport, generateAllStudentsReports, generateTopStudentReport };