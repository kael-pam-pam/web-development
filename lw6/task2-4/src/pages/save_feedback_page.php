<?php

function saveFeedbackPage(): void
{
    //проверка параметров
    if (getRequestMethod() === 'POST')
    {
        $userData['name'] = getPostParameter('name');
        $userData['email'] = getPostParameter('email');
        $userData['country'] = getPostParameter('country');
        $userData['gender'] = getPostParameter('gender');
        $userData['message'] = getPostParameter('message');
        
        $args = isCorrectUserData($userData);
        if ($args['isCorrect'] === true)
        {
            //данные корректны - сохранение анкеты
            updateProfileFile($userData['email'], $userData);
        }
    }

    if ($args['isCorrect'] === true)
    {
        $status = 1;
        $message = 'Сообщение отправлено!';
        $valuesBefore = array();
    }
    else
    {
        $status = -1;
        $message = 'Допущена ошибка!';
        $valuesBefore = $userData;
    }
    //1 - анкета сохранена; -1 - некорректные данные
    mainPage(array('status' => $status, 'errorFields' => $args['errorFields'], 'message' => $message, 'valuesBefore' => $valuesBefore));
}