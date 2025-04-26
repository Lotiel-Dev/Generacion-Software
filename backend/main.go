package main

import (
	"net/http"

	"github.com/Frosmin/backend/routes"
	"github.com/gorilla/mux"
)

func main() {
	r := mux.NewRouter()

	r.HandleFunc("/", routes.Homehandler)
	http.ListenAndServe(":8080", r)
}
