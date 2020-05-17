# Лабораторная работ №6

## Задание

- [x] ~~Добавьте в страницу о себе форму по дизайну.   
Для тех кто верстал страницу о себе дизайн - [шаблон](https://drive.google.com/open?id=1_YtVOLLTYND9P6kUUUTyR3DRVD7gx2E2).  
Для тех кто верстал страницу Bino форма есть в изначальном дизайне (страницу  о себе верстать не надо).~~  
- [ ] Подготовьте PHP скрипт, формирующий форму из дизайна и добавляющий ее на страницу.
- [ ] Напишите PHP скрипт для обработки формы из задания. Данные формы необходимо записывать в текстовый файл.  
Название текстового файла должно формироваться следующим образом: `<email пользователя в нижнем регистре>.txt`  
- [ ] Разработайте набор PHP скриптов, предоставляющих возможность просмотреть запросы отправленные из формы  
“Напишите мне”. Один PHP скрипт должен формировать форму которая состоит из поля ввода email'а и кнопки  
отправить. Второй PHP скрипт должен обрабатывать запрос формы и выводить данные соответствующего  
пользователя в виде HTML списка. В случае, если данные отсутствуют, необходимо показывать сообщение об ошибке.  
Стилевое оформление обеих форм должно соответствовать оформлению формы из задачи 1.dr  

## Расположение файлов

```
 src/  
   pages/  
     main_page.php (или MainPage.php в случае, если используется класс)  
     save_feedback_page.php (или SaveFeedbackPage.php)  
     feedbacks_list_page.php (или FeedbacksListPage.php)  
   templates/  
     main.tpl.php  
     feedbacks.tpl.php  
   utils/  
     request.php (или Request.php)  
     template.php (или Template.php)  
   common.inc.php  
 web/  
   css/
   images/
   Index.php
   feedbacks.php
 README.md
```

## Назначение файлов

***src/common.inc.php***  
Файл содержащий инструкции require_once для всех файлов из директорий  
src/pages  
src/utils  
Он нужен для того чтобы в файлах index.php и feedbacks.php подключать только его.  

***src/utils/request.php***  
Тут должны быть функции для работы с параметрами запроса, например  
getPostParameter  
getRequestMethod (возвращает строку post или get)  

***src/utils/template.php***  
Тут должна лежать функция для подключения шаблонов  
```
function renderTemplate(string $tplName, array $args = []): void
{
   include __DIR__ . "/../templates/{$tplName}";
}
```
Вот так можно пользоваться этой функцией  
```
renderTemplate('main.tpl.php', ['name' => 'Ivan']);
```
При этом в шаблоне должно быть   
```
Hello dear, <?php echo isset($args[‘name’]) ? $args[‘name’] : ‘Anomymous’; ?>!
```  

***src/templates/main.tpl.php***  
Тут должен быть html код главной страницы с php вставками, чтобы отобразить ошибки, например   
```
…
<?php if (isset($args[‘email_error_msg’])): ?>
    <p><?php echo $args[‘email_error_msg’]; ?></p>
<?php endif; ?>
…
```
Также можно использовать php вставки для отображения предыдущих значений формы
```
…
<input type=”email” name=”email” value=”<?php echo $args[‘email’] ?? ‘’; ?>)” />
…
```  

***src/templates/feedbacks.tpl.php***  
Тут должен быть html код страницы списка ответов  

***src/pages/main_page.php***  
В файлах страниц должна быть, обработка параметров запроса и вызов функции renderTemplate  
В данном файле поскольку нет логики, код может выглядеть так  
```
<?php

function mainPage(): void
{
    renderTemplate(‘main.tpl.php’);
}
```  

***src/pages/save_feedback_page.php***  
Тут должна должна проводиться валидация полей из формы, которые должны быть получены из post,  
в случае неправильных данных должен рендериться шаблон `main` с информацией об ошибках, в случае  
правильных данных, данные должны сохраняться и должен рендериться шаблон `main` с информацией  
о том что данные сохранены  

***src/pages/feedbacks_list_page.php***  
Тут нужно получать все ответы из файлов и рендерить шаблон с этими ответами  
Чтобы отобразить массив можно использовать следующие конструкции  
```
…
<?php foreach($args[‘answers] as $answer): ?>
    <p><?php echo $answer; ?></p>
<?php endforeach; ?>
…
```  

***web/index.php***  
Тут должно быть подключение common.inc.php  
И вызов нужно страницы, если убрать из формы атрибут action, то форма будет сабмититься на этуже  
страницу, поэтому в этом файле нужно сделать проверку на request method, если он post то   
вызывать `saveFeedbackPage();` иначе `mainPage();`  

***web/feedbacks.php***  
Тут должно быть подключение `common.inc.php` и вызов `feedbacksListPage();`  

***
[Краткое руководство по Маркдауну](https://paulradzkov.com/2014/markdown_cheatsheet/ "в помощь при написании")  
