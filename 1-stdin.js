const { spawn } = require('node:child_process');

const cmd = spawn('echo', ['Welcome to GVtech School, what is your name?']);
process.stdin.setEncoding('utf8');

cmd.stdout.on('data', (data) => {
  process.stdout.write(data);
  process.stdin.on('readable', () => {
    const chunk = process.stdin.read();
    if (chunk != null) {
      process.stdout.write(`Your name is: ${chunk}`);
    }
  });
  process.stdin.on('end', () => {
    process.stdout.write('This important software is now closing \n');
  });
});
