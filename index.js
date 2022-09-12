//these are third party libraries

//dotenv loads your environment variables into process.env even the .env file
require("dotenv").config();

//node-notifier is a node module that allows you to send notifications to your desktop
const notifier = require('node-notifier');

//this is standard library of nodejs itself that allows you to interact with the file system
const fs = require('fs');

//reading the environment variable from the .env file
const TIMER_IN_SECONDS = process.env.TIMER_IN_SECONDS || 60;

const execute = () => {
    //read the message.txt file
    const message = fs.readFileSync('message.txt', 'utf8');
    //send a notification to the desktop
    notifier.notify({
        title: 'Notification',
        message: message,
        sound: true,
        wait: true
    });
}

//execute the function in the interval of TIMER_IN_SECONDS
setInterval(execute, TIMER_IN_SECONDS * 1000);
