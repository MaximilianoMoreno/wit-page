/**
 * para cargar cursos, vamos a crear un objeto siguiendo la estructura
 * parametroDeLaURL: {
 *   nombreCurso: "NombreDelCurso ",
 *   diaCursado: "DiasDeCursado",
 *   urlIframe: "UrlDelIframe",
 * },
 * 
 * los parametros que puedo modificar son:
 *  - parametroDeLaURL, con el valor que va a venir en la URL (sin comillas)
 *  - NombreDelCurso, el nombre que se va a mostrar como tìtulo (entre comillas dobles o simples, no importa)
 *  - DiasDeCursado, los dias que sea van a mostrar como texto (entre comillas dobles o simples, no importa)
 *  - UrlDelIframe, la url que va a cargar genially(entre comillas dobles o simples, no importa)
 *    esta url la sacamos de la etiqueta iframe y buscamos el atributo src,
 *    ejemplo: <iframe blablabla src="https://www.genially......."> 
 * 
 * 
 * EJEMPLO, quiero agregar el curso Kids 3, entonces tengo que crear un "objeto"
 *
 *  kids3: {
 *   nombreCurso: "Kids 3",
 *   diaCursado: "DLunes y Miércoles de 16 a 17.30",
 *   urlIframe: "https://view.genial.ly/60245475cd123c0d1ce7ebf2",
 + },
 * 
 * 
 * 
 */

const CURSOS = {
  adults1: {
    nombreCurso: "Adults 1",
    diaCursado: "Lunes y Miércoles de 10 a 11.30",
    urlIframe: "https://view.genial.ly/60245475cd123c0d1ce7ebf2",
  },
  adults2: {
    nombreCurso: "Adults 2",
    diaCursado: "Lunes y Miércoles de 20.30 a 22",
    urlIframe: "https://view.genial.ly/60245475cd123c0d1ce7ebf2",
  },
  adults3: {
    nombreCurso: "Adults 3",
    diaCursado: "Lunes y Miércoles de 10 a 11.30",
    urlIframe: "https://view.genial.ly/60245475cd123c0d1ce7ebf2",
  },
  adults4: {
    nombreCurso: "Adults 4",
    diaCursado: "Martes y Jueves de 20.30 a 22",
    urlIframe: "https://view.genial.ly/602325813cb0490d27f878fa",
  },
  adults5: {
    nombreCurso: "Adults 5",
    diaCursado: "Martes y Jueves de 20.30 a 22",
    urlIframe: "https://view.genial.ly/602325813cb0490d27f878fa",
  },
  perfecting: {
    nombreCurso: "Perfecting",
    diaCursado: "Martes y Jueves de 20.30 a 22",
    urlIframe: "https://view.genial.ly/602325813cb0490d27f878fa",
  },
  kids1: {
    nombreCurso: "Kids 1",
    diaCursado: "Lunes y Miércoles de 17 a 18.30",
    urlIframe: "https://view.genial.ly/60245475cd123c0d1ce7ebf2",
  },
  bigkids1: {
    nombreCurso: "Big Kids 1",
    diaCursado: "Lunes y Miércoles de 18.45 a 20.15",
    urlIframe: "https://view.genial.ly/60245475cd123c0d1ce7ebf2",
  },
  kids1mm: {
    nombreCurso: "Kids 1",
    diaCursado: "Martes y Jueves de 10 a 11.30",
    urlIframe: "https://view.genial.ly/602325813cb0490d27f878fa",
  },
  kids1mt: {
    nombreCurso: "Kids 1",
    diaCursado: "Martes y Jueves de 18.45 a 20.15",
    urlIframe: "https://view.genial.ly/602325813cb0490d27f878fa",
  },
  kids2: {
    nombreCurso: "Kids 2",
    diaCursado: "Martes y Jueves de 18.45 a 20.15",
    urlIframe: "https://view.genial.ly/602325813cb0490d27f878fa",
  },
  bigkids1: {
    nombreCurso: "Big Kids 1",
    diaCursado: "Lunes y Miércoles de 18.45 a 20.15",
    urlIframe: "https://view.genial.ly/602325813cb0490d27f878fa",
  },
  youngsters1mt: {
    nombreCurso: "Youngsters 1",
    diaCursado: "Martes y Jueves de 17 a 18.30",
    urlIframe: "https://view.genial.ly/60245475cd123c0d1ce7ebf2",
  },
  youngsters1: {
    nombreCurso: "Youngsters 1",
    diaCursado: "Lunes y Miércoles de 18.45 a 20.15",
    urlIframe: "https://view.genial.ly/60245475cd123c0d1ce7ebf2",
  },
  youngsters2: {
    nombreCurso: "Youngsters 2",
    diaCursado: "Lunes y Miércoles de 18.45 a 20.15",
    urlIframe: "https://view.genial.ly/60245475cd123c0d1ce7ebf2",
  },
};

// NO TOCAR!!!!
function init() {
  buscarCurso();
}

function buscarCurso() {
  let nombreCurso = obtenerValorParametroURL("curso");
  let curso = CURSOS[nombreCurso];
  if (curso) {
    document.getElementById("nombre-curso").innerText = curso.nombreCurso;
    document.getElementById("dia-cursado").innerText = curso.diaCursado;
    document.getElementById("url-iframe").src = curso.urlIframe;
  } else {
    document.getElementById("overlay").style.display = "block";
  }
}

function obtenerValorParametroURL(nombreParam) {
  let stringParametrosURL = window.location.search.substring(1),
    stringVariablesURL = stringParametrosURL.split("&"),
    stringNombreParametro,
    i;

  for (i = 0; i < stringVariablesURL.length; i++) {
    stringNombreParametro = stringVariablesURL[i].split("=");

    if (stringNombreParametro[0] === nombreParam) {
      return typeof stringNombreParametro[1] === undefined
        ? true
        : decodeURIComponent(stringNombreParametro[1]);
    }
  }
  return false;
}
