<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<style lang="stylus">
@font-face {
  font-family: "Roboto";
  font-weight: bold;
  src: url(/assets/fonts/Roboto-Bold.ttf);
}
@font-face {
  font-family: "Roboto";
  font-weight: light;
  src: url(/assets/fonts/Roboto-Light.ttf);
}
@font-face {
  font-family: "Roboto";
  font-weight: Regular;
  src: url(/assets/fonts/Roboto-Regular.ttf);
}
@font-face {
  font-family: "Roboto";
  font-weight: medium;
  src: url(/assets/fonts/Roboto-Medium.ttf);
}
@font-face {
  font-family: "Roboto";
  font-weight: thin;
  src: url(/assets/fonts/Roboto-Thin.ttf);
}
@font-face {
  font-family: "AbrilFatface";
  font-weight: Regular;
  src: url(/assets/fonts/AbrilFatface-Regular.otf);
}
::selection{
  background: #adadad;
}
a, a:link, a:visited, a:hover, a:active{
  text-decoration: none;
  color: inherit;
}
</style>