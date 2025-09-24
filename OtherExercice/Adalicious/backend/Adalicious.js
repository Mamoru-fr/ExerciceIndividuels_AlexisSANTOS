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
    db.all(`SELECT Orders.id, User.name AS "UserName", Plates.name AS "Plates", Plates.images, Orders.Status FROM Orders JOIN User ON Orders.id_user is User.id JOIN Plates ON Orders.id_plates is Plates.id ORDER BY Orders.id`, [], (err, orders) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(orders);
    })
})

app.get("/olderOrders", (req, res) => {
    db.all(`SELECT Orders.id, User.name AS "UserName", Plates.name AS "Plates", Plates.images, Orders.Status FROM Orders JOIN User ON Orders.id_user is User.id JOIN Plates ON Orders.id_plates is Plates.id WHERE Orders.Status IN ('ready','cancelled') ORDER BY Orders.id`, [], (err, orders) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(orders);
    })
})

app.get("/ordersPending", (req, res) => {
    db.all(`SELECT Orders.id, User.name AS "UserName", Plates.name AS "Plates", Plates.images, Orders.Status FROM Orders JOIN User ON Orders.id_user is User.id JOIN Plates ON Orders.id_plates is Plates.id WHERE Orders.Status = 'pending' ORDER BY Orders.id`, [], (err, orders) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(orders);
    })
})

app.post("/order", async (req, res) => {
    console.log("[POST/orders] body reçu:", req.body);
    const {plate_id, client_id} = req.body;
    
    // Validate input
    if (!plate_id || !client_id) {
        return res.status(400).json({ error: "Champs manquants ou invalides" });  
    }
    // Get next order ID
    const row = await new Promise((resolve, reject) => {
        db.get('SELECT MAX(id) as maxId FROM Orders', [], (err, row) => {
            if (err) reject(err);
            resolve(row);
        });
    });
    const id = (row?.maxId || 0) + 1;
    console.log(`[COMMANDE REÇUE] id=${id} | plat=nº${plate_id} | client=nº${client_id}`);

        // Create the order
        await new Promise((resolve, reject) => {
            db.run(
                'INSERT INTO Orders (id, id_user, id_plates, Status) VALUES (?, ?, ?, ?)',
                [id, client_id, plate_id, "pending"],
                function(err) {
                    if (err) reject(err);
                    resolve();
                }
            );
        });
        res.json({ 
            ok: true, 
            id: id, 
            message: "Commande créée avec succès" 
        });
});

app.patch("/orderstatus/:id", (req, res) => {
    const id = Number(req.params.id);
    const { status } = req.body;

    // Validate input
    if (!status || !["pending", "ready", "cancelled"].includes(status)) {
        return res.status(400).json({ error: "Statut invalide" });
    }

    // Update order status
    db.run(
        'UPDATE Orders SET Status = ? WHERE id = ?',
        [status, id],
        function(err) {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            if (this.changes === 0) {
                return res.status(404).json({ error: `Commande id=${id} non trouvée` });
            }
            res.json({ 
                ok: true, 
                message: `Statut de la commande id=${id} mis à jour à '${status}'` 
            });
        }
    );
})

app.get("/plates", (req, res) => {
    db.all(`SELECT * FROM Plates`, [], (err, plates) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(plates);
    })
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
    db.all(`SELECT * FROM User WHERE id = ?`, [id], (err, client) => {
        if (!client) return res.status(404).json({ error: `Client id=${id} non trouvé` });
        res.json(client)
    });
});

app.get("/newclient", (req, res) => {
    db.all(`SELECT Max(id) as maxId FROM User`, [], (err, maxId) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(maxId);
    });
});

app.get("/alreadyclient", async (req, res) => {
    const { name } = req.query;
    try {
        // First, check if user exists
        db.all(`SELECT * FROM User WHERE name = ?`, [name], async (err, clients) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }

            // If client exists, return their info
            if (clients && clients.length > 0) {
                return res.json({ id: clients[0].id, message: "Client existant" });
            }

            // If client doesn't exist, create new one
            try {
                // Get max ID for new client
                const newIdResult = await new Promise((resolve, reject) => {
                    db.get(`SELECT MAX(id) as maxId FROM User`, [], (err, row) => {
                        if (err) reject(err);
                        else resolve(row);
                    });
                });

                const newId = (newIdResult.maxId || 0) + 1;

                // Insert new client
                await new Promise((resolve, reject) => {
                    db.run(
                        `INSERT INTO User (id, name) VALUES (?, ?)`,
                        [newId, name],
                        function(err) {
                            if (err) reject(err);
                            else resolve();
                        }
                    );
                });

                return res.json({ id: newId, message: "Nouveau client créé avec succès" });
            } catch (error) {
                console.error('Error creating new client:', error);
                return res.status(500).json({ error: "Erreur lors de la création du client" });
            }
        });
    } catch (error) {
        console.error('Error in alreadyclient:', error);
        return res.status(500).json({ error: "Erreur serveur" });
    }
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