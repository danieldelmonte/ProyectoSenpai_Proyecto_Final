const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../db");

const router = express.Router();

const { TOKEN_SECRET, verifyToken } = require("../middlewares/jwt-validate");

router.get("/", (req, res) => {
    res.json({ success: true });
});

router.post("/register", async(req, res) => {
    if (req.body.mail && req.body.name && req.body.password) {
        if (/^\S+@\S+\.\S+$/.test(req.body.mail) === false) {
            res
                .status(400)
                .json({ success: false, message: "Formato de mail incorrecto" });
            return;
        }

        /*const existeUser = usuarios.find((u) => {
            return u.mail === req.body.mail;
        });*/

        const usuarioBd = await db.query("SELECT * FROM usuarios WHERE mail = $1", [
            req.body.mail,
        ]);
        // Fijarme que no exista
        const existeUser = usuarioBd.rowCount > 0;


        if (existeUser) {
            res.status(400).json({ success: false, message: "Mail repetido" });
            return;
        }

        const salt = await bcrypt.genSalt(10);
        const password = await bcrypt.hash(req.body.password, salt);

        const newUser = {
            name: req.body.name,
            mail: req.body.mail,
            password: password,
        };

        const resBd = await db.query(
            "INSERT INTO usuarios (name, mail, password) values ($1, $2, $3)", [newUser.name, newUser.mail, newUser.password]
        );

        //usuarios.push(newUser);

        return res.json({ success: true, newUser });
    } else {
        return res.status(400).json({
            success: false,
            message: "Faltan datos (requeridos: mail, name, password)",
        });
    }
});

router.post("/login", async(req, res, next) => {
    try {
        //const user = usuarios.find((u) => u.mail === req.body.mail);

        const resBd = await db.query("SELECT * FROM usuarios WHERE mail = $1", [
            req.body.mail,
        ]);

        let user = null;
        if (resBd.rows.length === 1) {
            user = resBd.rows[0];
        }

        if (!user) {
            return res.status(400).json({ error: "Usuario no encontrado" });
        }

        const validPassword = await bcrypt.compare(
            req.body.password,
            user.password
        );

        if (!validPassword) {
            return res.status(400).json({ error: "Contraseña no válida" });
        }

        const token = jwt.sign({
                name: user.name,
                mail: user.mail,
            },
            TOKEN_SECRET
        );

        return res.json({ error: null, data: "Login exitoso", token });
    } catch (error) {
        return next(error);
    }
});

/*router.get("/usuarios", verifyToken, (req, res) => {
    return res.json({ error: null, usuarios });
});*/

router.get("/usuarios", async(req, res) => {
    const users = await db.query("SELECT * FROM usuarios");

    const result = users.rows;

    res.json({ error: null, result });
});

module.exports = router;

/*const usuarios = [{
    name: "daniel",
    mail: "daniel@mail.com",
    password: "$2a$10$GoTWOJyk1FOFxHYRr3/GKei4XdOU7qKONgONvO09RXmw.Vxb4/vgm",
}, ];*/