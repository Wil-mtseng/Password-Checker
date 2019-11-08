/*
Code that checks if a password entered meets the requirements of a strong password
Wilfred Ratala
Version 1
8 November 2019
*/

function passwordIsValid(password) {

    try {
        //Throws an error if input is empty
        if (password == '') {
            throw ("password should exist");
        }

        //Throws an error if input is less than 8 characters
        if (password.length <= 8) {
            throw ("password should be more than 8 characters");
        }

        //Throws an error if input doesn't have lowercase characters 
        if (password.match(/[a-z]/) == null) {
            throw ("password should have lower case characters");
        }

        //Throws an error if input doesn't have uppercase characters
        if (password.match(/[A-Z]/) == null) {
            throw ("password should at least one uppercase characters");
        }

        //Throws an error if input doesn't least one digit 
        if (password.match(/[0-9]/) == null) {
            throw ("password should at least one digit");
        }

        //Throws an error if input doesn't least one special character
        if (password.match(/[!@#-+$%^&]/) == null) {
            throw ("password should have at least one special character");
        }

        //Prints the error message
    } catch (error) {
        console.log(error);
    }

};

function passwordIsOk(password) {

    //Prints the true if the password meets the requirements
    if (password !== '' && password.length > 8) {
        if ((password.match(/[a-z]/ !== null) || (password.match(/[A-Z]/) !== null) || (password.match(/[0-9]/) !== null) || (password.match(/[!@#-+$%^&]/) !== null))) {
            return true;
        }
    } else { return false; };
};

passwordIsValid('Wilfred#1');
console.log(passwordIsOk('Wilfred#2'));

module.exports = { passwordIsValid, passwordIsOk };