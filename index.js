const open = require('open');
const schedule = require('node-schedule');
const date = require('date.js');
const chalk = require('chalk');

// the youtube video URL will be stored in myArgs as an array, the 1st two elements will not be stored because they are not needed
const myArgs = process.argv.slice(2);

// if cmd line args are entered incorrect the following message will be printed in color bright cyanand the program will be stopped as process.exit(1) is ran
if (myArgs.length !== 2) {
  console.log(chalk.cyanBright`Enter your youtube URL then with a space in between enter the time with quotes around it like so: https://www.youtube.com/watch?v=V-_O7nl0Ii0 "monday at 1:00am"`);
  process.exit(1);
} 
// URL given by the user is stored here
const url = myArgs[0];
// time given by the user is stored here
const time = myArgs[1];

const openAtTime = async (url, time) => {
  const job = schedule.scheduleJob(date(time), async function() {
    await open(url);
}); 
}

(async () => {
  try {
  await openAtTime(url, time);
  } catch(err) {
    console.log(err);
  }
})();
