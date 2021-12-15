const express = require("express");
const path = require("path");
const cors = require("cors");

const { Client } = require("pg");
if (process.env.ENV !== "production") {
    require("dotenv").config();
}
const { resolve } = require("path");
const { config } = require("dotenv");
config({ path: resolve(__dirname, "./.env") });

const userRoutes = require("./routes/user.js");
const proyectoRoutes = require("./routes/proyecto");

const app = express();

app.use(cors());
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(express.static(path.join(__dirname, "public")));

app.use("/user", userRoutes);
app.use("/proyecto", proyectoRoutes);

app.get("/test", async(request, response) => {
    const client = new Client();
    client.connect();

    client.query("SELECT $1::text as message", ["Hola Mundo!"], (err, res) => {
        if (err) {
            console.error(err.stack);
            response.send("Error: " + err.stack);
        } else {
            console.log(res.rows[0].message);
            response.send(res.rows[0].message);
        }
        client.end();
    });
});

app.listen(PORT, function() {
    console.log("App corriendo en el puerto " + PORT);
});