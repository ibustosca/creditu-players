# creditu-players

Este proyecto frontend está desarrollado en Vue.js para buscar jugadores.

![image](https://user-images.githubusercontent.com/64162717/123533215-80186480-d6e1-11eb-9cb1-0ec0593eae17.png)

Este proyecto trabaja en conjunto al de backend desarrollado con Nest.js y lo puedes descargar desde mi otro repositorio (https://github.com/ibustosca/creditu-api).

Nota: Te sugiero que primero instales el proyecto de backend y luego ven por este.

## Instala Node.js
```
https://nodejs.org/es/
```
Al momento de crear este proyecto, fue utilizada la versión 14.17.1 LTS.

## Instala las dependencias del proyecto
```
npm install
```
Al momento de crear este proyecto, fue utilizada la versión 6.14.13.

## Dependencias

Para tu información, en este proyecto utilizamos las siguientes dependencias adicionales:

- vue/cli, versión 4.5.13
- vue-axios, versión 3.2.4
- axios, versión 0.21.1

## Importante

En el archivo Search.vue, línea 62, debes cambiar la URL de la API de tu backend, ya sea si esta es local o remota. Por ejemplo:

- Ambiente local:
```
http://localhost:5000/player/search/
```
Recuerda que puedes descargar mi proyecto API backend, desde el repositorio https://github.com/ibustosca/creditu-api. El proyecto esta listo para conectar con este. Solo necesitas usar la misma URL que te acabo de mostrar como ejemplo.

- Ambiente en producción:
```
http://midominio.com/player/search/
```
Recuerda que tu dominio en produccion es un servidor backend que debes disponer en línea.

## Para iniciar tu proyecto en desarrollo ejecuta
```
npm run serve
```
Este comando te indicará tu dirección IP + Puerto de ejecución de la App. Por ejemplo (http://localhost:8080).

## Búsqueda de jugadores

Una vez iniciada la Web, puedes buscar jugadores desde el cuadro de búsqueda. Puedes buscar a través de los siguientes criterios:

- Búsqueda exacta con el Id del jugador. Por ejemplo, escribe un 1 y verás como te retorna el jugador con el id 1. Tienes hasta 3.000 jugadores para buscar.
- Búsqueda por cualquier texto que coincida con los atributos "nickname" y "status". Por ejemplo, escribe "asdd" (sin las dobles comillas) y verás como te retorna un conjunto de jugadores que coinciden con esa búsqueda.

## Ejecuciones adicionales (opcional)

Si quieres desplegar el proyecto en alguna plataforma como Heroku, te recomiendo ejecutar el siguiente comando:
```
npm run build
```
Luego, sigue las instrucciones de Heroku para levantar la App en la plataforma (https://www.heroku.com).