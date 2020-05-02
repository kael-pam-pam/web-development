<?php

function saveFeedbackPage(): void
{
    $userData['name'] = getPostParameter('name');
    $userData['email'] = getPostParameter('email');
    $userData['country'] = getPostParameter('country');
    $userData['gender'] = getPostParameter('gender');
    $userData['message'] = getPostParameter('message');
    
    $args = validateUserData($userData);
    if ($args['isValidate'] === true)
    {
        //данные корректны - сохранение анкеты
        updateProfileFile($userData['email'], $userData);
        $status = 1;
        $message = 'Сообщение отправлено!';
        $valuesBefore = [];
        $args['errorFields'] = [];
    }
    else
    {
        $status = 0;
        $message = 'Заполните корректно поля:';
        $valuesBefore = $userData;
    }
    mainPage(array('status' => $status, 'errorFields' => $args['errorFields'], 'message' => $message, 'valuesBefore' => $valuesBefore));
}