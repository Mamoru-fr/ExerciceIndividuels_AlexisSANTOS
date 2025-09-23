import express from 'express';
import cors from "cors";
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const app = express();
app.use(cors())

const port = 3001;

// Get the current directory
const __dirname = dirname(fileURLToPath(import.meta.url));

// Serve static files from the 'public' folder
app.use(express.static(join(__dirname)));

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'pages', 'index.html'));
});

app.get('/menu', (req, res) => {
    res.sendFile(join(__dirname, 'pages', 'menu.html'));
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});