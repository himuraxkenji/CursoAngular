# Single Page Application

## Bootstrap y librerias de terceros

La primer forma es ir a la pagina de bootstrap, luego agregar el CDN al index.html y listo. 

La segunda forma es trabajar con bootstrap de forma local descargando las librerias.
Descomprimimos y copiamos la carpeta dist. Esta carpeta la pegamos en assets/libs. Luego debemos cambiar la referencia a de href="./assets/libs/bootstrap/css/bootstrap.min.css" y añadir las librerias del popper, etc. La ventaja es que es local.

La ultima es usar npm, ya que en el proyecto queda grabado que se requiere bootstrap. Debemos correr en la consola:

```bash
$ npm install bootstrap --save
$ npm install jquery --save
$ npm install popper.js --save
```

Luego debemos modificar el archivo angular.json en la parte 
```json
    "styles":["node_modules/bootstrap/dist/css/bootstrap.css.min"],
    "scripts": [ 
        "node_modules/bootstrap/dist/js/bootstrap.min.js",
        "node_modules/jquery/dist/jquery.slim.dist",
        "node_modules/popper.js/dist/umd/popper.min.js"
    ]
```

## Rutas en Angular
Las rutas nos permiten navegar a diferentes paginas sin hacer refres del navegador web. 
En la carpeta App creamos un nuevo archivo que se llamara app.routes.ts
Con el snippet de angular podemos generar rapidamente el contenido utilizando el comando 

```angular
ng2routes
```

En la seccion del path debemos especificar la ruta a donde tendra alojado el sitio y luego el componente al cual hace referencia esa ruta: 
```typescript
const APP_ROUTES: Routes = [
    {path: 'ruta1', component: ComponenteUno},
    {path: 'ruta2', component: ComponenteDos},
    {path: 'rutan', component: ComponenteTres},
    {path: '**', pathMatch:'full', redirectTo: 'default'},
];

```

En el app.module.ts debemos añadir las rutas APP_ROUTING
y añadirlo en la seccion de imports[]. Por ultimo en el app-router añadimos <router-outlet> </router-outlet>
Si necesitamos manejar un sistema de hash cuando hacemos el export
añadimos 
```typescript
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true});
```

## Router Link

[routerLink]="['ruta']" 
Ruta es la especificada en app.routes.ts

## Router Link Active
Permite asignar la clase que se necesita cuando el elemento esta activo.
Lo poderoso es que no hay relacion directa enre el routerLink y el routerLinkActive

routerLinkActive="active"


## Servicios

Ahora como emplearemos datos, deberiamos alojarla en services que se encarga de manejar la informacion de nuestra aplicacion. Sus caracteristicas son:

- Brindar informacion a quien lo necesite.
- Realizar peticiones CRUD(create, read, update, delete)
- Mantener la data de forma persistente.
- Servir como recurso re-utilizable para nuestra aplicacion.

Para crearlo se emplea el decorador @Injectable()
Y para usarlo se debe añadir en el app.module.ts en la parte de provider el service(importarlo en la parte superior)

