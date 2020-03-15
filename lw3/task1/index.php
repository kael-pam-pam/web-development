<?php

//приложение Remove Extra Blanks

function getRemovedExtraBlanksString(string $inputText): string
{
    $inputText = trim($inputText);
    do 
    {
        $inputText = str_replace('  ', ' ', $inputText, $count);
    } 
    while ($count > 0);
    return $inputText;
}

header("Content-Type: text/plain");
$text = isset($_GET['text']) ? $_GET['text'] : null;
if ($text !== null)
{
    echo getRemovedExtraBlanksString($text);
} 
else 
{
    echo "Параметр 'text' отсутствует.";
}
