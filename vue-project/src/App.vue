<template>
  <div id="app">
    <MyHello :message="message" />
    <CalcComponent />
    <MyHello :message="message_1" />
    <GalleryComponent/>
  </div>
</template>

<script>
import MyHello from './components/MyHello.vue';
import CalcComponent from './components/CalcComponent.vue';
import GalleryComponent from './components/Gallery.vue';

export default {
  name: 'App',
  components: {
    MyHello,
    CalcComponent,
    GalleryComponent
  },

  data() {
    return {
      message: "Привет, это мой калькулятор!",
      message_1: "Галерея изображений",
    };
  },

}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
