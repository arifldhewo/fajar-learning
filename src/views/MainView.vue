<template>
  <div class="lg:flex lg:justify-center lg:flex-wrap">
    <LeftHero></LeftHero>
    <RightHero></RightHero>
    <CatalogCourse></CatalogCourse>
  </div>
</template>

<script>
import CatalogCourse from "@/components/Course/CatalogCourse.vue";
import LeftHero from "@/components/Home/LeftHero.vue";
import RightHero from "@/components/Home/RightHero.vue";

export default {
  name: "HomeView",
  components: {
    LeftHero,
    RightHero,
    CatalogCourse,
  },
};
</script>
