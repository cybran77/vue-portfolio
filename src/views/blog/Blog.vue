<template>
  <div>
    <!-- Start Header Area -->
    <Header>
      <img slot="logo" src="../../assets/images/logo/logo.png" />
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
              <h2 class="heading-title">Blog</h2>
              <ul class="page-list">
                <li><router-link to="/">Home</router-link></li>
                <li class="current-page">Blog</li>
              </ul>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- End Breadcrump Area  -->

    <!-- Start blog Area  -->
    <div class="rn-blog-area rn-section-gap bg_color--1">
      <v-container>
        <v-row>
          <v-col cols="12">
            <div class="section-title section-title--2 text-center">
              <h2 class="heading-title">Latest News</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration.
              </p>
            </div>
          </v-col>
        </v-row>
        <!-- End .row -->
        <BlogThree />
        <v-row>
          <v-col lg="12">
            <div class="rn-pagination text-center mt--60 mt_sm--30">
              <Pagination />
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- Start blog Area  -->

    <!-- Start blog Area  -->
    <div class="rn-blog-area rn-section-gap bg_color--5">
      <v-container>
        <v-row>
          <v-col cols="12">
            <div class="section-title section-title--2 text-left">
              <h2 class="heading-title">Popular News</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration.
              </p>
            </div>
          </v-col>
        </v-row>
        <!-- End .row -->
        <BlogTwo />
      </v-container>
    </div>
    <!-- Start blog Area  -->

    <!-- Start blog Area  -->
    <div class="rn-blog-area rn-section-gap bg_color--1">
      <v-container>
        <v-row>
          <v-col cols="12">
            <div class="section-title section-title--2 text-center">
              <h2 class="heading-title">Related Post</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration.
              </p>
            </div>
          </v-col>
        </v-row>
        <!-- End .row -->
        <Blog />
      </v-container>
    </div>
    <!-- Start blog Area  -->

    <Footer />
  </div>
</template>

<script>
  import Header from "../../components/header/Header";
  import BlogThree from "../../components/blog/BlogThree";
  import BlogTwo from "../../components/blog/BlogTwo";
  import Blog from "../../components/blog/Blog";
  import Pagination from "../../components/pagination/Pagination";
  import Footer from "../../components/footer/Footer";
  export default {
    components: {
      Header,
      BlogThree,
      BlogTwo,
      Blog,
      Pagination,
      Footer,
    },
    data() {
      return {};
    },

    methods: {},
  };
</script>
