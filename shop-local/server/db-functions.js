// Script to insert store information to table

const connection = require('./db-connect')

var mysql = require('mysql');
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

//Example insertion
insertStore("test1", "testAddress", "test", "12", "12", "9095555555", "instagram", "facebook","item","item","item","item");
insertStore("Dona antonia", "Pueblito Don Cuco (Paseo de la victoria #2118 5B)", "Un pedacito de Brasil en Cd. Juarez",
"8:00 AM", "6:00 PM", "526567571621", "https://www.instagram.com/donaantoniamx/", "https://www.facebook.com/DONAANTONIAMX",
"test", "test", "test", "test");

/* Function to get store information as JSON object */
function getStore(storeName, getResult) {
    var sql = "SELECT * FROM stores WHERE name = ?";
    var query = connection.query(sql, [storeName], function(err, result) {
            if (err) throw err;
            getResult(result[0]);
        });
    //console.log(query);
}
/* Example of how to use return values
getStore("test1", function(store){
    console.log(store);
});
*/