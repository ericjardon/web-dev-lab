const inquirer = require('inquirer');
const math = require('./math');

const receiver = () => {
    inquirer.prompt([
        {type: 'input', name:'name', message: 'Your Name'}
    ]).then((answer => {
        console.log('Your answer is', answer);
    }))
}

receiver();