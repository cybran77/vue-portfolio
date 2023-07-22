<template>
  <div>
    <!-- Start Header Area -->
    <HeaderOnePage>
      <img
        slot="logo"
        src="../../assets/images/logo/logo-light.png"
        class="logo-light"
      />
      <img
        slot="logo-dark"
        src="../../assets/images/logo/logo-all-dark.png"
        class="logo-dark"
      />
    </HeaderOnePage>
    <!-- End Header Area -->

    <!-- Start Slider Area  -->
    <div class="rn-slider-area" id="home">
      <div
        class="slide slide-style-2 slider-paralax d-flex align-center justify-center bg_image bg_image--26"
        data-black-overlay="6"
      >
        <Banner>
          <h1 slot="heading-title" class="heading-title theme-gradient">
            Creative
          </h1>
          <p slot="description" class="description">
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration.
          </p>
        </Banner>
      </div>
    </div>
    <!-- End Slider Area  -->

    <!-- Start Service Area  -->
    <div class="rn-service-area rn-section-gap bg_color--1" id="service">
      <div class="container">
        <ServiceThree />
      </div>
    </div>
    <!-- Start Service Area  -->

    <!-- Start About Area  -->
    <div class="about-area rn-section-gap bg_color--5" id="about">
      <div class="about-wrapper">
        <div class="container">
          <About>
            <img
              slot="thum-img"
              class="w-100"
              src="../../assets/images/about/about-3.jpg"
              alt="About Images"
            />
          </About>
        </div>
      </div>
    </div>
    <!-- Start About Area  -->

    <!-- Start Portfolio Area -->
    <div class="rn-portfolio-area rn-section-gap bg_color--1" id="portfolio">
      <v-container>
        <v-row>
          <v-col lg="6">
            <div class="section-title section-title--2 text-left mb--20">
              <h2 class="heading-title">Our Portfolio</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration.
              </p>
            </div>
          </v-col>
        </v-row>
      </v-container>
      <PortfolioTwo />
    </div>
    <!-- End Portfolio Area -->

    <!-- Start Counterup Area -->
    <div class="rn-countreupup-area rn-section-gap bg_color--5">
      <v-container>
        <v-row class="row">
          <v-col cols="12">
            <div class="section-title text-center">
              <h3 class="fontWeight500">Our Fun Facts</h3>
            </div>
          </v-col>
        </v-row>
        <CounterOne />
      </v-container>
    </div>
    <!-- End Counterup Area -->

    <!-- Start team Area  -->
    <div class="rn-team-area rn-section-gap bg_color--1" id="team">
      <v-container>
        <v-row>
          <v-col md="6" cols="12">
            <div class="section-title section-title--2 text-left mb--30">
              <h2 class="heading-title">Skilled Team</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration.
              </p>
            </div>
          </v-col>
        </v-row>
        <Team />
      </v-container>
    </div>
    <!-- End team Area  -->

    <!-- Start Testimonial Area  -->
    <div class="rn-testimonial-area rn-section-gap bg_color--5" id="tesimonial">
      <v-container>
        <Testimonial />
      </v-container>
    </div>
    <!-- Start Testimonial Area  -->

    <!-- Start Blog Area  -->
    <div class="rn-blog-area rn-section-gap bg_color--1" id="blog">
      <v-container>
        <v-row class="row align-items-end mb--20">
          <div class="col-lg-6 col-md-12 col-sm-12 col-12">
            <div class="section-title text-left">
              <h2>Latest News</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration.
              </p>
            </div>
          </div>
        </v-row>
        <BlogTwo />
      </v-container>
    </div>
    <!-- End Blog Area  -->

    <!-- Start Contact Area  -->
    <div class="rn-contact-area rn-section-gap bg_color--5" id="contact">
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

    <!-- Start Brand Area -->
    <div class="rn-brand-area brand-separation">
      <v-container>
        <v-row>
          <v-col cols="12">
            <Brand />
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- End Brand Area -->

    <!-- Start Footer Area  -->
    <Footer />
    <!-- End Footer Area  -->
  </div>
</template>

<script>
  import HeaderOnePage from "../../components/header/HeaderOnePage";
  import Banner from "../../components/slider/Banner";
  import About from "../../components/about/About";
  import ServiceThree from "../../components/service/ServiceThree";
  import PortfolioTwo from "../../components/portfolio/PortfolioTwo";
  import CounterOne from "../../components/counter/CounterOne";
  import Team from "../../components/team/Team";
  import Testimonial from "../../components/testimonial/Testimonial";
  import BlogTwo from "../../components/blog/BlogTwo";
  import Contact from "../../components/contact/Contact";
  import Brand from "../../components/brand/Brand";
  import Footer from "../../components/footer/Footer";

  export default {
    components: {
      HeaderOnePage,
      Banner,
      About,
      ServiceThree,
      PortfolioTwo,
      CounterOne,
      Team,
      Testimonial,
      BlogTwo,
      Brand,
      Contact,
      Footer,
    },
    data() {
      return {};
    },
  };
</script>
