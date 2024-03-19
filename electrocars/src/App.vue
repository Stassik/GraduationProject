<template>
  <div id="app">
    <HeaderComp></HeaderComp>
      <router-view></router-view>
    <FooterComp></FooterComp>
  </div>
</template>
<script>
import HeaderComp from './components/HeaderComp.vue';
import FooterComp from './components/FooterComp.vue';

export default {
  name: 'app',
  components: {
    HeaderComp,
    FooterComp
  }
  
}
</script>

<style>
  @font-face {
    font-family: 'Cera Pro';
    src: url('./assets/fonts/CeraPro-Medium.eot');
    src: local('Cera Pro Medium'), local('CeraPro-Medium'),
        url('./assets/fonts/CeraPro-Medium.eot?#iefix') format('embedded-opentype'),
        url('./assets/fonts/CeraPro-Medium.woff2') format('woff2'),
        url('./assets/fonts/CeraPro-Medium.woff') format('woff'),
        url('./assets/fonts/CeraPro-Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Cera Pro';
    src: url('./assets/fonts//CeraPro-Regular.eot');
    src: local('Cera Pro Regular'), local('CeraPro-Regular'),
        url('./assets/fonts/CeraPro-Regular.eot?#iefix') format('embedded-opentype'),
        url('./assets/fonts/CeraPro-Regular.woff') format('woff'),
        url('./assets/fonts/CeraPro-Regular.woff2') format('woff2'),
        url('./assets/fonts/CeraPro-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }


  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      color: #fff;
  }

  body {
      position: relative;
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      font-family: 'Cera Pro';
      background-color: rgb(24, 24, 24);
  }

  #app {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  .content {
    max-width: 1172px;
    margin: 0 auto 75px;
    padding: 0 16px;
  }

  a {
    text-decoration: none;
    color: #fff;
  }

  .main-container {
    flex-grow: 1;
    height: 100%;
    color: #fff;
    overflow: hidden;
  }

  @media(max-width: 999px) {
    .main-container {
        /* padding-bottom: 40px; */
    }

    .content {
        max-width: 640px;
        margin: 0 auto 40px;
    }
  }

  @media(max-width: 640px) {
    .content {
        max-width: 100%;
        margin-bottom: 48px;
    }
  }
</style>
