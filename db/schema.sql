CREATE DATABASE wander;

USE wander;

CREATE TABLE users (
  userId int NOT NULL AUTO_INCREMENT,
  firstname varchar(24),
  lastname varchar(24),
  username varchar(48),
  password varchar(128),
  salt varchar(64),
  PRIMARY KEY(userId)
);

CREATE TABLE items (
  itemId int NOT NULL AUTO_INCREMENT,
  itemname varchar(24),
  owner int(24),
  lentTo int(24),
  PRIMARY KEY(itemId),
  FOREIGN KEY (owner) REFERENCES users(userId),
  FOREIGN KEY (lentTo) REFERENCES users(userId)
);

/* Create other tables and define schemas for them here! */

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
