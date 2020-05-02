<?php

function mainPage(array $args = array('status' => 0, 'errorFields' => null)): void
{
    renderTemplate('main.tpl.php', $args);
}