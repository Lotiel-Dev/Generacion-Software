# Generaci-n-Software
Repositorio de generación de software



Para correr solo el servidor Frontend

cd .\frontend\angular

docker build -t frontend .
docker run -d -p 4200:80 --name frontend-contenedor frontend

http://localhost:4200


Para correr solo el backend

cd d:\Datos\umss\Generacion\Generacion-Software\backend
docker build -t backend .
docker run -p 8080:8080 --name backend-contenedor backend