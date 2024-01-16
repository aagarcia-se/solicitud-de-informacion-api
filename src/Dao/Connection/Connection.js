import { createPool } from "mysql2/promise";
import { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_PORT, DB_USER } from "../../config.js";


export const Connection = createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
    database: DB_DATABASE
});

// Función para establecer la conexión
export const establecerConexion = async () => {
    try {
        // Obtener una conexión del pool
        const connection = await Connection.getConnection();
        console.log('Conexión establecida correctamente');
        return connection;
    } catch (error) {
        console.error('Error al establecer la conexión:', error.sqlMessage);
        // Realizar acciones de manejo de errores, como enviar una respuesta de error al cliente
        throw error;
    }
};

// Función para cerrar la conexión
export const cerrarConexion = (connection) => {
    if (connection) {
        connection.release();
        console.log('Conexión cerrada correctamente');
    }
};
