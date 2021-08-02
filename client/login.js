var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


function login(email,password) {
 
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("SheltersDB");
        var query = { email: e }
        dbo.collection("admins").find(query).toArray(function (err, result) {
            if (err) alert("Email/Password Does Not Match!")
            if (p == result[0].password)
                console.log("Login Successful")
                else
                alert("Email/Password Does Not Match!")

            db.close();
        });
    });
}