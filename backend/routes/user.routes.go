package routes

import (
	"encoding/json"
	"net/http"

	"github.com/Frosmin/backend/db"
	"github.com/Frosmin/backend/models"
	"github.com/gorilla/mux"
)

func GetUsersHandler(w http.ResponseWriter, r *http.Request) {
	var users []models.User
	db.DB.Find(&users)
	json.NewEncoder(w).Encode(&users)
}

func GetUserHandler(w http.ResponseWriter, r *http.Request) {
	var user models.User
	params := mux.Vars(r)
	db.DB.First(&user, params["id"])

	if user.ID == 0 {
		w.WriteHeader(http.StatusNotFound)
		w.Write([]byte("usuario no encontrado"))
		return
	}

	json.NewEncoder(w).Encode(&user)
}

func PostUserHandler(w http.ResponseWriter, r *http.Request) {
	var user models.User
	json.NewDecoder(r.Body).Decode(&user)
	createdUser := db.DB.Create(&user)

	error := createdUser.Error
	if error != nil {
		w.WriteHeader(http.StatusBadRequest)
		w.Write([]byte("error al crear usuario"))
	}

	json.NewEncoder(w).Encode(&user)

}

func DeleteUserHandler(w http.ResponseWriter, r *http.Request) {
	var user models.User
	params := mux.Vars(r)
	db.DB.First(&user, params["id"])

	if user.ID == 0 {
		w.WriteHeader(http.StatusNotFound)
		w.Write([]byte("usuario no encontrado"))
		return
	}
	//borrar el usuario de la base de datos
	db.DB.Unscoped().Delete(&user)
	w.WriteHeader(http.StatusOK)
	w.Write([]byte("usuario eliminado"))

	//para no borrar el usuario de la base de datos, sino solo marcarlo como eliminado
	// 	db.DB.Delete(&user)
	// 	w.WriteHeader(http.StatusOK)
	// 	w.Write([]byte("usuario eliminado"))
}
