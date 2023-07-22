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
        class="slide slide-style-2 slider-paralax paralx-slider parallax d-flex align-center justify-center bg_image bg_image--24 bg-fixed"
        data-black-overlay="6"
      >
        <Banner>
          <h1 slot="heading-title" class="heading-title theme-gradient">
            Minimal
          </h1>
          <p slot="description" class="description">
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration.
          </p>
        </Banner>
      </div>
    </div>
    <!-- End Slider Area  -->

    <!-- Start Portfolio Area  -->
    <div class="rn-portfolio-area rn-section-gap bg_color--1">
      <v-container>
        <v-row>
          <v-col lg="12">
            <div class="section-title section-title--2  text-center mb--20">
              <h2 class="heading-title">Our Portfolio</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration.
              </p>
            </div>
          </v-col>
        </v-row>
      </v-container>
      <div class="wrapper plr--30">
        <PortfolioSix />
        <v-row>
          <v-col lg="12">
            <div class="view-more-btn mt--60 text-center">
              <a class="rn-button-style--2 btn_solid" href="portfolio.html"
                ><span>View More Project</span></a
              >
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
    <!-- End Portfolio Area  -->

    <!-- Start Brand Area  -->
    <div class="rn-brand-area rn-section-gap bg_color--5">
      <v-container>
        <v-row>
          <v-col lg="12">
            <div class="section-title section-title--2 text-center mb--30">
              <h2 class="heading-title">Our Clients</h2>
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
    <!-- End Brand Area  -->

    <!-- Start Footer Area  -->
    <Footer />
    <!-- End Footer Area  -->
  </div>
</template>

<script>
  import Header from "../../components/header/Header";
  import Banner from "../../components/slider/Banner";
  import PortfolioSix from "../../components/portfolio/PortfolioSix";
  import BrandTwo from "../../components/brand/BrandTwo";
  import Footer from "../../components/footer/FooterTwo";

  export default {
    components: {
      Header,
      Banner,
      PortfolioSix,
      BrandTwo,
      Footer,
    },
    data() {
      return {};
    },
  };
</script>
