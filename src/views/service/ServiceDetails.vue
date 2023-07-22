<template>
  <div>
    <!-- Start Header Area -->
    <Header>
      <img slot="logo" src="../../assets/images/logo/logo.png" />
    </Header>
    <!-- End Header Area -->

    <!-- Start Breadcrump Area  -->
    <div
      class="rn-page-title-area pt--120 pb--190 bg_image bg_image--5"
      data-black-overlay="5"
    >
      <v-container>
        <v-row>
          <v-col cols="12">
            <div class="rn-page-title text-center pt--100">
              <h2 class="headingtitle theme-gradient">WEBSITE DEVELOPMENT</h2>
              <p>Fresh From The Press Discription</p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- End Breadcrump Area  -->

    <div class="rn-service-details rn-section-gap bg_color--1">
      <v-container>
        <v-row>
          <v-col lg="12">
            <div class="service-details-inner">
              <div class="inner">
                <!-- Start Single Content  -->
                <v-row
                  class="sercice-details-content pb--80 align-items-center"
                >
                  <v-col lg="6" md="6" cols="12">
                    <div class="thumb">
                      <img
                        class="w-100"
                        src="../../assets/images/service/service-01.png"
                        alt="Service Images"
                      />
                    </div>
                  </v-col>
                  <v-col lg="6" md="6" cols="12">
                    <div class="details mt_md--30 mt_sm--30">
                      <p>
                        but the majority have suffered alteration in some form,
                        by injected humour, or randomised words which don't look
                        even slightly believable. If you are going to use a
                        passage of Lorem Ipsum. You need to be sure there isn't
                        anything embarrassing
                      </p>
                      <p>
                        hidden in the middle of text. All the Lorem Ipsum
                        generators tend toitrrepeat predefined chunks.
                        Necessary, making this the first true generator on the
                        Internet.
                      </p>
                      <h4 class="title">Proceess of metel</h4>
                      <ul class="liststyle bullet">
                        <li>Yet this above sewed flirted opened ouch</li>
                        <li>Goldfinch realistic sporadic ingenuous</li>
                        <li>
                          Abominable this abidin far successfully then like
                          piquan
                        </li>
                        <li>Risus commodo viverra</li>
                        <li>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </li>
                      </ul>
                    </div>
                  </v-col>
                </v-row>
                <!-- End Single Content  -->

                <!-- Start Single Content  -->
                <v-row class="sercice-details-content align-items-center">
                  <v-col lg="6" md="6" cols="12" order="2" order-md="1">
                    <div class="details mt_md--30 mt_sm--30">
                      <p>
                        but the majority have suffered alteration in some form,
                        by injected humour, or randomised words which don't look
                        even slightly believable. If you are going to use a
                        passage of Lorem Ipsum. You need to be sure there isn't
                        anything embarrassing
                      </p>
                      <p>
                        hidden in the middle of text. All the Lorem Ipsum
                        generators tend toitrrepeat predefined chunks.
                        Necessary, making this the first true generator on the
                        Internet.
                      </p>
                      <h4 class="title">Our Working Process</h4>
                      <ul class="liststyle bullet">
                        <li>Yet this above sewed flirted opened ouch</li>
                        <li>Goldfinch realistic sporadic ingenuous</li>
                        <li>
                          Abominable this abidin far successfully then like
                          piquan
                        </li>
                      </ul>
                    </div>
                  </v-col>
                  <v-col lg="6" md="6" cols="12" order="1" order-md="2">
                    <div class="thumb position-relative">
                      <CoolLightBox
                        :items="items"
                        :index="index"
                        @close="index = null"
                      >
                      </CoolLightBox>

                      <div class="thumbnail position-relative">
                        <div
                          v-for="(image, imageIndex) in items"
                          :key="imageIndex"
                        >
                          <img
                            class="w-100"
                            :src="image.thumb"
                            alt="About Images"
                          />
                          <a
                            @click="index = imageIndex"
                            class="video-popup play__btn"
                            ><span class="play-icon"></span
                          ></a>
                        </div>
                      </div>
                    </div>
                  </v-col>
                </v-row>
                <!-- End Single Content  -->
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <Footer />
  </div>
</template>

<script>
  import Header from "../../components/header/Header";
  import Footer from "../../components/footer/Footer";
  export default {
    components: {
      Header,
      Footer,
    },
    data() {
      return {
        items: [
          {
            thumb: require("../../assets/images/service/service-02.png"),
            src: "https://www.youtube.com/watch?v=ZOoVOfieAF8",
          },
        ],
        index: null,
      };
    },

    methods: {},
  };
</script>
