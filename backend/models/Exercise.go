package models

import "gorm.io/gorm"

type Exercise struct {
	gorm.Model

	Name     string
	Exercise string
	Solution string
	Level    int
}
