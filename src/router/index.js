import Vue from "vue";
import VueRouter from "vue-router";
import goTo from "vuetify/es5/services/goto";
import Missing from "../views/404.vue";
import Demo from "../views/Demo.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    meta: {
      title: "Personal Portfolio Landing || VueJS Multipurpose Template",
    },
    component: () =>
      import("../views/all-home-version/LandingPersonalPortfolioTwo.vue"),
  },
  {
    path: "/service",
    name: "Service",
    meta: {
      title: "Service || VueJS Multipurpose Template",
    },
    component: () => import("../views/service/Service.vue"),
  },
  {
    path: "/service-details",
    name: "ServiceDetails",
    meta: {
      title: "Service Details || VueJS Multipurpose Template",
    },
    component: () => import("../views/service/ServiceDetails.vue"),
  },
  {
    path: "/blog",
    name: "Blog",
    meta: {
      title: "Blog || VueJS Multipurpose Template",
    },
    component: () => import("../views/blog/Blog.vue"),
  },
  {
    path: "/blog-details",
    name: "BlogDetails",
    meta: {
      title: "Blog Details || VueJS Multipurpose Template",
    },
    component: () => import("../views/blog/BlogDetails.vue"),
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    meta: {
      title: "Portfolio || VueJS Multipurpose Template",
    },
    component: () => import("../views/portfolio/Portfolio.vue"),
  },
  {
    path: "/portfolio-details",
    name: "PortfolioDetails",
    meta: {
      title: "Portfolio Details || VueJS Multipurpose Template",
    },
    component: () => import("../views/portfolio/PortfolioDetails.vue"),
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
