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
    <div class="rn-slider-area poss_relative" id="home">
      <vue-particles
        color="#dedede"
        :particleOpacity="0.7"
        :particlesNumber="40"
        shapeType="circle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="180"
        :moveSpeed="6"
        :hoverEffect="true"
        hoverMode="repulse"
        :clickEffect="false"
        clickMode="push"
      >
      </vue-particles>
      <div
        class="slide slide-style-2 bg_image bg_image--27 d-flex align-center"
      >
        <Banner>
          <h1 slot="heading-title" class="heading-title theme-gradient">
            Creative One Page
          </h1>
          <p slot="description" class="description">
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration.
          </p>
        </Banner>
      </div>
    </div>
    <!-- End Slider Area -->

    <!-- Start Service Area  -->
    <div
      class="rn-service-area service-area rn-section-gap bg_color--1"
      id="service"
    >
      <v-container>
        <v-row>
          <v-col lg="6">
            <div class="section-title text-left mb--30">
              <h2>Our Services</h2>
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
    <div class="about-area rn-section-gap bg_color--5" id="about">
      <div class="about-wrapper">
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
    <div class="rn-countreupup-area rn-section-gap bg_color--">
      <v-container>
        <v-row>
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
    <div class="rn-blog-area pt--120 pb--140 bg_color--1" id="blog">
      <v-container>
        <v-row align="end" class="mb--20">
          <v-col lg="6" md="12" sm="12">
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
  import Footer from "../../components/footer/FooterTwo";

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
