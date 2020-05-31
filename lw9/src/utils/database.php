<?php

function database(): PDO
{
    static $connection = null;
    if ($connection === null)
    {
        $connection = new PDO(DB_DSN, DB_USER, DB_PASSWORD);
        $connection->query('SET NAMES utf8');
    }
    return $connection;
}

function saveFeedback(array $feedback): void
{
    $name = database()->quote($feedback['name']);
    $email = database()->quote($feedback['email']);
    $country = database()->quote($feedback['country']);
    $gender = database()->quote($feedback['gender']);
    $message = database()->quote($feedback['message']);
    $country = ($country === '' || $country == database()->quote('...')) ? 'null' : $country;
    $gender = ($gender == database()->quote('male') || $gender == database()->quote('female')) ? $gender : 'null';
    $count = database()->query("SELECT COUNT(*) FROM profiles WHERE email = $email");
    if ($count->fetchColumn() == 0)
    {
        $stm = database()->query("INSERT INTO profiles (name, email, country, gender, message) VALUES ($name, $email, $country, $gender, $message)");    
    }
    else
    {
        $stm = database()->query("UPDATE profiles SET name = $name, country = $country, gender = $gender, message = $message WHERE email = $email");
    }
}

function getFeedback(string $email): array
{
    $email = database()->quote($email);
    $count = database()->query("SELECT COUNT(*) FROM profiles WHERE email = $email");
    if ($count->fetchColumn() > 0)
    {
        $stm = database()->query("SELECT * FROM profiles WHERE email = $email");
        $profile = $stm->fetch();
        $profileData['name'] = "Имя: ${profile['name']}";
        $profileData['email'] = "Эл. ящик: ${profile['email']}";
        $profileData['country'] = "Страна: ${profile['country']}";
        $profileData['gender'] = "Пол: ${profile['gender']}";
        $profileData['message'] = "Сообщение: ${profile['message']}";
        $fileExist = true;
    }
    else
    {
        $fileExist = false;
    }
    return array('fileExist' => $fileExist, 'profileData' => $profileData);
}