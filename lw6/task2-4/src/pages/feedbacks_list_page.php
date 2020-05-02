<?php

function feedbacksListPages(): void
{
    $args['profileData'] = [];
    $args['message'] = '';
    if (getRequestMethod() === 'POST')
    {
        $email = getPostParameter('email');
        if (is_null($email))
        {
            $args['message'] = 'Не указан email!';
            $args['status'] = 0;  
        }
        else
        {
            $readedData = readProfileFile($email);
            if ($readedData['fileExist'] === true)
            {
                $args['status'] = 1;
                $args['profileData'] = $readedData['profileData'];
            }
            else
            {
                $args['message'] = 'Анкета не найдена!';
                $args['status'] = 0;
            }
        }
    }
    renderTemplate('feedbacks.tpl.php', $args);
}