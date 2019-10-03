# TypeScript

Compilar typescript
```bash
$ tsc file.ts -w
```

Poner en modo observador archivo en typescript
```bash
$ tsc file.ts -w
```
Iniciar proyecto en typescript
```bash
$ tsc init
```

### Variables 
Se declaran utilizando let y const.

Let permite variables que tienen un determinado scope.
Const define constantes, se definen con mayusculas y se definen al momento de crearse.

## Faltantes de typescript

- Tipos de variables
- Errores en tiempo de escritura
- Auto completacion dependiendo de la variable
- Metodo estatico de programación
- Clases y modulos(antes de ES6)

## Typescrip 
Permite crear codigo limpio y facil de entender que luego se traducira a codigo Javascript.

## Tipos de datos

1. string.
2. number.
3. boolean.
4. objects (Date).
5. any

## Template Literal
Es un tipo especial de string el cual se define utilizando el backtick `` y para colocar variable utilizamos 
```typescript
`Hola ${codigo js}`  
```
## Funciones Parametros opcionales, obligatorios y por defecto

__Parametros Obligatorios__: Algo que la funcion necesita para trabajar. Si no se envia la funcion no deberia trabajar.

__Parametro por defecto__: Es aquel que podemos o no enviar y tiene un valor por defecto en la funcion. Se utiliza el simbolo = y luego el valor por defecto

__Parametros opcionales__: Son aquellos que pueden ser enviados a la funcion, pero si no se envian tiene valor por defecto undefine. Se utiliza el simbolo ?. Por ley no se puede poner el primer parametro como opcional. 

## Funciones de Flecha

 Cuando se ejecuta una setTimeout dentro de un objeto, el this apunta al objeto global que es windows. Las funciones de flecha evita que el this se afecte cuando se ejecute dentro de otra funcion. Tienen muchas caracteristicas pero esta son las que usaremos en este curso. 

## Destructuracion de Objetos y Arreglos


La destructuracion de objeto permite la extraccion de las propiedades de un objeto mediante el nombre de las propiedades. De forma rapida podemos extraer las propiedaes de un objeto.

La destructuracion de arreglos se realiza de forma secuancial. Se emplea en vez de las { } el  [ ]. 


## Promesas
Nos da la posibilidad de ejecutar una tarea cuando una actividad asincona es terminada. La promesa recibe una funcion que tiene un resolve es funcion a utilizar si la promesa se resuelve bien y reject funcion si se rechaza la promesa.


## Interaces 

Permite especificar caracteristicas para objetos para que a la hora de escribir codigo se puedan detectar los errores en funciones y partes del programa que requieran el uso de un objeto.

## Clases

Para declarar una clase se emplea la palabra reservada class seguida del nombre de la clase en formato capitalize. Y para poder crear un objeto en base a la clase creada utilizaremos la palabra reservada new.

Los constructores son funciones que son ejecutadas cuando se crean una nueva instancia del objeto. Se declara utilizando la palabra reservada constructor.
Para darle un estado inicial a una propiedad podemos emplear el construtor y a la hora de crear el objeto pasarlo por parametro. Y en el constructor asignale a la propiedad del objeto el valor obtenido por el parametro de la funcion con la palabra reservada this.


## Modulos

Permite segmentar nuestro codigo en varios archivos que son mas faciles de mantener. Y importar los archivos que necesito para mi programa. Tambien permite que un archivo unico sea el que dispare los requerimientos para no cargar todos los modulos que no se necesiten.
Permiten cargar archivos que estan segmentado en todo el programa.


## Decoradores 
Es una funcion que envia como parametro el constructor de una clase.
En el tsconfig.json añadir "experimentalDecorators":true