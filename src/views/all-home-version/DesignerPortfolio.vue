<template>
  <div>
    <!-- Start Header Area -->
    <HeaderTwo class="designer-portfolio-header">
      <img
        slot="logo"
        src="../../assets/images/logo/logo-symbol-dark.png"
        alt="Creative Agency Logo"
      />
    </HeaderTwo>
    <!-- End Header Area -->

    <!-- Start Slider Area  -->
    <div class="slider-wrapper">
      <div
        class="slide designer-portfolio slider-style-3  d-flex align-center justify-center bg_color--5 rn-slider-height"
      >
        <BannerTwo />
      </div>
    </div>
    <!-- End Slider Area  -->

    <!-- Start Gallery Area  -->
    <div class="rn-gallery-area rn-section-gap bg_color--1 position-relative">
      <div class="rn-masonary-wrapper">
        <div class="wrapper plr--70 plr_sm--30 plr_md--30">
          <div class="be-custom-gallery">
            <PortfolioThree />
          </div>
        </div>
      </div>
    </div>
    <!-- End Gallery Area  -->

    <!-- Start Footer Area  -->
    <Footer />
    <!-- End Footer Area  -->
  </div>
</template>
<script>
  import HeaderTwo from "../../components/header/HeaderTwo";
  import BannerTwo from "../../components/slider/BannerTwo";
  import PortfolioThree from "../../components/portfolio/PortfolioThree";
  import Footer from "../../components/footer/FooterTwo";
  export default {
    components: {
      HeaderTwo,
      BannerTwo,
      PortfolioThree,
      Footer,
    },
    data() {
      return {};
    },
  };
</script>
