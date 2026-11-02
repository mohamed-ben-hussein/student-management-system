import {
    generateStudentReport,
    generateAllStudentsReports,
    generateTopStudentReport
} from "./reports.js";

import {
    students
} from "./data.js";

import {
    findStudentById,
    getStudentNames,
    getPassingStudents
} from "./functions.js";

// 1. Generate a report for all students
const allStudentsReports = generateAllStudentsReports(students);

console.log("\n========== ALL STUDENTS REPORTS ==========");
console.log(allStudentsReports);

// 2. Generate a report for a specific student
const student = findStudentById(students, "01");

console.log("\n========== INDIVIDUAL STUDENT REPORT ==========");
if (student !== null) {
    console.log(generateStudentReport(student));
} else {
    console.log("Student not found.");
}

// 3. Generate a report for the top student
console.log("\n========== TOP STUDENT REPORT ==========");
const topStudentReport = generateTopStudentReport(students);

console.log(topStudentReport ?? "No students available.");

// 4. Display all student names
console.log("\n========== STUDENT NAMES ==========");
console.log(getStudentNames(students));

// 5. Display all passing students
console.log("\n========== PASSING STUDENTS ==========");
console.log(getPassingStudents(students));

// 6. Convert reports to JSON
console.log("\n========== JSON REPORTS ==========");
const reportsJSON = JSON.stringify(allStudentsReports, null, 2);
console.log(reportsJSON);

// 7. Parse JSON back into JavaScript objects
console.log("\n========== PARSED JSON REPORTS ==========");
const parsedReports = JSON.parse(reportsJSON);
console.log(parsedReports);
