import mongoose from 'mongoose';

 const ConnectD = async () => {
    try {
      const conn: any = await mongoose.connect('mongodb+srv://tixo:y9diHvw3GruGB4Ww@pbp.wyezxh2.mongodb.net/?retryWrites=true&w=majority')
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
      console.error(`Error: ${error.message}`);
      process.exit(1);
    }
  }


export default ConnectD

