console.log("--------------1---------------\n\n");

const bar = () => console.log('bar')

const baz = () => console.log('baz')

const foo = () => {
    console.log('foo')
    bar()
    baz()
}

foo()

console.log("--------------2---------------\n\n");

const bar2 = () => console.log('bar2')

const baz2 = () => console.log('baz2')

const foo2 = () => {
    console.log('foo2')
    setTimeout(bar2, 0)
    new Promise((resolve, reject) => 
    resolve('should be right after baz2, before bar2')
    ).then(resolve => console.log(resolve))
    baz2()
}

foo2()