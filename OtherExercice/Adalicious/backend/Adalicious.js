import express from 'express';
import cors from "cors";
import sqlite3 from "sqlite3";

const app = express();
app.use(express.json())
app.use(cors())

const port = 3000;

// Database setup
let db = new sqlite3.Database('../database/AdaliciousDB.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log('Connecté à la base de données SQLite.');
    }
});

app.get('/', (req, res) => {
    res.send('Accueil');
});

app.get("/menu", (req, res) => {
    db.all('SELECT * FROM Plates', [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
})

app.get("/menu/:id", (req, res) => {
    const id = Number(req.params.id);
    db.all(`SELECT * FROM Plates WHERE id is ${id}`, [], (err, plat) => {
        if (!plat) return res.status(404).json({ error: `Plat id=${id} non trouvé` });
        res.json(plat) 
    })
});

app.get("/orders", (req, res) => {
    db.all(`SELECT * FROM Orders`, [], (err, orders) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(orders);
    })
})

app.get("/order", (req, res) => {
    db.all(`SELECT * FROM Plates`, [], (err, plates) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(plates);
    })
})

app.post("/order", (req, res) => {
    console.log("[POST/orders] body reçu:", req.body);
    const  {plate_id, client_id} = req.body;
    if (!plate_id || !client_id) {
        return res.status(400).json({ error: "Champs manquants ou invalides" });  
    }
    db.get(`SELECT MAX(id) as maxId FROM Orders`, [], (err, row) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        const id = (row?.maxId || 0) + 1;
        console.log(`[COMMANDE REÇUE] id=${id} | plat=nº${plate_id} | client=nº${client_id}`);
        db.run(
            `INSERT INTO Orders (id, id_user, id_plates, Status) VALUES (?, ?, ?, ?)`,
            [id, client_id, plate_id, "pending"],
            function(err) {
                if (err) {
                    return res.status(500).json({ error: err.message });
                }
                res.json({ id: id, message: "Commande créée avec succès" });
            }
        );
    });
})

app.get("/clients", (req, res) => {
    db.all(`SELECT * FROM User`, [], (err, clients) => {
        if (err) {
            return res.status(500).json({error: err.message});
        }
        res.json(clients);
    });
});

app.get("/clients/:id", (req, res) => {
    const id = Number(req.params.id);
    db.all(`SELECT * FROM User`, [], (err, client) => {
        if (!client) return res.status(404).json({ error: `Client id=${id} non trouvé` });
        res.json(client)
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

process.on('SIGINT', () => {
    db.close((err) => {
        if (err) {
            console.error(err.message);
        }
        console.log('Fermeture de la connexion à la base de données.');
        process.exit(0);
    });
});