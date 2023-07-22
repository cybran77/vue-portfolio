import Vue from "vue";
import VueRouter from "vue-router";
import goTo from "vuetify/es5/services/goto";
import Missing from "../views/404.vue";
import Demo from "../views/Demo.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Demo,
    meta: {
      title: "Trydo || Creative Agency And Multipurpose Template",
    },
  },

  {
    path: "/about",
    name: "About",
    meta: {
      title: "About",
    },
    component: () => import("../views/About.vue"),
  },
  {
    path: "/main-demo",
    name: "MainDemo",
    meta: {
      title: "Main Demo || VueJS Multipurpose Template",
    },
    component: () => import("../views/all-home-version/MainDemo.vue"),
  },
  {
    path: "/main-demo-dark",
    name: "MainDemoDark",
    meta: {
      title: "Main Demo Dark || VueJS Multipurpose Template",
    },
    component: () => import("../views/all-home-version/MainDemoDark.vue"),
  },
  {
    path: "/creative-agency",
    name: "CreativeAgency",
    meta: {
      title: "Creative Agency || VueJS Multipurpose Template",
    },
    component: () => import("../views/all-home-version/CreativeAgency.vue"),
  },
  {
    path: "/interactive-agency",
    name: "InterActiveAgency",
    meta: {
      title: "Interactive Agency || VueJS Multipurpose Template",
    },
    component: () => import("../views/all-home-version/InterActiveAgency.vue"),
  },
  {
    path: "/digital-agency",
    name: "DigitalAgency",
    meta: {
      title: "Digital Agency || VueJS Multipurpose Template",
    },
    component: () => import("../views/all-home-version/DigitalAgency.vue"),
  },
  {
    path: "/business",
    name: "Business",
    meta: {
      title: "Business || VueJS Multipurpose Template",
    },
    component: () => import("../views/all-home-version/Business.vue"),
  },
  {
    path: "/corporate-business",
    name: "CorporateBusiness",
    meta: {
      title: "Corporate Business || VueJS Multipurpose Template",
    },
    component: () => import("../views/all-home-version/CorporateBusiness.vue"),
  },
  {
    path: "/startup",
    name: "StartUp",
    meta: {
      title: "Start Up || VueJS Multipurpose Template",
    },
    component: () => import("../views/all-home-version/StartUp.vue"),
  },
  {
    path: "/creative-portfolio",
    name: "CreativePortfolio",
    meta: {
      title: "Creative Portfolio || VueJS Multipurpose Template",
    },
    component: () => import("../views/all-home-version/CreativePortfolio.vue"),
  },
  {
    path: "/minimal-portfolio",
    name: "MinimalPortfolio",
    meta: {
      title: "Minimal Portfolio || VueJS Multipurpose Template",
    },
    component: () => import("../views/all-home-version/MinimalPortfolio.vue"),
  },
  {
    path: "/landing-home-particle",
    name: "LandingHomeParticle",
    meta: {
      title: "Landing Home Particle || VueJS Multipurpose Template",
    },
    component: () =>
      import("../views/all-home-version/LandingHomeParticle.vue"),
  },
  {
    path: "/landing-creative-agency",
    name: "LandingCreativeAgency",
    meta: {
      title: "Landing Creative Agency || VueJS Multipurpose Template",
    },
    component: () =>
      import("../views/all-home-version/LandingCreativeAgency.vue"),
  },
  {
    path: "/landing-interior",
    name: "LandingInterior",
    meta: {
      title: "Landing Interior || VueJS Multipurpose Template",
    },
    component: () => import("../views/all-home-version/LandingInterior.vue"),
  },
  {
    path: "/landing-personal-portfolio",
    name: "LandingPersonalPortfolio",
    meta: {
      title: " Personal Portfolio Landing || VueJS Multipurpose Template",
    },
    component: () =>
      import("../views/all-home-version/LandingPersonalPortfolio.vue"),
  },
  {
    path: "/landing-personal-portfolio-02",
    name: "LandingPersonalPortfolioTwo",
    meta: {
      title: "Personal Portfolio Landing || VueJS Multipurpose Template",
    },
    component: () =>
      import("../views/all-home-version/LandingPersonalPortfolioTwo.vue"),
  },
  {
    path: "/personal-portfolio",
    name: "PersonalPortfolio",
    meta: {
      title: "Personal Portfolio || VueJS Multipurpose Template",
    },
    component: () => import("../views/all-home-version/PersonalPortfolio.vue"),
  },
  {
    path: "/designer-portfolio",
    name: "DesignerPortfolio",
    meta: {
      title: "Designer Portfolio || VueJS Multipurpose Template",
    },
    component: () => import("../views/all-home-version/DesignerPortfolio.vue"),
  },
  {
    path: "/studio-agency",
    name: "StudioAgency",
    meta: {
      title: "Studio Agency || VueJS Multipurpose Template",
    },
    component: () => import("../views/all-home-version/StudioAgency.vue"),
  },
  {
    path: "/parallax-home",
    name: "ParallaxHome",
    meta: {
      title: "Parallax Home || VueJS Multipurpose Template",
    },
    component: () => import("../views/all-home-version/ParallaxHome.vue"),
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
    path: "/team",
    name: "Team",
    meta: {
      title: "Team || VueJS Multipurpose Template",
    },
    component: () => import("../views/Team.vue"),
  },
  {
    path: "/button",
    name: "Button",
    meta: {
      title: "Button || VueJS Multipurpose Template",
    },
    component: () => import("../views/Button.vue"),
  },
  {
    path: "/pricing-plan",
    name: "PricingPlan",
    meta: {
      title: "Pricing Plan || VueJS Multipurpose Template",
    },
    component: () => import("../views/PricingPlan.vue"),
  },
  {
    path: "/accordion-with-tab",
    name: "AccordionWithTab",
    meta: {
      title: "Accordion With Tab || VueJS Multipurpose Template",
    },
    component: () => import("../views/AccordionWithTab.vue"),
  },
  {
    path: "/testimonial",
    name: "Testimonial",
    meta: {
      title: "Tesimonial || VueJS Multipurpose Template",
    },
    component: () => import("../views/Testimonial.vue"),
  },
  {
    path: "/column",
    name: "Column",
    meta: {
      title: "Column || VueJS Multipurpose Template",
    },
    component: () => import("../views/Column.vue"),
  },
  {
    path: "/list-style",
    name: "ListStyle",
    meta: {
      title: "List Style || VueJS Multipurpose Template",
    },
    component: () => import("../views/ListStyle.vue"),
  },
  {
    path: "/contact-form",
    name: "ContactForm",
    meta: {
      title: "Contact Form || VueJS Multipurpose Template",
    },
    component: () => import("../views/ContactForm.vue"),
  },
  {
    path: "/video-popup",
    name: "VideoPopup",
    meta: {
      title: "Video Popup || VueJS Multipurpose Template",
    },
    component: () => import("../views/VideoPopup.vue"),
  },
  {
    path: "/brand",
    name: "Brand",
    meta: {
      title: "Brand || VueJS Multipurpose Template",
    },
    component: () => import("../views/Brand.vue"),
  },
  {
    path: "/counter",
    name: "Counter",
    meta: {
      title: "Counter || VueJS Multipurpose Template",
    },
    component: () => import("../views/Counter.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    meta: {
      title: "Contact || VueJS Multipurpose Template",
    },
    component: () => import("../views/Contact.vue"),
  },
  {
    path: "/gallery",
    name: "Gallery",
    meta: {
      title: "Gallery || VueJS Multipurpose Template",
    },
    component: () => import("../views/Gallery.vue"),
  },
  {
    path: "/progressbar",
    name: "Progressbar",
    meta: {
      title: "Progressbar || VueJS Multipurpose Template",
    },
    component: () => import("../views/Progressbar.vue"),
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
