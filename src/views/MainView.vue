<template>
  <div class="lg:flex lg:justify-center lg:flex-wrap">
    <NavMobile></NavMobile>
    <LeftHero></LeftHero>
    <RightHero class="hidden lg:block"></RightHero>
  </div>
</template>

<script>
import LeftHero from "@/components/Home/LeftHero.vue";
import NavMobile from "@/components/Nav/NavMobile.vue";
import RightHero from "@/components/Home/RightHero.vue";

export default {
  name: "HomeView",
  components: {
    LeftHero,
    RightHero,
    NavMobile,
  },
};
</script>
