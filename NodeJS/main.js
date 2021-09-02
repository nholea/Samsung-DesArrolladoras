//Requerir el interfaz http
const http = require('http');

//Definir el puerto a utilizar
const port = 3000;

//Requerir el módulo querystring
const querystring = require('querystring');

//Importar el cliente de MongoDB
const MongoClient = require('mongodb').MongoClient;

//Especificar la URL de conexión por defecto al servidor
const url = 'mongodb://localhost:27017';

//Nombre de la base de datos
const dbName = 'nodejs-mongo';

//Instancia del cliente de MongoDB
const client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,

});

//Crear el servidor y definir la respuesta que se le da a las peticiones
const server = http.createServer((request, response) => {
    //Extraer el contenido de la petición
    const {
        headers,
        method,
        url
    } = request;
    console.log('headers', headers);
    console.log('method', method);
    console.log('url', url);

    //Cuerpo de la petición
    let body = [];

    request.on('error', (error) => {
        console.error(error);
    }).on('data', (chunck) => {
        //Datos del cuerpo puede venir en partes aquí se concatenan 
        body.push(chunck);

    }).on('end', () => {
        //Cuerpo completo del a petición
        body = Buffer.concat(body).toString();
        //Documento a insertar
        //querystring.parse() Deserializa una cadena de consulta a un objeto
        let document = querystring.parse(body);
        console.log('body', body);
        console.log('usuario', document);

        //Conectar el cliente al servidor
        client.connect().then(async () => {
            console.log('Conectado con éxito al servidor');
            const db = client.db(dbName);
            //Referencia colección
            const collection = db.collection('usuarios');

            //Insertar documento
            let insertUsuario = await collection.insertOne(document);
            console.log('Resultado de la inserción:', insertUsuario.result);
            //Recuperar documentos
            let recupUsuarios = await collection.find({}).toArray();
            console.log('Documentos recuperados:', recupUsuarios);
            client.close();

            //Código de estado HTTP que se devuelve
            response.statusCode = 200;
            //Encabezados de la respuesta, JSON
            response.setHeader('Content-type', 'application/json');
            //Contenido de la respuesta
            //JSON.stringify() convierte un objeto o valor de Javascript en una cadena de texto JSON
            response.write(JSON.stringify(recupUsuarios));
            response.end();
        }).catch((error) => {
            console.log('Se produjo algún error en las operaciones con la base de datos:', error);
            client.close();
        })
    })
});

//Ejecutar el servicio para que permanezca a la espera de peticiones
server.listen(port, () => {
    console.log('Servidor ejecutándose...');
    console.log('Abrir en un navegador http://localhost:3000');
});