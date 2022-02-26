const inquirer = require('inquirer');
const math = require('./math');
console.log('Hi, welcome to Node Calculator');


const questions = [
  {
    type: 'input',
    name: 'op1',
    message: "Type the first number:",
    validate(value) {
      const valid = !isNaN(parseFloat(value));
      return valid || 'Please enter a number';
    },
    //filter: Number,
  },
  {
    type: 'expand',
    name: 'operation',
    message: 'Type the operation:',
    choices: [
      {
        key: '+',
        name: 'Addition',
        value: '+',
      },
      {
        key: '-',
        name: 'Substraction',
        value: '-',
      },
      {
        key: '*',
        name: 'Multiplication',
        value: '*',
      },
      {
        key: '/',
        name: 'Division',
        value: '/',
      },
      {
        key: '^',
        name: 'Exponentiation',
        value: '^',
      },
    ],
  },
  {
    type: 'input',
    name: 'op2',
    message: "Type the second number:",
    validate(value) {
      const valid = !isNaN(parseFloat(value));
      return valid || 'Please enter a number';
    },
    //filter: Number,
  },
];

const questionsWithANS = [...questions.slice(1)];

const getOperation = async () => {
    
    let ANS = null;

    let again = true;

    while (again) {
        again = false;
        if (!ANS) {
            let {op1, operation, op2} = await inquirer.prompt(questions);
            console.log('Answers', op1,op2,operation);
            ANS = executeOperation(operation, op1, op2);
        } else {
            console.log('ANS', ANS);
            let {op2, operation} = await inquirer.prompt(questionsWithANS);
            ANS = executeOperation(operation, ANS, op2);
        }
    
        let {anotherOne} = await inquirer.prompt([
            {
                type:'confirm',
                name:'anotherOne',
                message:'Another Operation?',
                default:false,
            }
        ]);
    
        again = anotherOne;
    
        if (again) {
            let {useANS} = await inquirer.prompt([
                {
                    type:'confirm',
                    name:'useANS',
                    message: 'Use previous answer?',
                }            
            ]);
    
            if (!useANS) ANS = null;
    
        } else {
            console.log('Goodbye!');
            return;
        }
    }
    

}

const executeOperation = (type, op1, op2) => {
    let operand1 = parseFloat(op1);
    let operand2 = parseFloat(op2);

    let answer;
    if (type == '+') {
        answer = math.sum(operand1, operand2)
    }
    else if (type == '-') {
        answer = math.substract(operand1, operand2)
    }
    else if (type == '/') {
        answer = math.division(operand1, operand2)
    }
    else if (type == '*') {
        answer = math.product(operand1, operand2)
    }
    
    console.log(`${operand1} ${type} ${operand2} = ${answer}`);
    return answer;
}

getOperation();