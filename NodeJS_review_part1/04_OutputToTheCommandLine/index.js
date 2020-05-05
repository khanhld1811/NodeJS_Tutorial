/**
 * module console
 */
console.log("--------------1---------------\n\n");
const x = 'x'
const y = 'y'
console.log(x, y)

console.log("--------------2---------------\n\n");
/**
 * %s chuỗi
 * %d số
 * %i phần nguyên
 * %o object
 */
console.log('My %s has %d years', 'cat',2)
console.log('%o',Number)

console.log("--------------3---------------\n\n");
/**
 * Clear console
 */

console.log("--------------4---------------\n\n");
/**
 * console.count()
 */

const a = 1
const b = 2
const c = 3
console.count(
  'The value of x is ' + a + 
  ' and has been checked .. how many times?'
)
console.count(
  'The value of x is ' + a + 
  ' and has been checked .. how many times?'
)
console.count(
  'The value of y is ' + b + 
  ' and has been checked .. how many times?'
)


const oranges = ['orange', 'orange']
const apples = ['just one apple']
oranges.forEach(fruit => {
  console.count(fruit)
})
apples.forEach(fruit => {
  console.count(fruit)
})


console.log("--------------5---------------\n\n");
/**
 * Print the stack trace
 */
const function2  = () => console.trace()
const function1 = () => function2()
function1()

console.log("--------------6---------------\n\n");
/**
 * Calculate the time spent
 */
const doSomething = () => console.log('test')
const measureDoingSomehting = () => {
    console.time('doSomething()')
    //do something, and measure the time it takes
    doSomething()
    console.timeEnd('doSomething()')
}
measureDoingSomehting()


console.log("--------------7---------------\n\n");
/**
 * console.error
 */
const errorEx = () => {
   console.error('khanh');
}
errorEx()

console.log("--------------8---------------\n\n");

/**
 * Color the output
 */
console.log('\x1b[33m%s\x1b[0m','hi!')

// use library chalk
const chalk = require('chalk')
console.log(chalk.red('hi!'));// output string color red

console.clear()

console.log("--------------9---------------\n\n");
/**
 * Create a progress bar
 */
const ProgressBar = require('progress')
const bar = new ProgressBar(':bar', {total: 100})
const timer = setInterval(() => {
  bar.tick()
  if(bar.complete) {
    clearInterval(timer)
  }
},100)

