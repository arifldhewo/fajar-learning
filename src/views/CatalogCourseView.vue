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
            "A description about math as a course exactly, what did you expect? A course how to play Dark Souls?",
        },
        {
          ImgURLVal: "https://cdn-icons-png.flaticon.com/512/2933/2933803.png",
          Header1Val: "Science",
          Header2Val:
            "A description about science not a fucking Souls Tutorial",
        },
        {
          ImgURLVal: "https://cdn-icons-png.flaticon.com/512/4341/4341093.png",
          Header1Val: "Social",
          Header2Val:
            "A description about social not comply with gamers people cause your no life",
        },
        {
          ImgURLVal: "https://cdn-icons-png.flaticon.com/512/5632/5632466.png",
          Header1Val: "English",
          Header2Val:
            "A description about english course, this course match with people can't read this text",
        },
      ],
    };
  },
};
</script>
