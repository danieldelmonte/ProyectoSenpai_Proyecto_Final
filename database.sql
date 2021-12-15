--*******************************
--** CREACIÓN DE BASE DE DATOS **
--*******************************

CREATE DATABASE proyecto_senpai;

--************************
--** CREACIÓN DE TABLAS **
--************************

	-- TABLA PROYECTOS

	CREATE TABLE proyectos(
	  id BIGSERIAL NOT NULL PRIMARY KEY,
	  titulo VARCHAR(200) NOT NULL,
	  imagen VARCHAR(200) NOT NULL,
	  recaudado float8 NOT NULL,
	  objetivo float8 NOT NULL,
	  descripcion VARCHAR(1000) NOT NULL,
	  dias_restantes int4 NOT NULL,
	  es_top bool NOT NULL
	);

	-- TABLA USUARIOS

	CREATE TABLE usuarios(
	  id BIGSERIAL NOT NULL PRIMARY KEY,
	  name VARCHAR(200) NOT NULL,
	  mail VARCHAR(200) NOT NULL UNIQUE,
	  password VARCHAR(200) NOT NULL
	);
	
	-- TABLA COMENTARIOS 
	
	CREATE TABLE comentarios(
	  id BIGSERIAL NOT NULL PRIMARY KEY,
	  contenido VARCHAR(1000) NOT NULL,  
	  usuario int4 NOT NULL,  
	  fecha VARCHAR(200) NOT NULL,  
	  id_proyecto int4 NOT NULL,
		CONSTRAINT fk_proyecto
		  FOREIGN KEY(id_proyecto) 
		  REFERENCES proyectos(id), 
		CONSTRAINT fk_usuario
		  FOREIGN KEY(usuario) 
		  REFERENCES usuarios(id)
	);


--************************
--**  INSERT EN TABLAS  **
--************************

	-- PROYECTOS 
	
	INSERT INTO proyectos (titulo,imagen,recaudado,objetivo,descripcion,dias_restantes,es_top)
	VALUES ('PROYECTO LISTADO 1','img/mini_item.jpg',525,3000,'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus reiciendis enim facilis sint dignissimos nobis consectetur minima veniam nulla perspiciatis, minus cum facere velit assumenda nostrum fugiat, asperiores mollitia. Quibusdam.',9,False);

	INSERT INTO proyectos (titulo,imagen,recaudado,objetivo,descripcion,dias_restantes,es_top)
	VALUES ('PROYECTO LISTADO 2','img/mini_item.jpg',725,4000,'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus reiciendis enim facilis sint dignissimos nobis consectetur minima veniam nulla perspiciatis, minus cum facere velit assumenda nostrum fugiat, asperiores mollitia. Quibusdam.',12,False);

	INSERT INTO proyectos (titulo,imagen,recaudado,objetivo,descripcion,dias_restantes,es_top)
	VALUES ('PROYECTO LISTADO 3','img/mini_item.jpg',600,8000,'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus reiciendis enim facilis sint dignissimos nobis consectetur minima veniam nulla perspiciatis, minus cum facere velit assumenda nostrum fugiat, asperiores mollitia. Quibusdam.',10,False);

	INSERT INTO proyectos (titulo,imagen,recaudado,objetivo,descripcion,dias_restantes,es_top)
	VALUES ('PROYECTO LISTADO 4','img/mini_item.jpg',400,7500,'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus reiciendis enim facilis sint dignissimos nobis consectetur minima veniam nulla perspiciatis, minus cum facere velit assumenda nostrum fugiat, asperiores mollitia. Quibusdam.',15,False);

	INSERT INTO proyectos (titulo,imagen,recaudado,objetivo,descripcion,dias_restantes,es_top)
	VALUES ('PROYECTO LISTADO 5','img/mini_item.jpg',963,5000,'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus reiciendis enim facilis sint dignissimos nobis consectetur minima veniam nulla perspiciatis, minus cum facere velit assumenda nostrum fugiat, asperiores mollitia. Quibusdam.',20,False);

	INSERT INTO proyectos (titulo,imagen,recaudado,objetivo,descripcion,dias_restantes,es_top)
	VALUES ('PROYECTO TOP 1','img/ejemplo_proyecto.jpg',525,3000,'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus reiciendis enim facilis sint dignissimos nobis consectetur minima veniam nulla perspiciatis, minus cum facere velit assumenda nostrum fugiat, asperiores mollitia. Quibusdam.',9,True);

	INSERT INTO proyectos (titulo,imagen,recaudado,objetivo,descripcion,dias_restantes,es_top)
	VALUES ('PROYECTO TOP 2','img/ejemplo_proyecto.jpg',725,4000,'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus reiciendis enim facilis sint dignissimos nobis consectetur minima veniam nulla perspiciatis, minus cum facere velit assumenda nostrum fugiat, asperiores mollitia. Quibusdam.',9,True);

	INSERT INTO proyectos (titulo,imagen,recaudado,objetivo,descripcion,dias_restantes,es_top)
	VALUES ('PROYECTO TOP 3','img/ejemplo_proyecto.jpg',963,5000,'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus reiciendis enim facilis sint dignissimos nobis consectetur minima veniam nulla perspiciatis, minus cum facere velit assumenda nostrum fugiat, asperiores mollitia. Quibusdam.',9,True);

	-- USUARIOS

	INSERT INTO usuarios (name,mail,password) VALUES ('Daniel Delmonte','daniel@mail.com','$2a$10$GoTWOJyk1FOFxHYRr3/GKei4XdOU7qKONgONvO09RXmw.Vxb4/vgm');

	-- COMENTARIOS
	
	INSERT INTO comentarios (contenido,usuario,fecha,id_proyecto)
	VALUES ('1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt modi veniam, doloremque sed velit qui officiis. Enim illo aut, repellendus dignissimos fugiat nisi praesentium totam quam nemo natus, nesciunt quisquam!',
			1,'Wed, 01 Sep 2021 14:18:58 GMT',1)

	INSERT INTO comentarios (contenido,usuario,fecha,id_proyecto)
	VALUES ('2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt modi veniam, doloremque sed velit qui officiis. Enim illo aut, repellendus dignissimos fugiat nisi praesentium totam quam nemo natus, nesciunt quisquam!',
			1,'Wed, 01 Sep 2021 14:18:58 GMT',1)

	INSERT INTO comentarios (contenido,usuario,fecha,id_proyecto)
	VALUES ('3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt modi veniam, doloremque sed velit qui officiis. Enim illo aut, repellendus dignissimos fugiat nisi praesentium totam quam nemo natus, nesciunt quisquam!',
			1,'Wed, 01 Sep 2021 14:18:58 GMT',1)

