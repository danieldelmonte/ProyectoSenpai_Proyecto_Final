const express = require("express");
const router = express.Router();
const db = require("../db");


router.get("/", async(req, res, next) => {

    const proyectos = await db.query("SELECT * FROM proyectos WHERE es_top = false");

    const result = proyectos.rows;

    res.send({ success: true, proyectos_listado: result });
});

router.get("/top", async(req, res, next) => {

    const proyectos_top = await db.query("SELECT * FROM proyectos WHERE es_top = true");

    const result = proyectos_top.rows;

    res.send({ success: true, proyectos_top: result });
});

router.get("/:id", async(req, res, next) => {

    const idProyecto = parseInt(req.params.id, 10);

    // VOY A BUSCAR EL PROYECTO A LA BD
    const resBd = await db.query("SELECT * FROM proyectos WHERE id = $1", [
        idProyecto,
    ]);
    const ProyIndex = resBd.rows;

    // CARGO LOS COMENTARIOS
    const resBd_Comentarios = await db.query("SELECT C.contenido,U.name as usuario, C.fecha, C.id_proyecto FROM comentarios C join usuarios U on C.usuario = U.id WHERE C.id_proyecto = $1", [
        ProyIndex[0].id,
    ]);
    const Comentarios = resBd_Comentarios.rows;

    // AGREGO LOS COMENTARIOS A LA RESPUESTA
    ProyIndex[0]["comentarios"] = Comentarios;

    if (ProyIndex.length >= 0) {

        return res.send({ success: true, proyecto: ProyIndex[0] });

    } else {

        return res.send({ success: false, message: "No se encontró el Proyecto" });

    }
});

router.post("/comentario/add", async(req, res) => {

    const idProyecto = req.body.idProyecto;

    // Obtengo el nombre del usuario
    const resBd_InfoUsuario = await db.query("SELECT name FROM usuarios where id = $1", [
        req.body.usuario,
    ]);
    const Usuario = resBd_InfoUsuario.rows[0];

    let nuevoComentario = {
        contenido: req.body.contenido,
        usuario: Usuario.name, //req.body.usuario,
        fecha: req.body.fecha,
    };

    const resBdInsert = await db.query(
        "INSERT INTO comentarios (contenido,usuario,fecha,id_proyecto) values ($1, $2, $3, $4)", [req.body.contenido, req.body.usuario, req.body.fecha, idProyecto]
    );

    return res.json({ success: true, nuevoComentario });

});

module.exports = router;

//**** LISTADO TOP */
/*
const proyectos_top = [{
        id: 1,
        titulo: "PROYECTO ESTRELLA",
        imagen: "img/ejemplo_proyecto.jpg",
        recaudado: 525,
        objetivo: 3000,
        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus reiciendis enim facilis sint dignissimos nobis consectetur minima veniam nulla perspiciatis, minus cum facere velit assumenda nostrum fugiat, asperiores mollitia. Quibusdam.",
        dias_restantes: 9,
        comentarios: [{}],
    },
    {
        id: 2,
        titulo: "PROYECTO ESTRELLA 2",
        imagen: "img/ejemplo_proyecto.jpg",
        recaudado: 725,
        objetivo: 4000,
        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus reiciendis enim facilis sint dignissimos nobis consectetur minima veniam nulla perspiciatis, minus cum facere velit assumenda nostrum fugiat, asperiores mollitia. Quibusdam.",
        dias_restantes: 12,
        comentarios: [{}],
    },
    {
        id: 3,
        titulo: "PROYECTO ESTRELLA 3",
        imagen: "img/ejemplo_proyecto.jpg",
        recaudado: 963,
        objetivo: 5000,
        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus reiciendis enim facilis sint dignissimos nobis consectetur minima veniam nulla perspiciatis, minus cum facere velit assumenda nostrum fugiat, asperiores mollitia. Quibusdam.",
        dias_restantes: 23,
        comentarios: [{}],
    }
];
*/
//**** LISTADO COMPLETO */
/*
const proyectos_listado = [{
        id: 1,
        titulo: "PROYECTO LISTADO 1",
        imagen: "img/mini_item.jpg",
        recaudado: 525,
        objetivo: 3000,
        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus reiciendis enim facilis sint dignissimos nobis consectetur minima veniam nulla perspiciatis, minus cum facere velit assumenda nostrum fugiat, asperiores mollitia. Quibusdam.",
        dias_restantes: 9,
        comentarios: [{
                contenido: "1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt modi veniam, doloremque sed velit qui officiis. Enim illo aut, repellendus dignissimos fugiat nisi praesentium totam quam nemo natus, nesciunt quisquam!",
                usuario: "Daniel Delmonte",
                fecha: "Wed, 01 Sep 2021 14:18:58 GMT",
            },
            {
                contenido: "2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt modi veniam, doloremque sed velit qui officiis. Enim illo aut, repellendus dignissimos fugiat nisi praesentium totam quam nemo natus, nesciunt quisquam!",
                usuario: "Daniel Delmonte",
                fecha: "Wed, 01 Sep 2021 14:18:58 GMT",
            },
            {
                contenido: "3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt modi veniam, doloremque sed velit qui officiis. Enim illo aut, repellendus dignissimos fugiat nisi praesentium totam quam nemo natus, nesciunt quisquam!",
                usuario: "Daniel Delmonte",
                fecha: "Wed, 01 Sep 2021 14:18:58 GMT",
            }
        ],
        usuarios_like: [],
    },
    {
        id: 2,
        titulo: "PROYECTO LISTADO 2",
        imagen: "img/mini_item.jpg",
        recaudado: 725,
        objetivo: 4000,
        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus reiciendis enim facilis sint dignissimos nobis consectetur minima veniam nulla perspiciatis, minus cum facere velit assumenda nostrum fugiat, asperiores mollitia. Quibusdam.",
        dias_restantes: 12,
        comentarios: [],
        usuarios_like: [],
    }, {
        id: 3,
        titulo: "PROYECTO LISTADO 3",
        imagen: "img/mini_item.jpg",
        recaudado: 725,
        objetivo: 4000,
        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus reiciendis enim facilis sint dignissimos nobis consectetur minima veniam nulla perspiciatis, minus cum facere velit assumenda nostrum fugiat, asperiores mollitia. Quibusdam.",
        dias_restantes: 12,
        comentarios: [],
        usuarios_like: [],
    }, {
        id: 4,
        titulo: "PROYECTO LISTADO 4",
        imagen: "img/mini_item.jpg",
        recaudado: 725,
        objetivo: 4000,
        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus reiciendis enim facilis sint dignissimos nobis consectetur minima veniam nulla perspiciatis, minus cum facere velit assumenda nostrum fugiat, asperiores mollitia. Quibusdam.",
        dias_restantes: 12,
        comentarios: [],
        usuarios_like: [],
    }, {
        id: 5,
        titulo: "PROYECTO LISTADO 5",
        imagen: "img/mini_item.jpg",
        recaudado: 963,
        objetivo: 5000,
        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus reiciendis enim facilis sint dignissimos nobis consectetur minima veniam nulla perspiciatis, minus cum facere velit assumenda nostrum fugiat, asperiores mollitia. Quibusdam.",
        dias_restantes: 23,
        comentarios: [],
        usuarios_like: [],
    }
];
*/