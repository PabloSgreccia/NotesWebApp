en consola:
    1- npm init --> crear el proyecto
    2- instalar modulos: (npm i express express-handlebars express-session method-override mongoose passport passport-local bcryptjs connect-flash)
        - express --> servidor node
        - express-handlebars --> integrar motor de plantillas en express
        - express-session --> crear sesiones en el servidor (para almacenar temporalmente los datos de login)
        - method-override --> ampliar funcionalidad de los formularios (metodos put y delete)
        - mongoose --> permite unir express con la base de datos (para conectar a mongoDB)
        - passport y passport-local --> para autenticar al usuario
        - bcryptjs --> para cifrar determinados datos (contraseña)
        - connect-flash --> para enviar mensajes entre multiples vistas, enviar mensajes con el usuario
        - nodemon (npm i nodemon -D) --> reinicia el servidor con cada cambio automaticamente

npm i express express-handlebars express-session method-override mongoose passport passport-local bcryptjs connect-flash


src/routes --> rutas de navegacion del sitio
src/public --> archivos estaticos (imagenes, fuentes, archovos css js)
src/models --> definir tipos de datos
src/helpers --> funciones que para reutilizar
src/config --> archivos varios (configuracion de variables de entorno, de la base de datos, de la forma que se hace la autenticación)

Para iniciar el servidor: 
    - nodemon src/index.js