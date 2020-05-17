<?php

//подключение констант
require_once(dirname(__DIR__) . DIRECTORY_SEPARATOR . 'src' . DIRECTORY_SEPARATOR . 'config' . DIRECTORY_SEPARATOR . 'config.php');
//подключение "src/utils/request.php"
require_once(dirname(__DIR__) . DIRECTORY_SEPARATOR . 'src' . DIRECTORY_SEPARATOR . 'utils' . DIRECTORY_SEPARATOR . 'request.php');
//подключение "src/utils/template.php"
require_once(dirname(__DIR__) . DIRECTORY_SEPARATOR . 'src' . DIRECTORY_SEPARATOR . 'utils' . DIRECTORY_SEPARATOR . 'template.php');
//подключение "src/pages/main_page.php"
require_once(dirname(__DIR__) . DIRECTORY_SEPARATOR . 'src' . DIRECTORY_SEPARATOR . 'pages' . DIRECTORY_SEPARATOR . 'main_page.php');
//подключение "src/pages/save_feedback_page.php"
require_once(dirname(__DIR__) . DIRECTORY_SEPARATOR . 'src' . DIRECTORY_SEPARATOR . 'pages' . DIRECTORY_SEPARATOR . 'save_feedback_page.php');
//подключение "src/pages/feedbacks_list_page.php"
require_once(dirname(__DIR__) . DIRECTORY_SEPARATOR . 'src' . DIRECTORY_SEPARATOR . 'pages' . DIRECTORY_SEPARATOR . 'feedbacks_list_page.php');
//подключение "src/utils/profile.php"
require_once(dirname(__DIR__) . DIRECTORY_SEPARATOR . 'src' . DIRECTORY_SEPARATOR . 'utils' . DIRECTORY_SEPARATOR . 'profile.php');
//работа с БД
require_once(dirname(__DIR__) . DIRECTORY_SEPARATOR . 'src' . DIRECTORY_SEPARATOR . 'utils' . DIRECTORY_SEPARATOR . 'database.php');