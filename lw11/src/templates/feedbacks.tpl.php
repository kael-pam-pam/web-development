<!DOCTYPE HTML>
<html lang="ru">
  <head>
    <meta charset="utf-8">
    <title>Анкеты</title>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/styles_feedbacks.css">
  </head>
  <body>   
    <header class="header">
      <nav class="navigation_container">
        <ul class="navigation">
          <li class="navigation_item">
            <a href="index.php" class="navigation_item_text navigation_item_messages">На главную страницу</a>
          </li>      
        </ul>
      </nav>
    </header>
    <div class="top_block">
      <div class="show_messages">
        <form class="form_show_messages" method="post" autocomplete="off">
          <span class="form_title">Анкеты</span>
          <label class="caption necessarily" for="email">Анкета пользователя с email</label>
          <input class="text_field" type="text" id="email" name="email" maxlength="30" required="requared">
          <input class="submit" type="submit" value="Посмотреть">
          <p class="form_answer <?php echo isset($args['status']) ? $args['status'] === 1 ? 'success' : 'error' : ''; ?>"><?php echo $args['message']; ?></p>
        </form>
        <?php if (isset($args['status']) && ($args['status'] === 1)) 
           { 
        ?>
        <ul class="profile_data">
          <?php foreach($args['profileData'] as $answer): ?>
            <li><?php echo $answer; ?></li>
          <?php endforeach; ?>
        </ul>
        <?php } ?>
      </div>  
    </div>
    <span class="footer_text">© 2006-2018 Поволжский государственный технологический университет, ФГБОУ ВО «ПГТУ»</span>
  </body>
</html>
