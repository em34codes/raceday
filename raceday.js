// Task #1: Assigns race numbers @ random between 0 & 1000
let raceNumber = Math.floor(Math.random() * 1000);

//Task #2: create variable to indicate if runner registered early. Has a Boolean value (t/f).
const registeredEarly = true;

//Task #3: create a variable for the runner's age & set it to equal a number
const age = 18;

//Task #4: create a control flow statement that checks if the runner is an adult (18+ yo) AND registered early. If yes, add 1000 to their raceNumber.
if (registeredEarly && age >= 18) {
  raceNumber += 1000;
} 

//Task #5: create a control flow  statement that checks the runner's age and registration time to determine race time. If runner is 18+ yo & early registrant console will print raceNumber.
if (registeredEarly && age >= 18) {
  console.log(`Runner ${raceNumber} will begin the race at 9:30 AM.`);
}

//Task #6: statements for late adult runners starting race at 11 AM
else if (!registeredEarly && age >=18) {
  console.log(`Runner ${raceNumber} will begin the race at 11 AM.`)
}

//Task #7: statements for youth registrants starting race at 12:30 PM regardless of registration status
else if(age < 18) {
  console.log(`Runner ${raceNumber} will begin the race at 12:30 PM.`)
}

//Task #8: statements for runners that are exactly 18yo
else if(age = 18) {
  console.log(`Runner ${raceNumber} will begin the race at 9:30 AM.`)
}