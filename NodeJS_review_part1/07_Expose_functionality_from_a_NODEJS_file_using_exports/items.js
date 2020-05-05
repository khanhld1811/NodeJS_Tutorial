/**
 * module.exports: Hiển thị  đối tượng đầu tiên mà nó trỏ tới\
 * exports: Hiển thị các properties của các đối tượng mà nó trỏ tới
 */

console.log("--------------1---------------\n\n");
// Way 1 : Export just that object
// const car1  = {
//     brand: 'Ford',
//     model: 'Fiesta'
// }

// module.exports = car1


console.log("--------------2---------------\n\n");
//Way 2 : Export multiple objects, functions or data
 
// const car2  = {
//     brand: 'Ford',
//     model: 'Fiesta'
// }

// exports.car2 = car2

console.log("--------------3---------------\n\n");

//Way 3: Export directly
exports.car3 = {
    brand: 'Ford',
    model: 'Fiesta'
}

