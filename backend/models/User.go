package models

import "gorm.io/gorm"

type User struct {
	gorm.Model

	Username  string `grorm:"unique;not null"`
	FirstName string
	LastName  string
	Email     string
	Password  string
}
