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