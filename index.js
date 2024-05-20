import express from "express";

import userRoutes from "./routes/userRoutes.js";

// DB connection
import db from "./config/db.js";

try {
  await db.authenticate();
  db.sync();
  console.log("Successfully connected to the DB");
} catch (error) {
  console.log(error);
}

const app = express();
const PORT = 3000;

/* `app.use(express.urlencoded({ extended: true }));` is setting up middleware in the Express
application to parse incoming requests with urlencoded payloads. When a form is submitted with POST
method and enctype set to 'application/x-www-form-urlencoded', the data is sent in the body of the
request in a URL-encoded format. */
app.use(express.urlencoded({ extended: true }));

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
