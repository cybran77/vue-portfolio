<template>
  <div>
    <!-- Start Header Area -->
    <Header>
      <img slot="logo" src="../assets/images/logo/logo.png" />
    </Header>
    <!-- End Header Area -->

    <!-- Start Breadcrump Area  -->
    <div
      class="breadcrumb-area rn-bg-color ptb--120 bg_image bg_image--1"
      data-black-overlay="6"
    >
      <v-container>
        <v-row>
          <v-col lg="12">
            <div class="breadcrumb-inner pt--100 pt_sm--40 pt_md--50">
              <h2 class="heading-title">Pricing Plane</h2>
              <ul class="page-list">
                <li v-for="(item, i) in breadcrumbs" :key="i">
                  <router-link :to="item.to" :disabled="item.disabled">{{
                    item.text
                  }}</router-link>
                </li>
              </ul>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- End Breadcrump Area  -->

    <!-- Start Pricing Plan Area  -->
    <div class="rn-pricing-plan-area  rn-section-gap bg_color--1">
      <v-container>
        <v-row>
          <v-col>
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
        <PricingPlan />
      </v-container>
    </div>
    <!-- End Pricing Plan Area  -->

    <Footer />
  </div>
</template>

<script>
  import Header from "../components/header/Header";
  import PricingPlan from "../components/pricing-plan/PricingPlan";
  import Footer from "../components/footer/Footer";
  export default {
    components: {
      Header,
      PricingPlan,
      Footer,
    },
    data() {
      return {
        breadcrumbs: [
          {
            text: "Home",
            to: "/",
            disabled: false,
          },
          {
            text: "Pricing Plane",
            to: "",
            disabled: true,
          },
        ],
      };
    },
  };
</script>
