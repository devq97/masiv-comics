<img src="https://miro.medium.com/max/3600/1*HSisLuifMO6KbLfPOKtLow.jpeg" alt="react boilerplate banner" align="center" />

## Prueba técnica Massivian

Esta prueba se ha desarrollado a partir de una arquitectura front, propuesta por la comunidad de React. La arquitectura propuesta utiliza tecnologías como React, Redux-saga, Webpack entre otras más, y ha tenido una gran trayectoria para ser usada en proyectos escalables con las mejores prácticas de desarrollo.

#### Despliegue 🚀

La prueba se ha desplegado en modo de producción a través de Netlify para poder ver la prueba en línea abriendo el siguiente link: https://optimistic-almeida-01afe7.netlify.com/

#### Inicio 🚀

Sigue estas instrucciones para obtener una copia del proyecto y poderlo ejecutar en tu ambiente local.


##### Prerrequisitos 📋

Es importante que cuentes con las dependencias básicas para que tu ambiente pueda ejecutar correctamente la aplicación

| Versión | Node.js LTS | Yarn Package LTS | 
|---- |----|----
| 1.0 | 12.0.0^  | 1.22.0


##### Instalación 🔧

Las instrucciones a tener en cuenta son las siguientes:

```
1.  Asegurate de tener instalado Node.js v12.0.0, Yarn o npm installed.
2.  Clona el siguiente repositorio `git clone https://github.com/devq97/masiv-comics.git`
3.  Entra en el directorio creado: `cd <PROJECT_NAME>`.
4.  Ejecuta el siguiente comando en tu consola de comandos: Run `yarn o npm install` para instalar las dependencias.
5.  Ejecuta el siguiente comando en tu consola de comandos: Run `yarn start o npm run start` para ejecutar la aplicación, puedes abrir el recurso proporcionado por el servidor en tu navegador, por ejemplo: http://localhost:3000.
```

Puedes revisar el archivo package.json para indagar más acerca de los scripts y las dependecias que usa el proyecto.

#### Estructura de carpetas 🔧


    project
    ├── app 
    |   ├── containers              
    |   |   ├── App
    |   |   ├── LanguageProvider
    |   |   ├── NotFound
    |   |   ├── Pages
    |   ├── redux
    |   |   ├── configureStore.js
    |   |   └── reducers.js
    |   ├── styles
    |   ├── translations
    |   ├── utils
    |   |   ├── checkStore.js  
    |   |   ├── actionResponse.js 
    |   |   ├── constants.js   
    |   |   ├── history.js    
    |   |   ├── injectSaga.js   
    |   |   └── sagaInjectors.js   
    |   ├── .htaccess
    |   ├── app.js
    |   ├── i18n.js
    |   └── index.html
    ├── internals   
    |   ├── generators                  
    |   ├── mocks                  
    |   ├── scripts                  
    |   ├── testing                  
    |   ├── webpack                  
    |   └── .config                  
    ├── public                   
    ├── server                    
    │   ├── middlewares          
    │   ├── argv.js         
    │   ├── index.js         
    │   ├── logger.js         
    │   ├── port.js   
    ├── .eslintrc
    ├── .gitignore
    ├── babel.config.js      
    ├── package.json            
    ├── package-lock.json       
    ├── postcss.config.js       
    ├── README.md               
    └── yarn.lock

<sub><i>Keywords: React.js, Redux, Hot Reloading, ESNext, Babel, react-router, Offline First, ServiceWorker, redux-saga, webpack</i></sub>

#### Autor ✒
 
* **David Vargas** - <devq97@gmail.com> 

#### License 📄

Este proyecto está bajo la licencia del MIT.

