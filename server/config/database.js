import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const uri = process.env.MONGODB_URI;


// Options forwarded to mongoose.connect
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

export async function connectDb() {
  try {
    // Connect to MongoDB via Mongoose
    await mongoose.connect(uri, clientOptions);
    // Optional: ping to ensure the connection is established
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log('Vous êtes connecté !');
  } catch (err) {
    console.error('Erreur de connexion à la base de données :', err);
    throw err; // Laisser l'appelant gérer l'erreur
  }
}
