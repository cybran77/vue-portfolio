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
              <h2 class="heading-title">Tab & Accordion</h2>
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

    <!-- Start Accordion Area  -->
    <div class="rn-accordion-area rn-section-gap bg_color--5">
      <v-container>
        <v-row>
          <v-col lg="6">
            <Accordion />
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- End Accordion Area  -->

    <!-- Start Tab Area  -->
    <div class="rn-tab-area rn-section-gap bg_color--1">
      <v-container>
        <v-row>
          <TabTwo />
        </v-row>
      </v-container>
    </div>
    <!-- End Tab Area  -->

    <!-- Start Tab Area  -->
    <div class="rn-tab-area rn-section-gap bg_color--5">
      <v-container>
        <v-row>
          <Tab />
        </v-row>
      </v-container>
    </div>
    <!-- End Tab Area  -->

    <Footer />
  </div>
</template>

<script>
  import Header from "../components/header/Header";
  import Accordion from "../components/accordion/Accordion";
  import TabTwo from "../components/tabs/TabTwo";
  import Tab from "../components/tabs/Tab";
  import Footer from "../components/footer/Footer";
  export default {
    components: {
      Header,
      Accordion,
      TabTwo,
      Tab,
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
            text: "Accordion & Tab",
            to: "",
            disabled: true,
          },
        ],
      };
    },
  };
</script>
