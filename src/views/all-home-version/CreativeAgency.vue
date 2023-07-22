<template>
  <div>
    <!-- Start Header Area -->
    <Header>
      <img slot="logo" src="../../assets/images/logo/logo-light.png" />
    </Header>
    <!-- End Header Area -->

    <!-- Start Slider Area  -->
    <div class="rn-slider-area">
      <div
        class="slide slide-style-2 slider-paralax paralx-slider parallax d-flex align-center justify-center bg_image bg-fixed"
        :style="{ backgroundImage: 'url(' + creativeAgencyImg + ')' }"
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
    <div class="rn-service-area rn-section-gap bg_color--1">
      <v-container>
        <ServiceThree />
      </v-container>
    </div>
    <!-- Start Service Area  -->

    <!-- Start Portfolio Area -->
    <div class="rn-portfolio-area rn-section-gap bg_color--5">
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
    <div class="rn-countreupup-area rn-section-gap bg_color--1">
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
    <div class="rn-team-area rn-section-gap bg_color--5">
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
    <div class="rn-testimonial-area bg_color--1 ptb--120">
      <v-container>
        <Testimonial />
      </v-container>
    </div>
    <!-- Start Testimonial Area  -->

    <!-- Start Blog Area  -->
    <div class="rn-blog-area rn-section-gap bg_color--5">
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
        <BlogTwo />
      </v-container>
    </div>
    <!-- End Blog Area  -->

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
  import Header from "../../components/header/Header";
  import Banner from "../../components/slider/Banner";
  import ServiceThree from "../../components/service/ServiceThree";
  import PortfolioTwo from "../../components/portfolio/PortfolioTwo";
  import CounterOne from "../../components/counter/CounterOne";
  import Team from "../../components/team/Team";
  import Testimonial from "../../components/testimonial/Testimonial";
  import BlogTwo from "../../components/blog/BlogTwo";
  import Brand from "../../components/brand/Brand";
  import Footer from "../../components/footer/FooterTwo";

  export default {
    components: {
      Header,
      Banner,
      ServiceThree,
      PortfolioTwo,
      CounterOne,
      Team,
      Testimonial,
      BlogTwo,
      Brand,
      Footer,
    },
    data() {
      return {
        creativeAgencyImg: require("../../assets/images/bg/paralax/bg-image-3-overlay.jpg"),
      };
    },
  };
</script>
