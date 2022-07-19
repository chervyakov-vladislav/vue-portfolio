import Vue from "vue";
import VueRouter from "vue-router";
// import routes from "./routes";

Vue.use(VueRouter);


//заменить на функции в routes.js для state менелжера
import about from './../pages/about.vue'
import reviews from './../pages/reviews.vue'
import works from './../pages/works.vue'


// const router = new VueRouter({
//     mode:'history',
//     routes
//   });

const routes = [
  {
    path: "/",
    component: about,
    meta: {
      title: "Блок «Обо мне»"
    }
  },
  {
    path: "/works",
    component: works,
    meta: {
      title: "Блок «Работы»"
    }
  },
  {
    path: "/reviews",
    component: reviews,
    meta: {
      title: "Блок «Отзывы»"
    }
  }
]


export default new VueRouter({ routes, mode: 'history'});