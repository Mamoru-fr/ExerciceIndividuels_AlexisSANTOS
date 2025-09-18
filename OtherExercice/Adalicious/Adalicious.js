import express from 'express';
import cors from "cors";
import data from "./data.json" with {type: 'json'};

const app = express();
app.use(cors())

const port = 3000;

app.get('/', (req, res) => {
  res.send('Accueil');
});

app.get("/menu/", (req, res) => {
  res.json(data)
})

app.get("/menu/:id", (req, res) => {
  const id=Number(req.params.id);
  const plat = data.find(p => p.id === id);
  if (!plat) return res.status(404).json({error: `Plat id=${id} non trouvé`});    
res.json(plat);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
