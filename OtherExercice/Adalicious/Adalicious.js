import express from 'express';
import cors from "cors";

const app = express();
app.use(cors())

const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World! 👋');
});

app.get('/pizza', (req, res) => {
  res.send('🍕');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
