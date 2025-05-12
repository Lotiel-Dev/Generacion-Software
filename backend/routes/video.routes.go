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
