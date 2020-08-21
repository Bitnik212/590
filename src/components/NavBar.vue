<template>
  <div>
    <header>
      <div class="header_main">
        <router-link class="a_header_main" to="/">Главная</router-link>
      </div>
      <div class="header_timetable">
        <router-link class="a_header_timetable" to="/timetable"
          >Расписание</router-link
        >
      </div>
      <div class="header_about">
        <router-link class="a_header_about" to="/about">О нас</router-link>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {}
};
</script>

<style>
header {
  width: 50%;
  display: grid;
}
.active {
  font-size: 72px;
  margin-left: 200px;
  width: 50%;
  font-weight: thin;
}
.header_main {
  font-family: "Roboto";
  font-weight: Regular;
  font-size: 24px;
  margin-top: 25px;
  margin-left: 32px;
  padding: 0;
}
.header_timetable {
  font-family: "Roboto";
  font-weight: Regular;
  font-size: 24px;
  margin-top: 25px;
  margin-left: 32px;
  padding: 0;
}
.header_about {
  font-family: "Roboto";
  font-weight: Regular;
  font-size: 24px;
  margin-left: 32px;
  margin-top: 18px;
}
</style>
