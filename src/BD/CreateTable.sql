CREATE TABLE informacion (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombreCompleto TEXT NOT NULL,
    sexo TEXT,
    tipoDocumento TEXT,
    numeroDocumento TEXT,
    telefono TEXT,
    correo TEXT,
    etnia TEXT,
    pertenenciaSocial TEXT,
    descripcionSolicitud TEXT,
    tipoNotificacion TEXT,
    estado TEXT DEFAULT 'A',
    fechaCreacion DATETIME DEFAULT CURRENT_TIMESTAMP
);