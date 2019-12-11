/*
 *Spec code that checks if a password entered meets the requirements of a strong password
 *Wilfred Ratala
 *Version 1
 * 8 November 2019
 */


var { passwordIsValid, passwordIsOk } = require("../src/passCheck.js")

var password = "Wilfred#1";

describe("Password is valid", () => {
    //Check if the password input is not empty
    it("Should not be empty", () => {
        expect(password).not.toBe('');
    });

    //Check if the password input is has at least one lowercase letter
    it(" Should have at least one lowercase letter", () => {
        expect(password).toMatch(/[a-z]/);
    });

    //Check if the password input is has at least one uppercase letter
    it(" Should have at least one uppercase letter", () => {
            expect(password).toMatch(/[A-Z]/);
        })
        //Check if the password input is has at least one digit
    it(" Should have at least one digit", () => {
        expect(password).toMatch(/[0-9]/);
    });

    //Check if the password input is has at least special character
    it("Should have at least one special character", () => {
        expect(password).toMatch(/[!@#-+$%^&]/);
    });


});


describe("Password is ok", () => {

    //Check if the password input is not empty
    it("Should not be empty", () => {
        expect(password).not.toBe('');
    });

    //Check if the password input is has at least one lowercase letter
    it("Should have at least one lowercase letter", () => {
        expect(password).toMatch(/[a-z]/);
    });

    //Check if the password input is has at least one uppercase letter    
    it(" should have at least one uppercase letter", () => {
        expect(password).toMatch(/[A-Z]/);
    });

});