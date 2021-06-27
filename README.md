# creditu-players

Este proyecto es frontend está desarrollado en Vue.js para buscar jugadores.

El proyecto de backend desarrollado con Nest.js lo puedes descargar desde mi otro repositorio (https://github.com/ibustosca/creditu-api).

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

## Instala Vue.js
```
npm install -g @vue/cli
```
Al momento de crear este proyecto, fue utilizada la versión 4.5.13.

## Instala Axios
```
npm install --save axios vue-axios
```
Al momento de crear este proyecto, fueron utilizadas las versiones vue-axios@3.2.4 y axios@0.21.1.

## Importante

En el archivo Search.vue, línea 62, debes cambiar la URL de la API de tu backend, ya sea si esta es local o remota. Por ejemplo:

Ambiente local:
```
http://localhost:5000/player/search/
```
Recuerda que puedes descargar mi proyecto API backend, desde el repositorio https://github.com/ibustosca/creditu-api. El proyecto esta listo para conectar con este. Solo necesitas usar la misma URL que te acabo de mostrar como ejemplo.

Ambiente en producción:
```
http://midominio.com/player/search/
```
Recuerda que tu dominio en produccion es un servidor backend que debes disponer en línea.

## Para ejecutar tu proyecto en desarrollo ejecuta
```
npm run serve
```
Este comando te indicará tu dirección IP + Puerto de ejecución de la App.


## Ejecuciones adicionales (opcional)

Si quieres desplegar el proyecto en alguna plataforma como Heroku, te recomiendo ejecutar el siguiente comando:
```
npm run build
```
Luego, sigue las instrucciones de Heroku para levantar la App en la plataforma (https://www.heroku.com).