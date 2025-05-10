package models

import "gorm.io/gorm"

type Video struct {
	gorm.Model

	Name  string
	Link  string
	Level int
}
