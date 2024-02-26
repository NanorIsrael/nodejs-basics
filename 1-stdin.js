const {spawn} = require('node:child_process')
const cmd = spawn('echo', ['Welcome to Holberton School, what is your name?'])
process.stdin.setEncoding('utf8');

cmd.stdout.on('data', function(data) {
	process.stdout.write(data)
	process.stdin.on('readable', function() {
		let chunk = process.stdin.read()
		if (chunk != null) {
			process.stdout.write('Your name is: ' + chunk)
		}
	})
	process.stdin.on('end', function() {
		process.stdout.write("This important software is now closing \n")
	})
})
