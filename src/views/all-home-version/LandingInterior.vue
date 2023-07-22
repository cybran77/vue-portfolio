<template>
  <div>
    <!-- Start Header Area -->
    <HeaderOnePageThree>
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
    </HeaderOnePageThree>
    <!-- End Header Area -->

    <!-- Start Slider Area  -->
    <div class="rn-slider-area" id="home">
      <div
        class="slide slide-style-2 slider-paralax d-flex align-center justify-center bg_image bg_image--32"
        data-black-overlay="4"
      >
        <Banner>
          <h1 slot="heading-title" class="heading-title theme-gradient">
            INTERIOR HOUSE
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
      <v-container>
        <v-row>
          <v-col lg="8">
            <div class="feature-area">
              <span>FUTURE HOUSE</span>
              <h3 class="heading-title mt--20 fontWeight500 lineheight--1-8">
                What you look your hopefull house we can be made it for yours.
                We can be design yours house so dont woory you can hire us.
                Beautiful and hand made design we can be create.
              </h3>
            </div>
          </v-col>
        </v-row>
        <ServiceSix class="interior-services" />
      </v-container>
    </div>
    <!-- Start Service Area  -->

    <!-- Start Call To Action Area  -->
    <div
      class="call-to-action-wrapper call-to-action-two bg_image bg_image--33 text-white-wrapper ptb--180 ptb_lg--80 ptb_md--80 ptb_sm--80"
      id="getstart"
    >
      <v-container>
        <CallToActionTwo />
      </v-container>
    </div>
    <!-- End Call To Action Area  -->

    <!-- Start Counterup Area -->
    <div
      class="rn-counterup-area pt--80 pt_sm--50 pt_md--50 pb--120 bg_color--1"
    >
      <v-container>
        <CounterTwo />
      </v-container>
    </div>
    <!-- End Counterup Area -->

    <!-- Start Content Box  -->
    <div
      class="rn-content-box-area rn-content-box-style--1 bg_color--1"
      id="about"
    >
      <v-row class="row--0" align="center">
        <v-col lg="6" md="12" cols="12">
          <div class="thumbnail">
            <img
              src="../../assets/images/featured/featured-01.jpg"
              alt="Featured Images"
            />
          </div>
        </v-col>
        <!-- End .v-col -->
        <v-col md="12" lg="6" cols="12" class="mt_lg--50 mt_md--30 mt_sm--30">
          <div class="content">
            <p class="subtitle"><span>Modern</span> Design For Interior</p>
            <h2 class="fontWeight500">
              Provide a Modern Design For Your Home and Office
            </h2>
            <p>
              Uniq interior design provide for your home. you can be create as
              you like. Our modern designer provide as you are like. A interior
              designer can build your design and fullfile your demand.Uniq
              interior design provide for your home. you can be create as you
              like. Our modern designer provide as you are like. A interior
              designer can build your design and fullfile your demand
            </p>
            <ul class="list-style mt--30">
              <li>Yet this above sewed flirted opened ouch</li>
              <li>Goldfinch realistic sporadic ingenuous</li>
              <li>Abominable this abidin far successfully then like piquan</li>
              <li>Risus commodo viverra</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
            </ul>
          </div>
        </v-col>
        <!-- End .col -->
      </v-row>
    </div>
    <!-- Start Content Box -->

    <!-- Start team Area  -->
    <div class="rn-team-area rn-section-gap bg_color--1" id="team">
      <v-container>
        <v-row>
          <v-col md="8" cols="12">
            <div class="section-title section-title--2 text-left mb--30">
              <h2 class="heading-title">Meet Our Designer</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration.
              </p>
            </div>
          </v-col>
        </v-row>
        <TeamFour />
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

    <!-- Start Portfolio Area -->
    <div class="rn-portfolio-area rn-section-gap bg_color--1" id="portfolio">
      <div class="portfolio-sacousel-inner pb--30">
        <v-container>
          <v-row>
            <v-col lg="12">
              <div class="section-title text-left mb--20 mb_sm--0 mb_md--0">
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
        <PortfolioEight />
      </div>
    </div>
    <!-- End Portfolio Area -->

    <!-- Start Footer Area  -->
    <FooterTwo />
    <!-- End Footer Area  -->
  </div>
</template>

<script>
  import HeaderOnePageThree from "../../components/header/HeaderOnePageThree";
  import Banner from "../../components/slider/Banner";
  import ServiceSix from "../../components/service/ServiceSix";
  import CallToActionTwo from "../../components/callto-action/CallToActionTwo";
  import CounterTwo from "../../components/counter/CounterTwo";
  import TeamFour from "../../components/team/TeamFour";
  import Testimonial from "../../components/testimonial/Testimonial";
  import PortfolioEight from "../../components/portfolio/PortfolioEight";
  import FooterTwo from "../../components/footer/FooterTwo";

  export default {
    components: {
      HeaderOnePageThree,
      Banner,
      ServiceSix,
      CallToActionTwo,
      PortfolioEight,
      CounterTwo,
      TeamFour,
      Testimonial,
      FooterTwo,
    },
    data() {
      return {};
    },
  };
</script>
