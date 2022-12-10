const { MongoClient } = require('mongodb');
const url = process.env.MONGO_DB;

const client = new MongoClient(url);
const dbName = 'sample_mflix';

async function findLordMovies(callback) {
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('movies');

  const findResult = await collection.find({
    "title": {
        $regex: "Lord"
    },
    "year": {
        $gte: 2000,
        $lte: 2005
    }
  }).toArray();

  callback(findResult);
}

async function findLordMoviesPromise() {
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('movies');
  
    const findResult = await collection.find({
      "title": {
          $regex: "Lord"
      },
      "year": {
          $gte: 2000,
          $lte: 2005
      }
    }).toArray();
  
    return findResult;
  }

module.exports = {
    findLordMovies,
    findLordMoviesPromise
}