import Vue from "vue";
import VueRouter from "vue-router";
import goTo from "vuetify/es5/services/goto";
import Missing from "../views/404.vue";
import Demo from "../views/Demo.vue";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   component: Demo,
  //   meta: {
  //     title: "Trydo || Creative Agency And Multipurpose Template",
  //   },
  // },

  // {
  //   path: "/",
  //   meta: {
  //     title: "Personal Portfolio Landing || VueJS Multipurpose Template",
  //   },
  //   component: () =>
  //     import("../views/all-home-version/LandingPersonalPortfolioTwo.vue"),
  // },

  {
    path: "/",
    name: "LandingPersonalPortfolio",
    meta: {
      title: " Personal Portfolio Landing || VueJS Multipurpose Template",
    },
    component: () =>
      import("../views/all-home-version/LandingPersonalPortfolio.vue"),
  },

  {
    path: "*",
    component: Missing,
    meta: {
      title: "404 || VueJS Multipurpose Template",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior: (to, from, savedPosition) => {
    let scrollTo = 0;

    if (to.hash) {
      scrollTo = to.hash;
    } else if (savedPosition) {
      scrollTo = savedPosition.y;
    }

    return goTo(scrollTo);
  },
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
