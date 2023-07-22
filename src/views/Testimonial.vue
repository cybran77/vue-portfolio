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
              <h2 class="heading-title">Tesimonial</h2>
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

    <!-- Start Testimonial Area  -->
    <div class="rn-testimonial-area rn-section-gap bg_color--5">
      <v-container>
        <Testimonial />
      </v-container>
    </div>
    <!-- Start Testimonial Area  -->

    <!-- Start Brand Area -->
    <div class="rn-brand-area brand-separation rn-section-gapBottom">
      <v-container>
        <v-row>
          <v-col lg="12">
            <Brand />
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- End Brand Area -->

    <Footer />
  </div>
</template>

<script>
  import Header from "../components/header/Header";
  import Testimonial from "../components/testimonial/Testimonial";
  import Brand from "../components/brand/Brand";
  import Footer from "../components/footer/Footer";
  export default {
    components: {
      Header,
      Testimonial,
      Brand,
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
            text: "Testimonial",
            to: "",
            disabled: true,
          },
        ],
      };
    },

    methods: {},
  };
</script>
