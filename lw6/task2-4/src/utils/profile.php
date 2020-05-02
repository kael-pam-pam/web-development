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

function isCorrectUserData(array $userData): array
{
    $isValid = false;
    $uncorrFields = array();
    if (is_null($userData['name']))
    {
        array_push($uncorrFields, 'name');
    }
    if (!isValidEmail($userData['email']))
    {
        array_push($uncorrFields, 'email');
    }
    if ((is_null($userData['country'])) || ($userData['country'] === '...'))
    {
        array_push($uncorrFields, 'country');
    }   
    if (is_null($userData['gender']))
    {
        array_push($uncorrFields, 'gender');
    }
    if (is_null($userData['message']))
    {
        array_push($uncorrFields, 'message');
    }
    $isValid = (count($uncorrFields) === 0); 
    return array('isCorrect' => $isValid, 'errorFields' => $uncorrFields);
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
        $text = file($fileName, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
        foreach ($text as $value)
        {
            array_push($profileData, $value);
        }
        $fileExist = true;
    }

    return array('fileExist' => $fileExist, 'profileData' => $profileData);
}