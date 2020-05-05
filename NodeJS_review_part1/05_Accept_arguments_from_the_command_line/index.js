/**
 * argv: mảng chứa các đối số gọi dòng lệnh
 * 1: path node command
 * 2: path đang thực thi 
 * 3: đối số nhập vào
 */
console.log("1--------------1---------------\n\n");
process.argv.forEach((val, index) => {
    console.log(`${index}: ${val}`)
})

console.log("--------------2---------------\n\n");
const args = process.argv.slice(2);
console.log(args)

console.log("--------------3---------------\n\n");
/**
 * minimist : thư viện giúp xử lý các đối số
 */
 const args2 = require('minimist')(process.argv.slice(2))
 console.log(args2['name'] )
 