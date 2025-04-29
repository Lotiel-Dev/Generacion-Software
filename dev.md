# Estándares de codificación
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
- Estructura del proyecto
    - Seguir la estructura modular estándar.
    - Separar en paquetes (package) pequeños, claros y reutilizables.
    - Carpeta principal suele ser /cmd, /pkg, /internal, /api, /configs, etc.
  - División de la aplicación
    - cmd/: Programas ejecutables (por ejemplo, el main.go).
    - internal/: Lógica privada que no se exporta fuera del proyecto.
    - pkg/: Librerías públicas reutilizables.
    - api/: Definiciones de API (REST, gRPC, etc.).
    - configs/: Archivos de configuración.
    - scripts/: Scripts auxiliares.
    - build/: Archivos para construir o desplegar.
    - docs/: Documentación.
    - tests/: Casos de prueba de integración.
- Convenciones de Nomenclatura
  - Paquetes (package)
    - El nombre debe ser todo en minúsculas, sin guiones ni underscores.
    - Ejemplos: `auth`, `user`, `payment`, `service`
  - Funciones, métodos, variables
    - CamelCase para nombres de funciones, métodos y tipos.
    - Las funciones exportadas (visibles fuera del paquete) comienzan en mayúscula.
    - Las funciones internas comienzan en minúscula.
    - Ejemplos: 
      - `func GetUserByID(id int) (*User, error)`  // Exportada
      - `func validateEmail(email string) bool `   // Interna
- Convenciones para nombrar archivos
  - Archivos
    - Minúscula y separados por guiones bajos (_).
    - Describir el contenido brevemente.
    - Ejemplos:
    - user_service.go
    - user_service_test.go
    - payment_handler.go
    - payment_handler_test.go
  - Sufijos
    - Si es un test, agregar _test.go.
    - No es obligatorio agregar "component" o "service" en el nombre, pero si ayuda a la claridad, se usa (user_service.go).
  - Ejemplos correctos:
    - order_controller.go
    - order_controller_test.go
    - db_connection.go
    - auth_middleware.go
- Fuentes: 
  - [Golang Docs](https://go.dev/doc/effective_go#package-names)
  - [Golang Standard Project Layout](https://github.com/golang-standards/project-layout)



## Organización de carpetas
![image](https://github.com/user-attachments/assets/f327f8a6-fad7-4f88-a8f9-72c01ee8b73b)

 ### Convenciones de Nombrado
    
  Propiedades y métodos: UpperCamelCase (Ej: AppComponent) 
  Constantes/Variables: UPPER_CASE con guiones bajos (Ej: MAX_USERS)



## Accesibilidad

-
