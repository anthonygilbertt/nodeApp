// function sayHello(name){
//     console.log('Hello ' + name);
// }
// sayHello('Anthony');

/* TOPICS: 
1) OS
2) FS
3) http
4) events
*/

//console.log(window);     this will not work. however console.log() IS A GLOBAL OBJECT
//setTimeout();       used to call a function after a delay:   can be used on the client, in the browser or inside of node.
//clearTimeout();

//setInterval();   used to repeatitively call a function after a given delay
//clearInterval();  used to STOP function from being called repeatitively 

//in node we do not have the 'window' object, instead, we have 'global'
// When we define a function, it is added to the global scope and we use it via the 'window' object


//to load our module we use the 'require' function. which takes only 1 argument.
//which is the path of the module that we want to load
// const log = require('./logger');  //when creating a variable for the require method it's better to use const

// console.log(logger);

// logger.log('message');

//now that we are importing/requiring only one function, we can call it like this.
// log('message');


//NOW WE WILL LOOK AT THE 'PATH' MODULE
/*
const path = require('path'); //we use require(); to load the module

var pathObj = path.parse(__filename);
console.log(pathObj);
*/

//OS Module
/*
const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

// console.log('Total Memory: ' + totalMemory);
// console.log('Free Memory: ' + freeMemory);

//or we can use ES6
console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);
*/

//FS Module
/*
const fs = require('fs');
// const files = fs.readdirSync('./');
// console.log(files);

fs.readdir('./', (err, files) => {
    if (err) console.log('Error', err);
    else console.log('Result', files);
});
*/
//------------------------------------------------------------------------------
//An 'Event'  reads this request and returns a response

const EventEmitter = require('events'); // notice that the naming convention is in caps:
// this means it's a class(container for props & functions called 'methods')
// First we need to create an instance of this class


//Instead of using an instance of EventEmitter, we will use an instance of a custom class defined
//in this case our custom class is 'Logger' that extents EventEmitter();
const Logger = require('./logger');
const logger = new Logger();

logger.on('messageLogged', (e) => {  //our event listener can also be passed our event argument
    console.log('Listener called',e);   //with this technique we can pass data to our event listener
});
logger.log('message');
//------------------------------------------------------------------------------
//HTTP Module ->  we can use this to build a web server on a given PORT
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello, world');
        res.end();
    }
    //if we want to build a backend service for web & mobile apps
    //we need to handle various routs
    //for example, we can have another if() statement
    if (req.url === '/api/courses'){ //here we can res with a list of courses from our database
        res.write(JSON.stringify(['math', 'english', 'science']));
        res.end();
    }
});  //this server is an EventEmitter


// server.on('connection', (server)=> {
//     console.log('new connection');
// });
server.listen(3009);
console.log(`Listening on port 3009...`);