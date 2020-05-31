<?php

//подключение "common.inc.php"
require_once(dirname(__DIR__) . DIRECTORY_SEPARATOR . 'src' . DIRECTORY_SEPARATOR . 'common.inc.php');

if (getRequestMethod() === 'POST')
{  
    require_once(dirname(__DIR__) . DIRECTORY_SEPARATOR . 'src' . DIRECTORY_SEPARATOR . 'pages' . DIRECTORY_SEPARATOR . 'save_feedback_page.php');
    echo json_encode(saveFeedbackPage());
} 
else
{
    mainPage();
}