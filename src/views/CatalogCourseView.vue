<template>
  <div class="block">
    <NavDesktop></NavDesktop>
    <NavMobile></NavMobile>
    <CatalogCourse :dataCourseCatalog="dataCourseCatalogVal"></CatalogCourse>
  </div>
</template>

<script>
import CatalogCourse from "@/components/Course/CatalogCourse.vue";
import NavMobile from "@/components/Nav/NavMobile.vue";
import NavDesktop from "@/components/Nav/NavDesktop.vue";

export default {
  name: "CatalogCourseView",
  components: {
    CatalogCourse,
    NavMobile,
    NavDesktop,
  },
  data() {
    return {
      dataCourseCatalogVal: [
        {
          ImgURLVal: "https://cdn-icons-png.flaticon.com/512/2374/2374370.png",
          Header1Val: "Math",
          Header2Val:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel eum qui et ut ",
        },
        {
          ImgURLVal: "https://cdn-icons-png.flaticon.com/512/2933/2933803.png",
          Header1Val: "Science",
          Header2Val:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel eum qui et ut ",
        },
        {
          ImgURLVal: "https://cdn-icons-png.flaticon.com/512/4341/4341093.png",
          Header1Val: "Social",
          Header2Val:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel eum qui et ut ",
        },
        {
          ImgURLVal: "https://cdn-icons-png.flaticon.com/512/5632/5632466.png",
          Header1Val: "English",
          Header2Val:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel eum qui et ut ",
        },
      ],
    };
  },
};
</script>
