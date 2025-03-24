import { createClient } from "@libsql/client";


// Crear cliente de conexión a SQLite usando @libsql/client
export const Connection = createClient({
    url: "libsql://solicitudesinfodb-desarrollocna.turso.io", // URL proporcionada por el servicio Turso
    authToken: "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3NDI4NTQ1NjIsImlkIjoiOTMyMmMzYjgtNTAzMi00NGIwLTk4NjUtODMzYWY5MDY3YmI5IiwicmlkIjoiZGE4ZDc1NGQtNmIwOC00ZGQ4LWJlOTgtNDE0ZmQzMjU1YjQxIn0.BJ1QkblViKYzouxKnaqTO5L5CU7nNxEcHT94iYovo_-lAcWG_KCkLtu5Ftm7K_WlcWV6thYVRxau_YNE6h_dAw", // Token de autenticación si aplica
});
