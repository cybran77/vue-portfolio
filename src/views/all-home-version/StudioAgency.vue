<template>
  <div>
    <!-- Start Header Area -->
    <Header> <img slot="logo" src="../../assets/images/logo/logo.png"/></Header>
    <!-- End Header Area -->

    <!-- Start Slider Area  -->
    <div
      class="slide slide-style-2 slider-video-bg d-flex align-center justify-center overlay-fix"
      data-black-overlay="6"
    >
      <v-container>
        <v-row align="center">
          <v-col md="8" sm="12" cols="12">
            <div class="inner text-left">
              <h1 class="heading-title">Welcome Video Studio</h1>
              <p class="description">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration.
              </p>
            </div>
          </v-col>
          <v-col
            md="4"
            sm="12"
            cols="12"
            v-for="(image, imageIndex) in items"
            :key="imageIndex"
          >
            <div class="video-inner mt_sm--30 mt_md--30">
              <a
                @click="index = imageIndex"
                class="video-popup theme-color play__btn"
                ><span class="play-icon"></span
              ></a>
            </div>
            <CoolLightBox
              :items="items"
              :index="index"
              @close="index = null"
              fullScreen
            >
            </CoolLightBox>
          </v-col>
        </v-row>
      </v-container>

      <div class="video-background">
        <span>
          <video muted="" autoplay="" playsinline="" loop="" poster="">
            <source src="../../assets/images/service/video.mp4" />
          </video>
        </span>
      </div>
    </div>
    <!-- End Slider Area  -->

    <!-- Start About Area -->
    <div class="about-area rn-section-gap bg_color--1">
      <About>
        <img
          slot="thum-img"
          class="w-100"
          src="../../assets/images/about/about-3.jpg"
          alt="About Images"
        />
      </About>
    </div>
    <!-- End About Area -->

    <!-- Start Service Area -->
    <div class="service-area ptb--80  bg_image bg_image--3">
      <v-container>
        <v-row>
          <v-col md="4" cols="12">
            <div
              class="section-title text-left mt--30 mt_md--5 mt_mobile--5 mb_mobile--10"
            >
              <h2 class="heading-title">Services</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration.
              </p>
              <div class="service-btn">
                <a class="btn-transparent rn-btn-dark" href="/service"
                  ><span class="text">Request Custom Service</span></a
                >
              </div>
            </div>
          </v-col>
          <v-col md="8" cols="12" class="mt_md--50">
            <ServiceTwo />
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- End Service Area -->

    <!-- Start Portfolio Area -->
    <div class="rn-portfolio-area rn-section-gap bg_color--1">
      <div class="portfolio-sacousel-inner pb--30">
        <v-container>
          <v-row>
            <v-col lg="12">
              <div class="section-title text-center mb--20 mb_sm--0 mb_md--0">
                <h2 class="heading-title">All Works</h2>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available,
                  <br />
                  but the majority have suffered alteration.
                </p>
              </div>
            </v-col>
          </v-row>
        </v-container>
        <Portfolio />
      </div>
    </div>
    <!-- End Portfolio Area -->

    <!-- Start Counterup Area -->
    <div class="rn-counterup-area pt--25 pb--110 bg_color--1">
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

    <!-- Start Testimonial Area  -->
    <div class="rn-testimonial-area rn-section-gap bg_color--5">
      <v-container>
        <Testimonial />
      </v-container>
    </div>
    <!-- Start Testimonial Area  -->

    <!-- Start Blog Area  -->
    <div class="rn-blog-area rn-section-gapTop bg_color--1">
      <v-container>
        <v-row align="end" class="mb--20">
          <v-col lg="6" md="6" sm="12" cols="12">
            <div class="section-title text-left">
              <h2>Latest News</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration.
              </p>
            </div>
          </v-col>
          <v-col lg="6" md="6" sm="12" cols="12">
            <div class="blog-btn text-left text-md-right mt_sm--10 mt_md--10">
              <a class="btn-transparent rn-btn-dark" href="blog.html"
                ><span class="text">View All News</span></a
              >
            </div>
          </v-col>
        </v-row>
        <Blog />
      </v-container>
    </div>
    <!-- End Blog Area  -->

    <!-- Start Brand Area  -->
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
    <FooterTwo />
    <!-- End Footer Area  -->
  </div>
</template>

<script>
  import Header from "../../components/header/Header";
  import About from "../../components/about/About";
  import ServiceTwo from "../../components/service/ServiceTwo";
  import Portfolio from "../../components/portfolio/Portfolio";
  import CounterOne from "../../components/counter/CounterOne";
  import Testimonial from "../../components/testimonial/Testimonial";
  import Blog from "../../components/blog/Blog";
  import Brand from "../../components/brand/Brand";
  import FooterTwo from "../../components/footer/FooterTwo";

  export default {
    components: {
      Header,
      About,
      ServiceTwo,
      Portfolio,
      CounterOne,
      Testimonial,
      Blog,
      Brand,
      FooterTwo,
    },
    data() {
      return {
        items: [
          {
            src: "https://www.youtube.com/watch?v=ZOoVOfieAF8",
          },
        ],
        index: null,
      };
    },
  };
</script>
