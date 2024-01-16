import nodemailer from "nodemailer";

export const EnviarMailServices = async (data) => {
  // Configuración del transporter (puedes ajustar esto según tus necesidades)
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "solicituddeinformacioncna@gmail.com",
      pass: "dvnssqxedvxperyp",
    },
  });

  // Detalles del correo electrónico
  const mailOptions = {
    from: "solicituddeinformacioncna@gmail.com",
    to: data.correo,
    cc: "uip@cna.gob.gt", // Agrega la dirección de correo de copia
    subject: "Ingreso de solicitud - ¡NO RESPONDER A ESTE CORREO! ",
    html: `
    <!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Confirmación de Solicitud</title>
  <style>
  body {
    font-family: 'Arial', sans-serif;
    background-color: #f2f2f2;
    margin: 0;
    padding: 0;
  }
  
  .container {
    max-width: 600px;
    margin: 20px auto;
    background-color: #ffffff;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .header {
    background-color: #3498db;
    color: #ffffff;
    padding: 20px;
    text-align: center;
  }
  
  .content {
    padding: 20px;
  }
  
  .footer {
    background-color: #ecf0f1;
    padding: 10px;
    text-align: center;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }
  
  table, th, td {
    border: 1px solid #ddd;
  }
  
  th, td {
    padding: 15px;
    text-align: left;
  }
  
  th {
    background-color: #3498db;
    color: white;
  }
  
  .justificar-texto {
    text-align: justify;
  }
  
  p {
    margin: 0;
  }
  
  strong {
    font-weight: bold;
  }
  
  /* Estilos adicionales para mejorar la presentación */
  .container {
    transition: transform 0.3s ease-in-out;
  }
  
  .container:hover {
    transform: scale(1.02);
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  }
  
  .header h1 {
    margin: 0;
  }
  
  .table-responsive {
    overflow-x: auto;
  }
  
  .table-responsive table {
    width: 100%;
    min-width: 500px;
  }
  
  .footer p {
    margin-bottom: 0;
  }
    </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Confirmación de Solicitud</h1>
    </div>
    <div class="content">
      <p>Estimado(a): <strong> ${data.nombreCompleto} </strong>,</p>
    <br>
      <p> Tu solicitud ha sido recibida con éxito. A continuación, se detallan los datos que has ingresado: </p>

      <table>
        <tr>
          <th>Campo</th>
          <th>Datos</th>
        </tr>
        <tr>
          <td><strong> Nombre Completo </strong></td>
          <td>${data.nombreCompleto}</td>
        </tr>
        <tr>
          <td><strong> Sexo </strong></td>
          <td>${data.sexo}</td>
        </tr>
        <tr>
            <td><strong> Tipo Documento </strong></td>
            <td>${data.tipoDocumento}</td>
        </tr>
        ${
          data.numeroDocumento
            ? `<tr><td><strong> Número Documento </strong></td><td>${data.numeroDocumento}</td></tr>`
            : ""
        }
        ${
          data.telefono
            ? `<tr><td><strong> Teléfono </strong></td><td>${data.telefono}</td></tr>`
            : ""
        }
        ${data.correo ? `<tr><td><strong> Correo </strong></td><td>${data.correo}</td></tr>` : ""}

        <tr>
            <td><strong> Etnia </strong></td>
            <td>${data.etnia}</td>
        </tr>

        <tr>
            <td><strong> Pertenenecia Sociolingüística </strong></td>
            <td>${data.pertenenciaSocial}</td>
        </tr>

        <tr>
            <td><strong> Descripción de la Solicitud</strong></td>
            <td><p class="justificar-texto">${data.descripcionSolicitud}</p></td>
        </tr>

        <tr>
            <td><strong> Tipo Notificación </strong></td>
            <td>${data.tipoNotificacion}</td>
        </tr>

      </table>
    <br>
      <p class="justificar-texto"> Por este medio se acusa de recibida la solicitud de información pública de conformidad con lo establecido en el artículo 38 del Decreto Número 57-2008 del Congreso de la República Ley de Acceso a la Información Pública. </p>
    </div>
    <div class="footer">
      <p>Consejo Nacional de Adopciones (CNA)</p>
    </div>

  </div>
</body>
</html>
    `,
  };

  // Enviar el correo electrónico
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      console.log("Correo electrónico enviado: " + info.response);
    }
  });
};
