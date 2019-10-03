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

Para crear nuevo proyecto: 

```bash
$ ng new miApp
```

Nos preguntara si deseamos añadir el routing  y seleccionamos "y". Aunque esto puede variar dependiendo de lo que nosotros queramos. Pero la mayor parte del tiempo pondremos que si.
Y luego preguntara el formato de estilo, lo cal seleccionaremos css (el cual viene por defecto), presionaremos enter y se creara nuestra aplicacion.



