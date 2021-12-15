# ProyectoSenpai_Proyecto_Final
Entrega final para la aprobación del curso Full Stack Developer de Senpai Academy Uy



**** Alcance de la TERCER entrega:

A grandes rasgos, lo que se hizo para esta última entrega fue migrar el Sitio Web anterior a un nuevo sitio desarrollado en REACT 
donde se aplicaron la mayoría de los conceptos vistos en clases (componentes, one single page, useEffects, Routes, etc..)

A nivel de BackEnd, se hicieron los ajustes necesarios para el acceso a la Base de Datos de Postgre SQL.
Antes los datos se mantenían en memoria, ahora se enceuntran en Base de Datos.
Además se genero el script SQL necesario para la creación de base de datos y tablas, así también como para la insercción de datos primarios.

Algunos detalles más:

		**** PROYECTO - BACKEND

				-- Servidor Node JS 
				
				-- Puerto definido: 3000
				
				-- Librerias Utilizadas
						-- express
						-- bcrypt
						-- cors
						-- body-parser
						-- node-fetch
						-- jsonwebtoken	
						-- dotenv
						-- pg	
						
				-- Rutas definidas: 
						-- /user 
								EndPoints
									-- "/register" (POST)
											-- Guarda un nuevo usuario en nuestros datos y retorna la info del mismo en formato JSON
									-- "/login" (POST)
											-- Realiza el Login de un usuario recibiendo usuario/password y devolviendo la validación o no del usuario.
											
									** El cambio aplicado para esta entrega es la incorporación del registro y consulta de datos en Base de Datos
				
						-- /proyecto
								EndPoints: 
									-- "/" (GET)
											-- Retorna todos los Proyectos en formato JSON
									-- "/top" (GET)
											-- Retorna 3 Proyectos en formato JSON
									-- "/:id"  (GET)
											-- Retorna el Proyecto con ID = al parámetro recibido
									-- "/comentario/add" (POST)
											-- Agrega un Comentario a un Proyecto
						
									** El cambio aplicado para esta entrega es la incorporación del registro y consulta de datos en Base de Datos
								
		**** PROYECTO - FRONTEND

					** CAMBIOS APLICADOS EN ESTA TERCERA ENTREGA:			
					
						-- Migración del sitio web a REACT
							-- Página Principal y de Detalle de Proyectos.
							-- Validación y Registro de nuevo Usuario
								-- Por ahora solo realizamos los metodos, obtenemos la respuesta y nada más. 
								-- Quedaría a futuro redireccionar al usuario logueado a la página principal y gestionar todo lo relacionado con el Token y demás.
							-- Datos del Usuario de Prueba ya creado en BD: 
								-- User: daniel@mail.com
								-- Pass: 1112
						
						-- La página principal ahora obtiene la información de los proyectos desde el Servidor creado en Node, antes cargaba los datos desde este mismo sitio web.
						
						-- El redireccionamiento a la página de detalle de cada proyecto, al hacer click en cada item, se realiza utilizando Routes de React.
						
						-- La página de detalle ahora trae la info del proyecto vía API accediendo al Servidor de Node creado, trayendo la info de la BD.
						
						-- Se mantiene la funcionalidad de guardar un nuevo comentario para un Proyecto vía API accediendo al Servidor de Node creado, el cambio ahora es a nivel de BD.
						
		****  INSTALACIÓN

					** BASE DE DATOS
						-- Se debe tener instalado un servidor Postgre SQL en el PC 
						-- Correr el Script ubicado en la carpeta "Proyecto_Final" llamado "database.sql"
						-- Esto debería crear una base de datos llamada "proyecto_senpai" con 3 tablas y datos cargados.
						-- Modificar los datos de configuración que se encuentran en el archivo ".env" de la carpeta "backend"
							-- Poner allí los datos necesarios del servidor local.
					
					** SERVIDOR
						-- Levantar el "Proyecto_Final" en VSCode
						-- Acceder por consola a la carpeta "backend"
						-- Ejecutar "npm install" para instalar las dependencias necesarias indicadas en el archivo "package.json"
						-- Una vez finalizadas la instalación anterior, ejecutar "node app.js"
						-- Esto debería levantar nuestro servidor, probar entrar desde el navegador (http://localhost:3000/) y ver que este todo OK.
					
					** SITIO WEB
						-- Una vez que el Servidor esté levantado, se deberá ejecutar la aplicación REACT
							-- Acceder por consola a la carpeta "frontend"
							-- Ejecutar "npm start" para correr la aplicación REACT.
							-- Se debería levantar un navegador con el sitio corriendo.
