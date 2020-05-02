<?php

function renderTemplate(string $tplName, array $args = []): void
{
    require_once(TEMPLATES_PATH . $tplName);
}

function printCheked(string $name, string $valueRadio, ?array $args): string
{
    return isset($args[$name]) ? $args[$name] === $valueRadio ? "checked" : "" : "";
}

function printSelected(string $name, string $valueOption, ?array $args): string
{
    return isset($args[$name]) ? $args[$name] === $valueOption ? "selected" : "" : "";
}