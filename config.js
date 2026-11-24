/**
 * NUESTRA HISTORIA — Archivo de configuración central
 * ----------------------------------------------------
 * Cambia aquí los nombres, fotos, textos y ajustes.
 * No necesitas tocar index.html para personalizar el proyecto.
 *
 * FOTOS: por ahora son marcadores de posición (degradados con un
 * ícono). Para poner las fotos reales, súbelas desde la sección
 * correspondiente en la propia página (botón "Cambiar fotografía"
 * en Portada y en la sección de Foto especial): quedan guardadas
 * de forma privada y persistente, no hay que editar este archivo.
 */
window.NUESTRA_HISTORIA_CONFIG = {
  // ---- Nombres ----
  miNombre: "Jimmy",
  suNombre: "Estefany",

  // ---- Portada ----
  portada: {
    mensaje: "Hay algo que llevo tiempo queriendo decirte...",
    boton: "Abrir esta pequeña sorpresa",
  },

  // ---- Carta de confesión ----
  // Texto exactamente como fue escrito. Las frases que van en
  // "destacar" se resaltan automáticamente dentro del cuerpo.
  carta: {
    encabezado: "PARA TI",
    titulo: "Hay algo que llevo tiempo queriendo decirte...",
    parrafos: [
      "Desde que llegaste a mi vida, muchas cosas han cambiado. Quizá tú no te hayas dado cuenta, pero has conseguido que mis días tengan una ilusión diferente, que una conversación contigo pueda convertirse en uno de mis momentos favoritos y que una simple sonrisa tuya sea capaz de mejorar cualquier día.",
      "No sé exactamente en qué momento comenzaste a ocupar un lugar tan especial en mis pensamientos. Lo que sí sé es que, poco a poco, me has hecho descubrir algo que no estaba buscando, pero que ahora no quisiera dejar pasar.",
      "He aprendido que enamorarse no consiste solamente en encontrar a alguien que te haga sentir mariposas, sino en encontrar a esa persona con quien deseas compartir tus días, conocer sus sueños, escuchar sus historias, acompañarla en sus batallas y celebrar cada uno de sus logros. Y cuando pienso en todo eso, pienso en ti.",
      "No voy a decirte que sé cómo será nuestro futuro, porque nadie puede saberlo. Tampoco voy a prometerte que todo será perfecto. Pero sí puedo decirte que mis intenciones contigo son sinceras y que tengo muchas ganas de construir algo bonito a tu lado.",
      "No quiero que seas una casualidad bonita en mi historia. Quiero que seas esa persona con quien podamos escribir muchos capítulos más. Porque, entre todas las personas que podría encontrar en este mundo, hay una a quien hoy quiero elegir, conocer cada día un poquito más y demostrarle lo especial que es para mí. Y esa persona eres tú.",
      "Por eso, hoy quiero preguntarte algo que para mí significa muchísimo:",
    ],
    // Frases que se destacan dentro de los párrafos anteriores (deben
    // coincidir EXACTAMENTE con una subcadena de alguno de los párrafos).
    destacar: [
      "Y cuando pienso en todo eso, pienso en ti.",
      "Y esa persona eres tú.",
    ],
  },

  // ---- La gran pregunta ----
  propuesta: {
    intro: "Y si me permites, me gustaría que esta historia tuviera muchos capítulos más...",
    pregunta: "¿Quieres ser mi novia?",
    botonSi: "Sí, quiero",
    botonHablar: "Quiero hablarlo contigo",
  },

  // ---- Celebración y contador ----
  // fechaInicio: fecha y hora FIJAS en que se aceptó la propuesta.
  // Formato ISO con la zona horaria de Lima (UTC-05:00) incluida,
  // así el conteo es exacto sin importar desde dónde se abra la página.
  celebracion: {
    titulo: "Llevamos juntos",
    desdeTexto: "Desde el",
    fechaInicio: "2026-11-22T22:45:00-05:00",
  },

  // ---- Fotografía especial y frase final ----
  fotoFinal: {
    frase:
      "Qué extraña manera tiene el destino de escribir. Que, entre millones de historias posibles, decidió poner tu nombre en una de mis páginas favoritas.",
  },

  // ---- Álbum de recuerdos ----
  album: {
    titulo: "Nuestros recuerdos",
    subtitulo: "Cada fotografía guarda un momento. Y quiero guardar muchos contigo.",
    tiposPermitidos: ["image/jpeg", "image/jpg", "image/png", "image/webp"],
    tamanoMaximoMB: 15,
  },

  // ---- Música romántica opcional ----
  // Déjalo vacío ("") para que el control de música no aparezca.
  // Si agregas una URL de audio (mp3/ogg) propia o con licencia,
  // el control de reproducción/pausa aparecerá automáticamente.
  musica: {
    url: "",
    titulo: "",
  },
};
