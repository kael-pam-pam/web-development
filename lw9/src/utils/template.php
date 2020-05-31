<?php

function renderTemplate(string $tplName, array $args = []): void
{
    require_once(TEMPLATES_PATH . $tplName);
}
