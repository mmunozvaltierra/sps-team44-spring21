// server/db-insert.js
// Script to insert store information to table

const connection = require('./db-connect')

var mysql = require('mysql');
/* Function to insert store values into database */
function insertStore(storeName, storeAddress, description, openTime, closeTime,
                     phoneNumber, instagramLink, facebookLink) {
    var sql = "CREATE TABLE IF NOT EXISTS stores (storeId INT NOT NULL AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255), description VARCHAR(255), openTime VARCHAR(5), closeTime VARCHAR(5), phone VARCHAR(255), instagram VARCHAR(255), facebook VARCHAR(255))";
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

//Example insertion
//insertStore("test1", "testAddress", "test", "12", "12", "9095555555", "instagram", "facebook");