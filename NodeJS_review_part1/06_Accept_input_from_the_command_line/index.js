
console.log("--------------1---------------\n\n");
/**
 * CLI program interactive
 */
const readline = require('readline').createInterface({
    input: process.stdin,
    outputt: process.stdout
})

readline.question(`What's your name?`,name => {
    console.log(`Hi ${name}!`)
    readline.close()
})

console.clear()
console.log("--------------2---------------\n\n");
/**
 * CLI program interactive
 */
const inquirer = require('inquirer')

var questions = [
    {
        type:'input',
        name:'name',
        message: "What's your name?"
    }
]

inquirer.prompt(questions).then(answers => {
    console.log(`Hi ${answers['name']}`)
})