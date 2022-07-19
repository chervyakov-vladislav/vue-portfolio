<template lang="pug">
.header
  .container
    .user
      .user__pic
        img(src="./../../../images/content/user.jpg" alt).user__pic-avatar
      .user__title Владислав Червяков
    h1.title Панель администрирования
    a(href="/").exit-button Выйти
</template>

<script>
export default {
  
}
</script>

<style lang="postcss" scoped>
  .header {
    background: linear-gradient(to right, #3e3e59, #454573);
    color: #fff;
    height: 80px;
    display: flex;
    align-items: center;
  }
  .container {
    display: flex;
    align-items: center;
  }


  .user {
    display: flex;
    align-items: center;
    margin-right: 30px;
  }

  .user__pic {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    overflow: hidden;
  }

  .user__title {
    font-size: 18px;
    font-weight: 600;
    margin-left: 20px;
  }

  .title {
    font-size: 14px;
    opacity: .5;
  }
  
  .exit-button {
    text-align: center;
    padding: 10px;
    width: 100px;
    text-decoration: none;
    margin-left: auto;
    font-size: 16px;
    opacity: .7;
    transition: .3s;

    &:hover {
      opacity: 1;
    }
  }

</style>>