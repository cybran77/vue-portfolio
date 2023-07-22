<template>
  <div>
    <!-- Start Header Area -->
    <Header>
      <img slot="logo" src="../../assets/images/logo/logo.png" />
    </Header>
    <!-- End Header Area -->

    <!-- Start Slider Area  -->
    <div class="rn-slider-area">
      <div
        class="slide slide-style-2 slider-paralax paralx-slider parallax d-flex align-center justify-center bg_image bg-fixed"
        :style="{ backgroundImage: 'url(' + parallaxHomeImg + ')' }"
      >
        <Banner>
          <h1 slot="heading-title" class="heading-title theme-gradient">
            MARKETING
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
    <div
      class="rn-service-area service-area rn-section-gap parallax bg_image bg-fixed"
      :style="{ backgroundImage: 'url(' + serviceImg + ')' }"
    >
      <v-container>
        <v-row class="row">
          <v-col lg="12">
            <div
              class="section-title section-title--2  text-center text-white mb--30 mb_sm--0"
            >
              <h2 class="heading-title">Our Service</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration.
              </p>
            </div>
          </v-col>
        </v-row>
        <!-- End .row -->
        <ServiceFour class="parallax-services" />
      </v-container>
    </div>
    <!-- End Service Area  -->

    <!-- Start Portfolio Area -->
    <div
      class="rn-portfolio-area rn-section-gap bg_image bg-fixed"
      :style="{ backgroundImage: 'url(' + portfolioImg + ')' }"
    >
      <div class="portfolio-sacousel-inner">
        <v-container>
          <v-row class="row">
            <v-col lg="12">
              <div
                class="section-title section-title--2 text-center text-white mb--30 mb_sm--0"
              >
                <h2 class="heading-title">Our Works</h2>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available,
                  <br />
                  but the majority have suffered alteration.
                </p>
              </div>
            </v-col>
          </v-row>
          <PortfolioSeven />
        </v-container>
      </div>
    </div>
    <!-- End Portfolio Area -->

    <!-- Start Counterup Area -->
    <div
      class="rn-counterup-area rn-section-gap parallax bg_image bg-fixed"
      :style="{ backgroundImage: 'url(' + counterImg + ')' }"
    >
      <v-container>
        <v-row class="row">
          <v-col cols="12">
            <div
              class="section-title section-title--2 text-center text-white mb--15 mb_sm--0"
            >
              <h3 class="heading-title">Our Fun Facts</h3>
            </div>
          </v-col>
        </v-row>
        <CounterOne />
      </v-container>
    </div>
    <!-- End Counterup Area -->

    <!-- Start Testimonial Area  -->
    <div
      class="rn-testimonial-area rn-section-gap rn-paralax-testimonial rn-testimonial-light parallax bg_image bg-fixed"
      :style="{ backgroundImage: 'url(' + tesmonialImg + ')' }"
      data-black-overlay="6"
    >
      <v-container>
        <Testimonial />
      </v-container>
    </div>
    <!-- Start Testimonial Area  -->

    <!-- Start Blog Area  -->
    <div
      class="rn-blog-area rn-section-gap parallax bg_image bg-fixed"
      :style="{ backgroundImage: 'url(' + blogImg + ')' }"
      data-black-overlay="6"
    >
      <v-container>
        <v-row class="row align-items-end mb--20">
          <v-col lg="12">
            <div
              class="section-title section-title--2 text-center text-white mb--15 mb_sm--0"
            >
              <h2 class="heading-title">Latest News</h2>
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

    <!-- Start Brand Area  -->
    <!-- Start Brand Area -->
    <div
      class="rn-brand-area brand-separation parallax bg_image bg-fixed"
      :style="{ backgroundImage: 'url(' + brandgImg + ')' }"
    >
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
  import ServiceFour from "../../components/service/ServiceThree";
  import PortfolioSeven from "../../components/portfolio/PortfolioSeven";
  import CounterOne from "../../components/counter/CounterOne";
  import Testimonial from "../../components/testimonial/Testimonial";
  import Blog from "../../components/blog/Blog";
  import Brand from "../../components/brand/Brand";
  import Footer from "../../components/footer/Footer";

  export default {
    components: {
      Banner,
      Header,
      ServiceFour,
      PortfolioSeven,
      CounterOne,
      Testimonial,
      Blog,
      Brand,
      Footer,
    },
    data() {
      return {
        parallaxHomeImg: require("../../assets/images/bg/bg-image-11.jpg"),
        serviceImg: require("../../assets/images/bg/paralax/bg-image-2.jpg"),
        portfolioImg: require("../../assets/images/bg/paralax/bg-image-3.jpg"),
        counterImg: require("../../assets/images/bg/paralax/bg-image-6.jpg"),
        tesmonialImg: require("../../assets/images/bg/paralax/bg-image-7.jpg"),
        blogImg: require("../../assets/images/bg/paralax/bg-image-8.jpg"),
        brandgImg: require("../../assets/images/bg/paralax/bg-image-4.jpg"),
      };
    },
  };
</script>
