<?php

//приложение Survey Saver
header("Content-Type: text/plain");

$fileName = isset($_GET['email']) ? $_GET['email'] : null;
if ($fileName === null)
{
    echo 'Не указан параметр email';
}
else 
{
    $fileName = 'data/' . $fileName . '.txt';
    if (!file_exists($fileName))
    {
        echo 'Анкета пользователя с указанным email отсутствует.';
    }
    else 
    {
        $text = file($fileName, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
        foreach ($text as $value)
        {
            echo $value . "\n";
        }
    }
}
