<template>
  <div>
    <!-- Start Header Area -->
    <HeaderThree class="personal-portfolio">
      <img
        slot="logo"
        src="../../assets/images/logo/logo-symbol-dark.png"
        alt="Creative Agency"
      />
    </HeaderThree>
    <!-- End Header Area -->

    <!-- Start Slider Area  -->
    <div class="rn-slider-area">
      <div
        class="slide personal-portfolio-slider slider-paralax slider-style-3 d-flex align-center justify-center bg_image bg_image--16"
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
    <div class="about-area about-position-top rn-section-gapBottom bg_color--1">
      <div class="about-wrapper">
        <div class="container">
          <AboutFour>
            <img
              slot="thum-img"
              class="w-100"
              src="../../assets/images/about/about-5.jpg"
              alt="About Images"
            />
          </AboutFour>
        </div>
      </div>
    </div>
    <!-- Start About Area  -->

    <!-- Start Brand Area -->
    <div class="rn-brand-area bg_color--1 rn-section-gapBottom">
      <v-container>
        <v-row>
          <v-col lg="12">
            <div class="section-title section-title--2 text-center mb--60">
              <h2 class="heading-title">My Best Client</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration.
              </p>
            </div>
          </v-col>
        </v-row>
        <!-- End .row -->
        <BrandTwo />
      </v-container>
    </div>
    <!-- End Brand Area -->

    <!-- Start Portfolio Area -->
    <div class="rn-portfolio-area rn-section-gapBottom bg_color--1">
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
        <PortfolioFour />
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

    <!-- Start Contact Area  -->
    <div class="rn-contact-area rn-section-gapBottom bg_color--1">
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
  import HeaderThree from "../../components/header/HeaderThree";
  import BannerThree from "../../components/slider/BannerThree";
  import AboutFour from "../../components/about/AboutFour";
  import BrandTwo from "../../components/brand/BrandTwo";
  import PortfolioFour from "../../components/portfolio/PortfolioFour";
  import Contact from "../../components/contact/Contact";
  import Footer from "../../components/footer/FooterTwo";

  export default {
    components: {
      HeaderThree,
      BannerThree,
      AboutFour,
      BrandTwo,
      PortfolioFour,
      Contact,
      Footer,
    },
    data() {
      return {};
    },
  };
</script>
