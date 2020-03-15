<?php

//приложение Survey Saver

function writeArrayInFile(string $fileName, array $array)
{
    $file = fopen($fileName, 'w');
    foreach($array as $key => $value)
    {
        //fwrite($file, "$key: $value\r\n");
        fwrite($file, "$key: $value" . PHP_EOL);  
    }
    fclose($file);       
}

foreach($_GET as $key => $value)
{
    $profile[$key] = $value; 
}

header("Content-Type: text/plain");
$fileName = isset($_GET['email']) ? $_GET['email'] : null;
if (($fileName !== null) && (filter_var($profile['email'], FILTER_VALIDATE_EMAIL)))
{
    $fileName = 'data/' . $fileName . '.txt';
    if (file_exists($fileName))
    {
        $oldText = file($fileName, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
        foreach($oldText as $valueStr)
        {
            [$key, $val] = explode(': ', $valueStr);
            if (!array_key_exists($key, $profile))
            {
                $profile[$key] = $val;
            }
        } 
    }
    writeArrayInFile($fileName, $profile);
    echo 'Анкета сохранена.';
} 
else 
{
    echo 'Не верно указан параметр email.';
}

