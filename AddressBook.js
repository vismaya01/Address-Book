var prompt = require('prompt-sync')();
const NAME_REGEX_PATTERN = RegExp('^[A-Z]{1}[a-z]{2,}$');
const ADDRESS_REGEX_PATTERN = RegExp('^[a-zA-z]{3,}$');
const PINCODE_REGEX_PATTERN = RegExp('^[0-9]{6}$');
const PHONE_NUMBER_PATTERN = RegExp('^[9][1][6-9]{1}[0-9]{9}$'); 
const EMAIL_REGEX_PATTERN=RegExp('^[a-zA-Z0-9]+([._+-][0-9a-zA-Z]+)*@[a-zA-Z0-9]+.[a-zA-Z]{2,4}([.][a-zA-Z]{2,4})?$');
class Contact {

    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNumber;
    email;

    get firstName() {
        return this.firstName;
    }
    set firstName(value) {
        this.firstName = value;
    }

    get lastName() {
        return this.lastName;
    }
    set lastName(value) {
        this.lastName = value;
    }

    get address() {
        return this.address;
    }
    set address(value) {
        this.address = value;
    }

    get city() {
        return this.city;
    }
    set city(value) {
        this.city = value;
    }

    get state() {
        return this.state;
    }
    set state(value) {
        this.state = value;
    }

    get zip() {
        return this.zip;
    }
    set zip(value) {
        this.zip = value;
    }

    get phoneNumber() {
        return this.phoneNumber;
    }
    set phoneNumber(value) {
        this.phoneNumber = value;
    }

    get email() {
        return this.email;
    }
    set email(value) {
        this.email = value;
    }

    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }

    toString() {
        return "First name: " + this.firstName + "\nLast name: " + this.lastName + "\nAddress: " + this.address + "\nCity: " + this.city + "\nState: " + this.state + "\nZip: " + this.zip + "\nPhone number: " + this.phoneNumber + "\nEmail: " + this.email;
    }
}

function validateDetails(firstName, lastName, address, city, state, zip, phoneNumber, email) {
    if (!NAME_REGEX_PATTERN.test(firstName)) {
        console.log('Please enter first name in valid format.');
        return false;
    }
    if (!NAME_REGEX_PATTERN.test(lastName)) {
        console.log('Please enter last name in valid format.');
        return false;
    }
    if (!ADDRESS_REGEX_PATTERN.test(address)) {
        console.log('Please enter address in valid format.');
        return false;
    }
    if (!ADDRESS_REGEX_PATTERN.test(city)) {
        console.log('Please enter city in valid format.');
        return false;
    }
    if (!ADDRESS_REGEX_PATTERN.test(state)) {
        console.log('Please enter state in valid format.');
        return false;
    }

    if (!PINCODE_REGEX_PATTERN.test(zip)) {
        console.log('Please enter zip in valid format.');
        return false;
    }
    
    if (!PHONE_NUMBER_PATTERN.test(phoneNumber)) {
        console.log('Please enter phoneNumber in valid format.');
        return false;
    }
   
    if (!EMAIL_REGEX_PATTERN.test(email)) {
        console.log('Please enter email in valid format.');
        return false;
    }
    else {
        console.log('Given details are valid.');
        return true;
    }
}

var firstName = prompt("Please enter your first name : ");
var lastName = prompt("Please enter your last name : ");
var address = prompt("Please enter your address : ");
var city = prompt("Please enter your city : ");
var state = prompt("Please enter your state : ");
var zip = parseInt(prompt("Please enter your zipCode : "));
var phoneNumber = parseInt(prompt("Please enter your phoneNumber : "));
var email = prompt("Please enter your email : ");

let contactArray = new Array();
contactArray.push({
    nameObj: validateDetails(firstName, lastName, address, city, state, zip, phoneNumber, email),
    toString() {
        return "First name: " + this.firstName + " " + this.lastName + "\nAddress: " + this.address + "\nCity: " + this.city + "\nState: " + this.state + "\nZip: " + this.zip + "\nPhone number: " + this.phoneNumber + "\nEmail: " + this.email;
    },
});