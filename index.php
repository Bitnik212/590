<?include 'function.php';?>
<html>
  <head>
    <link rel="stylesheet" href="/css/index.css">
    <title><?echo $title;?></title>
  </head>
  <body>
    <? include 'header.php';?>
    <div>
    <section class="body_welcome">Welcome</section>
    <section class="body_welcome_text">Здесь вы можете посмотреть информацию<br/> и расписание нашей группы!</section>
    <a href="<?echo $ttlink;?>">
      <div class="body_timetable_bordered">Расписание</div>
    </a>
    </div>

  </body>
</html>
