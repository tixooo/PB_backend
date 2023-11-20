import express from 'express';
import ConnectD from "./db";
import Paste from "../models/paste_model";

const app = express();
ConnectD()
app.get('/', async (req, res) => {
  const pastes = await Paste.find()
  res.json(pastes)
  console.log(res.json(pastes))
});

app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});