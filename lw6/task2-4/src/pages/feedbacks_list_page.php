<?php

function feedbacksListPages(): void
{
    $args['status'] = 0;
    $args['profileData'] = array();
    $args['message'] = '';
    if (getRequestMethod() === 'POST')
    {
        $email = getPostParameter('email');
        if (is_null($email))
        {
            $args['message'] = 'Не указан email!';
            $args['status'] = -1;
            $args['profileData'] = array();    
        }
        else
        {
            $readedData = readProfileFile($email);
            if ($readedData['fileExist'] === true)
            {
                $args['status'] = 1;
                $args['profileData'] = $readedData['profileData'];
                $args['message'] = '';
            }
            else
            {
                $args['message'] = 'Анкета не найдена!';
                $args['status'] = -1;
                $args['profileData'] = array();
            }
        }
    }
    renderTemplate('feedbacks.tpl.php', $args);
}