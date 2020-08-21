<template>
  <div>
    <NavBar></NavBar>
    <div>
      <section class="body_welcome">Welcome</section>
      <section class="body_welcome_text">
        Здесь вы можете посмотреть информацию <br />
        и расписание нашей группы!
      </section>
      <router-link class="body_timetable_bordered" to="/timetable"
        >Расписание</router-link
      >
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";

export default {
  name: "Home",
  components: {
    NavBar
  }
};
</script>

<style scoped lang="stylus">
body
  background: url(/assets/kot2.png);
  background-repeat: no-repeat;
  background-origin: content-box;
  background-size: cover;
  background-position: right center ;

.body_welcome
  font-family: "AbrilFatface";
  font-weight: Regular;
  font-size: 60px;
  margin-top: 50px;
  margin-left: 230px;

.body_welcome_text
  font-family: "Roboto";
  font-weight: light;
  font-size: 30px;
  margin-top: 30px;
  margin-left: 230px;

.body_timetable_bordered{
  font-family: "Roboto";
  font-weight: light;
  font-size: 30px;
  margin-top: 35px;
  margin-left: 230px;
  border: 1px solid black;
  padding: 22px;
  display: flex;
  position: fixed;
}
// .router-link-exact-active{
//   color: red !important;
// }
</style>
