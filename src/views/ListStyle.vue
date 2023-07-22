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
              <h2 class="heading-title">List Style</h2>
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

    <!-- Start List Style  -->
    <div class="rn-list-style rn-section-gap bg_color--1">
      <v-container>
        <v-row>
          <!-- Start Single List Style  -->
          <v-col
            lg="4"
            md="4"
            sm="6"
            cols="12"
            v-for="(singleList, i) in listItemContent"
            :key="i"
            :class="singleList.class"
          >
            <div class="list-style-inner">
              <h3 class="fontWeight500">{{ singleList.title }}</h3>
              <p>
                {{ singleList.desc }}
              </p>
              <ul class="list-style--1">
                <li v-for="list in singleList.listContent" :key="list.id">
                  <i v-html="iconSvg(list.icon)"></i>
                  {{ list.desc }}
                </li>
              </ul>
            </div>
          </v-col>
          <!-- End Single List Style  -->
        </v-row>
      </v-container>
    </div>
    <!-- End List Style  -->

    <Footer />
  </div>
</template>

<script>
  import Header from "../components/header/Header";
  import Footer from "../components/footer/Footer";
  import feather from "feather-icons";

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
            text: "List Style",
            to: "",
            disabled: true,
          },
        ],
        listItemContent: [
          {
            class: "",
            title: "List Style Default",
            desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto,
                totam.`,
            listContent: [
              {
                id: 1,
                icon: "check",
                desc: `The Philosophy Of business analytics`,
              },
              {
                id: 2,
                icon: "check",
                desc: ` Fast-Track Your business`,
              },
              {
                id: 3,
                icon: "check",
                desc: `Lies And Damn Lies About business`,
              },
              {
                id: 4,
                icon: "check",
                desc: `The Ultimate Deal On business`,
              },
            ],
          },
          {
            class: "mt_sm--30",
            title: "List Style Default",
            desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto,
                totam.`,
            listContent: [
              {
                id: 1,
                icon: "check",
                desc: `The Philosophy Of business analytics`,
              },
              {
                id: 2,
                icon: "check",
                desc: ` Fast-Track Your business`,
              },
              {
                id: 3,
                icon: "check",
                desc: `Lies And Damn Lies About business`,
              },
              {
                id: 4,
                icon: "check",
                desc: `The Ultimate Deal On business`,
              },
            ],
          },
          {
            class: "mt_sm--30 mt_md--30",
            title: "List Style Default",
            desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto,
                totam.`,
            listContent: [
              {
                id: 1,
                icon: "check",
                desc: `The Philosophy Of business analytics`,
              },
              {
                id: 2,
                icon: "check",
                desc: ` Fast-Track Your business`,
              },
              {
                id: 3,
                icon: "check",
                desc: `Lies And Damn Lies About business`,
              },
              {
                id: 4,
                icon: "check",
                desc: `The Ultimate Deal On business`,
              },
            ],
          },
        ],
      };
    },

    methods: {
      iconSvg(icon) {
        return feather.icons[icon].toSvg();
      },
    },
  };
</script>
