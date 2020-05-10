CREATE DATABASE university;
USE university;

CREATE TABLE students
(
    id INT AUTO_INCREMENT NOT NULL,
    family_name VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    age INT NOT NULL,
    group_id INT NOT NULL,
    PRIMARY KEY (id)
) DEFAULT CHARACTER SET utf8mb4
  COLLATE `utf8mb4_unicode_ci`
  ENGINE = InnoDB
;

CREATE TABLE groups
(
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(255) NOT NULL,
    faculty_id INT NOT NULL,
    PRIMARY KEY (id)
) DEFAULT CHARACTER SET utf8mb4
  COLLATE `utf8mb4_unicode_ci`
  ENGINE = InnoDB
;

CREATE TABLE faculties
(
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(255) NOT NULL,
    short_name VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
) DEFAULT CHARACTER SET utf8mb4
  COLLATE `utf8mb4_unicode_ci`
  ENGINE = InnoDB
;

INSERT INTO faculties (name, short_name)
VALUES
    ('Факультет информатики и вычислительной техники', 'ФИиВТ'),
    ('Радиотехнический факультет', 'РФ'),
    ('Институт механики и машиностроения', 'ИММ');

INSERT INTO groups (name, faculty_id)
VALUES
    ('ПИ-11', 1),
    ('ПИ-12', 1),
    ('ПИ-13', 1),
    ('РИ-11', 2),
    ('РИ-12', 2),
    ('РИ-13', 2),
    ('МИ-11', 3),
    ('МИ-12', 3),
    ('МИ-13', 3);

INSERT INTO students (family_name, name, age, group_id)
VALUES
    ('Доронин', 'Фёдор', 20, 1),
    ('Князев', 'Эдуард', 21, 1),
    ('Петрик', 'Богдан', 19, 1),
    ('Дмитриева', 'Рада', 18, 1),
    ('Савина', 'Розалина', 19, 1),
    ('Жуков', 'Эрик', 18, 2),
    ('Исакова', 'Харитина', 24, 2),
    ('Соколов', 'Дмитрий', 29, 2),
    ('Повалий', 'Глория', 19, 2),
    ('Евдокимов', 'Карен', 19, 2),
    ('Посидайло', 'Клим', 20, 3),
    ('Гаврилова', 'Марта', 21, 3),
    ('Коновалова', 'Зоя', 22, 3),
    ('Михайлов', 'Эрик', 19, 3),
    ('Зуев', 'Валерий', 18, 3),
    ('Чумак', 'Цилла', 34, 4),
    ('Беляков', 'Нестор', 19, 4),
    ('Максимова', 'Устинья', 22, 4),
    ('Дьячкова', 'Цвета', 21, 4),
    ('Ефремов', 'Шерлок', 18, 4),
    ('Кулагина', 'Харитина', 19, 5),
    ('Большакова', 'Таисия', 19, 5),
    ('Петренко', 'Зиновий', 20, 5),
    ('Власов', 'Матвей', 18, 5),
    ('Выговский', 'Марат', 19, 5),
    ('Данилова', 'Шушана', 27, 6),
    ('Жукова', 'Белла', 22, 6),
    ('Овчаренко', 'Альбина', 20, 6),
    ('Богданова', 'Оксана', 21, 6),
    ('Ефремов', 'Николай', 21, 6),
    ('Скоропадский', 'Зуфар', 19, 7),
    ('Новиков', 'Чеслав', 19, 7),
    ('Колесник', 'Флорентина', 20, 7),
    ('Шубина', 'Гюзель', 19, 7),
    ('Кулагин', 'Казбек', 18, 7),
    ('Худобяк', 'Шушана', 22, 8),
    ('Быкова', 'Харитина', 22, 8),
    ('Новикова', 'Жаклин', 23, 8),
    ('Зайцев', 'Радислав', 21, 8),
    ('Ларионов', 'Игнатий', 19, 8),
    ('Харитонова', 'Юзефа', 18, 9),
    ('Сердюк', 'Мария', 18, 9),
    ('Соловьёв', 'Гордей', 29, 9),
    ('Коновалов', 'Болеслав', 19, 9),
    ('Агафонов', 'Харитон', 20, 9);

-- все студенты в возрасте 19 лет
SELECT 
    id AS student_id, 
    family_name, 
    name, 
    age
FROM
    students
WHERE
    age = 19;

-- все студенты из конкретной группы
SELECT 
    a.id AS student_id, 
    a.family_name, 
    a.name, 
    a.age, 
    a.group_id, 
    b.name AS group_name
FROM 
    students AS a JOIN 
    groups AS b ON a.group_id = b.id
WHERE 
    b.name = 'РИ-12';

-- все студенты из конкретного факультета
SELECT 
    a.id AS student_id, 
    a.family_name, 
    a.name, 
    a.age, 
    a.group_id, 
    b.name AS group_name, 
    b.faculty_id, 
    c.name AS faculty_name, 
    c.short_name AS faculty_short_name
FROM
    students AS a JOIN 
    groups AS b ON a.group_id = b.id JOIN 
    faculties AS c ON b.faculty_id = c.id
WHERE
    c.name = 'Факультет информатики и вычислительной техники';

-- факультет и групп конкретного студента
SELECT 
    a.id AS student_id, 
    a.family_name, 
    a.name, 
    a.age, 
    a.group_id,
    b.name AS group_name, 
    b.faculty_id, 
    c.name AS faculty_name, 
    c.short_name AS faculty_short_name
FROM 
    students AS a JOIN 
    groups AS b ON a.group_id = b.id JOIN 
    faculties AS c ON b.faculty_id = c.id
WHERE
    a.family_name = 'Михайлов' AND
    a.name = 'Эрик';
