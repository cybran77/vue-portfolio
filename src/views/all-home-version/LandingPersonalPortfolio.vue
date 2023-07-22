<template>
  <div>
    <!-- Start Header Area -->
    <HeaderOnePageTwo />
    <!-- End Header Area -->
    <!-- Start Slider Area  -->
    <div class="rn-slider-area poss_relative" id="home">
      <div
        class="slide personal-portfolio-slider slider-style-3 slider-paralax bg_image bg_image--25 d-flex align-center"
      >
        <BannerThree>
          <span slot="designation">Freelance digital designer</span>
          <h1 class="heading-title" slot="heading-title">
            Hello, I’m <span>Nancy</span> Welcome to my World.
          </h1>
        </BannerThree>
      </div>
    </div>
    <!-- End Slider Area -->

    <!-- Start About Area  -->
    <div class="section about-area rn-section-gap bg_color--1" id="about">
      <div class="about-wrapper">
        <v-container>
          <AboutFour>
            <img
              slot="thum-img"
              class="w-100"
              src="../../assets/images/about/about-7.jpg"
              alt="About Images"
            />
          </AboutFour>
        </v-container>
      </div>
    </div>
    <!-- Start About Area  -->

    <!-- Start Service Area  -->
    <div
      class="section rn-service-area service-area rn-section-gap bg_color--5"
      id="service"
    >
      <v-container>
        <v-row>
          <v-col lg="12">
            <div
              class="section-title service-style--3 text-center mb--20 mb_sm--0 md_md--0"
            >
              <h2 class="heading-title">My Awesome Service</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration.
              </p>
            </div>
          </v-col>
        </v-row>
        <ServiceThree />
      </v-container>
    </div>
    <!-- Start Service Area  -->

    <!-- Start Portfolio Area -->
    <div
      class="section rn-portfolio-area rn-section-gap bg_color--1"
      id="portfolio"
    >
      <v-container>
        <v-row>
          <v-col lg="12">
            <div class="section-title section-title--2 text-center mb--20">
              <h2 class="heading-title">My Latest Project</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration.
              </p>
            </div>
          </v-col>
        </v-row>
        <PortfolioTwo />
        <v-row>
          <v-col lg="12">
            <div class="view-more-btn mt--60 mt_sm--30 text-center">
              <a class="rn-button-style--2 btn_solid" href="#">View More</a>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- End Portfolio Area -->

    <!-- Start Blog Area  -->
    <div class="section rn-blog-area rn-section-gap bg_color--5" id="blog">
      <v-container>
        <v-row align="end" class="mb--20">
          <v-col lg="6" md="12">
            <div class="section-title text-left">
              <h2>Latest News</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration.
              </p>
            </div>
          </v-col>
        </v-row>
        <Blog />
      </v-container>
    </div>
    <!-- End Blog Area  -->

    <!-- Start Contact Area  -->
    <div
      class="section rn-contact-area rn-section-gap bg_color--1"
      id="contact"
    >
      <div class="contact-form--1">
        <v-container>
          <Contact>
            <img
              slot="contact-img"
              class="w-100"
              src="../../assets/images/about/about-6.jpg"
              alt="trydo"
            />
          </Contact>
        </v-container>
      </div>
    </div>
    <!-- End Contact Area  -->

    <!-- Start Footer Area  -->
    <Footer />
    <!-- End Footer Area  -->
  </div>
</template>

<script>
  import HeaderOnePageTwo from "../../components/header/HeaderOnePageTwo";
  import BannerThree from "../../components/slider/BannerThree";
  import AboutFour from "../../components/about/AboutFour";
  import ServiceThree from "../../components/service/ServiceThree";
  import PortfolioTwo from "../../components/portfolio/PortfolioFour";
  import Blog from "../../components/blog/Blog";
  import Contact from "../../components/contact/Contact";
  import Footer from "../../components/footer/FooterTwo";

  export default {
    components: {
      HeaderOnePageTwo,
      BannerThree,
      AboutFour,
      ServiceThree,
      PortfolioTwo,
      Blog,
      Contact,
      Footer,
    },
    data() {
      return {};
    },
  };
</script>

<style lang="scss">
  .feather-menu {
    color: #1d1d24;
  }
</style>
