CREATE DATABASE lw11;
USE lw11;
CREATE TABLE profiles
(
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    country VARCHAR(255) NOT NULL,
    gender VARCHAR(255) NOT NULL,
    message VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
) DEFAULT CHARACTER SET utf8
  COLLATE `utf8_unicode_ci`
  ENGINE = InnoDB
;

INSERT INTO profiles (name, email, country, gender, message) 
VALUES 
    ('Павел', 'ivanov@m.ru', 'Россия', 'male', 'Привет мир!'),
    ('Sam', 'petrov@m.ru', 'Китай', 'male', 'Работает! Урра!!!'),
    ('Elena', 'sidorova@m.ru', 'США', 'female', 'Hello world!');