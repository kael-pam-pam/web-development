<?php

function saveFeedbackPage(): array
{
    $userData = [];  
    $userData['name'] = getPostParameter('name');
    $userData['email'] = getPostParameter('email');
    $userData['country'] = getPostParameter('country');
    $userData['gender'] = getPostParameter('gender');
    $userData['message'] = getPostParameter('message');
    $args = validateUserData($userData);
    if (($args['name'] === 'valid') && ($args['email'] === 'valid') && ($args['message'] === 'valid'))
    {
        saveFeedback($userData);
    }
    return $args;
}