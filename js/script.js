// ==========================
// VARIABLES Y CONFIGURACIÓN DEL EXAMEN (QUIZ)
// ==========================

// Se seleccionan todos los pasos del examen (quiz) mediante la clase "paso-quiz"
const pasosExamen = document.querySelectorAll('.paso-quiz');
// Se inicializa el paso actual en 0 (la primera pregunta)
let pasoActual = 0;
// Se define un objeto para acumular el puntaje según cada tipo de piel
const puntaje = { 
  normal: 0, 
  oily: 0, 
  sensitive: 0, 
  combination: 0, 
  dry: 0 
};

// ==========================
// FUNCIONES DEL EXAMEN (QUIZ)
// ==========================

/**
 * Función para procesar la selección de una opción en el examen.
 * Lee el atributo data-skin, separa los tipos (en caso de haber más de uno),
 * y suma puntos según el peso asignado a la pregunta.
 * Luego, llama a la función para avanzar al siguiente paso.
 */
function seleccionarOpcion(elemento) {
  const tiposPiel = elemento.dataset.skin.split(',');
  
  // Recorremos cada tipo de piel indicado en la opción seleccionada
  tiposPiel.forEach(tipoPiel => {
    const tipo = tipoPiel.trim();
    // Si el objeto puntaje contiene la clave del tipo, sumamos el peso correspondiente
    if (puntaje.hasOwnProperty(tipo)) {
      let peso = 1; // Peso base de 1
      const preguntaActual = pasoActual + 1; // Número de la pregunta actual
      // Se asigna mayor peso a ciertas preguntas (1, 3, 4, 7)
      if ([1, 3, 4, 7].includes(preguntaActual)) {
        peso = 2;
      }
      puntaje[tipo] += peso;
    }
  });
  
  // Avanzar al siguiente paso del examen
  siguientePaso();
}

/**
 * Función para avanzar al siguiente paso del examen.
 * Si aún existen pasos, se actualiza el paso actual y se muestra el siguiente.
 * De lo contrario, se calcula el resultado final.
 */
function siguientePaso() {
  if (pasoActual < pasosExamen.length - 1) {
    // Se oculta el paso actual quitando la clase "activo"
    pasosExamen[pasoActual].classList.remove('activo');
    // Se incrementa el contador del paso actual
    pasoActual++;
    // Se muestra el nuevo paso agregando la clase "activo"
    pasosExamen[pasoActual].classList.add('activo');
    // Se actualiza la barra de progreso en base al avance
    actualizarProgreso(((pasoActual + 1) / pasosExamen.length) * 100);
  } else {
    // Si se han respondido todas las preguntas, se calcula el resultado final
    calcularResultado();
  }
}

/**
 * Función para actualizar la barra de progreso.
 * Recibe un porcentaje y lo aplica como ancho al elemento de la barra.
 */
function actualizarProgreso(porcentaje) {
  document.querySelector('.progreso-llenado').style.width = porcentaje + '%';
}

/**
 * Función para calcular el resultado final basado en el puntaje acumulado.
 * Ordena los tipos de piel por puntaje y aplica reglas de desempate para definir
 * el tipo final, considerando combinaciones y sensibilidad.
 */
function calcularResultado() {
  // Ordena las claves del objeto puntaje de mayor a menor
  const tiposOrdenados = Object.keys(puntaje).sort((a, b) => puntaje[b] - puntaje[a]);
  const tipoResultado = tiposOrdenados[0];
  // Verifica si la diferencia entre el primer y segundo tipo es pequeña (<=2 puntos)
  const diferenciaCercana = (puntaje[tiposOrdenados[0]] - puntaje[tiposOrdenados[1]]) <= 2;
  let tipoFinal = tipoResultado;
  
  // Si la diferencia es pequeña, se consideran casos especiales:
  if (diferenciaCercana) {
    // Si los dos principales son "oily" y "dry" (grasa y seca), se define como "combination"
    if ((tiposOrdenados[0] === 'oily' && tiposOrdenados[1] === 'dry') ||
        (tiposOrdenados[0] === 'dry' && tiposOrdenados[1] === 'oily')) {
      tipoFinal = 'combination';
    }
    // Si alguno de los dos primeros es "sensitive", se añade el sufijo "-sensitive" si no es ya el caso
    if (tiposOrdenados[0] === 'sensitive' || tiposOrdenados[1] === 'sensitive') {
      if (tipoFinal !== 'sensitive') {
        tipoFinal = `${tipoFinal}-sensitive`;
      }
    }
  }
  
  // Se muestra el resultado final en la interfaz
  mostrarResultado(tipoFinal);
}
/**
 * Función para mostrar el resultado final en la sección correspondiente.
 * Actualiza los textos, la descripción y las listas de productos recomendados para
 * la rutina de mañana y de noche.
 */
function mostrarResultado(tipoPiel) {
  // Descripciones para cada tipo de piel
  const descripcionesPiel = {
    'normal': 'Tu piel está bien equilibrada, ni demasiado grasa ni demasiado seca. Mantiene un buen nivel de hidratación y raramente presenta problemas.',
    'dry': 'Tu piel tiende a sentirse tirante y puede presentar descamación. Necesita hidratación constante y productos nutritivos.',
    'oily': 'Tu piel produce exceso de sebo, lo que resulta en brillo y posible tendencia al acné. Necesita limpieza adecuada y productos no comedogénicos.',
    'combination': 'Tu piel presenta diferentes características según la zona: típicamente más grasa en la zona T (frente, nariz, barbilla) y normal o seca en las mejillas.',
    'sensitive': 'Tu piel reacciona fácilmente a productos o factores externos, con tendencia al enrojecimiento o irritación. Necesita productos suaves y sin fragancias.',
    'dry-sensitive': 'Tu piel es seca y además sensible. Necesita hidratación intensa pero con productos muy suaves y sin ingredientes irritantes.',
    'oily-sensitive': 'Tu piel es grasa pero también sensible. Requiere un equilibrio entre controlar el exceso de sebo sin usar productos agresivos.',
    'combination-sensitive': 'Tu piel es mixta y sensible. Necesita cuidados específicos para cada zona y productos que no irriten.'
  };
  
  // Rutinas recomendadas para la mañana, según el tipo de piel
  const rutinaManana = {
    'normal': [
      'Limpiador suave',
      'Tónico hidratante',
      'Sérum con antioxidantes',
      'Crema hidratante ligera',
      'Protector solar SPF 30-50'
    ],
    'dry': [
      'Limpiador cremoso sin jabón',
      'Tónico sin alcohol',
      'Sérum con ácido hialurónico',
      'Crema hidratante rica',
      'Protector solar SPF 30-50'
    ],
    'oily': [
      'Gel limpiador',
      'Tónico astringente suave',
      'Sérum con niacinamida',
      'Gel hidratante oil-free',
      'Protector solar oil-free SPF 30-50'
    ],
    'combination': [
      'Gel limpiador suave',
      'Tónico balanceador',
      'Sérum con niacinamida',
      'Hidratante en gel para zona T, crema para mejillas',
      'Protector solar SPF 30-50'
    ],
    'sensitive': [
      'Limpiador suave sin fragancias',
      'Agua termal calmante',
      'Sérum calmante (aloe vera, centella asiática)',
      'Crema hidratante para piel sensible',
      'Protector solar mineral SPF 30-50'
    ],
    'dry-sensitive': [
      'Limpiador cremoso sin fragancias',
      'Agua termal calmante',
      'Sérum hidratante con aloe vera',
      'Crema rica para piel sensible',
      'Protector solar mineral SPF 30-50'
    ],
    'oily-sensitive': [
      'Gel limpiador suave sin sulfatos',
      'Agua termal calmante',
      'Sérum con niacinamida suave',
      'Gel hidratante calmante',
      'Protector solar mineral oil-free SPF 30-50'
    ],
    'combination-sensitive': [
      'Limpiador suave sin fragancias',
      'Agua termal calmante',
      'Sérum calmante multibeneficio',
      'Hidratante en gel para zona T, crema suave para mejillas',
      'Protector solar mineral SPF 30-50'
    ]
  };
  
  // Rutinas recomendadas para la noche, según el tipo de piel
  const rutinaNoche = {
    'normal': [
      'Desmaquillante adecuado',
      'Limpiador suave',
      'Tónico hidratante',
      'Sérum con retinol (2-3 veces por semana)',
      'Crema hidratante nutritiva'
    ],
    'dry': [
      'Aceite o bálsamo desmaquillante',
      'Limpiador cremoso',
      'Tónico hidratante',
      'Sérum con ácido hialurónico',
      'Crema o aceite facial rico'
    ],
    'oily': [
      'Desmaquillante oil-free',
      'Gel limpiador',
      'Tónico con BHA (ácido salicílico)',
      'Sérum con niacinamida o ácido salicílico',
      'Gel hidratante ligero'
    ],
    'combination': [
      'Desmaquillante micelar',
      'Gel limpiador suave',
      'Tónico balanceador',
      'Tratamiento con AHA/BHA en zona T',
      'Hidratante ligero o crema según zona'
    ],
    'sensitive': [
      'Desmaquillante suave sin alcohol',
      'Limpiador suave sin fragancias',
      'Agua termal calmante',
      'Sérum reparador de barrera cutánea',
      'Crema calmante sin fragancias'
    ],
    'dry-sensitive': [
      'Aceite desmaquillante suave',
      'Limpiador cremoso sin fragancias',
      'Agua termal calmante',
      'Sérum con ceramidas',
      'Crema rica reparadora nocturna'
    ],
    'oily-sensitive': [
      'Desmaquillante suave oil-free',
      'Gel limpiador sin sulfatos',
      'Agua termal calmante',
      'Sérum ligero con ácido azelaico',
      'Gel hidratante calmante'
    ],
    'combination-sensitive': [
      'Desmaquillante micelar suave',
      'Limpiador suave sin fragancias',
      'Agua termal calmante',
      'Sérum balanceador suave',
      'Hidratante ligero adaptado a cada zona'
    ]
  };
  
  // Actualiza el contenido del resultado en la interfaz
  document.querySelector('.tipo-resultado').textContent = formatearTipoPiel(tipoPiel);
  document.querySelector('.descripcion-resultado').textContent = descripcionesPiel[tipoPiel] ||
    "Tu piel tiene características únicas. Te recomendamos una rutina personalizada basada en tus necesidades específicas.";
  
  // Se actualizan las listas de productos para las rutinas de mañana y noche
  const listaManana = document.querySelector('.rutina-manana');
  const listaNoche = document.querySelector('.rutina-noche');
  
  // Se limpian las listas
  listaManana.innerHTML = '';
  listaNoche.innerHTML = '';
  
  // Se insertan los productos recomendados para la mañana
  const productosManana = rutinaManana[tipoPiel] || rutinaManana['normal'];
  productosManana.forEach(producto => {
    const li = document.createElement('li');
    li.textContent = producto;
    listaManana.appendChild(li);
  });
  
  // Se insertan los productos recomendados para la noche
  const productosNoche = rutinaNoche[tipoPiel] || rutinaNoche['normal'];
  productosNoche.forEach(producto => {
    const li = document.createElement('li');
    li.textContent = producto;
    listaNoche.appendChild(li);
  });
  
  // Se oculta la sección del examen y se muestra la de resultados
  document.getElementById('examen').style.display = 'none';
  document.getElementById('resultados').style.display = 'flex';
  // Se actualiza la barra de progreso al 100%
  actualizarProgreso(100);
}

/**
 * Función para formatear el nombre del tipo de piel para su presentación.
 * Utiliza un mapa de traducción y, en caso de no encontrarlo, llama a la función capitalizar.
 */
function formatearTipoPiel(tipoPiel) {
  const mapaTipo = {
    'normal': 'Normal',
    'dry': 'Seca',
    'oily': 'Grasa',
    'combination': 'Mixta',
    'sensitive': 'Sensible',
    'dry-sensitive': 'Seca y Sensible',
    'oily-sensitive': 'Grasa y Sensible',
    'combination-sensitive': 'Mixta y Sensible'
  };
  return mapaTipo[tipoPiel] || capitalizar(tipoPiel);
}

/**
 * Función para reiniciar el examen.
 * Resetea el objeto puntaje, reinicia la visualización de los pasos y la barra de progreso,
 * y vuelve a mostrar la sección del examen mientras oculta los resultados.
 */
function reiniciarExamen() {
  // Resetea el puntaje para cada tipo de piel
  Object.keys(puntaje).forEach(clave => {
    puntaje[clave] = 0;
  });
  
  // Se ocultan todos los pasos y se muestra el primero
  pasosExamen.forEach(paso => paso.classList.remove('activo'));
  pasosExamen[0].classList.add('activo');
  pasoActual = 0;
  
  // Se actualiza la barra de progreso a su valor inicial (12.5%)
  actualizarProgreso(12.5);
  // Se muestra el examen y se ocultan los resultados
  document.getElementById('examen').style.display = 'block';
  document.getElementById('resultados').style.display = 'none';
}

// ==========================
// FUNCIONALIDAD DEL SLIDER EN LA BIBLIOTECA
// ==========================
const envolturaSlider = document.querySelector('.envoltura-slider');
const diapositivas = document.querySelectorAll('.diapositiva');
let indiceSlider = 0;

function actualizarSlider() {
  diapositivas.forEach(diapositiva => diapositiva.classList.remove('activo'));
  diapositivas[indiceSlider].classList.add('activo');
  envolturaSlider.style.transform = `translateX(-${indiceSlider * 100}%)`;
}

if (envolturaSlider && diapositivas.length > 0) {
  diapositivas[0].classList.add('activo');
  
  document.querySelector('.boton-slider.siguiente').addEventListener('click', () => {
    indiceSlider = (indiceSlider + 1) % diapositivas.length;
    actualizarSlider();
  });
  
  document.querySelector('.boton-slider.anterior').addEventListener('click', () => {
    indiceSlider = (indiceSlider - 1 + diapositivas.length) % diapositivas.length;
    actualizarSlider();
  });
}

// ==========================
// FUNCIONES ADICIONALES DE LAS SECCIONES
// ==========================
function mostrarInfoTipoPiel(tipo) {
  const info = {
    normal: 'La piel normal es equilibrada y requiere cuidados básicos para mantener su vitalidad.',
    dry: 'La piel seca tiende a sentirse tirante y puede descamarse; necesita hidratación profunda y productos suaves.',
    oily: 'La piel grasa produce más sebo y suele brillar; se recomienda limpieza regular y productos matificantes.',
    combination: 'La piel mixta presenta zonas grasas y secas; se recomienda un cuidado diferenciado en cada área.',
    sensitive: 'La piel sensible reacciona con facilidad a factores externos, por lo que se deben usar productos hipoalergénicos.'
  };
  alert(info[tipo] || 'Información no disponible.');
}

function mostrarPrueba() {
  document.getElementById('prueba').scrollIntoView({ behavior: 'smooth' });
}

// ==========================
// MANEJO DEL MENÚ MÓVIL
// ==========================
const botonMenu = document.querySelector('.boton-menu-movil');
const enlacesNavegacion = document.querySelector('.enlaces-navegacion');

botonMenu.addEventListener('click', () => {
  enlacesNavegacion.classList.toggle('activo');
});

document.querySelectorAll('.enlaces-navegacion a').forEach(enlace => {
  enlace.addEventListener('click', () => {
    enlacesNavegacion.classList.remove('activo');
  });
});

// ==========================
// FILTRADO DE CATEGORÍAS (PRODUCTOS)
// ==========================
// Esta función se encarga de filtrar y mostrar la categoría de productos correspondiente
// al botón de filtro que se haya seleccionado.
document.querySelectorAll('.boton-filtro').forEach(boton => {
  boton.addEventListener('click', () => {
    // Remover clase "activo" de todos los botones de filtro
    document.querySelectorAll('.boton-filtro').forEach(btn => btn.classList.remove('activo'));
    boton.classList.add('activo');
    
    // Ocultar todas las categorías de productos
    document.querySelectorAll('.categoria-piel').forEach(categoria => {
      categoria.classList.remove('activo');
    });
    
    // Obtener el valor del atributo data-piel del botón seleccionado
    const tipoPiel = boton.getAttribute('data-piel');
    // Mostrar la categoría de productos cuyo atributo data-categoria coincida
    const categoriaMostrada = document.querySelector(`.categoria-piel[data-categoria="${tipoPiel}"]`);
    if (categoriaMostrada) {
      categoriaMostrada.classList.add('activo');
    }
  });
});

// ==========================
// HACER CLIC EN EL NOMBRE DEL PRODUCTO
// ==========================
// Se añade un event listener a cada título de producto para que al hacer clic se abra su enlace correspondiente.
document.querySelectorAll('.contenido-producto h4').forEach(heading => {
  heading.style.cursor = 'pointer';
  heading.addEventListener('click', () => {
    const link = heading.parentElement.querySelector('a');
    if (link && link.href) {
      window.open(link.href, '_blank');
    }
  });
});

// ==========================
// HACER CLIC EN LA IMAGEN DEL PRODUCTO
// ==========================
// Se añade un event listener a cada imagen de producto para que al hacer clic se abra su enlace correspondiente.
document.querySelectorAll('.tarjeta-producto img').forEach(image => {
  image.style.cursor = 'pointer';
  image.addEventListener('click', () => {
    // Buscamos el enlace dentro del contenedor de la imagen
    const link = image.parentElement.querySelector('.contenido-producto a');
    if (link && link.href) {
      window.open(link.href, '_blank');
    }
  });
});
