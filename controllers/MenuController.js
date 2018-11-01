const inquirer = require('inquirer');
const ContactController = require("./ContactController");

module.exports = class MenuController {
    constructor(){
        this.mainMenuQuestions = [
            {
                type: "list",
                name: "mainMenuChoice",
                message: "Please choose from an option below: ",
                choices: [
                    "Add new contact",
                    "Date",
                    "Exit"
                ]
            }
        ];
        this.book = new ContactController();
    }

    main(){
        console.log(`Welcome to AddressBloc!`);
        inquirer.prompt(this.mainMenuQuestions).then((response) => {
            switch(response.mainMenuChoice){
                case "Add new contact":
                    this.addContact();
                    break;
                case "Exit":
                    this.exit(); 
                case "Date":
                    this.getDate();
                default:
                    console.log("Invalid input");
                    this.main();
            }
        })
        .catch((err) => {
            console.log(err);
        });
    }
    
    clear(){
        console.log('\x1Bc');
    }

    addContact(){
        this.clear();

        inquirer.prompt(this.book.addContactQuestions).then((answers) => {
          this.book.addContact(answers.name, answers.phone, answers.email).then((contact) => {
            console.log("Contact added successfully!");
            this.main();
          }).catch((err) => {
            console.log(err);
            this.main();
          });
        });
        
      }

    exit(){
        console.log("Thanks for using AddressBloc!");
        process.exit();
      }

    getContactCount(){
        return this.contacts.length;
    }  

    remindMe(){
        return "Learning is a life-long pursuit";
    }

    getDate(){
        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth() + 1;
        const day = now.getDate(); 
        const hour = now.getHours();
        const minutes = now.getMinutes();
        const fullYear = [year, month, day].join('-');
        const fullTime = [hour, minutes].join(':');
       console.log(fullYear, fullTime);
    }
}


