<?php

//подключение "common.inc.php"
require_once(dirname(__DIR__) . DIRECTORY_SEPARATOR . 'src' . DIRECTORY_SEPARATOR . 'common.inc.php');

if (getRequestMethod() === 'POST')
{   
    //если POST - проверка данных, сохранение и главная страница
    saveFeedbackPage();
} 
else
{
    //иначе - главная страница
    mainPage();
}

