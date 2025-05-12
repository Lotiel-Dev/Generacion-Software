package routes

import (
	"net/http"

	"github.com/Frosmin/backend/db"
	"github.com/Frosmin/backend/models"
	"github.com/gin-gonic/gin"
)

func GetVideosHandler(c *gin.Context) {
	var videos []models.Video
	db.DB.Find(&videos)
	c.JSON(http.StatusOK, videos)
}

func PostVideoHandler(c *gin.Context) {
	var video models.Video

	var error = c.ShouldBindJSON(&video)
	if error != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "video no creado"})
		return
	}
	db.DB.Create(&video)
	c.JSON(http.StatusCreated, video)
}
