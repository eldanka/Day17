const _ = require('lodash');

var users = [
    {
        fistName: "John",
        lastName: "Doe",
        age: 24,
        gender: "male"
    },
    {
        fistName: "Jane",
        lastName: "Doe",
        age: 5,
        gender: "female"
    },
    {
        fistName: "Jim",
        lastName: "Carrey",
        age: 40,
        gender: "male"
    },
    {
        fistName: "Kate",
        lastName: "Winslet",
        age: 40,
        gender: "female"
    }
];

function getUsers() {
    var output = "";
    for(var i = 0; i < users.length; i++) {
        output += `${users[i].fistName} ${users[i].lastName} is ${users[i].age}, ${users[i].gender}\n`;
    }  
    console.log(output);
    return output;
}

function findUser(lastName, gender) {
    try {
        var user = _.find(users,(lastName, gender) => {
            var iFindUser = `${fistName} ${lastName} is ${age}, ${gender}\n`;
            console.log(iFindUser);
            return iFindUser;
        });
    } catch (error) {
        console.log("Cannot read property '/fistName'/ of undefined");
    }
}

getUsers();
findUser("Doe", "male");

module.exports = findUser;