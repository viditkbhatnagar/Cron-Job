// Importing required libraries
const cron = require("node-cron");
const express = require("express");
const {addTicket} = require("./app"); 
const {getUserAllTicket} = require("./app"); 
const {getAllUser} = require("./app"); 
// const {} = require("./app"); 

app = express(); // Initializing app


const callAddTicket = async () => {
    const ticket = await addTicket({
      title: "string",
      description: "string",
      issue_observed_on: "2022-02-25",
      impact: "2",
      urgency: "1",
      department: "IT Help Desk",
      issue: "Software Issue",
      attachment: "string"
    });
    if (ticket.status == "Success") {
      console.log(ticket.data);
    } else {
      console.log(ticket.error);
    }
  };
// Creating a cron job which runs on every 10 second
cron.schedule("*/1 * * * * *", function() {
    callAddTicket()
	// console.log("running a task every 10 second");
});

app.listen(3000);
