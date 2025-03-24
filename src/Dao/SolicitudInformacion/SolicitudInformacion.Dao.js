import { Connection } from "../Connection/ConecctionSqlit.js";

export const SaveInformacionDao = async (data) => {
    try {
        const query = ` INSERT INTO informacion ( nombreCompleto, sexo, tipoDocumento, numeroDocumento, telefono, correo,
                                                  etnia, pertenenciaSocial, descripcionSolicitud, tipoNotificacion)
                        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
        `;

        const result = await Connection.execute(query, [
            data.nombreCompleto, 
            data.sexo, 
            data.tipoDocumento, 
            data.numeroDocumento,
            data.telefono, 
            data.correo, 
            data.etnia, 
            data.pertenenciaSocial, 
            data.descripcionSolicitud, 
            data.tipoNotificacion
        ]);
        
        // SQLite devuelve el ID del último registro insertado así
        return result.toJSON().lastInsertRowid;
    } catch (error) {
        const dbError = getDatabaseError(error.message);
        throw new CustomError(dbError);
    }
};

export const GetSolicitudesDao = async () => {
    let connection ;

    try{
        connection = await establecerConexion();
        const [solicitudes] = await connection.query("SELECT nombreCompleto, sexo, tipoDocumento, numeroDocumento,  telefono,correo, etnia, pertenenciaSocial, descripcionSolicitud, tipoNotificacion FROM informacion;");
        return [solicitudes];
    }catch(error){
        throw error;
    }finally{
        cerrarConexion(connection);
    }
}
