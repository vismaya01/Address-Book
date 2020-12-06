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
    if(contactArray.find((contact)=>(contact.firstName+" "+contact.lastName)==(firstName+" "+lastName))){   
        console.log("Given contact already present in addressbook.");
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

function editContact(firstName){
    let contact;
    for(let i = 0; i < contactArray.length; i++){
        if(contactArray[i].firstName === firstName)
            contact = contactArray[i];
        if(contact != null){
            let input = 1;
            while(input != 9){
                console.log("\nChoose to edit: \n1. First Name \n2. Last Name \n3. Address \n4. City \n5. State");
                console.log("6. Zipcode \n7. Phone Number \n8. Email \n9. View Edited Details & Exit");
                input = prompt("Enter Your Choice: ");
                input = parseInt(input);
                switch (input) {
                    case 1: let fname = prompt("Enter the firstname: ");
                            contact.firstName = fname;
                            break;
                    case 2: let lname = prompt("Enter the last Name: ");
                            contact.lastName = lname;
                            break;
                    case 3: let address_edit = prompt("Enter the address: ");
                            contact.address = address_edit;
                            break;
                    case 4: let city_edit = prompt("Enter the city: ");
                            contact.city = city_edit;
                            break;
                    case 5: let state_edit = prompt("Enter the state: ");
                            contact.state = state_edit;
                            break;
                    case 6: let zip_edit = prompt("Enter the pincode: ");
                            contact.zip = zip_edit;
                            break;
                    case 7: let phone_edit = prompt("Enter the phone number: ");
                            contact.phoneNumber = phone_edit;
                            break;
                    case 8: let mail_edit = prompt("Enter the email: ");
                            contact.email = mail_edit;
                            break;
                    case 9: console.log("\n",contact);
                            break;
                    default: console.log("Choose Correct Choice");
                    }
                }
            }
    }
}

let deletContact=()=>{
    if(contactArray.length==0){
        console.log("No contacts in the list");
    }   
    let name = prompt("Enter contact firstname you want to delete: ");
    let found = contactArray.find((contact)=>contact.firstName == name);
    if(found==undefined){
        console.log("No such contact in Addressbook.");
    }else{
        contactArray = contactArray.filter((contacts)=>contacts.firstName!=name);
        console.log("Contact is deleleted from Addressbook.")
    }
}

function searchByCityOrState(searchCityOrState, choice){
    let contacts = new Array();
    if(choice == 1){
        contacts = contactArray.filter(contact => contact.city === searchCityOrState)
    }
    if(choice == 2){
        contacts = contactArray.filter(contact => contact.state === searchCityOrState)
    }
    console.log("Contact: ",contacts);
}

function countByCityOrState(countCityOrState, choice){
    let contacts = new Array();
    if(choice == 1){
        console.log("Contacts in "+countCityOrState+" city are: ",contactArray.filter(contact => contact.city == countCityOrState).reduce(contact => contact + 1, 0));
    }
    if(choice == 2){
        console.log("Contacts in "+countCityOrState+" state are: ",contactArray.filter(contact => contact.state == countCityOrState).reduce(contact => contact + 1, 0));
    }
}

function sortContactByCity_State_Zip(inputToSort){
    if(inputToSort == 1){
        contactArray.sort(function(a, b) { return a.city.localeCompare(b.city)});
        for(let i = 0; i < contactArray.length; i++)
            console.log(contactArray[i].toString(),"\n");
    }
    if(inputToSort == 2){
        contactArray.sort(function(a, b) { return a.state.localeCompare(b.state)});
        for(let i = 0; i < contactArray.length; i++)
            console.log(contactArray[i].toString(),"\n");
    }
    if(inputToSort == 3){
        contactArray.sort(function(a, b) { return parseInt(a.zip) - parseInt(b.zip)});
        for(let i = 0; i < contactArray.length; i++)
            console.log(contactArray[i].toString(),"\n");
    }
}
  
let choice = 0;
do{
    console.log("Press: \n1) Add Contact  \n2) Edit Contact \n3) View Contact  \n4) Delete Contact \n5) Count Contacts \n6) Search City or State \n7) View Contact By city or state \n8) Count by city or state \n9) Sort by name \n10) Sort By City, State or Zip \n0)Exit:");
    choice = Number(prompt("Enter your choice: "));
    switch(choice){
        case 1:
            addContact();
            break;
        case 2:
            if(contactArray.length==0){
                console.log("No contacts in Addressbook.");
            }
            let userData = prompt("Enter the contact firstname which you want to edit: ");
            editContact(userData);
            break; 
        case 3:
            for(let i = 0; i < contactArray.length; i++)
                console.log(contactArray[i].toString(),"\n");
            break;
        case 4:
            deletContact();
            break;
        case 5:
            console.log("Number of Contacts: "+contactArray.reduce(contact=>contact + 1, 0));
            break;
        case 6:
            console.log("1) Search By City  2) Search By State");
            let ch = Number(prompt("Enter your choice: "));
            switch (ch){
                case 1: let city = prompt("Enter the city name: ");
                        searchByCityOrState(city, 1);
                        break;
                case 2: let state = prompt("Enter the state name: ");
                        searchByCityOrState(state, 2);
                        break;
            }
            break;
        case 7:
            console.log("1) View By City  2) View By State");
            ch = Number(prompt("Enter your choice: "));
            switch(ch){
                case 1: let city = prompt("Enter the city name: ");
                        searchByCityOrState(city, 1);
                        break;
                case 2: let state = prompt("Enter the state name: ");
                        searchByCityOrState(state, 2);
                        break;
            }
            break;
        case 8:
            console.log("1) Count By City   2) Count By State");
            let choice = Number(prompt("Enter your choice: "));
            switch (choice){
                case 1: let city = prompt("Enter the city name: ");
                    countByCityOrState(city, 1);
                    break;
                case 2: let state = prompt("Enter the state name: ");
                    countByCityOrState(state, 2);
                    break;
            }
            break;
        case 9:
            console.log(contactArray.sort((a,b)=>a.firstName.localeCompare(b.firstName)));
            break;
        case 10:
            console.log("Sort Contacts based on \t1.) City \t2.) State \t3.) Zip")
            let inputToSort = parseInt(prompt("Enter your choice:  "))
            sortContactByCity_State_Zip(inputToSort);
            break;
        default:
            console.log("Enter a correct option");
            break;
    }
}while(choice != 0);
