import express from "express";
import "dotenv/config";

import client from "./db/client";

import usersRoutes from './api/routes/users';

const app = express();
const port = process.env.PORT || 3000;

app.use("/users", usersRoutes);

app.listen(port, () => {
    client;
    console.log(`Successfully connected at: http://localhost:${port}`);
});