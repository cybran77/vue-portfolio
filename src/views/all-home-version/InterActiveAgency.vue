<template>
  <div>
    <!-- Start Header Area -->
    <Header>
      <img slot="logo" src="../../assets/images/logo/logo-light.png" />
    </Header>
    <!-- End Header Area -->

    <!-- Start Slider Area  -->
    <div class="rn-slider-area interactive-slider">
      <div
        class="slide slide-style-2 slider-paralax rn-paralax d-flex align-center justify-center bg_image bg_image bg_image--34 "
        data-black-overlay="8"
      >
        <v-container>
          <v-row>
            <v-col cols="12">
              <div class="inner text-left">
                <span>WE ARE AGENCY</span>
                <h1 class="heading-title">
                  TECHNOLOGY & INNOVATION FOR AGENCY SERVICES.
                </h1>
                <div class="slide-btn">
                  <router-link
                    class="rn-button-style--2 btn-solid"
                    to="/contact"
                    >Contact Us</router-link
                  >
                </div>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
    <!-- End Slider Area  -->

    <div class="rn-about-area ptb--120 bg_color--1">
      <div class="rn-about-wrapper">
        <v-container>
          <AboutFive />
        </v-container>
      </div>
    </div>
    <!-- End About Area -->

    <!-- Start Service Area  -->
    <div class="rn-service-area interactive-service pb--120 bg_color--1">
      <v-container>
        <v-row>
          <v-col lg="12">
            <div class="section-title text-center mb--60">
              <h2>Our Service</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                <br />
                but the majority have suffered alteration.
              </p>
            </div>
          </v-col>
        </v-row>
        <ServiceThree />
      </v-container>
    </div>
    <!-- Start Service Area  -->

    <div class="rn-section pb--120 bg_color--1">
      <v-container>
        <v-row>
          <v-col
            lg="12"
            v-for="(image, imageIndex) in gridItems"
            :key="imageIndex"
          >
            <div class="thumbnail position-relative">
              <img class="w-100" :src="image.thumb" alt="About Images" />
              <a
                class="video-popup position-top-center"
                @click="index = imageIndex"
                ><span class="play-icon"></span
              ></a>
            </div>
          </v-col>
        </v-row>
        <CoolLightBox :items="gridItems" :index="index" @close="index = null">
        </CoolLightBox>
      </v-container>
    </div>
    <!-- Start call to action Area  -->

    <!-- Start Brand Area -->
    <div class="rn-brand-area pb--120">
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
import AboutFive from "../../components/about/AboutFive";
import BannerThree from "../../components/slider/BannerThree";
import ServiceThree from "../../components/service/ServiceThree";
import Brand from "../../components/brand/Brand";
import Footer from "../../components/footer/FooterTwo";

export default {
  components: {
    Header,
    AboutFive,
    BannerThree,
    ServiceThree,
    Brand,
    Footer,
  },
  data() {
    return {
      gridItems: [
        {
          thumb: require("../../assets/images/bg/bg-image-26.jpg"),
          src: "https://www.youtube.com/watch?v=ZOoVOfieAF8",
        },
      ],
      index: null,
    };
  },
};
</script>

<style lang="scss">
.interactive-service {
  .single-service {
    text-align: center;
  }
}
.interactive-slider {
  @media only screen and (min-width: 1264px) and (max-width: 1903px) {
    .slide.slide-style-2 .inner h1.heading-title {
      font-size: 88px;
      line-height: 105px;
    }
  }
}
</style>
