//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const app = new express();

/**app.use specifies folder that all links from html to stylesheets and images will be found */
app.use(express.static(__dirname + "/"));
/**enable use of bodyParser */
app.use(bodyParser.urlencoded({ extended: true }));

//app.get home/root requests /  landing page
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/signup.html");
});

//app.post. what happens when button is pushed on home/landing page
app.post("/", (req, res) => {
  const fName = req.body.firstName;
  const lName = req.body.lastName;
  const eAddress = req.body.email;

  //prepare data to send to mail chimp
  //create data object
  const data = {
    members: [
      {
        email_address: eAddress,
        status: "subscribed",
        merge_fields: {
          FNAME: fName,
          LNAME: lName,
        },
      },
    ],
  };
  //flat pack data into Json
  const jsonData = JSON.stringify(data);

  const url = "https://us14.api.mailchimp.com/3.0/lists/list-id-here";//<-replace "list-id-here" with actual list id
  const options = {
    method: "POST",
<<<<<<< HEAD
    auth: "user:88149341f6c811ff370f668fde2c2620-us14",
=======
    //replace with actual api key
    auth: "mail-chimp-api-key-here,
>>>>>>> 7cfe7163b2da541f80b025c12f8f7045d85ebca6
  };
  const request = https.request(url, options, function (response) {
    if (response.statusCode === 200) {
      res.sendFile(__dirname + "/html/success.html");
      console.log("server response - status code: " + response.statusCode);
    } else {
      res.sendFile(__dirname + "/html/failure.html");
      console.log("server response - status code: " + response.statusCode);
    }

    response.on("data", (data) => {
      console.log(JSON.parse(data));
    });
  });
  request.write(jsonData);
  request.end();
});

//app.post failure page button requests
app.post("/failure", (req, res) => {
  res.sendFile(__dirname + "/signup.html");
});

//app.post success page button requests
app.post("/success", (req, res) => {
  res.sendFile(__dirname + "/signup.html");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("app is running");
});

//mail chimp API key
<<<<<<< HEAD
//88149341f6c811ff370f668fde2c2620-us14
=======
//
>>>>>>> 7cfe7163b2da541f80b025c12f8f7045d85ebca6

//mail chimp List ID
//

//mail chimp Audience ID
//
