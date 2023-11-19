import express from 'express';
import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://tixo:y9diHvw3GruGB4Ww@pbp.wyezxh2.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log('Database connected!'))
    .catch(err => console.log(err));
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});