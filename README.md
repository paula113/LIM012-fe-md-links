# MDLINKS(path [,options])
***

## Mardown

[Markdown](https://es.wikipedia.org/wiki/Markdown) es un lenguaje de marcado
ligero muy popular entre developers. Es usado en muchísimas plataformas que
manejan texto plano (GitHub, foros, blogs, ...), y es muy común
encontrar varios archivos en ese formato en cualquier tipo de repositorio
(empezando por el tradicional `README.md`).

Estos archivos `Markdown` normalmente contienen _links_ (vínculos/ligas) que
muchas veces están rotos o ya no son válidos y eso perjudica mucho el valor de
la información que se quiere compartir.

Dentro de una comunidad de código abierto, nos han propuesto crear una
herramienta usando [Node.js](https://nodejs.org/), que lea y analice archivos
en formato `Markdown`, para verificar los links que contengan y reportar
algunas estadísticas.
***

## Instalacíon

```
npm install paula113/LIM012-fe-md-links
```
***

#### ✔ Resumen
***

Expone ejecutable `md-links` con las opciones:

- `--validate`: Determina si se desea validar los links encontrados por medio de una petición HTTP para averiguar si el link funciona o no
![Implementacion de --validate](https://github.com/paula113/LIM012-fe-md-links/blob/master/img/--vaidate.png)

- `--stats`: Mostrará estadísticas básicas sobre los links. 
![Implementacion de ---stats](https://github.com/paula113/LIM012-fe-md-links/blob/master/img/--stats.png)

- `--validate` y `--stats`: Representa las estadísticas que necesiten de los resultados de la validación. 
![Implementacion de --validate --stats](https://github.com/paula113/LIM012-fe-md-links/blob/master/img/--stats--validate.png)


***
## Diagrama de flujo 

### API
<img src="https://github.com/paula113/LIM012-fe-md-links/blob/master/img/api.jpg" width="540" height="480" ><img>

### CLI
<img src="https://github.com/paula113/LIM012-fe-md-links/blob/master/img/cli.jpg" width="640" height="380" ><img>

## Objetivos de aprendizaje

Recuerda colocar en esta seccion los objetivos de aprendizaje que quedaron 
pendientes de tu proyecto anterior.

### Javascript
- [x] Uso de callbacks
- [x] Consumo de Promesas
- [x] Creacion de Promesas
- [ ] Modulos de Js
- [x] Recursión

### Node
- [x] Sistema de archivos
- [x] package.json
- [x] crear modules
- [ ] Instalar y usar modules
- [x] npm scripts
- [ ] CLI (Command Line Interface - Interfaz de Línea de Comando)

### Testing
- [x] Testeo de tus funciones
- [x] Testeo asíncrono
- [x] Uso de librerias de Mock
- [x] Mocks manuales
- [x] Testeo para multiples Sistemas Operativos

### Git y Github
- [x] Organización en Github

### Buenas prácticas de desarrollo
- [x] Modularización
- [x] Nomenclatura / Semántica
- [x] Linting