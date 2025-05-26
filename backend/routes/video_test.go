package routes

import (
	//"bytes"
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/gin-gonic/gin"
)

func setupVideoTestRouter() *gin.Engine {
	r := gin.Default()
	api := r.Group("/api")
	api.GET("/videos", GetVideosHandler)
	api.GET("/video/:id", GetVideoHandler)
	api.POST("/video", PostVideoHandler)
	return r
}

func TestGetVideosHandler(t *testing.T) {
	router := setupVideoTestRouter()
	req, _ := http.NewRequest("GET", "/api/videos", nil)
	w := httptest.NewRecorder()
	router.ServeHTTP(w, req)

	if w.Code != http.StatusOK {
		t.Errorf("Expected status 200, got %d", w.Code)
	}
}

func TestGetVideoHandler_NotFound(t *testing.T) {
	router := setupVideoTestRouter()
	req, _ := http.NewRequest("GET", "/api/video/999999", nil)
	w := httptest.NewRecorder()
	router.ServeHTTP(w, req)

	if w.Code != http.StatusNotFound {
		t.Errorf("Expected status 404, got %d", w.Code)
	}
}

/*
func TestPostVideoHandler(t *testing.T) {
	router := setupVideoTestRouter()
	body := `{"title":"Test Video","description":"Test Desc","url":"http://example.com/video.mp4"}`
	req, _ := http.NewRequest("POST", "/api/video", bytes.NewBufferString(body))
	req.Header.Set("Content-Type", "application/json")
	w := httptest.NewRecorder()
	router.ServeHTTP(w, req)

	if w.Code != http.StatusCreated {
		t.Errorf("Expected status 201, got %d", w.Code)
	}
}

*/
