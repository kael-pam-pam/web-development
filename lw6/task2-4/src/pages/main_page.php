<?php

function mainPage(array $args = array('status' => 2)): void
{
    renderTemplate('main.tpl.php', $args);
}