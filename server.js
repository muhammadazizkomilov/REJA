const http = require("http");
const mongodb = require("mongodb");


let db;
const connectionString =
"mongodb+srv://danny:CdWzaqRFEtB8R9Et@cluster0.ar5nuyp.mongodb.net/?retryWrites=true&w=majority";


mongodb.connect(connectionString, {
 useNewUrlParser: true, 
 useUnifiedTopology: true,
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

