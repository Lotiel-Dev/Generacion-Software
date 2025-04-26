# Generaci-n-Software
Repositorio de generación de software



Para correr solo el servidor Frontend

cd .\frontend\angular

docker build -t frontend .
docker run -d -p 80:80 --name frontend-contenedor frontend

http://localhost:80


Para correr solo el backend

cd d:\Datos\umss\Generacion\Generacion-Software\backend
docker build -t backend .
docker run -p 8080:8080 --name backend-contenedor backend

http://localhost:8080/


Para los dos a la ves 
docker-compose up -d

http://localhost:80/
http://localhost:8080/