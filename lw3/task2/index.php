<?php

//приложение Check Identifier

function checkIdentifier(string $text): bool 
{
    return (preg_match("/^[a-zA-Z]+[a-zA-Z0-9]*$/", $text)) ? true : false;
}

header("Content-Type: text/plain");
$identifier = isset($_GET['identifier']) ? $_GET['identifier'] : null;
if ($identifier !== null)
{
    if (checkIdentifier($identifier))
    {
        echo 'yes';
    }
    else
    {
        echo 'no. <Идентификатор> ::= <буква> | <идентификатор><буква> | <идентификатор><цифра> ';
    }
} 
else 
{
    echo "Идентификатор не был задан.";
}