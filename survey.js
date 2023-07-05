const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let inputString = "";
rl.question("What's your name? Nicknames are also acceptable :) ", (answer) => {
  inputString += `Your name is: ${answer}.  `;
  rl.question("What's an activity you like doing?", (answer) => {
    inputString += `You like to do ${answer} `;
    rl.question("What do you listen to while doing that?", (answer) => {
      inputString += `while listening to ${answer}.  `;
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)", 
      (answer) => {
        inputString += `Your favorite meal is ${answer} `;
        rl.question("What's your favourite thing to eat for that meal?", (answer) => {
          inputString += `and you like to eat ${answer} for that meal.  `;
          rl.question("Which sport is your absolute favourite?", (answer) => {
            inputString += `Your favorite absolute sport is ${answer} `;
            rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (answer) => {
              inputString += `and your superpower is ${answer} - that is what you are amazing at!`;
              console.log(`Thank you for your valuable feedback: ${inputString}`);
              rl.close();
            })
          })
        })
      })
    })
  })
});