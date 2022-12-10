const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb+srv://dbuser:dbpass@cluster0.qkjy1zu.mongodb.net/?retryWrites=true&w=majority';

const client = new MongoClient(url);

// Database Name
const dbName = 'sample_mflix';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('movies');

  // the following code examples can be pasted here...
  const findResult = await collection.find({
    "title": {
        $regex: "Lord"
    },
    "year": {
        $gte: 2000,
        $lte: 2005
    }
  }).toArray();
//   console.log('Found documents =>', findResult);

  for (let i = 0; i < findResult.length; i++) {
    const { year, title } = findResult[i];
    
    console.log(`${year}: ${title}`);
    
  }

  return 'done.';

}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());