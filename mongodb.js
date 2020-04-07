// CRUD create read update delete

// const mongodb = require("mongodb");
// //MongoClient gives access to perform operations
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

//The above calls can be destructed as follows
const { MongoClient, ObjectID } = require("mongodb");
const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

// const id = new ObjectID();
// console.log(id.id.length);
// console.log(id.toHexString().length);
//console.log(id.getTimestamp());

MongoClient.connect(
  connectionURL,
  { useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database");
    }

    const db = client.db(databaseName);
  }
);
