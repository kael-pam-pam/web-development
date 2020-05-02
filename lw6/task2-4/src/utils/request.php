<?php

function getPostParameter(string $fieldName): ?string
{   
    if (($_SERVER['REQUEST_METHOD'] === 'POST') && (isset($_POST[$fieldName])) && ($_POST[$fieldName] !== ''))
    {
        $value = $_POST[$fieldName];
    }
    
    return $value;
}

function getRequestMethod(): string
{
    return $_SERVER['REQUEST_METHOD'];
}