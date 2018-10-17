# Toolbox Test

## Backend
En primer lugar es necesario navegar hasta la carpeta *backend*, 
luego se deberá instalar localmente todos los requerimientos de la aplicación, 
esto se puede hacer con el comando `npm install`

Para ejecutar el backend en express se debe ejecutar ejecutar ` npm start `.
Este comando levantará un servidor en el puerto 5000.

Para correr los test, se deberá ejecutar el comando `npm test`.

## Frontend
_El Frontend utiliza el Backend, por lo tanto es necesario que este esté levantado para su correcto funcionamiento._

Al igual que para el backend, se debe navegar hasta la carpeta *frontend* y ejecutar 
el comando `npm install` para instalar localmente todas las dependencias.

Para ejecutar el frontend en react se debe ejecutar ejecutar `npm start`.
Este comando levantará el servidor en el puerto 3000.

La aplicación react utiliza un proxy que permite enviar los request al servidor en express. 
Es importante notar que el proxy únicamente es útil para la etapa de desarrollo y debe quitarse al entrar a la 
etapa de producción.

## Docker
_Para hacer uso del docker es necesario tener previamente instalado docker y docker-compose_

Para facilitar el levantamiento de las aplicaciones se decidió utilizar **Docker** y **Docker-compose**. 
De esta manera, basta con utilizar el comando `docker-compose up --build` desde la carpeta raíz para levantar el servidor en el puerto 5000 y el cliente en el puerto 3000.
Luego la app quedará levantada y se podrá acceder a ella entrando a http://localhost:3000 .

## Script
Como complemento se creó un script que permite hacer uso de la app mediante un comando sencillo. 
Para hacer uso de esté script es necesario que el servidor esté levantado, ya sea manualmente o mediante docker.

Una vez levantado el servidor se debe acceder a la carpeta *script* y ejecutar el comando `node client.js <texto>`con un texto a elección.