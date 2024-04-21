<template>
  <div>
    <h1 class="text-center mt-24 mb-20 text-4xl font-bold" id="course">
      Course
    </h1>
    <div
      class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 place-items-center"
    >
      <CardCourse
        ImgURL="https://cdn-icons-png.flaticon.com/512/2374/2374370.png"
        Header1="Math"
        Header2="A description about math as a course exactly, what did you expect? A course how to play Dark Souls?"
      ></CardCourse>
      <CardCourse
        ImgURL="https://cdn-icons-png.flaticon.com/512/2933/2933803.png"
        Header1="Science"
        Header2="A description about science not a fucking Souls Tutorial"
      ></CardCourse>
      <CardCourse
        ImgURL="https://cdn-icons-png.flaticon.com/512/4341/4341093.png"
        Header1="Social"
        Header2="A description about social not comply with gamers people cause your no life"
      ></CardCourse>
      <CardCourse
        ImgURL="https://cdn-icons-png.flaticon.com/512/5632/5632466.png"
        Header1="English"
        Header2="A description about english course, this course match with people can't read this text"
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
};
</script>
