import mongoose from 'mongoose';
 const ConnectD = async () => {
    try {
      const conn: typeof mongoose = await mongoose.connect(process.env.DB_CONNECTION)
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
      console.error(`Error: ${error.message}`);
      process.exit(1);
    }
  }

export default ConnectD