# Generaci-n-Software
Repositorio de generación de software





cd d:\Datos\umss\Generacion\Generacion-Software\frontend\angular
docker build -t generacion-frontend .


docker run -p 4200:80 --name angular-container angular-app

docker run -d -p 80:80 --name generacion-frontend-container generacion-frontend

http://localhost:4200