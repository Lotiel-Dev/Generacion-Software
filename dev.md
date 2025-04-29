## Estándares de codificación
 - Convenciones de nomenclatura:
    - PascalCase: Para nombres de clases, métodos y propiedades, donde la primera letra de cada palabra se escribe en mayúscula. 
    - camelCase: Para nombres de variables y métodos, donde la primera letra de la primera palabra es en minúscula y el resto en    mayúscula. 
    - snake_case: Para nombres de variables y funciones, donde las palabras se separan con guiones bajos.
    - Evitar abreviaturas ambiguas en nombres de variables y funciones
        Para mejorar la legibilidad del código, evita usar abreviaturas poco claras o demasiado crípticas en nombres de variables y funciones. Usa nombres descriptivos que comuniquen claramente su propósito.
        ### ❌ Malos ejemplos:
        ```go
        func calc(d int) int {
            return d * 2
        }
        var cfg = getCfg()
        --Forma Correcta
        func calculateDiscount(daysRented int) int {
            return daysRented * 2
        }
        var config = loadConfiguration()

  - Estilo de código:
     - Documentación: Documentar las funciones, clases y métodos de forma clara y concisa. 
     - Comentarios en línea: Explicar el código complejo para facilitar la comprensión. 
     - Usar gofmt para formatear el codigo automaticamente:
        ```bash
        gofmt -w 
        gofmt archivo.go
  - Gestión de errores:
      - Manejo de excepciones: Utilizar la gestión de excepciones para evitar errores comunes y facilitar la depuración. 
      - Registro de errores: Registrar los errores para su posterior análisis. 
  - Control de versiones:
      - Git: Utilizar sistemas de control de versiones para rastrear los cambios y colaborar en el desarrollo. 

## Angular
- Estructura del proyecto
    - Seguir la estructura remoendada por Angular CLI (modulos, componentes, servicios, etc.).
    - Dividir la aplicacion en modulos funcionales y reutilizables.
- Convenciones para nombrar los archivos:
  - Primero se debe poner el nombre del archivo, luego separado por un punto como se lo va usar (`component`, `styled component`, `service`) y por último la extensión.
  - Ejemplos:
    - `file.component.ts`
    - `file.component.spec.ts`
    - `button.styled.component.ts`
    - `api.service.ts`
  - Fuente: [Angular Docs](https://angular.dev/style-guide#extract-templates-and-styles-to-their-own-files)

## golang/air/gorilla

## Organización de carpetas

## Variables, funciones y clases

- funciones go siempre en mayuscula
-

-

## Accesibilidad

-
