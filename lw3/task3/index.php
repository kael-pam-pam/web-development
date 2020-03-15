<?php


//программа Password Strength

function checkPassword(string $text): bool 
{
    return (preg_match("/^[a-zA-Z0-9]+$/", $text)) ? true : false;
}

function getPasswordStrength(string $password): int 
{
    $strength = 0;
    $upper = 0;
    $lower = 0;
    $arrayCount = [];
    $strength += 4 * strlen($password);
    for ($i = 0; $i < strlen($password); $i++)
    {
        $strength += 4 * preg_match("/[0-9]/", $password[$i]);
        $upper += preg_match("/[A-Z]/", $password[$i]);
        $lower += preg_match("/[a-z]/", $password[$i]);
        if (array_key_exists($password[$i], $arrayCount))
        {
            $arrayCount[$password[$i]] += 1;
        } 
        else 
        {
            $arrayCount[$password[$i]] = 1;
        }
    }
    $strength -= strlen($password) * preg_match("/^[a-zA-Z]+?$/", $password);
    $strength -= strlen($password) * preg_match("/^[0-9]+?$/", $password);
    $strength += (strlen($password) - $upper) * 2;
    $strength += (strlen($password) - $lower) * 2;
    foreach ($arrayCount as $key => $value)
    {
        if ($value > 1)
        {
            $strength -= $value;
        }
    }
    return $strength;    
}

header("Content-Type: text/plain");
$param = isset($_GET['password']) ? $_GET['password'] : null;
if ($param !== null)
{
    if (checkPassword($param))
    {
        echo getPasswordStrength($param);
    } 
    else 
    {
        echo "Пароль задан неверно.";
    }
} 
else 
{
    echo "Пароль не был задан.";
}
