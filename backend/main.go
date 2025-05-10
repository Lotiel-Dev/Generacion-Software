package main

import (
	"log"
	"net/http"

	"github.com/Frosmin/backend/db"
	"github.com/Frosmin/backend/routes"
	"github.com/gorilla/mux"
)

func main() {

	// migraciones para la base de datos
	db.Connect()
	// db.DB.AutoMigrate(models.User{})
	// db.DB.AutoMigrate(models.Exercise{})
	// db.DB.AutoMigrate(models.Tutorial{})
	// db.DB.AutoMigrate(models.Video{})

	r := mux.NewRouter()

	r.HandleFunc("/", routes.Homehandler)
	r.HandleFunc("/lsp", routes.LspHandler)

	//simon
	api := r.PathPrefix("/api").Subrouter()

	api.HandleFunc("/users", routes.GetUsersHandler).Methods("GET")
	api.HandleFunc("/user/{id}", routes.GetUserHandler).Methods("GET")
	api.HandleFunc("/user", routes.PostUserHandler).Methods("POST")
	api.HandleFunc("/user/{id}", routes.DeleteUserHandler).Methods("DELETE")

	log.Println("Servidor escuchando en :8080")
	// log.Fatal(http.ListenAndServe(":8080", r))
	http.ListenAndServe(":8080", r)
}
