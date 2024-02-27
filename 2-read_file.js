const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    const students = lines.map((line) => line.split(',').map((student) => student.trim()));

    const fields = {};
    students.forEach((student) => {
      const [firstName, , , field] = student;

      if (fields[field]) {
        fields[field].push(firstName);
      } else {
        fields[field] = [firstName];
      }
    });
    const NUMBER_OF_STUDENTS = students.length - 1;
    console.log(`Number of students: ${NUMBER_OF_STUDENTS}`);

    for (const field in fields) {
      if (field !== 'field') {
        console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}
module.exports = countStudents;
