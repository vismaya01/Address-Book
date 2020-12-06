var prompt = require('prompt-sync')();
const NAME_REGEX_PATTERN = RegExp('^[A-Z]{1}[a-z]{2,}$');
const ADDRESS_REGEX_PATTERN = RegExp('^[a-zA-z]{3,}$');
const PINCODE_REGEX_PATTERN = RegExp('^[0-9]{6}$');
const PHONE_NUMBER_PATTERN = RegExp('^[9][1][6-9]{1}[0-9]{9}$'); 
const EMAIL_REGEX_PATTERN=RegExp('^[a-zA-Z0-9]+([._+-][0-9a-zA-Z]+)*@[a-zA-Z0-9]+.[a-zA-Z]{2,4}([.][a-zA-Z]{2,4})?$');
let contactArray = new Array();

class Contact {

    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNumber;
    email;

    constructor(firstName,lastName,address,city,state,zip,phoneNumber,email){
            if(!NAME_REGEX_PATTERN.test(firstName)) throw 'Please enter valid firstname.'
            { 
                this.firstName = firstName;
            }
            if(!NAME_REGEX_PATTERN.test(lastName)) throw 'Please enter valid lastname.'
            {
                this.lastName = lastName;
            }
            if(!ADDRESS_REGEX_PATTERN.test(address))throw 'Please enter valid address.'
            {
                this.address = address;
            }
            if(!ADDRESS_REGEX_PATTERN.test(city)) throw 'Please enter valid city.'
            {
                this.city = city;
            }
            if(!ADDRESS_REGEX_PATTERN.test(state)) throw 'Please enter valid state.'
            {
                this.state = state;
            }
            if(!PINCODE_REGEX_PATTERN.test(zip)) throw 'Please enter valid pincode.'
            {
                this.zip = zip;
            }
            if(!PHONE_NUMBER_PATTERN.test(phoneNumber)) throw 'Please enter valid phone number.'
            {
                this.phoneNumber = phoneNumber;
            }
            if(!EMAIL_REGEX_PATTERN.test(email)) throw 'Please enter valid email ID.'
            {
                this.email = email;
            }
        }

    toString() {
        return "First name: " + this.firstName + "\nLast name: " + this.lastName + "\nAddress: " + this.address + "\nCity: " +
         this.city + "\nState: " + this.state + "\nZip: " + this.zip + "\nPhone number: " + this.phoneNumber + "\nEmail: " + this.email;
    }
}

function addContact(){
    let firstName = prompt("Enter Firstname: ");
    let lastName = prompt("Enter Lastname: ");
    if(contactArray.find((contact)=>(contact.firstName+" "+contact.lastName)==(FirstName+" "+LastName))){   
        console.log("Name is already present in addressbook.");
        return;
    }
    let address = prompt("Enter Address: ");
    let city = prompt("Enter City name: ");
    let state = prompt("Enter State name: ");
    let zip = prompt("Enter pincode: ");
    let phoneNumber = prompt("Enter Phone number: ");
    let emailId = prompt("Enter email id: ");
    try{
        let contact = new Contact(firstName,lastName,address,city,state,zip,phoneNumber,emailId);
        contactArray.push(contact);
        console.log("Contact is added. ");
    }catch(Exception){
        console.log(Exception);
    }
}
  
let choice = 0;
do{
    console.log("Press: \n1) Add Contact  \n2) View Contact \n0)Exit:");
    choice = Number(prompt("Enter your choice: "));
    if(choice == 1){
        addContact();
    }
    if(choice == 2){
        for(let i = 0; i < contactArray.length; i++)
            console.log(contactArray[i].toString(),"\n");
    }
    if(choice == 4){
        deletContact();
    }
}while(choice != 0);
