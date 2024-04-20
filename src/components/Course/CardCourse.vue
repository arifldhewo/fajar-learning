<template>
  <div class="m-5 flex justify-center">
    <div class="w-11/12 h-full bg-slate-button rounded-2xl flex">
      <div class="flex justify-center m-5 items-center w-4/12">
        <img :src="ImgURL" alt="course-icon" />
      </div>
      <div class="w-8/12">
        <h1 class="font-bold text-3xl lg:text-xl mt-4">{{ Header1 }}</h1>
        <h1 class="text-slate-600 mb-4">{{ Header2 }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardCourse",
  props: {
    Header1: String,
    Header2: String,
    ImgURL: String,
  },
};
</script>
