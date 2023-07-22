<template>
  <div>
    <!-- Start Header Area -->
    <HeaderTwo>
      <img
        slot="logo"
        src="../../assets/images/logo/logo-all-dark.png"
        alt="Creative Agency Logo"
      />
    </HeaderTwo>
    <!-- End Header Area -->

    <!-- Start Slider Area -->
    <SliderFour />
    <!-- End Slider Area -->

    <!-- Start Service Area  -->
    <div class="rn-service-area ptb--30 bg_color--1">
      <div class="container">
        <ServiceFour />
      </div>
    </div>
    <!-- Start Service Area  -->

    <!-- Start Featured Area  -->
    <div class="rn-featured-service-area pt--90 pb--120 bg_color--5">
      <v-container>
        <v-row>
          <v-col lg="3" md="3" cols="12" class="mt--30">
            <div class="section-title text-left">
              <h2 class="heading-title">Services</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but.
              </p>
              <div class="service-btn">
                <a class="btn-transparent rn-btn-dark" href="service.html"
                  ><span class="text">Request Custom Service</span></a
                >
              </div>
            </div>
          </v-col>
          <v-col lg="9" md="9" cols="12">
            <ServiceFive />
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- End Featured Area  -->

    <!-- Start countreup Area  -->
    <div
      class="rn-countreupup-area pt--80 pb--120 bg_image bg_image--17 bg-position-fixed theme-text-white"
      data-black-overlay="7"
    >
      <div class="container">
        <CounterOne />
      </div>
    </div>
    <!-- Start countreup Area  -->

    <!-- Start About Area  -->
    <div class="rn-about-area rn-section-gap bg_color--5">
      <v-container>
        <AboutTwo />
      </v-container>
    </div>
    <!-- End About Area  -->

    <!-- Start team Area  -->
    <div class="rn-team-area team-area rn-section-gap bg_color--1">
      <v-container>
        <v-row>
          <v-col cols="12">
            <div class="section-title section-title--2 text-center mb--20">
              <h2 class="heading-title">Skilled Team</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration.
              </p>
            </div>
          </v-col>
        </v-row>
        <TeamTwo />
      </v-container>
    </div>
    <!-- End team Area  -->

    <!-- Start About Area  -->
    <div class="rn-about-area rn-section-gap bg_color--5">
      <v-container>
        <AboutThree />
      </v-container>
    </div>
    <!-- End About Area  -->

    <!-- Start Brand Area -->
    <div class="rn-brand-area brand-area bg_color--1 rn-section-gap">
      <v-container>
        <BrandTwo />
      </v-container>
    </div>
    <!-- End Brand Area -->

    <!-- Start Pricing Plan Area  -->
    <div class="rn-pricing-plan-area rn-section-gap bg_color--5">
      <v-container>
        <v-row>
          <v-col cols="12">
            <div class="section-title text-center">
              <h2 class="heading-title">Pricing Plan</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                <br />
                but the majority have suffered alteration.
              </p>
            </div>
          </v-col>
        </v-row>
        <!-- End .row -->
        <PricingPlan />
      </v-container>
    </div>
    <!-- End Pricing Plan Area  -->

    <!-- Start blog Area  -->
    <div class="rn-blog-area rn-section-gap bg_color--1">
      <v-container>
        <v-row>
          <v-col cols="12">
            <div class="section-title section-title--2 text-center mb--20">
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
      </v-container>
    </div>
    <!-- Start blog Area  -->

    <!-- Start Call to action Area  -->
    <CallToAction />
    <!-- End Call to action Area  -->

    <!-- Start Footer Area  -->
    <Footer />
    <!-- End Footer Area  -->
  </div>
</template>
<script>
  import HeaderTwo from "../../components/header/HeaderTwo";
  import SliderFour from "../../components/slider/SliderFour";
  import ServiceFour from "../../components/service/ServiceFour";
  import ServiceFive from "../../components/service/ServiceFive";
  import CounterOne from "../../components/counter/CounterOne";
  import AboutTwo from "../../components/about/AboutTwo";
  import TeamTwo from "../../components/team/TeamTwo";
  import AboutThree from "../../components/about/AboutThree";
  import BrandTwo from "../../components/brand/BrandTwo";
  import PricingPlan from "../../components/pricing-plan/PricingPlan";
  import Blog from "../../components/blog/Blog";
  import CallToAction from "../../components/callto-action/CallToAction";
  import Footer from "../../components/footer/FooterTwo";
  import Accordion from "../../components/accordion/Accordion";
  export default {
    components: {
      HeaderTwo,
      SliderFour,
      ServiceFour,
      ServiceFive,
      CounterOne,
      AboutTwo,
      TeamTwo,
      AboutThree,
      BrandTwo,
      PricingPlan,
      Blog,
      CallToAction,
      Footer,
      Accordion,
    },
    data() {
      return {};
    },
  };
</script>
