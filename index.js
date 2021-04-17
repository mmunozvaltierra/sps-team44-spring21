require("dotenv").config();

const express = require("express");
const mysql = require('mysql');
const path = require('path');

const PORT = process.env.PORT || 3001;

const app = express();
let jsonResponse = null;

app.use(express.static(path.resolve(__dirname, '/shop-local/build')));

//Configure connection
let connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE
    //socketPath: process.env.DB_INSTANCE_NAME
});

//Create connection
connection.connect(function (err) {
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
    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table Created");
    });

    sql = "INSERT INTO stores (name, address, description, openTime, closeTime, phone, instagram, facebook) VALUES ('" + storeName + "', '" + storeAddress + "', '"
        + description + "', '" + openTime + "', '" + closeTime + "', '" + phoneNumber + "', '"
        + instagramLink + "', '" + facebookLink + "')";
    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Store inserted");
    });
}


/** Helper function for SQL query functions
 * @param {JSON} response - JSON object from getStore query response
 */
function setResponse(response) {

    jsonResponse = response;
}

/**
 * Handlers for store information requests
 * @param req - expectation of a store name to be passed as storeName
 */
app.get("/get-store", (req, res) => {
    var sql = "SELECT * FROM stores WHERE name = ?";
    var query = connection.query(sql, [storeName], function (err, result) {
        if (err) throw err;
        res.json(result[0]);
    });

});

/** Route to list all stores */
app.get("/list-stores", (req, res) => {

    var sql = "SELECT * FROM stores";
    var query = connection.query(sql, function (err, result) {
        if (err) throw err;
        res.json(result);
    });

});

/** Route to get store by ID
 *  @param storeId - expects an integer value to be passed into query
 */
app.get("/get-store-id", (req, res) => {
    var sql = "SELECT * FROM stores WHERE storeId = ?";
    var query = connection.query(sql, [req.query.storeId], function (err, result) {
        if (err) throw err;
        //Only returns first result
        res.json(result[0]);
    });

});

// All other GET requests not handled before will return index.html
app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '/shop-local/build/index.html'));
  });


/**
 * Creates NodeJS server on port 3001
 */
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
