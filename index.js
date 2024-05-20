import express from "express";

import userRoutes from "./routes/userRoutes.js";

// DB connection
import db from "./config/db.js";

try {
  await db.authenticate();
  console.log("Successfully connected to the DB");
} catch (error) {
  console.log(error);
}

const app = express();
const PORT = 3000;

// Enable pug
app.set("view engine", "pug");
app.set("views", "./views");

app.use(express.json());

// Public folder
app.use(express.static("public"));

// Routing
app.use("/auth", userRoutes);

app.listen(PORT);
console.log("Server listening on port " + PORT);
