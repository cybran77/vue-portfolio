<template>
  <div>
    <!-- Start Header Area -->
    <Header>
      <img slot="logo" src="../../assets/images/logo/logo.png" />
    </Header>
    <!-- End Header Area -->

    <!-- Start Slider Area -->
    <SliderTwo />
    <!-- End Slider Area -->

    <!-- Start Brand Area -->
    <div class="rn-brand-area bg_color--5 rn-section-gap">
      <v-container>
        <v-row>
          <v-col cols="12">
            <Brand />
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- End Brand Area -->

    <!-- Start Service Area  -->
    <div class="rn-service-area service-area rn-section-gap bg_color--1">
      <v-container>
        <v-row>
          <v-col cols="12" class="mb--20 mb_sm--0">
            <div class="section-title section-title--2 text-center">
              <h2>Our Service</h2>
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

    <!-- Start About Area  -->
    <div class="rn-about-area rn-section-gap bg_color--5">
      <v-container>
        <AboutTwo />
      </v-container>
    </div>
    <!-- End About Area  -->

    <!-- Start About Area  -->
    <div class="rn-about-area rn-section-gap bg_color--1">
      <v-container>
        <AboutThree />
      </v-container>
    </div>
    <!-- End About Area  -->

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

    <!-- Start team Area  -->
    <div class="rn-team-area rn-section-gap bg_color--1">
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
        <Team />
      </v-container>
    </div>
    <!-- End team Area  -->

    <!-- Start blog Area  -->
    <div class="rn-blog-area rn-section-gap bg_color--5">
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
        <BlogThree />
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
  import Header from "../../components/header/Header";
  import SliderTwo from "../../components/slider/SliderTwo";
  import Brand from "../../components/brand/Brand";
  import ServiceThree from "../../components/service/ServiceThree";
  import AboutTwo from "../../components/about/AboutTwo";
  import AboutThree from "../../components/about/AboutThree";
  import PortfolioFour from "../../components/portfolio/PortfolioFour";
  import Team from "../../components/team/Team";
  import BlogThree from "../../components/blog/BlogThree";
  import CallToAction from "../../components/callto-action/CallToAction.vue";
  import Footer from "../../components/footer/FooterTwo";

  export default {
    components: {
      Header,
      SliderTwo,
      Brand,
      ServiceThree,
      AboutTwo,
      AboutThree,
      PortfolioFour,
      Team,
      BlogThree,
      CallToAction,
      Footer,
    },
    data() {
      return {};
    },
  };
</script>
