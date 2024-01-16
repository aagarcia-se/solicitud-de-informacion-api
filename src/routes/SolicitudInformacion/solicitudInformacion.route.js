import { Router } from "express";
import { GetSolicitudesController, IngresarSolicitudController } from "../../Controller/SolicitudInformacion/SolicitudInformacion.Controller.js";


export const solicitudRoute = Router();

solicitudRoute.post('/saveSolicitud', IngresarSolicitudController);
solicitudRoute.get('/solicitudes', GetSolicitudesController);