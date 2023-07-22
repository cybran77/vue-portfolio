<template>
  <div>
    <!-- Start Banner Area  -->
    <div class="prv-banner-wrapper bg_image--31">
      <v-container fluid>
        <div class="plr--120 plr_sm--20 plr_md--20 plr_lg--20">
          <v-row>
            <v-col lg="8" xl="5">
              <div class="inner">
                <div class="logo text-left">
                  <router-link to="/">
                    <img
                      src="../assets/images/logo/logo-all-dark.png"
                      alt="Trydo Images"
                  /></router-link>
                </div>
                <p class="para-title">
                  Welcome to TryDO VueJS Creative Agency, Vue Portfolio and
                  Corporate Multi Purpose Template Built With VueJS. NO jQuery!
                </p>
                <div class="purshase-btn">
                  <a
                    class="rn-button-style--2 btn_solid"
                    href="https://themeforest.net/checkout/from_item/30195230?license=regular"
                    target="_blank"
                    >BUY Now</a
                  >
                  <router-link
                    to="#demo"
                    class="rn-button-style--2 btn_border btn_border--dark smoth-animation"
                    >View Demos</router-link
                  >
                </div>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </div>
    <!-- End Banner Area  -->

    <!-- Start Empty Area  -->
    <div class="fullscreen empty-div gradient-overlay"></div>
    <!-- End Empty Area  -->

    <!-- Start Main Demo Area  -->
    <div class="main-wrapper" id="demo">
      <!-- Start Home Demo  -->
      <div class="home-demo-area bg_color--1 ptb--120">
        <div class="wrapper plr--120 rn-masonary-wrapper">
          <v-row>
            <v-col cols="12">
              <div class="section-title text-center pb--30">
                <h2 class="theme-gradient">Home Demo</h2>
                <p>
                  Choose one of styles or cutomize easily your site following
                  your ideas. <br />
                  More demos are coming soon.
                </p>
              </div>
            </v-col>
          </v-row>
          <div class="be-custom-gallery main-page-preview-gallery">
            <v-tabs v-model="tab" centered flat hide-slider color="primary">
              <v-tab :ripple="false" v-for="item in tabItems" :key="item.id">{{
                item.name
              }}</v-tab>
            </v-tabs>

            <v-tabs-items v-model="tab">
              <v-tab-item
                v-for="item in tabContent"
                :key="item.id"
                transition="none"
              >
                <div
                  class="gallery-wrapper gallery-grid mesonry-list grid-metro3"
                  id="animated-thumbnials"
                >
                  <div
                    v-for="(item, i) in item.content"
                    :key="i"
                    class="single-demo image masonry_item portfolio-33-33"
                  >
                    <router-link rel="noopener" target="_blank" :to="item.href">
                      <img :src="item.src" :alt="item.alt" />
                      <h3 class="heading-title">{{ item.title }}</h3>
                      <p class="info">
                        {{ item.desc }}
                      </p>
                      <div v-if="item.active" :class="'label-new'">
                        <span>{{ item.sticker }}</span>
                      </div>
                    </router-link>
                  </div>
                </div>
              </v-tab-item>
            </v-tabs-items>
          </div>
        </div>
      </div>
      <!-- End Home Demo  -->

      <!-- Start Inner Page Demo  -->
      <div class="home-demo-area bg_color--3 ptb--120">
        <div class="wrapper plr--120">
          <v-row>
            <v-col lg="12">
              <div class="section-title text-center pb--30">
                <h2 class="theme-gradient">Inner Pages</h2>
                <p>
                  Choose one of styles or cutomize easily your site following
                  your ideas
                </p>
              </div>
            </v-col>
          </v-row>
          <v-row class="row--0">
            <!-- Start Single Demo  -->
            <v-col
              lg="4"
              md="6"
              sm="6"
              cols="12"
              v-for="(innerPage, i) in innerPages"
              :key="i"
            >
              <div class="single-demo">
                <router-link :to="innerPage.href" target="_blank">
                  <img :src="innerPage.src" :alt="innerPage.alt" />
                  <h3 class="heading-title">{{ innerPage.title }}</h3>
                </router-link>
              </div>
            </v-col>
            <!-- End Single Demo  -->
          </v-row>
        </div>
      </div>
      <!-- End Inner Page Demo  -->

      <!-- Start Feature Area  -->
      <div class="prv-feature service-area bg_color--4 ptb--120">
        <div class="wrapper plr--120 plr_sm--30 plr_md--30 plr_lg--30">
          <v-row>
            <v-col lg="12">
              <div class="section-title text-center pb--30 pb_sm--0 pb_md--0">
                <h2 class="white--text">Awesome Feature</h2>
              </div>
            </v-col>
          </v-row>
          <div class="row service-main-wrapper prev-service-main-wrapper">
            <!-- Start Single Feature  -->
            <v-col
              xl="3"
              lg="6"
              md="6"
              sm="6"
              cols="12"
              v-for="(features, i) in featuresContent"
              :key="i"
              class="mt--30"
            >
              <div class="single-service service__style--4">
                <div class="service">
                  <div class="icon" v-html="iconSvg(features.icon)"></div>
                  <div class="content">
                    <h3 class="heading-title">{{ features.title }}</h3>
                    <p class="subtitle">
                      {{ features.desc }}
                    </p>
                  </div>
                </div>
              </div>
            </v-col>
            <!-- End Single Feature  -->
          </div>
        </div>
      </div>
      <!-- End Feature Area  -->

      <div class="pv-feaq-area bg_color--3 ptb--120">
        <v-container>
          <v-row>
            <v-col lg="8" offset-lg="2">
              <div class="section-title text-left pb--30">
                <p>Check out our FAQ section to see if we can help.</p>
                <h2 class="theme-gradient">Do you have any Question</h2>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col lg="8" offset-lg="2">
              <div class="faq-area">
                <v-expansion-panels
                  accordion
                  flat
                  v-model="panel"
                  mandatory
                  class="about-expension-panels home-page-panels"
                >
                  <v-expansion-panel>
                    <v-expansion-panel-header hide-actions>
                      What is tryDo ? How does it
                      work?</v-expansion-panel-header
                    >
                    <v-expansion-panel-content>
                      <p>
                        Welcome to TryDO Vue Creative Agency, Vue Portfolio and
                        Corporate Multi Purpose Template Built With VueJS. NO
                        jQuery!. It works too much faster loading speed and you
                        can works too much comfortability.Trydo create your
                        website so much faster and Well Documented Codes for
                        your customization.
                      </p></v-expansion-panel-content
                    >
                  </v-expansion-panel>
                  <!-- End v-expension-panel -->
                  <v-expansion-panel>
                    <v-expansion-panel-header hide-actions>
                      How can I run trydo vue template?
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <p>
                        You can run vue easily. First You'll need to have node
                        and npm on your machine. So Please open your command
                        prompt then check your node -v and npm -v Version. Goes
                        To Your your command prompt: then First:
                        <strong>npm install</strong>
                      </p>
                      <p>
                        At Last: <strong>npm run serve</strong>. By the
                        following way you can be run your project easily.
                      </p></v-expansion-panel-content
                    >
                  </v-expansion-panel>
                  <!-- End v-expension-panel -->
                  <v-expansion-panel>
                    <v-expansion-panel-header hide-actions>
                      How can I change my demo page instead of splash page?
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <div>
                        <p>
                          You can be presenting any home page instead of splash
                          page. http://localhost:8000 you can showing any page
                          as your you are like. First you have to go to
                          <strong> index.js from router folder</strong>
                          then:
                        </p>
                        <p>
                          First Step (replace your choose demo page): Example:
                          import Demo form '../views/Demo.vue' Instead of
                          '../views/all-home-version/MainDemo.vue'
                        </p>
                        <p>
                          Example:
                          <a
                            target="_blank"
                            className="theme-gradient"
                            href="http://prntscr.com/xa7j4m"
                            >http://prntscr.com/xa7j4m</a
                          >
                        </p>
                      </div>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                  <!-- End v-expension-panel -->
                  <v-expansion-panel>
                    <v-expansion-panel-header hide-actions>
                      How can I get the customer support?
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <p>
                        After purchasing the product need you any support you
                        can be share with us with sending mail to
                        <a
                          className="theme-gradient"
                          href="mailto:rainbowit10@gmail.com"
                          >rainbowit10@gmail.com</a
                        >.
                      </p>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                  <!-- End v-expension-panel -->
                  <v-expansion-panel>
                    <v-expansion-panel-header hide-actions>
                      Can I get update regularly and For how long do I get
                      updates?
                    </v-expansion-panel-header>
                    <v-expansion-panel-content
                      ><p>
                        Yes, We will get update the Trydo. And you can get it
                        any time. Next time we will comes with more feature. You
                        can be get update for unlimited times. Our dedicated
                        team works for update.
                      </p>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                  <!-- End v-expension-panel -->
                  <v-expansion-panel>
                    <v-expansion-panel-header hide-actions>
                      Can I change any component as I like?
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <p>
                        Yes, You can change any component as you like. And By
                        the way you can build your website which you are choose.
                      </p>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                  <!-- End v-expension-panel -->
                  <v-expansion-panel>
                    <v-expansion-panel-header hide-actions>
                      Can I build a complete project with this template?
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <p>
                        Yes, Why not. You can build a project and complete
                        website as you are like. More component are available
                        include in this templete. And you can be use it
                        following documentation.
                      </p>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                  <!-- End v-expension-panel -->
                </v-expansion-panels>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>

      <!-- Start Call To Action Area  -->
      <div
        class="call-to-action-wrapper call-to-action text-white-wrapper ptb--120"
      >
        <vue-particles
          color="#dedede"
          :particleOpacity="0.7"
          :particlesNumber="80"
          shapeType="circle"
          :particleSize="4"
          linesColor="#dedede"
          :linesWidth="1"
          :lineLinked="true"
          :lineOpacity="0.4"
          :linesDistance="150"
          :moveSpeed="6"
          :hoverEffect="true"
          hoverMode="grab"
          :clickEffect="true"
          clickMode="push"
        >
        </vue-particles>
        <v-container>
          <v-row>
            <v-col lg="12">
              <div class="inner text-center">
                <span
                  >PURCHASE THE TRYDO AND MAKE YOUR SITE SUPER FASTER AND
                  EASY.</span
                >
                <h2>Let's go to Purchase</h2>
                <a
                  class="rn-button-style--2"
                  href="https://themeforest.net/checkout/from_item/30195230?license=regular"
                  target="_blank"
                  >Purchase Now
                </a>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
      <!-- End Call To Action Area  -->
    </div>
    <!-- End Main Demo Area  -->
  </div>
  <!-- End Page Wrapper  -->
</template>

<script>
import feather from "feather-icons";
export default {
  name: "Home",
  data() {
    return {
      tab: null,
      tabItems: [
        {
          id: 1,
          name: "All Demo",
        },
        {
          id: 2,
          name: "Agency",
        },
        {
          id: 3,
          name: "Corporate",
        },
        {
          id: 4,
          name: "Portfolio",
        },
        {
          id: 5,
          name: "Landing",
        },
        {
          id: 6,
          name: "New",
        },
      ],
      tabContent: [
        {
          id: 1,
          content: [
            {
              src: require("../assets/images/preview/demo-home.png"),
              alt: "Main Demo",
              title: "Main Demo",
              desc: `Our Template is perfect for creative agency.All agencies use
                  this template for all purpose.`,
              href: "/main-demo",
              active: false,
            },
            {
              src: require("../assets/images/preview/dark-main-demo.png"),
              title: "Main Demo Dark",
              alt: "Main Demo Dark",
              desc: `Our Template is perfect for creative agency.All agencies use
                  this template for all purpose.`,
              href: "/main-demo-dark",
              sticker: "New",
              active: true,
            },
            {
              src: require("../assets/images/preview/interactive-agency.png"),
              title: "Creative Agency",
              alt: "Creative Agency Images",
              desc: `Its a personal portfolio tamplate thats can be used your
                  Personal useses, Freelancer, Designer, and Developer etc.`,
              href: "/interactive-agency",
              sticker: "New Update",
              active: true,
            },
            {
              src: require("../assets/images/preview/dark-personal-portfolio-landing.png"),
              title: "Personal Portfolio 02 — One Page",
              alt: "Personal Portfolio 02 — One Page",
              desc: ` It comes with landing page feature. This tamplate you can be
                  used for your Personal useses, Freelancer, Designer, and
                  Developer etc.`,
              href: "/landing-personal-portfolio-02",
              sticker: "Hot",
              active: true,
            },
            {
              src: require("../assets/images/preview/personal-portfolio.png"),
              title: "Personal Portfolio",
              alt: "Personal Portfolio",
              desc: `Its a personal portfolio tamplate thats can be used your
                  Personal useses, Freelancer, Designer, and Developer etc.`,
              href: "/personal-portfolio",
              sticker: "New",
              active: false,
            },
            {
              src: require("../assets/images/preview/designer-portfolio.png"),
              title: "Designer Portfolio",
              alt: "Designer Portfolio",
              desc: `Designer POrtfolio is a portfolio website demo for all
                  personal portfolio website. A designer present their works by
                  the designer portfolio home demo..`,
              href: "/designer-portfolio",
              sticker: "Hot",
              active: true,
            },
            {
              src: require("../assets/images/preview/creative-portfolio.png"),
              title: "Creative Portfolio",
              alt: "Creative Portfolio",
              desc: ` Creative Portfolio is a awesome portfolio website demo. By
                  using this you can be build a website for your portfolio`,
              href: "/creative-portfolio",
              sticker: "New",
              active: false,
            },
            {
              src: require("../assets/images/preview/interior-design.png"),
              title: "Interior Design",
              alt: "Interior Design",
              desc: `A interior design comes for new interior agency company. Our can hire your clint by using this template. It has landing page feature available.`,
              href: "/landing-interior",
              sticker: "New",
              active: true,
            },
            {
              src: require("../assets/images/preview/corporate-business.png"),
              title: "Creative Agency",
              alt: "Creative Agency",
              desc: ` Corporate Business is build for new or any startup business
                  company. It has available all section for corporate business
                  agency company and others business purpose.`,
              href: "/corporate-business",
              sticker: "New",
              active: true,
            },
            {
              src: require("../assets/images/preview/creative-agency.png"),
              title: "Creative Agency",
              alt: "Creative Agency Images",
              desc: `It's a modern design with all realted features for creative
                  agencies company.`,
              href: "/creative-agency",
              active: false,
            },
            {
              src: require("../assets/images/preview/personal-portfolio-landing.png"),
              title: "Personal Portfolio — One Page",
              alt: "Personal Portfolio — One Page",
              desc: `It comes with landing page feature. This tamplate you can be
                  used for your Personal useses, Freelancer, Designer, and
                  Developer etc.`,
              href: "/landing-personal-portfolio",
              active: false,
            },
            {
              src: require("../assets/images/preview/creative-landing.png"),
              title: "Creative Agency 02",
              alt: "Creative Agency 02",
              desc: `Added creative agency 02 page.When you need creative agency
                  page you can be use it for your creative agency, Digital
                  agency page page.`,
              href: "/landing-creative-agency",
              active: false,
            },
            {
              src: require("../assets/images/preview/homeparticles.png"),
              title: "Home Particle",
              alt: "Home Particle",
              desc: ` Home particle has most feature is particles animation.It can
                  be used for your creative agency, Business agency, Digital
                  agency and so on, And it has Landing page added next update.`,
              href: "/landing-home-particle",
              active: false,
            },
            {
              src: require("../assets/images/preview/portfolio-home.png"),
              title: "Minimal Portfolio",
              alt: "Minimal Portfolio",
              desc: `Its a minimal portfolio template. You can be showing your
                  portfolio perfectly by using this template.`,
              href: "/minimal-portfolio",
              active: false,
            },
            {
              src: require("../assets/images/preview/digital-agency.png"),
              title: "Digital Agency",
              alt: "Digital Agency",
              desc: `A Digital Agency template is a nice slider animation, faster
                  loading and all features available for agencies.`,
              href: "/digital-agency",
              active: false,
            },
            {
              src: require("../assets/images/preview/business.png"),
              title: "Business",
              alt: "Business",
              desc: `It has available all kinds of features for a Business
                  corporate website.You can be use it for your Business website.`,
              href: "/business",
              active: false,
            },
            {
              src: require("../assets/images/preview/startup.png"),
              title: "Startup",
              alt: "Startup",
              desc: `A modern and nice design template that can be all startup
                  agencies for all kinds of startup purpose.`,
              href: "/startup",
              active: false,
            },
            {
              src: require("../assets/images/preview/studio-agency.png"),
              title: "Studio Agency",
              alt: "Studio Agency",
              desc: `It has been used background video and vedio popup.You can use
                  it for all kinds of agencies studio.`,
              href: "studio-agency",
              active: false,
            },
            {
              src: require("../assets/images/preview/paralax.png"),
              title: "Paralax Home",
              alt: "Paralax Home",
              desc: `Its a nice and awesome paralax background image design.You can
                  be use it for Business, Corporate, Degital Agency and other so
                  on.`,
              href: "/parallax-home",
              active: false,
            },
          ],
        },
        {
          id: 2,
          content: [
            {
              src: require("../assets/images/preview/demo-home.png"),
              alt: "Main Demo",
              title: "Main Demo",
              desc: `Our Template is perfect for creative agency.All agencies use
                  this template for all purpose.`,
              href: "/main-demo",
              active: false,
            },
            {
              src: require("../assets/images/preview/interactive-agency.png"),
              title: "Creative Agency",
              alt: "Creative Agency Images",
              desc: `Its a personal portfolio tamplate thats can be used your
                  Personal useses, Freelancer, Designer, and Developer etc.`,
              href: "/interactive-agency",
              sticker: "New Update",
              active: true,
            },
            {
              src: require("../assets/images/preview/creative-agency.png"),
              title: "Creative Agency",
              alt: "Creative Agency Images",
              desc: `It's a modern design with all realted features for creative
                  agencies company.`,
              href: "/creative-agency",
              active: false,
            },
            {
              src: require("../assets/images/preview/corporate-business.png"),
              title: "Creative Agency",
              alt: "Creative Agency",
              desc: ` Corporate Business is build for new or any startup business
                  company. It has available all section for corporate business
                  agency company and others business purpose.`,
              href: "/corporate-business",
              sticker: "New",
              active: true,
            },
            {
              src: require("../assets/images/preview/homeparticles.png"),
              title: "Home Particle",
              alt: "Home Particle",
              desc: ` Home particle has most feature is particles animation.It can
                  be used for your creative agency, Business agency, Digital
                  agency and so on, And it has Landing page added next update.`,
              href: "/landing-home-particle",
              active: false,
            },
            {
              src: require("../assets/images/preview/digital-agency.png"),
              title: "Digital Agency",
              alt: "Digital Agency",
              desc: `A Digital Agency template is a nice slider animation, faster
                  loading and all features available for agencies.`,
              href: "/digital-agency",
              active: false,
            },
            {
              src: require("../assets/images/preview/business.png"),
              title: "Business",
              alt: "Business",
              desc: `It has available all kinds of features for a Business
                  corporate website.You can be use it for your Business website.`,
              href: "/business",
              active: false,
            },
            {
              src: require("../assets/images/preview/startup.png"),
              title: "Startup",
              alt: "Startup",
              desc: `A modern and nice design template that can be all startup
                  agencies for all kinds of startup purpose.`,
              href: "/startup",
              active: false,
            },
            {
              src: require("../assets/images/preview/studio-agency.png"),
              title: "Studio Agency",
              alt: "Studio Agency",
              desc: `It has been used background video and vedio popup.You can use
                  it for all kinds of agencies studio.`,
              href: "studio-agency",
              active: false,
            },
            {
              src: require("../assets/images/preview/creative-landing.png"),
              title: "Creative Agency 02",
              alt: "Creative Agency 02",
              desc: `Added creative agency 02 page.When you need creative agency
                  page you can be use it for your creative agency, Digital
                  agency page page.`,
              href: "/landing-creative-agency",
              active: false,
            },
            {
              src: require("../assets/images/preview/coming-soon.png"),
              title: "Coming Soon",
              alt: "Coming Soon",
              desc: `More Feature are Coming Soon`,
              href: "/",
              active: false,
            },
          ],
        },
        {
          id: 3,
          content: [
            {
              src: require("../assets/images/preview/business.png"),
              title: "Business",
              alt: "Business",
              desc: `It has available all kinds of features for a Business
                  corporate website.You can be use it for your Business website.`,
              href: "/business",
              active: false,
            },
            {
              src: require("../assets/images/preview/startup.png"),
              title: "Startup",
              alt: "Startup",
              desc: `A modern and nice design template that can be all startup
                  agencies for all kinds of startup purpose.`,
              href: "/startup",
              active: false,
            },
            {
              src: require("../assets/images/preview/corporate-business.png"),
              title: "Creative Agency",
              alt: "Creative Agency",
              desc: ` Corporate Business is build for new or any startup business
                  company. It has available all section for corporate business
                  agency company and others business purpose.`,
              href: "/corporate-business",
              sticker: "New",
              active: true,
            },
            {
              src: require("../assets/images/preview/creative-portfolio.png"),
              title: "Creative Portfolio",
              alt: "Creative Portfolio",
              desc: ` Creative Portfolio is a awesome portfolio website demo. By
                  using this you can be build a website for your portfolio`,
              href: "/creative-portfolio",
              sticker: "New",
              active: false,
            },
            {
              src: require("../assets/images/preview/homeparticles.png"),
              title: "Home Particle",
              alt: "Home Particle",
              desc: ` Home particle has most feature is particles animation.It can
                  be used for your creative agency, Business agency, Digital
                  agency and so on, And it has Landing page added next update.`,
              href: "/landing-home-particle",
              active: false,
            },
            {
              src: require("../assets/images/preview/studio-agency.png"),
              title: "Studio Agency",
              alt: "Studio Agency",
              desc: `It has been used background video and vedio popup.You can use
                  it for all kinds of agencies studio.`,
              href: "studio-agency",
              active: false,
            },
            {
              src: require("../assets/images/preview/paralax.png"),
              title: "Paralax Home",
              alt: "Paralax Home",
              desc: `Its a nice and awesome paralax background image design.You can
                  be use it for Business, Corporate, Degital Agency and other so
                  on.`,
              href: "/parallax-home",
              active: false,
            },

            {
              src: require("../assets/images/preview/coming-soon.png"),
              title: "Coming Soon",
              alt: "Coming Soon",
              desc: `More Feature are Coming Soon`,
              href: "/",
              active: false,
            },
          ],
        },
        {
          id: 4,
          content: [
            {
              src: require("../assets/images/preview/personal-portfolio.png"),
              title: "Personal Portfolio",
              alt: "Personal Portfolio",
              desc: `Its a personal portfolio tamplate thats can be used your
                  Personal useses, Freelancer, Designer, and Developer etc.`,
              href: "/personal-portfolio",
              sticker: "New",
              active: false,
            },
            {
              src: require("../assets/images/preview/dark-personal-portfolio-landing.png"),
              title: "Personal Portfolio 02 — One Page",
              alt: "Personal Portfolio 02 — One Page",
              desc: ` It comes with landing page feature. This tamplate you can be
                  used for your Personal useses, Freelancer, Designer, and
                  Developer etc.`,
              href: "/landing-personal-portfolio-02",
              sticker: "Hot",
              active: true,
            },
            {
              src: require("../assets/images/preview/designer-portfolio.png"),
              title: "Designer Portfolio",
              alt: "Designer Portfolio",
              desc: `Designer POrtfolio is a portfolio website demo for all
                  personal portfolio website. A designer present their works by
                  the designer portfolio home demo..`,
              href: "/designer-portfolio",
              sticker: "Hot",
              active: true,
            },
            {
              src: require("../assets/images/preview/creative-portfolio.png"),
              title: "Creative Portfolio",
              alt: "Creative Portfolio",
              desc: ` Creative Portfolio is a awesome portfolio website demo. By
                  using this you can be build a website for your portfolio`,
              href: "/creative-portfolio",
              sticker: "New",
              active: false,
            },
            {
              src: require("../assets/images/preview/portfolio-home.png"),
              title: "Minimal Portfolio",
              alt: "Minimal Portfolio",
              desc: `Its a minimal portfolio template. You can be showing your
                  portfolio perfectly by using this template.`,
              href: "/minimal-portfolio",
              active: false,
            },
            {
              src: require("../assets/images/preview/personal-portfolio-landing.png"),
              title: "Personal Portfolio — One Page",
              alt: "Personal Portfolio — One Page",
              desc: `It comes with landing page feature. This tamplate you can be
                  used for your Personal useses, Freelancer, Designer, and
                  Developer etc.`,
              href: "/landing-personal-portfolio",
              active: false,
            },
          ],
        },
        {
          id: 5,
          content: [
            {
              src: require("../assets/images/preview/dark-personal-portfolio-landing.png"),
              title: "Personal Portfolio 02 — One Page",
              alt: "Personal Portfolio 02 — One Page",
              desc: ` It comes with landing page feature. This tamplate you can be
                  used for your Personal useses, Freelancer, Designer, and
                  Developer etc.`,
              href: "/landing-personal-portfolio-02",
              sticker: "New",
              active: true,
            },
            {
              src: require("../assets/images/preview/personal-portfolio-landing.png"),
              title: "Personal Portfolio — One Page",
              alt: "Personal Portfolio — One Page",
              desc: `It comes with landing page feature. This tamplate you can be
                  used for your Personal useses, Freelancer, Designer, and
                  Developer etc.`,
              href: "/landing-personal-portfolio",
              active: false,
            },
            {
              src: require("../assets/images/preview/homeparticles.png"),
              title: "Home Particle",
              alt: "Home Particle",
              desc: ` Home particle has most feature is particles animation.It can
                  be used for your creative agency, Business agency, Digital
                  agency and so on, And it has Landing page added next update.`,
              href: "/landing-home-particle",
              active: false,
            },
            {
              src: require("../assets/images/preview/creative-agency.png"),
              title: "Creative Agency",
              alt: "Creative Agency Images",
              desc: `It's a modern design with all realted features for creative
                  agencies company.`,
              href: "/creative-agency",
              active: false,
            },
            {
              src: require("../assets/images/preview/coming-soon.png"),
              title: "Coming Soon",
              alt: "Coming Soon",
              desc: `More Feature are Coming Soon`,
              href: "/",
              active: false,
            },
          ],
        },
        {
          id: 6,
          content: [
            {
              src: require("../assets/images/preview/interactive-agency.png"),
              title: "Creative Agency",
              alt: "Creative Agency Images",
              desc: `Its a personal portfolio tamplate thats can be used your
                  Personal useses, Freelancer, Designer, and Developer etc.`,
              href: "/interactive-agency",
              sticker: "New Update",
              active: true,
            },
            {
              src: require("../assets/images/preview/personal-portfolio.png"),
              title: "Personal Portfolio",
              alt: "Personal Portfolio",
              desc: `Its a personal portfolio tamplate thats can be used your
                  Personal useses, Freelancer, Designer, and Developer etc.`,
              href: "/personal-portfolio",
              sticker: "New",
              active: true,
            },
            {
              src: require("../assets/images/preview/designer-portfolio.png"),
              title: "Designer Portfolio",
              alt: "Designer Portfolio",
              desc: `Designer POrtfolio is a portfolio website demo for all
                  personal portfolio website. A designer present their works by
                  the designer portfolio home demo..`,
              href: "/designer-portfolio",
              sticker: "Hot",
              active: true,
            },
            {
              src: require("../assets/images/preview/dark-personal-portfolio-landing.png"),
              title: "Personal Portfolio 02 — One Page",
              alt: "Personal Portfolio 02 — One Page",
              desc: ` It comes with landing page feature. This tamplate you can be
                  used for your Personal useses, Freelancer, Designer, and
                  Developer etc.`,
              href: "/landing-personal-portfolio-02",
              sticker: "New",
              active: true,
            },
            {
              src: require("../assets/images/preview/interior-design.png"),
              title: "Interior Design",
              alt: "Interior Design",
              desc: `A interior design comes for new interior agency company. Our can hire your clint by using this template. It has landing page feature available.`,
              href: "/landing-interior",
              sticker: "New",
              active: true,
            },
            {
              src: require("../assets/images/preview/corporate-business.png"),
              title: "Creative Agency",
              alt: "Creative Agency",
              desc: ` Corporate Business is build for new or any startup business
                  company. It has available all section for corporate business
                  agency company and others business purpose.`,
              href: "/corporate-business",
              sticker: "New",
              active: true,
            },
          ],
        },
      ],
      innerPages: [
        {
          src: require("../assets/images/preview/service.png"),
          title: "Service",
          href: "/service",
          alt: "Service",
        },
        {
          src: require("../assets/images/preview/service-details.png"),
          title: "Service Details",
          href: "/service-details",
          alt: "Service Details",
        },
        {
          src: require("../assets/images/preview/about.png"),
          title: "About",
          href: "/about",
          alt: "About",
        },
        {
          src: require("../assets/images/preview/blog-list.png"),
          title: "Blog List",
          href: "/blog",
          alt: "Blog List",
        },
        {
          src: require("../assets/images/preview/blog-details.png"),
          title: "Blog Details",
          href: "/blog-details",
          alt: "Blog Details",
        },
        {
          src: require("../assets/images/preview/portfolio.png"),
          title: "Portfolio",
          href: "/portfolio",
          alt: "Portfolio",
        },
        {
          src: require("../assets/images/preview/portfolio-details.png"),
          title: "Portfolio Details",
          href: "/portfolio-details",
          alt: "Portfolio Details",
        },
        {
          src: require("../assets/images/preview/404.png"),
          title: "404 Page",
          href: "/404",
          alt: "404 Page",
        },
      ],
      panel: 0,
      featuresContent: [
        {
          icon: "check-square",
          title: "VueJS",
          desc: `No.1 Github Start & Developer Friendly Top Progressive JavaScript Framework `,
        },
        {
          icon: "cast",
          title: "Vuetify Js",
          desc: `It's a complete UI framework built with Vue.js which you get rich user experiences`,
        },
        {
          icon: "smartphone",
          title: "Perfect Responsive",
          desc: `Vuetify takes a mobile first approach to design like phone, tablet, or desktop computer.`,
        },
        {
          icon: "command",
          title: "Sass Available",
          desc: `The tamplate has Sass available for css. You can Change css by sass easily yourself`,
        },
        {
          icon: "cpu",
          title: "Fast Loading Speed",
          desc: `Trydo is faster loading speed.Trydo create your theme so much faster way`,
        },
        {
          icon: "file-plus",
          title: "Well Documented Codes",
          desc: `The Trydo code is awesome well documented code. And Its customization is very easily`,
        },
        {
          icon: "framer",
          title: "Modern Design",
          desc: `Trydo is a modern creatuve design for Creative Agency , Personal Portfolio etc....`,
        },
        {
          icon: "headphones",
          title: "24 Support System",
          desc: `We are provide 24 hours support for all clients.You can
                        purchase without hesitation.`,
        },
      ],
    };
  },
  methods: {
    iconSvg(icon) {
      return feather.icons[icon].toSvg();
    },
  },
};
</script>

<style lang="scss" scoped>
.theme--light.about-expension-panels .v-expansion-panel-header::after {
  height: 1px;
  width: 100%;
}
.theme--light.about-expension-panels .v-expansion-panel-header {
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 0 0 10px 0;
  font-size: 18px;
}
.main-page-preview-gallery {
  .v-tabs {
    margin: 35px auto 30px;
  }
}
</style>
