# Generaci-n-Software
Repositorio de generación de software



Para correr solo el servidor Frontend

cd .\frontend\angular

docker build -t frontend .
docker run -d -p 4200:80 --name frontend-contenedor frontend

http://localhost:4200