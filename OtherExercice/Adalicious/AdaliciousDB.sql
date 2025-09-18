CREATE TABLE "Orders" (
	"id"	INT NOT NULL,
	"id_user"	INT NOT NULL,
	"id_plates"	INT NOT NULL,
	"Status"	TEXT NOT NULL DEFAULT 'pending' CHECK("Status" IN ('pending', 'ready', 'cancelled')),
	PRIMARY KEY("id"),
	FOREIGN KEY("id_plates") REFERENCES "Plates"("id"),
	FOREIGN KEY("id_user") REFERENCES "User"("id")
);

CREATE TABLE "Plates" (
	"id"	INTEGER,
	"name"	TEXT,
	"desc"	TEXT,
	"images" TEXT,
	PRIMARY KEY("id")
);

CREATE TABLE "User" (
	"id"	INT,
	"name"	TEXT,
	PRIMARY KEY("id")
);

INSERT INTO "Orders" ("id","id_user","id_plates","Status") VALUES 
 (1,1,7,'ready'),
 (2,5,6,'pending'),
 (3,6,5,'cancelled'),
 (4,2,4,'ready'),
 (5,4,3,'pending'),
 (6,5,2,'pending'),
 (7,3,1,'pending');

INSERT INTO "Plates" ("id","name","desc","images") VALUES 
 (1,'Hello World Burger','Un cheeseburger classique (pain, steak, fromage, salade, sauce).','🍔'),
 (2,'404 Not Found Fries','Des frites maison avec une sauce mystère (choisie aléatoirement par le backend !).','🍟'),
 (3,'JSON Nuggets','Nuggets de poulet avec 3 sauces au choix (ketchup, mayo, barbecue).','🍗'),
 (4,'Git Pull Tacos','Un taco simple avec poulet, salade, fromage et sauce.','🌮'),
 (5,'Front-end Salad','Une salade légère avec tomates, feta et vinaigrette maison.','🥗'),
 (6,'Back-End Brownie','Un brownie moelleux au chocolat.','🍫'),
 (7,'Full Stack Menu','Un combo burger, frites et boisson.','🍔');

INSERT INTO "User" ("id","name") VALUES 
 (1,'Nathalie Jatson'),
 (2,'Charles Dupon'),
 (3,'Lucas Martin'),
 (4,'Emma Dubois'),
 (5,'Noah Lambert'),
 (6,'Chloé Moreau');