<template>
  <div class="w-full h-screen pt-20">
    <h1 class="text-center mt-20 mb-20 text-4xl font-bold">Course</h1>
    <div
      class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 place-items-center"
    >
      <CardCourse
        v-for="(data, index) in dataCourseCatalog"
        :key="index"
        :ImgURL="data.ImgURLVal"
        :Header1="data.Header1Val"
        :Header2="data.Header2Val"
      ></CardCourse>
    </div>
  </div>
</template>
<script>
import CardCourse from "./CardCourse.vue";

export default {
  name: "CatalogCourse",
  components: {
    CardCourse,
  },
  props: {
    dataCourseCatalog: Array,
  },
};
</script>
