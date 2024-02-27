const fs = require('fs/promises');


async function countStudents(path) {
	try {
		const data = await fs.readFile(path, 'utf8')
		if (!data) {
			throw new Error('Cannot load the database')
		}
		const lines = data.split('\n').filter(line => line.trim() !== '')
		const students = lines.map(line => line.split(',').map(student => student.trim()))

		let fields = {}
		students.forEach(student => {
			const [firstName, , , field] = student

			if (fields[field]) {
				fields[field].push(firstName);
			} else {
				fields[field] = [firstName];
			}
		});
		const NUMBER_OF_STUDENTS = students.length - 1;
		console.log(`Number of students: ${NUMBER_OF_STUDENTS}`)

		for (let field in fields) {
			if (field !== 'field'){
				console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`)
			}
		}

	} catch {
		throw new Error('Cannot load the database')
	}

}
module.exports = countStudents