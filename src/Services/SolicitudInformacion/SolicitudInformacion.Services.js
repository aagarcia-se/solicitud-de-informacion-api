import {  GetSolicitudesDao, SaveInformacionDao } from "../../Dao/SolicitudInformacion/SolicitudInformacion.Dao.js";
import { EnviarMailServices } from "../mail/EnviarMail.Services.js";


export const IngresarSolicitudServices = async (data) => {
  try {
    const result = await SaveInformacionDao(data);
    (result !== 0) && EnviarMailServices(data);
    if(result !== 0){
      return 1;
    }
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
