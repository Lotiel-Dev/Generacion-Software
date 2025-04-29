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

Con respecto al sitio a implementar:

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

Leease más sobre estándares WCAG2.1 en: https://www.w3.org/WAI/WCAG22/quickref/?versions=2.1


## Usabilidad 

La usabilidad se evalúa considerando los siguientes principios (basados en ISO 9241-11):

- **Efectividad**  
  El grado en que los usuarios pueden lograr sus objetivos de manera precisa y completa.

- **Eficiencia**  
  El nivel de recursos utilizados en relación con la precisión y completitud de los resultados.

- **Satisfacción**  
  El grado de comodidad y aceptación que experimentan los usuarios al utilizar el producto.


  Link del documento: https://cdn.standards.iteh.ai/samples/16883/44acafdfd9a24edd9c66ed2f0e2a50e2/ISO-9241-11-1998.pdf


## Manejo de Dependencias

### Política de Actualización

- Se deben mantener las dependencias actualizadas para beneficiarse de mejoras de seguridad, rendimiento y nuevas funcionalidades.
- Actualizar solo después de validar que los cambios no rompen la compatibilidad del proyecto.
- Las actualizaciones mayores (major updates) deben ser evaluadas cuidadosamente y probadas en un entorno de staging antes de integrarse a producción.
- Utilizar herramientas automáticas cuando sea posible para verificar nuevas versiones de paquetes (`npm outdated`, `go list -u all`, dependabot, Renovate, etc.).

### Auditoría de Seguridad

- Ejecutar auditorías de seguridad periódicas para identificar vulnerabilidades conocidas en las dependencias.
- Herramientas sugeridas:
  - **Angular (Node.js):**
    - `npm audit`
    - `npm audit fix` para corregir automáticamente vulnerabilidades menores y parches.
  - **Go:**
    - `govulncheck` para verificar vulnerabilidades en módulos de Go.
- Las vulnerabilidades críticas deben resolverse antes de hacer un despliegue en producción.
- Si una dependencia no tiene una actualización inmediata, evaluar reemplazarla o aplicar parches de mitigación.