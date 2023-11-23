import express from 'express';
import ConnectD from "./db";
import bodyParser  from "body-parser";
import pasteRoute from "../routes/paste-route";

const app = express();
ConnectD()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('X-Powered-By', 'Node.js');
  next();
})

app.use('/', pasteRoute)
app.use('/pastes', pasteRoute)

app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});