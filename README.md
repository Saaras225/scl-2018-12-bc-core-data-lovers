trello: https://trello.com/b/5qEP9eu2/lol
# League of Legends (LOL)
Proyecto: Data Lovers

## Índice

* [Preámbulo](#preámbulo)
* [league of Legends (LOL)](#se explica de que trata el juego.)
* [Data League of Legends (LOL)](#que elementos tomaremos de la data para hacer el proyecto)

***

## Preámbulo

Según un [estudio de IBM](https://www-01.ibm.com/common/ssi/cgi-bin/ssialias?htmlfid=WRL12345USEN),
el 90% de la data que existe hoy ha sido creada durante los últimos dos años.
Cada día generamos 2.5 trillones de bytes de datos, una cifra sin precedentes.

No obstante, los datos por sí mismos son de poca utilidad. Para que esas
grandes cantidades de datos se conviertan en **información** fácil de leer para
los usuarios, necesitamos entender y procesar estos datos. Una manera simple de
hacerlo es creando _interfaces_ y _visualizaciones_.

## League of Legends

**Que es league of Legends?**

Es un juego competitivo en línea de ritmo frenético, que fusiona la velocidad y la intensidad de la estrategia en tiempo real (ETR) con elementos de juegos de rol. Dos equipos de poderosos campeones, cada uno con un diseño y estilo de juegos únicos, compiten cara a cara a través de diversos campos de batalla y modos de juego. Con un plantel de campeones en constante expansión, actualizaciones frecuentes y un emocionante panorama competitivo, League of Legends ofrece posibilidades de juego ilimitadas a usuarios de todos los niveles de habilidad.

#Historias de Usuario

https://docs.google.com/forms/d/1uCVrdZc5lSD5SPbvB8VHjr8c6EvGRKvCxUxAopf6kQ8/edit#responses

#Maquetado
el maquetado inicial fue creado mediante un sketchbook en una hoja blanca como una idea inicial de como imaginamos nuestra aplicaciónn

Luego hicimos un maquetado mas formal mediante figma, dando asi una idea mas elaborada del sketchbook inicial.

#figma: https://www.figma.com/file/Wu0YWhHVSvgJRJttJoXy9LTL/Untitled?node-id=36%3A2

sin embargo la idea tanto inicial como del figma se fue transformando a lo largo del proyecto, en una presentación sencilla  para el usuario, entre otros cambios que se vieron motivados directamente al uso lógico y efectivo de la data brindada.

## Data League of Legends (LOL)

La data brindada para la realización del proyecto, cuenta con una extensa cantidad de datos que describen caracteristicas individuales de los distintos personajes.

La delimitación del proyecto se hizo en base a un usuario novato (principiante) ya que en estos casos los conocimientos del juego suelen ser muy básicos, buscando así que la aplicación arroje datos sencillos en base a las necesidades que puede tener un usuario principiante.

Es por ello que mediante las historias de usuarios se logran obtener los datos que los usuarios (expertos) consideraron son los elementos mas relevantes para guiar a un principiante y así el mismo pueda tener una mejor visión de las caracteristcas mas relevantes (Estretegia) sin la necesidad de poseer un conocimiento muy extenso.


**Datos extraidos:**

* nombre personaje
* título
* Leyenda
* Info
 * Ataque
 * Defensa
 * Magia
 * Dificultad
 * Estadisticas
* Estadisticas
  * Hp
  * Hp Regen
  * Mp
  * Mp Regen
  * Movespeed
  * Armor
  * Attack Range

## Aplicacion


![lol](http://subirimagen.me/uploads/20190108121602.PNG)

en la primera pantalla podemos observar que tiene un fondo sencillo en negro, donde lo que mas resalta es el header y luego en la parte baja vemos la lista con los personajes del juego.

La idea de hacer una interfaz sencilla viene del hecho de que la misma esta dirigida a un usuario iniciado o amateur quien necesita informacion de manera rapida y sencilla sobre LOL.

Segun nuestras historias de usuarios, los mismos buscan rapidez a la hora de elegir sus personajes por lo que necesitan datos especificos en el menor tiempo posible y lo que buscamos es que el mismo debo clickear lo menos posible y asi no abandone el site.

![lol2](http://subirimagen.me/uploads/20190108123029.PNG)

la segunda pantalla es un modal que arroja la informacion relevante sobre el personaje seleccionado. En la misma podemos observar que el fondo es la imagen ampliada del personaje seleccionado con la informacion considerada relevante (datos extraidos) segun los resultados obtenidos en nuestras historias de usuarios.

otro dato relevante de esta pantalla es que decidimos agregar un rate con colores, donde el rojo representa un valor bajo, el amarillo un valor intermedio, siendo el verde el valor mas optimo.








### Pruebas unitarias

El _boilerplate_ de este proyecto no incluye pruebas unitarias, pero esperamos
que escribas tu propias pruebas unitarias para las funciones encargadas de
_procesar_, _filtrar_ y _ordenar_ la data, así como _calcular_ estadísticas.
Para ello te recomendamos implementar las siguientes funciones en el archivo
`src/data.js`:

* `filterData(data, condition)`: esta función `filter` o filtrar recibiría la
  data, y nos retornaría aquellos datos que sí cumplan con la condición.

* `sortData(data, sortBy, sortOrder)`: esta función `sort` u ordenar
  recibe tres parámetros.
  El primer parámetro, `data`, nos entrega los datos.
  El segundo parámetro, `sortBy`, nos dice con respecto a cuál de los campos de
  la data se quiere ordenar.
  El tercer parámetro, `sortOrder`, indica si se quiere ordenar de manera
  ascendente o descendente.

* `computeStats(data)`: la función `compute` o calcular, nos permitirá hacer
  cálculos estadísticos básicos para ser mostrados de acuerdo a la data
  proporcionada.

Estas son ideas de funciones que podrías implementar, pero esto depende de tu
propia implementación.

El archivo `src/data.js` tiene que tener una cobertura del 70% de _statements_
(_sentencias_), _functions_ (_funciones_), _lines_ (_líneas_), y _branches_
(_ramas_).

Estas funciones deben ser [_puras_](https://medium.com/laboratoria-developers/introducci%C3%B3n-a-la-programaci%C3%B3n-funcional-en-javascript-parte-2-funciones-puras-b99e08c2895d)
e independientes del DOM. Estas funciones serán después usadas desde el archivo
`src/main.js`, al cargar la página, y cada vez que el usuario interactúe (click,
filtrado, ordenado, ...).

No se debe utilizar la _pseudo-variable_ `this`.
## Evaluación

Recuerda revisar la [rúbrica](https://docs.google.com/spreadsheets/u/1/d/e/2PACX-1vRktPN4ilZtkRN5tUb3DVhgeihwlzk63_-JI3moA-bXpKDbHDioAK2H3qbrwWNb0Ql4wX22Tgv7-PDv/pubhtml)
para ver la descripción detallada de cada habilidad y cada nivel. Esta es una
lista de todas las habilidades involucradas en este proyecto y que evaluaremos
cuando lo completes:

Para mandar cambios desde un repositorio forkeado al original debes crear un
[pull request](https://goo.gl/4bYnuh)
y el propietario del repositorio original recibirá una notificación para
[revisar el pull request](https://goo.gl/XSFcT5)
y [aceptar los cambios](https://goo.gl/HLJtqN).

Aquí algunas recomendaciones para que organices mejor el trabajo con tu
compañera:

* En lugar de trabajar en una sola rama o _branch_, puedes organizar el flujo de
  trabajo con dos ramas principales:
  - `master`: rama que contiene las funcionalidades terminadas y sin errores.
  - `develop`: rama dónde integrarás las funcionalidades conforme las vayas
    desarrollando.

* Además de tener las dos ramas anteriores, puedes trabajar cada nueva
  funcionalidad en una rama individual (_feature branches_), estas ramas en
  lugar de crearse a partir de `master`, tienen a `develop` como su rama de
  origen. Cuando una funcionalidad es terminada se integra de nuevo a `develop`.
  Las _feature branches_ no se deben integrar directamente a `master`.

* Por último, te sugerimos codear usando la técnica de
  [pair programming](https://goo.gl/uAMBX2).

¿Quieres saber más forks y pull requests?

* Un [fork](https://help.github.com/articles/fork-a-repo/) es una copia de un
  repositorio en el que puedes experimentar sin afectar al repositorio original.
  Generalmente se usa para proponer cambios al proyecto de alguien más o para
  usar el proyecto de otra persona como punto de partida para una idea que
  quieras realizar.

* Un [pull request](https://help.github.com/articles/about-pull-requests/) (PR)
  te permite solicitar la inclusión de cambios al repositorio original (tu punto
  de partida) en GitHub. Cuando un PR es abierto, este permite solicitar,
  discutir y revisar los cambios realizados con todos los colaboradores y
  agregar otros commits antes de que los cambios sean incluidos al repositorio
  original.
-->

***

## Contenido de referencia

### Diseño de experiencia de usuario (User Experience Design)

* Investigación con usuario
* [Principios de diseño visual](https://lms.laboratoria.la/cohorts/scl-2018-11-bc-core-a1/courses/diseno-visual)


### Desarrollo Front-end

* [Unidad de testing en curso de JavaScript en LMS](https://lms.laboratoria.la/cohorts/scl-2018-11-bc-core-a1/courses/javascript/11-testing/00-opening)
* [Unidad de arreglos en curso de JavaScript en LMS](https://lms.laboratoria.la/cohorts/scl-2018-11-bc-core-a1/courses/javascript/04-arrays/01-arrays)
* [Unidad de objetos en curso de JavaScript en LMS](https://lms.laboratoria.la/cohorts/scl-2018-11-bc-core-a1/courses/javascript/05-objects/01-objects)
* [Unidad de funciones en curso de JavaScript en LMS](https://lms.laboratoria.la/cohorts/scl-2018-11-bc-core-a1/courses/javascript/03-functions/00-opening)
* [Unidad de DOM en curso de Browser JavaScript en LMS](https://lms.laboratoria.la/cohorts/scl-2018-11-bc-core-a1/courses/browser/02-dom/00-opening)
* [Array en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array)
* [Array.sort en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/sort)
* [Array.map en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/map)
* [Array.filter en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/filter)
* [Array.reduce en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/reduce)
* [Array.forEach en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/forEach)
* [Object.keys en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/keys)
* [Object.entries en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/entries)
* [Fetch API en MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
* [json.org](https://json.org/json-es.html)
