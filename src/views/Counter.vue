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
              <h2 class="heading-title">Counter</h2>
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

    <!-- Start countreupup Area  -->
    <div class="rn-countreupup-area rn-section-gap bg_color--1">
      <v-container>
        <CounterOne />
      </v-container>
    </div>
    <!-- Start countreupup Area  -->

    <!-- Start countreupup Area  -->
    <div
      class="rn-countreupup-area rn-section-gap bg_image bg_image--27 bg-position-fixed counterup_style--1 text-white"
      data-black-overlay="6"
    >
      <v-container>
        <CounterOne />
      </v-container>
    </div>
    <!-- Start countreupup Area  -->

    <!-- Start countreupup Area  -->
    <div class="rn-countreupup-area rn-section-gap bg_color--5">
      <v-container>
        <CounterOne />
      </v-container>
    </div>
    <!-- Start countreupup Area  -->

    <!-- Start Brand Area -->
    <div
      class="rn-brand-area brand-separation bg_color--5 rn-section-gapBottom"
    >
      <v-container>
        <v-row>
          <v-col cols="12">
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
  import CounterOne from "../components/counter/CounterOne";
  import Brand from "../components/brand/Brand";
  import Footer from "../components/footer/Footer";
  export default {
    components: {
      Header,
      CounterOne,
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
            text: "Counter",
            to: "",
            disabled: true,
          },
        ],
      };
    },
  };
</script>
