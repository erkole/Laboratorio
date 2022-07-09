--
-- Database: laboratorio_db
--

CREATE DATABASE laboratorio_db;

-- ENTITIES

--
-- Schema entity clienti
--

CREATE TABLE IF NOT EXISTS "clienti" (
	Cognome varchar(130)  NOT NULL,
	Email varchar(130) ,
	Nome varchar(130)  NOT NULL,
	Telefono varchar(130)  NOT NULL,
	
	_id SERIAL PRIMARY KEY

);

--
-- Schema entity interventir
--

CREATE TABLE IF NOT EXISTS "interventir" (
	Costo decimal(6,2) ,
	Descrizione varchar(130) ,
	Prezzo decimal(6,2) ,
	Qnt decimal(6,2) ,
	Totale decimal(6,2) ,
	Um varchar(130) ,
	
	_id SERIAL PRIMARY KEY

);

--
-- Schema entity interventit
--

CREATE TABLE IF NOT EXISTS "interventit" (
	Cliente varchar(130)  NOT NULL,
	Data date  NOT NULL,
	Difetto varchar(130) ,
	Numero numeric  NOT NULL,
	Stato varchar(130)  NOT NULL,
	Tecnico varchar(130)  NOT NULL,
	
	_id SERIAL PRIMARY KEY

);

--
-- Schema entity materiali
--

CREATE TABLE IF NOT EXISTS "materiali" (
	Descrizione varchar(130)  NOT NULL,
	Prezzo decimal(6,2) ,
	Um varchar(130) ,
	
	_id SERIAL PRIMARY KEY

);

--
-- Schema entity user
--

CREATE TABLE IF NOT EXISTS "user" (
	mail varchar(130) ,
	name varchar(130) ,
	password varchar(130)  NOT NULL,
	roles varchar(130) ,
	surname varchar(130) ,
	username varchar(130)  NOT NULL,
	
	_id SERIAL PRIMARY KEY

);


-- Security

ALTER TABLE "user" ALTER COLUMN "password" TYPE varchar(128);

INSERT INTO "user" (username, password, _id) VALUES ('admin', '62f264d7ad826f02a8af714c0a54b197935b717656b80461686d450f7b3abde4c553541515de2052b9af70f710f0cd8a1a2d3f4d60aa72608d71a63a9a93c0f5', 1);

CREATE TABLE IF NOT EXISTS "roles" (
	role varchar(30) ,
	
	-- RELAZIONI

	_user INTEGER  NOT NULL REFERENCES "user"(_id),
	_id SERIAL PRIMARY KEY 

);
INSERT INTO "roles" (role, _user, _id) VALUES ('ADMIN', '1', 1);




-- relation 1:m ArtKey InterventiR - Materiali
ALTER TABLE interventir ADD COLUMN ArtKey INTEGER  REFERENCES "materiali"(_id);

-- relation 1:m CliKey InterventiT - Clienti
ALTER TABLE interventit ADD COLUMN CliKey INTEGER  REFERENCES "clienti"(_id);
