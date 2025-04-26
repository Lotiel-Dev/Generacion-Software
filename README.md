# Generación de Software

Repositorio para el proyecto de generación de software.

## Instrucciones de Despliegue

### Opción 1: Usando Docker

#### Frontend

```bash
# Navegar al directorio frontend
cd .\frontend\angular

# Construir la imagen Docker
docker build -t frontend .

# Ejecutar el contenedor
docker run -d -p 80:80 --name frontend-contenedor frontend
```

🌐 Acceder al frontend: [http://localhost:80](http://localhost:80)

#### Backend

```bash
# Navegar al directorio backend
cd .\backend

# Construir la imagen Docker
docker build -t backend .

# Ejecutar el contenedor
docker run -p 8080:8080 --name backend-contenedor backend
```

🌐 Acceder al backend: [http://localhost:8080](http://localhost:8080)

### Opción 2: Despliegue Completo usando Docker

Para iniciar tanto el frontend como el backend simultáneamente:

```bash
# Ejecutar docker-compose desde la raíz del proyecto
docker-compose up -d
```

#### Acceso a los servicios
- Frontend: [http://localhost:80](http://localhost:80)
- Backend: [http://localhost:8080](http://localhost:8080)

---



## Sin Docker
Gorilla/mux sirve para las rutas
Leer la docuemntacion [https://github.com/gorilla/mux](https://github.com/gorilla/mux)


Air sirve para auto reload
Leer la documentacion [https://github.com/air-verse/air](https://github.com/air-verse/air)


#### Sin docker

```bash
cd .\backend

go get -u github.com/gorilla/mux

go install github.com/air-verse/air@latest   
```



```bash
cd .\backend

air
```













## Tecnologías Utilizadas
- Frontend: Angular
- Backend: [Tecnología del backend]
- Contenedores: Docker
- Orquestación: Docker Compose