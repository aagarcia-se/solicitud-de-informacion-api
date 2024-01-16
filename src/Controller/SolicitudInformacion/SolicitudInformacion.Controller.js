import { GetSolicitudesServices, IngresarSolicitudServices } from "../../Services/SolicitudInformacion/SolicitudInformacion.Services.js";


export const IngresarSolicitudController = async (req, res) => {
    try{
        const result = await IngresarSolicitudServices(req.body);
        res
        .status(200)
        .json({status: "OK",  data: "Datos ingresados correctamente", affectedRows: result});

    }catch(error){
        const statusCode = error?.status || 500;
        res
            .status(statusCode)
            .json({ status: "FAILED", data: error?.message || error, statusCode });
    }

}


export const GetSolicitudesController = async (req, res) =>{
    try{
        const [solicitudes] = await GetSolicitudesServices();
        res.json({solicitudes});
    }catch(error){
        return res.status(500).json({
            message: error
        });
    }
}