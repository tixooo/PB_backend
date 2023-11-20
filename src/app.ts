import express from 'express';
import ConnectD from "./db";
import Paste from "../models/paste_model";
import bodyParser  from "body-parser";
import xss from "xss";

const app = express();
ConnectD()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('X-Powered-By', 'Node.js');
  next();
})

app.get('/pastes', async (req, res) => {
  const pastes = await Paste.find()
  res.json(pastes)
});

app.get('/pastes/:id', async (req, res) => {
  try {
    const paste = await Paste.findById(req.params.id);
    if (!paste) {
      return res.status(404).json({ message: 'Paste not found' });
    }
    res.json(paste);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
app.get('/', async (req, res) => {
  const pastes = await Paste.find()
  res.json(pastes)
});


app.post('/pastes', async (req, res) => {
  const pasteContent = xss(req.body.content);
  const paste = new Paste({
    content: pasteContent,
  });
  try {
    await paste.save();
    res.status(201).json(paste);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.delete('/pastes/:id', async (req, res) => {
  try {
    const paste = await Paste.findById(req.params.id);
    if (!paste) {
      return res.status(404).json({ message: 'Paste not found' });
    }
    await paste.deleteOne();
    res.json({ message: 'Paste deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});