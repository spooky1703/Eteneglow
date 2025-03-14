/* ================================================== */
/* VARIABLES Y RESET                                  */
/* ================================================== */
:root {
  --primario: #FFB3C1;
  --secundario: #FFE5EC;
  --acento: #FF8FAB;
  --oscuro: #2F4858;
  --fondo: #FFF8F0;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', sans-serif;
  background: var(--fondo);
  color: var(--oscuro);
  line-height: 1.6;
  scroll-behavior: smooth;
  overflow-x: hidden;
}

/* ================================================== */
/* ENLACES E IMÁGENES                                 */
/* ================================================== */
a {
  text-decoration: none;
}

img {
  max-width: 100%;
  display: block;
}

/* ================================================== */
/* ENCABEZADO Y NAVEGACIÓN                           */
/* ================================================== */
header {
  background: var(--primario);
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0,0,0,0.15);
}

.contenedor-navegacion {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-family: 'Playfair Display', serif;
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--oscuro);
}

.enlaces-navegacion {
  display: flex;
  gap: 1.5rem;
  list-style: none;
}

.enlaces-navegacion a {
  color: var(--oscuro);
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.3s;
}

.enlaces-navegacion a:hover {
  color: var(--acento);
}

.boton-menu-movil {
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: var(--oscuro);
  cursor: pointer;
}

/* ================================================== */
/* SECCIONES GENERALES                                */
/* ================================================== */
section {
  min-height: 100vh;
  padding: 4rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  position: relative;
}

.aparecer {
  animation: aparecerArriba 0.7s ease forwards;
  opacity: 0;
}

@keyframes aparecerArriba {
  from {
      opacity: 0;
      transform: translateY(20px);
  }
  to {
      opacity: 1;
      transform: translateY(0);
  }
}

/* ================================================== */
/* ESTILOS DEL HERO                                  */
/* ================================================== */
.hero {
  background: linear-gradient(
      rgba(255, 179, 193, 0.8),
      rgba(255, 229, 236, 0.8)
    ),
    url('https://via.placeholder.com/1600x900') center/cover no-repeat;
  color: #fff;
  padding-top: 6rem;
}

.hero h1 {
  font-family: 'Playfair Display', serif;
  font-size: 3rem;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 8px rgba(0,0,0,0.3);
}

.hero p {
  font-size: 1.3rem;
  margin-bottom: 2rem;
  text-shadow: 1px 1px 5px rgba(0,0,0,0.3);
}

.boton-cta {
  background: var(--acento);
  color: #fff;
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 50px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background 0.3s, transform 0.3s;
}

.boton-cta:hover {
  background: #e67a9b;
  transform: scale(1.05);
}

/* ================================================== */
/* CONTENEDOR GENERAL                                */
/* ================================================== */
.contenedor {
  max-width: 1200px;
  margin: 0 auto;
}

/* ================================================== */
/* ACERCA, EQUIPO Y OTROS CONTENIDOS                 */
/* ================================================== */
#acerca {
  padding-top: 2rem;
  padding-bottom: 2rem;
  min-height: auto;
}

.about-wrapper {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
}

.about-container {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  text-align: left;
  align-items: center;
  justify-content: center;
}

.about-image img {
  width: 100%;
  max-width: 500px;
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
}

.about-content {
  flex: 1;
  max-width: 500px;
}

.about-content h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.about-content p {
  font-size: 1.2rem;
  line-height: 1.8;
}

/* ================================================== */
/* EQUIPO                                            */
/* ================================================== */
.team-section {
  background: var(--secundario);
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
}

.team-section h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
}

/* En pantallas grandes se muestran los 7 en una fila */
.team-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 1rem;
  justify-items: center;
}

.team-member {
  background: #fff;
  padding: 1rem;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  transition: transform 0.3s, box-shadow 0.3s;
  width: 100%;
  max-width: 180px;
  text-align: center;
}

.team-member:hover {
  transform: translateY(-8px);
  box-shadow: 0 6px 20px rgba(0,0,0,0.12);
}

.team-member img {
  border-radius: 50%;
  width: 120px;
  height: 120px;
  object-fit: cover;
  margin-bottom: 1rem;
}

.team-member h3 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.team-member p {
  font-size: 0.95rem;
  color: var(--acento);
}

/* Responsive: en pantallas hasta 768px, mostrar 2 elementos por fila */
@media (max-width: 768px) {
  .team-grid {
      grid-template-columns: repeat(2, 1fr);
  }
}

/* ================================================== */
/* SECCIÓN TIPOS DE PIEL                              */
/* ================================================== */
#tipos {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(255,179,193,0.7), rgba(255,229,236,0.7));
  padding: 3rem 2rem;
}

#tipos .contenedor {
  text-align: center;
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.section-description {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.tipos-piel {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
}

.tipo-piel {
  background: #fff;
  padding: 1.5rem;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  width: 280px;
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
}

.tipo-piel:hover {
  transform: translateY(-8px);
  box-shadow: 0 6px 20px rgba(0,0,0,0.12);
}

.tipo-piel-icon {
  font-size: 2.2rem;
  margin-bottom: 0.5rem;
  color: var(--acento);
}

/* ================================================== */
/* SECCIÓN TEST (EXAMEN Y RESULTADO)                  */
/* ================================================== */
#prueba {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 2rem;
  background: var(--secundario);
}

.contenedor-prueba {
  display: flex;
  gap: 2rem;
  width: 100%;
  max-width: 1000px;
}

.seccion-quiz,
.seccion-resultado {
  flex: 1;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
  background: #fff;
}

.barra-progreso {
  height: 8px;
  background: #ddd;
  border-radius: 4px;
  overflow: hidden;
  margin: 1rem auto 2rem;
  width: 80%;
}

.progreso-llenado {
  height: 100%;
  background: var(--acento);
  width: 0;
  transition: width 0.5s ease;
}

.paso-quiz {
  display: none;
}

.paso-quiz.activo {
  display: block;
}

.cuadricula-opciones {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.tarjeta-tipo-piel {
  background: #fff;
  border-radius: 15px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
}

.tarjeta-tipo-piel:hover {
  transform: translateY(-8px);
  box-shadow: 0 6px 20px rgba(0,0,0,0.12);
}

/* ================================================== */
/* SECCIÓN RESULTADO                                */
/* ================================================== */
.seccion-resultado {
  display: none;
}

.tarjeta-resultado {
  text-align: center;
  font-size: 1.2rem;
  background: #f0fff0;
  border: 1px solid #98fb98;
  padding: 20px;
  border-radius: 10px;
  margin: 20px auto;
}

.tipo-resultado {
  font-weight: bold;
}

.descripcion-resultado {
  margin-top: 1rem;
}

.plan-rutina {
  margin-top: 2rem;
}

.pasos-rutina {
  display: flex;
  gap: 2rem;
  justify-content: center;
  margin-top: 1rem;
}

.paso-rutina {
  flex: 1;
  padding: 1rem;
}

.lista-productos {
  list-style: none;
  margin-top: 0.5rem;
}

.rutina-manana,
.rutina-noche {
  text-align: left;
}

/* ================================================== */
/* SLIDER DE PRODUCTOS (COMBINADO)                    */
/* ================================================== */
.slider-seccion h2 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
}

.contenedor-slider {
  overflow: hidden;
  position: relative;
}

.envoltura-slider {
  display: flex;
  transition: transform 0.6s cubic-bezier(0.4,0,0.2,1);
  width: 100%;
  gap: 0;
  font-size: 0;
}

.diapositiva {
  flex: 0 0 100%;
  max-width: 100%;
  padding: 0;
  margin: 0;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
  font-size: initial;
  position: relative;
}

.diapositiva.activo {
  opacity: 1;
  visibility: visible;
}

/* Leyenda para indicar el tipo de piel */
.leyenda {
  position: absolute;
  top: 10px;
  left: 10px;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 5px 12px;
  font-size: 1rem;
  border-radius: 5px;
  z-index: 10;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.diapositiva.activo .leyenda {
  opacity: 1;
}

/* Dentro de cada grupo, las tarjetas se muestran en línea */
.grupo-slider {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
}

.tarjeta-producto {
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
}

.tarjeta-producto:hover {
  transform: translateY(-8px);
  box-shadow: 0 6px 20px rgba(0,0,0,0.12);
}

.tarjeta-producto img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  object-position: center;
  border-radius: 15px 15px 0 0;
}

.contenido-producto {
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

/* Se ha agregado display inline-block para que el enlace sea visible en laptop */
.contenido-producto a {
  color: var(--acento);
  font-weight: 600;
  transition: color 0.3s;
  display: inline-block;
  margin-top: 0.5rem;
}

.contenido-producto a:hover {
  color: var(--oscuro);
}

.contenido-producto h4 {
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
}

/* ================================================== */
/* BOTONES DEL SLIDER                               */
/* ================================================== */
.boton-slider {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: var(--acento);
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  cursor: pointer;
  opacity: 0.9;
  transition: opacity 0.3s, transform 0.3s;
  z-index: 2;
}

.boton-slider:hover {
  opacity: 1;
  transform: translateY(-50%) scale(1.1);
}

.boton-slider.anterior {
  left: 15px;
}

.boton-slider.siguiente {
  right: 15px;
}

/* ================================================== */
/* RETROALIMENTACIÓN                                */
/* ================================================== */
#retroalimentacion {
  background: var(--secundario);
  width: 100%;
  padding: 3rem 2rem;
  margin: 0;
}

.contenedor-retroalimentacion {
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
}

#retroalimentacion h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.testimonio,
.contacto {
  background: #fff;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
  flex: 1;
  min-width: 300px;
}

.testimonio p {
  font-style: italic;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.testimonio h4 {
  font-weight: 700;
  font-size: 1.1rem;
}

.contacto p {
  font-size: 1.2rem;
}

/* ================================================== */
/* FILTROS                                          */
/* ================================================== */
.filtros-piel {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin: 2rem 0;
}

.boton-filtro {
  background: var(--secundario);
  border: 2px solid var(--acento);
  padding: 0.8rem 2rem;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s;
}

.boton-filtro.activo {
  background: var(--acento);
  color: white;
}

/* ================================================== */
/* CATEGORÍAS                                       */
/* ================================================== */
.categoria-piel {
  display: none;
}

.categoria-piel.activo {
  display: block;
}

.slider-container {
  margin: 3rem 0;
}

.slider-container h4 {
  color: var(--oscuro);
  font-size: 1.4rem;
  margin-bottom: 1.5rem;
  padding-left: 1rem;
  border-left: 4px solid var(--acento);
}

/* ================================================== */
/* FORMULARIO DE CONTACTO                           */
/* ================================================== */
#formulario-contacto {
  max-width: 600px;
  margin: 20px auto;
}

.formulario-grupo {
  margin-bottom: 15px;
}

.formulario-grupo label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

.formulario-grupo input,
.formulario-grupo textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

/* ================================================== */
/* PIE DE PÁGINA                                    */
/* ================================================== */
footer {
  background: var(--primario);
  padding: 2rem 0;
  text-align: center;
}

footer p {
  font-size: 0.9rem;
}

/* ================================================== */
/* RESPONSIVE PARA TELÉFONOS                         */
/* ================================================== */
@media (max-width: 600px) {
  .contenedor {
      padding: 0 1rem;
  }
  
  header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      padding: 0.8rem 1rem;
      z-index: 1000;
  }
  body {
      padding-top: 60px;
  }
  
  .enlaces-navegacion {
      flex-direction: column;
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: var(--primario);
      padding: 1rem 0;
      text-align: center;
      display: none;
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.4s ease;
  }
  .enlaces-navegacion.activo {
      display: flex;
      max-height: 500px;
  }
  .enlaces-navegacion li {
      margin: 0.5rem 0;
  }
  .boton-menu-movil {
      display: block;
  }
}

/*
             ,-.----.        ,----..        ,----..           ,--.
  .--.--.    \    /  \      /   /   \      /   /   \      ,--/  /|
 /  /    '.  |   :    \    /   .     :    /   .     :  ,---,': / '         ,---,
|  :  /`. /  |   |  .\ :  .   /   ;.  \  .   /   ;.  \ :   : '/ /         /_ ./|
;  |  |--`   .   :  |: | .   ;   /  ` ; .   ;   /  ` ; |   '   ,    ,---, |  ' :
|  :  ;_     |   |   \ : ;   |  ; \ ; | ;   |  ; \ ; | '   |  /    /___/ \.  : |
 \  \    `.  |   : .   / |   :  | ; | ' |   :  | ; | ' |   ;  ;     .  \  \ ,' '
  `----.   \ ;   | |`-'  .   |  ' ' ' : .   |  ' ' ' : :   '   \     \  ;  `  ,'
  __ \  \  | |   | ;     '   ;  \; /  | '   ;  \; /  | |   |    '     \  \    '
 /  /`--'  / :   ' |      \   \  ',  /   \   \  ',  /  '   : |.  \     '  \   |
'--'.     /  :   : :       ;   :    /     ;   :    /   |   | '_\.'      \  ;  ;
  `--'---'   |   | :        \   \ .'       \   \ .'    '   : |           :  \  \
             `---'.|         `---`          `---`      ;   |,'            \  ' ;
               `---`                                   '---'               `--`
*/
