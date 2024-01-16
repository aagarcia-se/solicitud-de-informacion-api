import express from "express";
import cors from "cors"; // Importa cors como una función
import { solicitudRoute } from "./routes/SolicitudInformacion/solicitudInformacion.route.js";

const app = express();
app.use(express.json());
app.use(cors());


app.use('/api/', solicitudRoute)

export default app;