<template lang="pug">
.container
  .tabbar
    ul.tabs
      li.tabs__item(v-for="tab in tabs")
        router-link(:to="tab.href" :data-where="tab.where").tab__link {{tab.title}}
</template>

<script>
export default {
  data() {
    return {
      tabs: [
        {
          title: "Обо мне",
          href: "/",
          where: "about"
        },
        {
          title: "Работы",
          href: "/works",
          where: "works"
        },
        {
          title: "Отзывы",
          href: "/reviews",
          where: "reviews"
        }
      ]
    }
  }
}
</script>

<style lang="postcss" scoped>
.container {
  height: 75px;
  display: flex;
  align-items: center;
}

.tabbar {
  height: 100%;
  display: flex;
  align-items: center;
}
.tabs {
  display: flex;
  align-items: center;
  height: 100%;
}

.tabs__item {
  margin-right: 50px;
  font-weight: 600;
  font-size: 18px;
  transition: .3s;
  color: #414c63;

    &:hover {
      color: #383bcf;
    }
}

.tab__link {
  padding: 10px;
}



</style>