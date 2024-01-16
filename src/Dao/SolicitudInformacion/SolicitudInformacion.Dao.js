import { cerrarConexion, establecerConexion } from "../Connection/Connection.js";


export const SaveInformacionDao = async (data) => {
    let connection ;

    try{
        connection = await establecerConexion();
        const [result] = await connection.query("insert into informacion (nombreCompleto, sexo, tipoDocumento, numeroDocumento, telefono, correo,etnia, pertenenciaSocial, descripcionSolicitud, tipoNotificacion)values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);", [data.nombreCompleto, data.sexo, data.tipoDocumento, data.numeroDocumento,data.telefono, data.correo, data.etnia, data.pertenenciaSocial, data.descripcionSolicitud, data.tipoNotificacion]);
        return result.affectedRows;
    }catch(error){
        throw error;
    }finally{
        cerrarConexion(connection);
    }
}


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
