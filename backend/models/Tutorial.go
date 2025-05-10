package models

import "gorm.io/gorm"

type Tutorial struct {
	gorm.Model

	Name        string
	Description string
	Level       int
}
