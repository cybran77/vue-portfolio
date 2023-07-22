<template>
  <div>
    <!-- Start Header Area -->
    <HeaderTwo class="flat-fluid-app-bar">
      <img
        slot="logo"
        src="../../assets/images/logo/logo-symbol-dark.png"
        alt="Creative Agency Logo"
      />
    </HeaderTwo>
    <!-- End Header Area -->

    <!-- Start Gallery Area  -->
    <div class="rn-gallery-area bg_color--1">
      <div class="creative-portfolio-wrapper plr--10">
        <PortfolioFive />
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
  import PortfolioFive from "../../components/portfolio/PortfolioFive";
  import Footer from "../../components/footer/FooterTwo";

  export default {
    components: {
      HeaderTwo,
      PortfolioFive,
      Footer,
    },
    data() {
      return {};
    },
  };
</script>
