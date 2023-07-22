<template>
  <div>
    <!-- Start Header Area -->
    <Header class="digital-agency-header color-white">
      <img slot="logo" src="../../assets/images/logo/logo-light.png" />
    </Header>
    <!-- End Header Area -->

    <!-- Start Slider Area -->
    <SliderThree />
    <!-- End Slider Area -->

    <!-- Start Service Area  -->
    <div class="rn-service-area rn-section-gap bg_color--1">
      <v-container>
        <v-row>
          <v-col cols="12">
            <div class="section-title section-title--2 text-center mb--30">
              <h2 class="heading-title">Our Service</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration.
              </p>
            </div>
          </v-col>
        </v-row>
        <!-- End .row -->
        <ServiceThree class="bg-white--service" />
      </v-container>
    </div>
    <!-- Start Service Area  -->

    <!-- Start Portfolio Area  -->
    <div class="rn-portfolio-area rn-section-gap bg_color--5">
      <v-container>
        <v-row>
          <v-col lg="12">
            <div class="section-title section-title--2 text-center mb--20">
              <h2 class="heading-title">Our Project</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                <br />
                but the majority have suffered alteration.
              </p>
            </div>
          </v-col>
        </v-row>
        <PortfolioFour />
        <v-row>
          <v-col lg="12">
            <div class="view-more-btn mt--60 text-center">
              <a class="rn-button-style--2 btn_solid" href="/portfolio"
                ><span>View More Project</span></a
              >
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- Start Portfolio Area  -->

    <!-- Start About Area  -->
    <div class="about-area rn-section-gap bg_color--1">
      <div class="about-wrapper">
        <v-container>
          <v-row class="row--35">
            <v-col md="5" cols="12">
              <div class="thumbnail">
                <img
                  class="w-100"
                  src="../../assets/images/about/about-3.jpg"
                  alt="About Images"
                />
              </div>
            </v-col>
            <v-col md="7" cols="12">
              <div class="about-inner inner">
                <div class="section-title">
                  <h2 class="heading-title">About Me</h2>
                  <p class="description">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which dont
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum,
                  </p>
                </div>
                <div class="row mt--30">
                  <Tab />
                </div>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
    <!-- End About Area  -->

    <!-- Start Testimonial Area  -->
    <div class="rn-testimonial-area rn-section-gap bg_color--5">
      <v-container>
        <Testimonial />
      </v-container>
    </div>
    <!-- Start Testimonial Area  -->

    <!-- Start blog Area  -->
    <div class="rn-blog-area rn-section-gap bg_color--1">
      <v-container>
        <v-row>
          <v-col cols="12">
            <div
              class="section-title section-title--2  text-center mb--20 mb_sm--0 md_sm--0"
            >
              <h2 class="heading-title">Latest News</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                <br />
                but the majority have suffered alteration.
              </p>
            </div>
          </v-col>
        </v-row>
        <!-- End row -->
        <Blog />
        <v-row class="mt--60">
          <v-col lg="12">
            <div class="view-more-button text-center">
              <a class="rn-button-style--2 btn_solid" href="#">View More</a>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- Start blog Area  -->

    <!-- Start Brand Area -->
    <div class="rn-brand-area bg_color--5 rn-section-gap">
      <v-container>
        <v-row>
          <v-col>
            <div class="section-title section-title--2 text-center mb--30">
              <h2 class="heaing-title">Our Clients</h2>
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

    <!-- Start Call to action Area  -->
    <CallToAction />
    <!-- End Call to action Area  -->

    <!-- Start Footer Area  -->
    <Footer />
    <!-- End Footer Area  -->
  </div>
</template>
<script>
  import Header from "../../components/header/Header";
  import SliderThree from "../../components/slider/SliderThree";
  import Brand from "../../components/brand/Brand";
  import ServiceThree from "../../components/service/ServiceThree";
  import PortfolioFour from "../../components/portfolio/PortfolioFour";
  import Testimonial from "../../components/testimonial/Testimonial";
  import Blog from "../../components/blog/Blog";
  import CallToAction from "../../components/callto-action/CallToAction.vue";
  import BrandTwo from "../../components/brand/BrandTwo.vue";
  import Footer from "../../components/footer/FooterTwo";
  import Tab from "../../components/tabs/Tab";
  import Accordion from "../../components/accordion/Accordion";
  export default {
    components: {
      Header,
      SliderThree,
      ServiceThree,
      PortfolioFour,
      Testimonial,
      Blog,
      Tab,
      BrandTwo,
      CallToAction,
      Footer,
      Accordion,
    },
    data() {
      return {};
    },
  };
</script>

<style lang="scss">
  .bg-white--service {
    .single-service.service__style--2.bg-color-gray a {
      background: #fff;
      text-align: center;
    }
  }
</style>
