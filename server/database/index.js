require("dotenv").config();

const express = require("express");
const mysql = require('mysql'); 

const PORT = process.env.PORT || 3001;

const app = express();
let jsonResponse = null;

//Configure connection
let connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE
});

//Create connection
connection.connect(function(err) {
    if (err) {
      console.error('Error connecting: ' + err.stack);
      return;
    }
    console.log('Connected as thread id: ' + connection.threadId);
    connection.query("CREATE DATABASE IF NOT EXISTS shoplocal", function (err, result) {
      if (err) throw err;
      console.log("Database created");
    });
});

/* Function to insert store values into database */
function insertStore(storeName, storeAddress, description, openTime, closeTime,
    phoneNumber, instagramLink, facebookLink) {
    var sql = "CREATE TABLE IF NOT EXISTS stores (storeId INT NOT NULL AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255), description VARCHAR(255), openTime VARCHAR(255), closeTime VARCHAR(255), phone VARCHAR(255), instagram VARCHAR(255), facebook VARCHAR(255), item1 VARCHAR(255),  item2 VARCHAR(255), item3 VARCHAR(255), item4 VARCHAR(255))";
    connection.query(sql, function(err, result) {
        if (err) throw err;
        console.log("Table Created");
    });

    sql = "INSERT INTO stores (name, address, description, openTime, closeTime, phone, instagram, facebook) VALUES ('" + storeName + "', '" + storeAddress + "', '" 
        + description + "', '" + openTime + "', '" + closeTime + "', '" + phoneNumber + "', '"
        + instagramLink + "', '" + facebookLink + "')";
    connection.query(sql, function(err, result){
        if (err) throw err;
        console.log("Store inserted");
    });
}

/* Function to get store information as JSON object */
function getStore(storeName) {
    var sql = "SELECT * FROM stores WHERE name = ?";
    var query = connection.query(sql, [storeName], function(err, result) {
            if (err) throw err;
            setResponse(result[0]);
        });
}
/** Helper function for getStore(storeName)
 * @param {JSON} response - JSON object from getStore query response
 */
function setResponse(response) {
    jsonResponse = response;
}

/**
 * Handler for store information requests
 * @param req - expectation of a store name to be passed as storeName
 */
app.get("/get-store", (req, res) => {
    getStore(req.query.storeName);
    res.json(jsonResponse);
  });

/**
 * Creates NodeJS server on port 3001
 */
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});