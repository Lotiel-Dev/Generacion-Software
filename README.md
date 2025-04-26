# Generación de Software

Repositorio para el proyecto de generación de software.

## Instrucciones de Despliegue

### Opción 1: Despliegue Individual

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

### Opción 2: Despliegue Completo

Para iniciar tanto el frontend como el backend simultáneamente:

```bash
# Ejecutar docker-compose desde la raíz del proyecto
docker-compose up -d
```

#### Acceso a los servicios
- Frontend: [http://localhost:80](http://localhost:80)
- Backend: [http://localhost:8080](http://localhost:8080)

---

## Tecnologías Utilizadas
- Frontend: Angular
- Backend: [Tecnología del backend]
- Contenedores: Docker
- Orquestación: Docker Compose