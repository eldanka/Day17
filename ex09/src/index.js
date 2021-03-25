const { find } = require('lodash');
const _ = require('lodash');

var users = [
    {
        id: 1,
        fistName: "John",
        lastName: "Doe",
        age: 24,
        gender: "male"
    },
    {
        id: 2,
        fistName: "Jane",
        lastName: "Doe",
        age: 5,
        gender: "female"
    },
    {
        id: 3,
        fistName: "Jim",
        lastName: "Carrey",
        age: 40,
        gender: "male"
    },
    {
        id: 4,
        fistName: "Kate",
        lastName: "Winslet",
        age: 40,
        gender: "female"
    }
];

function getUsers() {
    var output = "";
    for(var i = 0; i < users.length; i++) {
        output += `${users[i].id} - ${users[i].fistName} ${users[i].lastName} is ${users[i].age}, ${users[i].gender}\n`;
    }
    console.log(output);
    return output;
}

function findUserById(id) {
    try {
        var user = _.find(users,id);
        var iFindUserById = `${id} - ${fistName} ${lastName} is ${age}, ${gender}\n`;
        console.log(user);
    } catch (error) {
        console.log("Cannot read property '/id'/");
    }
    
}

getUsers();
findUserById(1);

module.exports = findUserById;