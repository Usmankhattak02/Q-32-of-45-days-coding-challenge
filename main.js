"use strict";
//Question no  32. Checking Usernames:
//  Do the following to create a program that simulates how websites
// ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new
// usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has,
// print a message that the person will need to enter a new username. If a username has not been
// used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be
// accepted.
let current_users = ["Alis", "paras", "julia"];
let new_users = ["aliyan", "paras", "elis", "parkar", "Alis"];
new_users.forEach(newUser => {
    if (current_users.some(current_users => current_users.toLowerCase() === newUser.toLowerCase())) {
        console.log(`${newUser} will need to enter a new user name `);
    }
    else {
        console.log(`${newUser} is available`);
    }
});
let current_name = ["Ahmed", "Aman", "Awais", "islam"];
let new_name = ["zain", "waqar", "Ahmed", "Awais", "Islam", "usman"];
new_name.forEach(newName => {
    if (current_name.some(current_name => (current_name.toLowerCase() === newName.toLowerCase()))) {
        console.log(`${newName} koi or name put krna chahiye apko`);
    }
    else {
        console.log(`${newName} is main mojjod hai`);
    }
});
