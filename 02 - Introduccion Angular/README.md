# Introduccion Angular

## Componentes
Una aplicacion en angular deberia estar construida a base de multiples componentes. Un componente son pequeñas clases que cumplen una funcion especifica. Por ejemplo un menu, sidebar, bodys y footer. Cada componente responde a una tarea en especifico. Son clases normales que tienen un pequeño decorador especifico.

## Directivas estructurales

Las directivas estructurales son instrucciones que le dicen al html que hacer. Un ejemplo es *ngIf que permite mostrar algun contenido en base a una condicion. Otra es *ngFor que permite 
repetir elementos en nuestra pagina html.

## Paginas utiles
Las siguientes paginas permiten hacer un codigo para demostracion de forma online:
1. http://plnkr.co/
2. https://stackblitz.com

## Estructura componente 
Un componente esta compuesto por tres archivos:
1. Html: Este archivo contiene la estructura html del componente.
2. Css: Contiene los estilos para el componente.
3. Ts: Archivo que tiene toda las funcionalidades del componente.

Veremos que el archivo ts contiene al inicio la importacion del angular core, luego viene el decorador @Component que nos indica tiene tres componentes: Selector el que indica como llamaremos de nuestra aplicacion al componente, templateUrl que tiene la referencia al archivo que contiene el html del componente, y por ultimo el styleUrl que nos indica la direccion del archivo css que usaremos para aplicar los estilos.

```typescript
import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.css']
})
 
export class AppComponent{
    name = 'Hello World';
}
```

## Angular Cli
Es una interfaz de linea de comando que nos permite crear cosas de forma automatica.
Instalar Angular Cli 

```bash
$ npm install -g @angular/cli
```

Para crear nuevo proyecto: 

```bash
$ ng new miApp
```

Nos preguntara si deseamos añadir el routing  y seleccionamos "y". Aunque esto puede variar dependiendo de lo que nosotros queramos. Pero la mayor parte del tiempo pondremos que si.
Y luego preguntara el formato de estilo, lo cal seleccionaremos css (el cual viene por defecto), presionaremos enter y se creara nuestra aplicacion.

Para correr la aplicacion angular nos posicionamos dentro de la carpeta que contiene la aplicacion y ejecutamos el siguiente comando:

```bash
$ ng serve
```
Esto iniciara la aplicacion en localhost:4200. Si queremos cambiar el puerto escribimos:
```bash
$ ng serve -p numeroPuerto
```

Si deseamos crear un nuevo componente utilizamos el comando 
```bash
$ ng generate component carpeta/nombreComponente
```
o tambien:

```bash
$ ng g c carpeta/nombreComponente
```

Tambien se puede especificar que no queremos generar, ya que por defecto genera el archivo ts, html, css y el de pruebas.

```bash
$ ng g c carpeta/nombreComponente skipTests
```


# Archivos y carpetas del proyecto

- __e2e__: Carpeta dedicada al manejo de pruebas extremo a extremo. Se configura de forma automatica.
- __node_modules__: Carpeta donde se instalan los paquetes de node como el live reload server, etc. Esta carpeta no se sube al servidor de produccion o repositorio.
- __src__: Carpeta donde se aloja aplicacion angular. Subcarpetas:
    - __app__: Tenemos nuestra aplicacion angular. App component es el primer componente que carga nuestra aplicacion.
    - __asserts__: Por lo general se colocan recursos estaticos como imagenes, etc.
    - __environments__: Variables de ambientes del curso.
    - __browserslist__:Es usado para el autoprefixer.
    - __karma.conf.js__: Archivo de configuracion de pruebas.
    - __main.ts__: Configura el ambiente para una palicacion web.
    - __index.html__: Es una pagina web comun y corriente que la referencia al app-root

- __.editorconfig__: Archivo con configuraciones del editor.
- __.gitignore__: Archivo que indica archivos y carpetas que no queremos subir a nuestro repositorio.
- __angular.json__: Este se modifica rara vez. Le dice a nuestra aplicacion como funciona y que usa.
- __package-lock.json__: Indica como se crea el package.json
- __package.json__: Este archivo se va creando de forma automatica. Indica que dependencias utiliza nuestra aplicacion. 
- __tsconfig.json__: Le indica a typescript como trabajar.
- __tslint.json__: Archivo que tiene las reglas de trabajo con typescrip.

## Bootstrap

Existen 3 formas de integrar bootstrap a nuestra aplicacion angular.

1. Mediante el CDN: Lo que hacemos es pegar en el index.html el CDN de bootstrap. 

2. Mediante la descarga del bootstrap.

3. Mediante npm


## App Module
Es un lugar donde le indicamos a angular que componentes tiene. 
- __Declarations__: Indicamos los componentes que podemos utilizar.