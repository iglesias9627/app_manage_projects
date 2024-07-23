// src/index.js

import express, { Express, Request, Response } from "express";
import sequelize from './config/database';
import dotenv from "dotenv";
import { User } from './models/user';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

// Initialize Sequelize
sequelize.sync().then(() => {
  console.log('Database connected and synchronized');
});

app.get("/", (req: Request, res: Response) => {
  res.send("Express + Typescript Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});