// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
//module      - info about current module(file)
//process     - ingo about env where the program is being executed

// console.log(__dirname)
// setInterval(() => {
//     console.log('hello world')
// },1000)

//modules 
const john = 'john'
const peter = 'peter'

const sayHi = (name) => {
    console.log(`Hello there ${name}`)
}

sayHi('susan')
sayHi('john')
sayHi('peter')    