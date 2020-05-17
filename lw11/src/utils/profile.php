<?php

function writeArrayInFile(string $fileName, array $array): void
{
    $file = fopen($fileName, 'w');
    foreach($array as $key => $value)
    {
        fwrite($file, "$key: $value" . PHP_EOL);  
    }
    fclose($file);       
}

function updateProfileFile(string $fileName, array $userData): void
{
    $fileName = PROFILE_PATH . $fileName . '.txt';
    if (file_exists($fileName))
    {
        $oldText = file($fileName, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
        foreach($oldText as $valueStr)
        {
            [$key, $val] = explode(': ', $valueStr);
            if (!array_key_exists($key, $userData))
            {
                $userData[$key] = $val;
            }
        } 
    }
    writeArrayInFile($fileName, $userData);
}

function isValidEmail(?string $email): bool
{ 
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}

function validateUserData(array $userData): array
{
    $isValid = false;
    $uncorrFields = array();
    if (is_null($userData['name']))
    {
        array_push($uncorrFields, 'Имя');
    }
    if (!isValidEmail($userData['email']))
    {
        array_push($uncorrFields, 'Email');
    }
    if ((is_null($userData['country'])) || ($userData['country'] === '...'))
    {
        array_push($uncorrFields, 'Страна');
    }   
    if (is_null($userData['gender']))
    {
        array_push($uncorrFields, 'Пол');
    }
    if (is_null($userData['message']))
    {
        array_push($uncorrFields, 'Сообщение');
    }
    $isValid = (count($uncorrFields) === 0); 
    return array('isValidate' => $isValid, 'errorFields' => $uncorrFields);
}

function readProfileFile(string $fileName): array
{
    $fileName = PROFILE_PATH . $fileName . '.txt';
    $profileData = array();
    if (!file_exists($fileName))
    {
        $fileExist = false;
    }
    else 
    {
        $translate['name'] = 'Имя';
        $translate['email'] = 'Эл. ящик';
        $translate['country'] = 'Страна';
        $translate['gender'] = 'Пол';
        $translate['message'] = 'Сообщение';
        $text = file($fileName, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
        foreach ($text as $value)
        {   
            foreach ($translate as $k => $v)
            {              
                $pos = strpos($value, $k . ': ');
                if ($pos === 0)
                {
                    $value = substr_replace($value, $v, $pos, strlen($k));
                    break;
                }
            }
            array_push($profileData, $value);
        }
        $fileExist = true;
    }
    return array('fileExist' => $fileExist, 'profileData' => $profileData);
}