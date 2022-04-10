//process.stdin
//process.stdout.write("Hello ")
//process.stdout.write("world \n\n\n");

//declare question function array
const questions = [
    "What is your name?",
    "What would you rather be doing?",
    "what is your prefferred programming language?"
];
// ask function to ask question
const ask = (i=0) => {
    process.stdout.write(`\n\n\n ${questions[i]}`);
    // prompt user for answer
    process.stdout.write(` > `);
}
//invoke function
ask();

const answers = [];
process.stdin.on('data', data => {
  answers.push(data.toString().trim());

  if (answers.length <questions.length) {
      ask(answers.length);
  } else {
      process.exit();
  }
});

process.on('exit', () => {
    const [name, activity, lang] = answers;
    // template string honors white space
    console.log(`
    Thank you for your answers.

    Go ${activity} ${name} you can write ${lang} code later!!
    `)
})