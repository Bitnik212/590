<template>
  <div>
    <NavBar></NavBar>
    <div class="body_box">
      <div class="body_abouttext_box">
        <div class="body_abouttext">
          Мы - 590 группа колледжа телекоммуникаций<br />
          имени профессора Бонча - Бруевича<br />
          2018 - 2022 год.
        </div>
        <div class="body_abouttext">
          Тут мы выкладываем информацию о нашей группе,
          <br />
          данная информация имеет ознакомительный характер <br />
          и не имеет комерческой ценности.
        </div>
      </div>
      <div class="body_authortext_box">
        <div class="body_authortext_designby">
          Designed by
          <b
            ><a
              href="https://vk.com/goodbyte"
              class="body_authortext_designby_a"
              target="_blank"
              >Uzzaw</a
            ></b
          >
        </div>
        <div class="body_authortext_team">
          <b>Team</b>
        </div>
        <div class="body_authortext_programmedby">
          Programmed by
          <b
            ><a
              class="body_authortext_designby_a"
              href="tg://resolve?domain=Bitnik212"
              target="_blank"
              >Bit</a
            ></b
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";

export default {
  name: "About",
  components: {
    NavBar
  }
};
</script>
<style lang="stylus" scoped>
body{
  margin: 0;
  padding: 0;
}
.body_box{
  margin-left: 240px;
  margin-right: 240px;
  padding: 0;
}
.body_abouttext_box{
//   margin-top: 120px;
  margin-bottom: 0px;
}
.body_abouttext{
  font-family: "Roboto";
  font-weight: Regular;
  font-size: 30px;
  display: flex;
  justify-content: center;
  text-align: center;
  margin-bottom: 50px;
}
.body_authortext_box {
//   margin-top: 190px;
  margin-bottom: 0;
  display: flex;
  justify-content: space-between;
  position: relative;
}
.body_authortext_designby_a:hover{
  border-bottom: 1px solid #adadad;
}
.body_authortext_designby {
  font-family: "Roboto";
  font-weight: Regular;
  font-size: 24px;

}

.body_authortext_team {
  font-family: "AbrilFatface";
  font-weight: Regular;
  font-size: 36px;
  margin-top: -9px;
}
.body_authortext_programmedby {
  font-family: "Roboto";
  font-weight: Regular;
  font-size: 24px;
}
</style>
