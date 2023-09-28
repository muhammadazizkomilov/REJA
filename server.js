const http = require("http");
const mongodb = require("mongodb");


let db;
const connectionString ="mongodb+srv://Danny:Q0bJ6rZxHS9nLJBb@cluster0.upbgupi.mongodb.net/reja";

mongodb.connect(connectionString, {
 useNewUrlParser: true, useUnifiedTopology: true,
},
 (err,client) => {
    if(err) console.log("ERROR on connection MangoDB");
    else{
        console.log("MongoDB connection succeed");
        module.exports = client;

        const app = require("./app");
        const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(`The server is running successfully on port: ${PORT}, http://localhost:${PORT}`);
});
    }

});

