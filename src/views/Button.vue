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
              <h2 class="heading-title">Button</h2>
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

    <!-- Start Button Area  -->
    <div class="rn-button-area rn-section-gap bg_color--1">
      <v-container>
        <v-row>
          <v-col lg="12">
            <div class="button-group">
              <a class="rn-button-style--2 btn_solid" href="#">Button Solid</a>
              <a class="rn-button-style--2 btn_border" href="#"
                >Button Border</a
              >
              <a class="rn-button-style--2 btn_border btn_border--dark" href="#"
                >Button Border</a
              >
            </div>
            <div class="button-group mt--30">
              <a class="rn-button-style--2 btn_solid btn-size-md" href="#"
                >Button Solid</a
              >
              <a class="rn-button-style--2 btn_border btn-size-md" href="#"
                >Button Border</a
              >
              <a
                class="rn-button-style--2 btn_border btn_border--dark btn-size-md"
                href="#"
                >Button Border</a
              >
            </div>
            <div class="button-group mt--30">
              <a class="rn-button-style--2 btn_solid btn-size-sm" href="#"
                >Button Solid</a
              >
              <a class="rn-button-style--2 btn_border btn-size-sm" href="#"
                >Button Border</a
              >
              <a
                class="rn-button-style--2 btn_border btn_border--dark btn-size-sm"
                href="#"
                >Button Border</a
              >
            </div>
            <div class="button-group mt--30">
              <a class="btn-transparent rn-btn-dark" href="#"
                ><span class="text">View All News</span></a
              >
              <a class="btn-transparent rn-btn-dark" href="#"
                ><span class="text">View More</span></a
              >
              <a class="btn-transparent rn-btn-dark" href="#"
                ><span class="text">Read More</span></a
              >
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- End Button Area  -->

    <Footer />
  </div>
</template>

<script>
  import Header from "../components/header/Header";
  import Footer from "../components/footer/Footer";
  export default {
    components: {
      Header,
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
            text: "Button",
            to: "",
            disabled: true,
          },
        ],
      };
    },
  };
</script>
