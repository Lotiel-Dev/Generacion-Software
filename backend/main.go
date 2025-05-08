package main

import (
	"log"
	"net/http"

	"github.com/Frosmin/backend/db"
	"github.com/Frosmin/backend/routes"
	"github.com/gorilla/mux"
)

func main() {
	db.Connect()

	r := mux.NewRouter()

	r.HandleFunc("/", routes.Homehandler)
	r.HandleFunc("/lsp", routes.LspHandler)

	log.Println("Servidor escuchando en :8080")
	// log.Fatal(http.ListenAndServe(":8080", r))
	http.ListenAndServe(":8080", r)
}
