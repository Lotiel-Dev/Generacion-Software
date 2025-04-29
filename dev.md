# Estándares de codificación

- Estilo de código:
  - Documentación: Documentar las funciones, clases y métodos de forma clara y concisa.
  - Comentarios en línea: Explicar el código complejo para facilitar la comprensión.
  - Usar gofmt para formatear el codigo automaticamente:
    ```bash
    gofmt -w
    gofmt archivo.go
    ```
- Gestión de errores:
  - Manejo de excepciones: Utilizar la gestión de excepciones para evitar errores comunes y facilitar la depuración.
  - Registro de errores: Registrar los errores para su posterior análisis.
- Control de versiones:
  - Git: Utilizar sistemas de control de versiones para rastrear los cambios y colaborar en el desarrollo.

## Angular

- Estructura del proyecto
  - Seguir la estructura dada por Angular CLI (modulos, componentes, servicios, etc.).
  - Dividir la aplicacion en modulos funcionales y reutilizables.
- Convenciones de nomenclatura
  - Usar sufijos estandar como `Component`, `Service`, `Module`, etc.
- Convenciones para nombrar los archivos:
  - Primero se debe poner el nombre del archivo, luego separado por un punto como se lo va usar (`component`, `styled component`, `service`) y por último la extensión.
  - Ejemplos:
    - `file.component.ts`
    - `file.component.spec.ts`
    - `button.styled.component.ts`
    - `api.service.ts`
  - Fuente: [Angular Docs](https://angular.dev/style-guide#file-structure-conventions)

### Convenciones de Nombrado

Clases: UpperCamelCase (Ej: AppComponent)  
 Propiedades y métodos: lowerCamelCase (Ej: getUserData())
Constantes: UPPER_CASE con guiones bajos (Ej: MAX_USERS)

## GO

## Organización de carpetas

![image](https://github.com/user-attachments/assets/f327f8a6-fad7-4f88-a8f9-72c01ee8b73b)

### Convenciones de Nombrado

Propiedades y métodos: UpperCamelCase (Ej: AppComponent)
Constantes/Variables: UPPER_CASE con guiones bajos (Ej: MAX_USERS)

## Accesibilidad

- WCAG 2.1 se organiza en cuatro principios fundamentales:

  - Perceptible: La información y los componentes de la interfaz de usuario deben presentarse a los usuarios de manera que puedan percibirlos.
  - Operable: Los componentes de la interfaz de usuario y la navegación deben ser operables.
  - Comprensible: La información y el funcionamiento de la interfaz de usuario deben ser comprensibles.
  - Robusto: El contenido debe ser lo suficientemente robusto como para que pueda ser interpretado de manera confiable por una amplia variedad de agentes de usuario, incluyendo las tecnologías de asistencia.

- Dentro de cada uno de estos principios, existen criterios de conformidad que se clasifican en tres niveles:
  - Nivel A: El nivel más básico de accesibilidad. Cumplir con estos criterios es esencial para que algunos grupos de usuarios puedan acceder al contenido.
  - Nivel AA: Un nivel intermedio de accesibilidad. Cumplir con estos criterios mejora significativamente la accesibilidad para la mayoría de los usuarios con discapacidades.
  - Nivel AAA: El nivel más alto de accesibilidad. Cumplir con estos criterios es posible para algunos contenidos web, pero no siempre es factible para todos.
- I. Perceptible:

  - Alternativas de texto (Nivel A): Todas las imágenes deben tener un texto alternativo (alt) que describa su función o contenido.
  - Adaptable (Nivel A): Crear contenido adaptable que funcione en diferentes tamaños de pantalla sin perder información o estructura.
  - Distinguible (Nivel AA): Facilitar a los usuarios la distinción del contenido, incluyendo un contraste de color suficiente entre el texto y el fondo.
  - Orientación (Nivel AA): No restringir la visualización y funcionamiento del contenido a una sola orientación de pantalla, como vertical u horizontal, a menos que una orientación de pantalla específica sea esencial.

- II. Operable:

  - Tiempo suficiente (Nivel A): Proporcionar a los usuarios tiempo suficiente para leer y usar el contenido.
  - Navegable (Nivel AA): Proporcionar en cada página del sitio un título que describa su tema o propósito de en dónde se encuentran.
  - Ataques y reacciones físicas (Nivel A): No implementar contenido que parpadee de forma que se evite causar convulsiones o reacciones físicas.
  - Tres destellos (Nivel AAA): El sitio web no contiene nada que parpadee más de tres veces en un segundo.
  - Animación de interacciones (Nivel AAA): La animación de movimiento activada por la interacción se puede desactivar, a menos que la animación sea esencial para la funcionalidad o la información que se transmite.

- III. Comprensible:

  - Legible (Nivel AA): Hacer que el contenido de texto sea legible, utilizando un lenguaje claro y sencillo.
  - Asistencia para la entrada (Nivel A): Proporcionar instrucciones claras para completar los formularios.
  - Asistencia para la entrada (Nivel AA): Implementar comprobación de errores y sugerencias para corregirlos en los formularios.
  - Mecanismos de entrada concurrentes (Nivel AAA): El contenido web no restringe el uso de las modalidades de entrada disponibles en una plataforma como ser un ordenador con ratón, teclado y entradas táctiles, excepto cuando la restricción sea esencial.

- IV. Robusto:
  - Compatible (Nivel A): Utilizar un marcado HTML válido y semántico para estructurar el contenido, manejando las etiquetas HTML correctas para cada tipo de contenido.
  - Compatible (Nivel A): Evitar la duplicación de id en los elementos HTML, de modo que cada elemento HTML que tenga un id asignado, debe tener un id único.
