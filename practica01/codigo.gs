// regresa de forma textual los parámetros leidos con get
  const doGet = (e = {}) => {
    const { parameter } = e;
    const { nombre = 'Arnold', apellido = 'GetSchwarzenegger', tel,dir,edad } = parameter;
    const salida = `Hola ${nombre} ${apellido} ${tel} ${dir} ${edad}`;
    return ContentService.createTextOutput(salida);
  };

// regresa de forma textual los parámetros leidos con post
  const doPost = (e = {}) => {
    const { parameter } = e;
    const { nombre = 'Arnold', apellido = 'PostSchwarzenegger',tel, dir,edad } = parameter;
    const salida = `Hola ${nombre} ${apellido} ${tel} ${dir} ${edad}`;
    return ContentService.createTextOutput(salida);
  };