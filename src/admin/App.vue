<template lang="pug">
div.root-wrapper-container
  div.root-container
    template
      .header-container
        app-header
      section.tabs-container
        tabs
      main.content-container
        .container
          router-view
</template>


<script>

import appHeader from './pages/components/header'
import tabs from './pages/components/tabs'

export default {
  name: 'app',
  components: {
    appHeader,
    tabs
  }
}

</script>

<style lang="postcss">
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');
@import "normalize.css";
@import "../styles/mixins.pcss";
@import "../styles/layout/base.pcss";

.admin-wrapper {
  display: flex;
  
  .maincontent {
    width: 100%;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background: url('./../images/content/admin.jpg') top center / cover no-repeat;
    flex: 1;
  }
}

.root-wrapper-container {
  height: 100%;
}

.root-container {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.tabs-container { 
  background: #fff;
}

.content-container {
  /* background: url('./../images/content/admin.jpg') top center / cover no-repeat; */
  flex: 1;
}
</style>