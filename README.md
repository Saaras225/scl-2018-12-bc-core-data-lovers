trello: https://trello.com/b/5qEP9eu2/lol
# League of Legends (LOL)
Proyecto: Data Lovers

## Índice

* [Preámbulo](#preámbulo)
* [League of Legends (LOL)](#se explica de que trata el juego)
* [Data League of Legends (LOL)](#que elementos tomamosde la data para hacer el proyecto)
* [Historias de Usuario](#Encuestas realizadas)
* [Maquetado](#la app desde cero)
* [Aplicacion](#como se ve nuestra app)
* [Pruebas de Usuarios](#opinion de los usuarios sobre la app)
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

## Historias de Usuario

Para nuestras historias de usuarios, decidimos formular una serie de preguntas mediante formularios de google, con la intencion de poder llegar al usuario ya que LOL es un juego mayormente de hombres y a muchos les daba pereza entrevistarse con nosotras personalmente.

El otro motivo para hacer un formulario, fue por la facilidad que nos brindaba para hacer las preguntas, las cuales hicimos de manera sencilla pero bien orientadas.

formulario google:
https://docs.google.com/forms/d/1uCVrdZc5lSD5SPbvB8VHjr8c6EvGRKvCxUxAopf6kQ8/edit#responses

hicimos un total de 5 preguntas referentes a LOL, de las cuales anexamos 2 de las preguntas realizadas con sus respectivas respuestas las cuales fueron respondidas por un total de 6 usuarios.

![pregunta2](http://subirimagen.me/uploads/20190110203001.PNG)

![pregunta3](http://subirimagen.me/uploads/20190110203114.PNG)

## Maquetado
el maquetado inicial fue creado mediante un sketchbook en una hoja blanca como una idea inicial de como imaginamos nuestra aplicación.

  ![maquetado](http://subirimagen.me/uploads/20190110163508.jpg)
  ![pantalla1](http://subirimagen.me/uploads/20190110163816.jpg)
  ![pantalla2](http://subirimagen.me/uploads/20190110164009.jpg)
  ![pantalla3](http://subirimagen.me/uploads/20190110164139.jpg)
  ![pantalla4](http://subirimagen.me/uploads/20190110164242.jpg)

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

## Aplicación


![lol](http://subirimagen.me/uploads/20190108121602.PNG)

en la primera pantalla podemos observar que tiene un fondo sencillo en negro, donde lo que mas resalta es el header y luego en la parte baja vemos la lista con los personajes del juego. Donde al hacer click en alguno de ellos despliega una segunda pantalla.

![lol2](http://subirimagen.me/uploads/20190108123029.PNG)

la segunda pantalla es un modal que arroja  informacion relevante sobre el personaje seleccionado. En la misma podemos observar que el fondo es la imagen ampliada del personaje seleccionado con la informacion considerada relevante (datos extraidos) segun los resultados obtenidos en nuestras historias de usuarios.

otro dato relevante de esta pantalla es que decidimos agregar un rate con colores, donde el rojo representa un valor bajo, el amarillo un valor intermedio, siendo el verde el valor mas optimo.

La idea de hacer una interfaz sencilla viene del hecho de que la misma esta dirigida a un usuario iniciado o amateur quien necesita informacion de manera rapida y sencilla sobre LOL.

Segun nuestras historias de usuarios, los mismos buscan rapidez a la hora de elegir sus personajes por lo que necesitan datos especificos en el menor tiempo posible y lo que buscamos es que el mismo debo clickear lo menos posible y asi no abandone el site.

## Prueba de usuarios

luego de la creacion final de la aplicacion, la mostramos a distintos usuarios quienes (jugadores y no jugadores de LOL) quienes se vieron atraidos, especialmente por lo sencillo de la aplicacion y porque consideran que es rapica de usar y con la informacion necesaria para una persona que recien esta iniciando en el LOL.

consideran que el hecho que no tengas que clickear mucho hace efectiva la finalidad de la pagina la cual es, dar una informacion rapida en un tiempo corto.
