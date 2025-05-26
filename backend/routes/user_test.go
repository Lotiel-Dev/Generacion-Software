package routes

import (
	//"bytes"
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/gin-gonic/gin"
)

func setupUserTestRouter() *gin.Engine {
	r := gin.Default()
	api := r.Group("/api")
	api.GET("/users", GetUsersHandler)
	api.GET("/user/:id", GetUserHandler)
	api.POST("/user", PostUserHandler)
	api.DELETE("/user/:id", DeleteUserHandler)
	return r
}

func TestGetUsersHandler(t *testing.T) {
	router := setupUserTestRouter()
	req, _ := http.NewRequest("GET", "/api/users", nil)
	w := httptest.NewRecorder()
	router.ServeHTTP(w, req)

	if w.Code != http.StatusOK {
		t.Errorf("Expected status 200, got %d", w.Code)
	}
}

func TestGetUserHandler_NotFound(t *testing.T) {
	router := setupUserTestRouter()
	req, _ := http.NewRequest("GET", "/api/user/999999", nil)
	w := httptest.NewRecorder()
	router.ServeHTTP(w, req)

	if w.Code != http.StatusNotFound {
		t.Errorf("Expected status 404, got %d", w.Code)
	}
}

/*
func TestPostUserHandler(t *testing.T) {
	router := setupUserTestRouter()
	body := `{"username":"testuser","email":"testuser@example.com","password":"testpass"}`
	req, _ := http.NewRequest("POST", "/api/user", bytes.NewBufferString(body))
	req.Header.Set("Content-Type", "application/json")
	w := httptest.NewRecorder()
	router.ServeHTTP(w, req)

	if w.Code != http.StatusCreated {
		t.Errorf("Expected status 201, got %d", w.Code)
	}
}

func TestDeleteUserHandler(t *testing.T) {
	// Primero, crea un usuario para luego eliminarlo
	router := setupUserTestRouter()
	body := `{"username":"deleteuser","email":"deleteuser@example.com","password":"deletepass"}`
	req, _ := http.NewRequest("POST", "/api/user", bytes.NewBufferString(body))
	req.Header.Set("Content-Type", "application/json")
	w := httptest.NewRecorder()
	router.ServeHTTP(w, req)

	// Extrae el ID del usuario creado (ajusta según tu respuesta real)
	// Aquí se asume que el ID es 1 para simplificar
	id := "1"

	reqDel, _ := http.NewRequest("DELETE", "/api/user/"+id, nil)
	wDel := httptest.NewRecorder()
	router.ServeHTTP(wDel, reqDel)

	if wDel.Code != http.StatusOK {
		t.Errorf("Expected status 200, got %d", wDel.Code)
	}
}
*/
