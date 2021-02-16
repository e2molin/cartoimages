# REACT

https://es.reactjs.org/

## Clase 0 y 1


## Premisas

*  React es declarativo: En el modo de trabajo imperativo, cuando hacemos una web decimos que este botón haga esto. Esto es imperativo. Declarativo no damos acciones, decimos loo que queremos hacer

* Se basa en componentes reutilizables.


## Clase: Crea una app con React usando create-react-app

📽 https://youtu.be/QBLbXgeXMU8

### Create-React-app

Es una utilidad de Facebook para crear aplicaciones REACT. Se puede llegar a publicación pero no renderiza en servidor (Server Side Rendering - SSR). Para empezar es la mejor opción.

Para empezar vamos a instalar usando el comando **npx** de Node.JS las librerías necesarias para comenzar la aplicación.

```bash
npx create-react-app
```

Create React App configura tu set-up de desarrollo. Como gestor de paquetes propone el uso de **Yarn**, que es el NPM de Facebook. Pero podemos utilizar el propio NPM. En nuestro set-up de desarrollo también hay un control de versiones GIT. Si el proyecto lo vamos a utilizar en varios equipos, es interesante subirlo a github.

Para ello, después de crear el repositorio en GitHub, podemos configurar el repositorio remote en nuestro GIT local

```bash
git remote add origin https://github.com/e2molin/cartoimages.git
```

Y luego continuar con el flujo habitual de trabajo

### Despliegue de la App en Github

```bash
npm i gh-pages
```

Después añadimos algunas líneas a nuestro *package.json*. Una es la propiedad *homepage* que contiene la ruta que tendrá nuestra aplicación desplegada. Se compone del subdominio de nombre nuestro usuario, con el dominio github.io, seguido del nombre del proyecto, como se ve en el ejemplo.

```json
{
  "name": "cartoimg",
  "version": "0.1.0",
  "private": true,
  "homepage":"https://e2molin.github.io/cartoimages",
  "dependencies": {
```

Después, entre las lista de scripts, añadimos dos, *predeploy* y *deploy*, con comandos de *gh-pages* para hacerlo.

```json
  "scripts": {
    "predeploy":"npm run build",    // Este es opcional, ya que es un build mondo y lirondo
    "deploy":"gh-pages -d build",   // Este es el que sube el contenido de la carpeta a github.io
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
```

## Recursos y consejos de desarrollo

Es mejor usar promesas que una librería tipo Axios para llamadas AJAX. Si vamos a trabajar on navegadores que no soporten promnesas fetch/then, podemos usar un polyfill de fetch como unfetch , [https://github.com/developit/unfetch](https://github.com/developit/unfetch)

Para trabajar con *routing* se recomienda **Wouter**.
[https://github.com/molefrog/wouter](https://github.com/molefrog/wouter)

```bash
npm install wouter
```
Más sencillo que React-Router

## NEXT.JS

Framework para crear aplicaciones en REACT.JS

📽 [https://www.youtube.com/watch?v=EEDRcolSHms&list=RDCMUC8LeXCWOalN8SxlrPcG-PaQ&start_radio=1&t=63](https://www.youtube.com/watch?v=EEDRcolSHms&list=RDCMUC8LeXCWOalN8SxlrPcG-PaQ&start_radio=1&t=63)

## Recursos

* **Ramdom Avatar**: Genera usuarios aleatorios para trabajar. [https://randomuser.me/](https://randomuser.me/)
* **Unplush**: imágenes libres para testear código [unsplash.com/](https://unsplash.com/)