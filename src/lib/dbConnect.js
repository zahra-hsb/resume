import mongoose from "mongoose";

// const uri = 'mongodb://localhost/wallet'
const uri = process.env.MONGODB_URI


if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"')
}


const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}


async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    };

    // cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
    //   return mongoose;
    // });
    cached.promise = mongoose.connect(uri, opts).then((mongoose) => {
      return mongoose;
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;

// import mongoose, { connect } from "mongoose";
// import clientPromise from "./mongodb";

// const connection = {}
// // const uri = 'mongodb://localhost/wallet'

// if (!process.env.MONGODB_URI) {
//   throw new Error('Invalid/Missing environment variable: "MONGODB_URI"')
// }

// const uri = process.env.MONGODB_URI

// async function dbConnect() {
//     if (connection.isConnected) {
//         return
//     }
//     try {

//         // const db = await mongoose.connect(process.env.MONGODB_URI);
//         const db = await mongoose.connect(uri);

//         connection.isConnected = db.connections[0].readyState
//     } catch (err) {
//         console.log('mongo error:', err);
//     }
// }

// export default dbConnect
