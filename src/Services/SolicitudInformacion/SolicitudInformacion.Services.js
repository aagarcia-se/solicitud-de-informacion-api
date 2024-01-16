import {  GetSolicitudesDao, SaveInformacionDao } from "../../Dao/SolicitudInformacion/SolicitudInformacion.Dao.js";
import { EnviarMailServices } from "../mail/EnviarMail.Services.js";


export const IngresarSolicitudServices = async (data) => {
  try {
    const result = await SaveInformacionDao(data);
    (result === 1) && EnviarMailServices(data);
    return result;
  } catch (error) {
    throw error;
  }
};


export const GetSolicitudesServices = async () => {
  try {
    const solicitudes = await GetSolicitudesDao();
    return solicitudes;
  } catch (error) {
    return error;
  }
};
