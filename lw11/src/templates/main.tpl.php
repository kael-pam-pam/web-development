<!DOCTYPE HTML>
<html lang="ru">
  <head>
    <meta charset="utf-8">
    <title>Сайт-визитка</title>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/styles.css">
  </head>
  <body>    
    <header class="header">
      <nav class="navigation_container">
        <ul class="navigation">
          <li class="navigation_item">
            <a href="#about_me" class="navigation_item_text navigation_item_about_me">О еже</a>
          </li>
          <li class="navigation_item">
            <a href="#biography" class="navigation_item_text navigation_item_biography">Биография</a>
          </li>
          <li class="navigation_item">
            <a href="#favorite_films" class="navigation_item_text navigation_item_favorite_film">Любимые фильмы</a>
          </li>
          <li class="navigation_item">
            <a href="feedbacks.php" class="navigation_item_text">Сообщения</a>
          </li>      
        </ul>
      </nav>
    </header>
    <div class="top_block">
      <div class="photo_quote">
        <img class="photo" src="pictures/photo.png" alt="Sonic the Hedgehog">
        <blockquote class="quote_text">
          Нет добра. Нет зла. Есть только сила. Сила нужна для того,
          чтобы ей пользоваться. И я знаю, как это делать!
          <cite class="quote_cite">— Ёжик Соник</cite>
        </blockquote> 
      </div>           
    </div>
    <div class="main_block">
      <div class="lists">
        <span class="list_title">Любимые писатели:</span>
        <ul class="list">
          <li class="list_item">Стивен Кинг</li>
          <li class="list_item">Лев Толстой</li>
          <li class="list_item">Дэн Браун</li>
          <li class="list_item">Федор Достоевский</li>
        </ul>
        <span class="list_title">Любимые фильмы:</span> 
          <ol class="list">
            <li class="list_item">Тачки</li>
            <li class="list_item">Перевозчик</li>
            <li class="list_item">Безумный Макс</li>
            <li class="list_item">Скорость</li>
          </ol>
      </div>
      <div class="texts">
        <h1 class="first_title" id="about_me">Соник Ёж</h1>
        <p class="text">
          Соник — синий антропоморфный ёж, созданный художником Наото Осимой,
          программистом Юдзи Накой и дизайнером Хирокадзу Ясухарой. Во время
          разработки было редложено множество образов главного героя будущей
          игры, но разработчики остановились на ёжике синего цвета. Своё имя
          Соник получил за способность бегать на сверхзвуковых скоростях (англ.
          sonic — «звуковой», «со скоростью звука»). Геймплей за Соника в
          большинстве игр серии Sonic the Hedgehog заключается в быстром 
          прохождении уровней и битвах с врагами, для атаки которых Соник 
          сворачивается в шар во время прыжка. Немаловажную роль для Соника 
          играют золотые кольца, служащие ему в качестве защиты. Главным 
          антагонистом героя является доктор Эггман, который хочет захватить мир 
          и построить свою империю «Эггманленд».
        </p>
        <h2 class="second_title" id="biography">Биография</h2>
        <p class="text">
          Соник родился на вымышленной планете Мобиус, в семье ежей Джулеса и    
          Бернадетт. Поначалу его окрас был коричневого цвета. Однажды Соник 
          обнаружил подземную лабораторию доктора Ови Кинтобора, который при 
          помощи магических камней, известных как Изумруды Хаоса, пытался найти 
          способ дать планете абсолютную защиту от зла. Кинтобор и Соник 
          подружились; при помощи специальной беговой дорожки доктор помог ежу 
          увеличить скорость бега, пока однажды Соник не преодолел звуковой 
          барьер, из-за чего его шерсть приобрела синий окрас. Днём позже 
          произошёл инцидент, превративший Кинтобора в злого доктора Айво 
          Роботника, который за некоторое время взял власть на Мобиусе.   
        </p>
        <a class="write_me" href="#write_me">Напиши мне</a>
      </div>
    </div>
    <div class="films_block">
      <div class="favorite_films">
        <h2 class="second_title" id="favorite_films">Любимые фильмы</h2>
        <div class="film_list">
          <div class="film">
            <div class="film_pic">
              <img class="film_pic_content" src="pictures/film_alien.jpg" alt="Чужой">
            </div>
            <h3 class="third_title">Чужой</h3>
            <p class="film_about">
              В далеком будущем возвращающийся на Землю грузовой космический корабль перехватывает исходящий с неизвестной планеты неопознанный сигнал. Экипаж, в соответствии с основными инструкциями, обязан найти и исследовать источник сигнала. Оказавшись на планете, астронавты повсюду обнаруживают неопознанные предметы, по виду напоминающие гигантские коконы.
            </p>
          </div>
          <div class="film">
            <div class="film_pic">
              <img class="film_pic_content" src="pictures/film_the_thing.jpg" alt="Нечто">
            </div>
            <h3 class="third_title">Нечто</h3>
            <p class="film_about">
              Команде ученых американской исследовательской базы в Антарктике предстоит столкнуться с необъяснимым, чудовищным кошмаром. Отрезанные от всего света полярники вступают в неравную схватку с инопланетной тварью, пробудившейся после тысячелетней спячки во льдах.
            </p>
          </div>
          <div class="film">
            <div class="film_pic">
              <img class="film_pic_content" src="pictures/film_watchmen.jpg" alt="Хранители">
            </div>
            <h3 class="third_title">Хранители</h3>
            <p class="film_about">
              Действие картины разворачивается в параллельной реальности, в Америке 1985 года. В этом мире супергерои стали частью повседневной жизни общества, а Часы Судного Дня, застыв в пяти минутах от полуночи, отсчитывают время до столкновения ведущих мировых держав. После убийства одного из своих прежних коллег Роршах — супергерой, никогда не снимающий маски, — полон решимости свершить суд Линча.
            </p>
          </div>
          <div class="film">
            <div class="film_pic">
              <img class="film_pic_content" src="pictures/film_die_hard.jpg" alt="Крепкий орешек">
            </div>
            <h3 class="third_title">Крепкий орешек</h3>
            <p class="film_about">
              В суперсовременном небоскребе Лос-Анджелеса полицейский Джон Макклейн ведет смертельную схватку с бандой политических террористов, взявших в заложники два десятка человек, в число которых попадает и его жена. Началось все с того, что парень приехал в город к жене, оказался на рождественском приеме, а кончилось настоящей войной…
            </p>
          </div>
        </div>
        <a href="#all_films" class="button_all_films">Все фильмы</a>
      </div>
    </div>
    <form class="form_write_me" method="post" autocomplete="off">
      <span class="form_title" id="write_me">напиши мне</span>
      <label class="caption necessarily" for="name">Ваше имя</label> 
      <input class="text_field" type="text" id="name" name="name" maxlength="30" required="requared" value=<?php echo '"' . ($args['valuesBefore']['name'] ?? '') . '"'; ?> />
      <label class="caption necessarily" for="email">Ваш email</label>
      <input class="text_field" type="email" id="email" name="email" maxlength="30" required="requared" value=<?php echo '"' . ($args['valuesBefore']['email'] ?? '') . '"'; ?> />
      <label class="caption" for="country">Откуда вы?</label>
      <select class="choose_field" id="country" name="country">
        <option value="..." <?php echo printSelected('country', '...', $args['valuesBefore']); ?>>...</option>
        <option value="Россия" <?php echo printSelected('country', 'Россия', $args['valuesBefore']); ?>>Россия</option>
        <option value="Китай" <?php echo printSelected('country', 'Китай', $args['valuesBefore']); ?>>Китай</option>
        <option value="США" <?php echo printSelected('country', 'США', $args['valuesBefore']); ?>>США</option>
        <option value="Япония" <?php echo printSelected('country', 'Япония', $args['valuesBefore']); ?>>Япония</option>
        <option value="Германия" <?php echo printSelected('country', 'Германия', $args['valuesBefore']); ?>>Германия</option>
      </select>
      <span class="caption">Ваш пол</span>
      <div class="gender_choose">
        <input id="gender_male" type="radio" name="gender" value="male" <?php echo printChecked('gender', 'male', $args['valuesBefore']); ?> />  
        <label for="gender_male" class="caption_switch">Мужской</label>
        <input id="gender_female" type="radio" name="gender" value="female" <?php echo printChecked('gender', 'female', $args['valuesBefore']); ?> />
        <label for="gender_female" class="caption_switch">Женский</label>
      </div>
      <label class="caption necessarily" for="message">Ваше сообщение</label>
      <textarea class="message_field" id="message" name="message" maxlength="200" required="requared"><?php echo $args['valuesBefore']['message'] ?? ''; ?></textarea>
      <input class="submit" type="submit" value="Отправить" />
      <span class="form_answer <? echo isset($args['status']) ? $args['status'] === 1 ? 'success' : 'error' : ''; ?>"><? echo $args['message']; ?></span>
      <?php if (isset($args['status']) && $args['status'] === 0) 
           { 
        ?>
        <ul class="error_fields">
          <?php foreach($args['errorFields'] as $answer): ?>
            <li><?php echo $answer; ?></li>
          <?php endforeach; ?>
        </ul>
        <?php } ?>
    </form>
    <span class="footer_text">© 2006-2018 Поволжский государственный технологический университет, ФГБОУ ВО «ПГТУ»</span>     
  </body>
</html>