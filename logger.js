//we will log messages
var url = 'http://mylogger.io/log';

const EventEmitter = require('events');

//we want to create a class that has the additional method 'log'
class Logger extends EventEmitter{

    log(message) {
        //send an HTTP request
        console.log(message);

        //The argument that we are passing is the name of the event
        this.emit('messageLogged', { id: 1, url: 'http://...' });
        //this is used to "raise" and event(Signal that an event has happened)
        //nothing will spit out here because we have not created an event listener
    }
}

//we are adding a 'method' called log and adding it to the exports object
// module.exports.log = log;  

//we can also change the name that is being exported to the outside.

//in the real word, a single module may have several variables and functions

//in this example we don't need to export the object because we are only using a single method/property
//so we can instead use this...


/*now instead of exporting the log function like this:
     module.exports = log;
we want to export the Logger class, like this:  */
module.exports = Logger;
