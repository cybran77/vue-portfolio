<template>
  <v-row class="mt--30">
    <!-- Start Single Team Area  -->
    <v-col
      lg="3"
      md="3"
      sm="6"
      cols="6"
      v-for="team in teamContent"
      :key="team.id"
    >
      <div class="team-static">
        <div class="thumbnail">
          <img :src="team.src" alt="Team Images" />
        </div>
        <div class="inner">
          <div class="content">
            <h4 class="title">{{ team.title }}</h4>
            <p class="designation">{{ team.designation }}</p>
          </div>

          <ul class="social-icon social-transparent liststyle d-flex">
            <li v-for="(social, i) in team.socialList" :key="i">
              <a :href="social.url" target="_blank"
                ><i class="fab" :class="social.icon"></i
              ></a>
            </li>
          </ul>
        </div>
      </div>
    </v-col>
    <!-- End Single Team Area  -->
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      teamContent: [
        {
          id: 1,
          src: require("../../assets/images/team/team-01.jpg"),
          title: "Jone Due",
          designation: "Sr. Web Developer",
          socialList: [
            {
              icon: "fa-facebook-f",
              url: "https://www.facebook.com/",
            },
            {
              icon: "fa-linkedin-in",
              url: "https://www.linkedin.com/",
            },
            {
              icon: "fa-twitter",
              url: "https://twitter.com/",
            },
          ],
        },
        {
          id: 2,
          src: require("../../assets/images/team/team-03.jpg"),
          title: "Fatima-Asrafi",
          designation: "Front-end Engineer",
          socialList: [
            {
              icon: "fa-facebook-f",
              url: "https://www.facebook.com/",
            },
            {
              icon: "fa-linkedin-in",
              url: "https://www.linkedin.com/",
            },
            {
              icon: "fa-twitter",
              url: "https://twitter.com/",
            },
          ],
        },
        {
          id: 3,
          src: require("../../assets/images/team/team-05.jpg"),
          title: "Al-Amin Bali",
          designation: "Sr. Graphic Designer",
          socialList: [
            {
              icon: "fa-facebook-f",
              url: "https://www.facebook.com/",
            },
            {
              icon: "fa-linkedin-in",
              url: "https://www.linkedin.com/",
            },
            {
              icon: "fa-twitter",
              url: "https://twitter.com/",
            },
          ],
        },
        {
          id: 4,
          src: require("../../assets/images/team/team-06.jpg"),
          title: "Fatima-Asrafi",
          designation: "Front-end Engineer",
          socialList: [
            {
              icon: "fa-facebook-f",
              url: "https://www.facebook.com/",
            },
            {
              icon: "fa-linkedin-in",
              url: "https://www.linkedin.com/",
            },
            {
              icon: "fa-twitter",
              url: "https://twitter.com/",
            },
          ],
        },
      ],
    };
  },
};
</script>
