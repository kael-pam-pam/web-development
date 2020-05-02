<?php

function getPostParameter(string $fieldName): ?string
{   
    $value = null;
    if ((isset($_POST[$fieldName])) && ($_POST[$fieldName] !== ''))
    {
        $value = $_POST[$fieldName];
    }
    return $value;
}

function getRequestMethod(): string
{
    return $_SERVER['REQUEST_METHOD'];
}