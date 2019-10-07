# Spoti App

Primero crear proyecto de angular 
```bash
$ ng new spotiapp
```

Ingresar a la siguiente pagina:

https://developer.spotify.com

E ir al dashboard. En este paso debemos registrarnos.
Luego seleccionamos "Create client id" y nos pedira ingresar el nombre de la app y los fines.

Una ves crado el client id nos mostrara una pantalla donde nos salen los siguientes datos:
- Client ID
- Client Secret

## Probando Rest Api
El modulo HttpClientModule contiene una serie de cosas que usare dentro de mi programa. Un module siempre va en los imports.

Si queremos hacer una peticion get debemos importar el componente HttpClient

GET - this.http.get('url').subscribe(data =>{
    console
})