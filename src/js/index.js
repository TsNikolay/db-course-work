const express = require("express");
const bodyParser = require("body-parser");
const connection = require("./db");

const app = express();
const port = process.env.PORT || 8888;

connection.connect((error) => {
    if(error){
        console.log("Error caught")
    } else {
        console.log("Connection successful")
    }
})

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require("./routes");
routes(app);

app.listen(port)
 
