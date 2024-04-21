<template>
  <nav class="lg:w-1/2 h-screen w-full bg-blue-logo">
    <div
      class="invisible lg:visible w-full flex justify-evenly items-center mt-8"
    >
      <NavLink link-to-page="/" display-link="Home"></NavLink>
      <NavLink link-to-page="/about" display-link="About"></NavLink>
      <NavLink link-to-page="/course" display-link="Course"></NavLink>
      <a
        class="text-2xl font-semibold"
        target="_blank"
        href="https://wa.me/0895328899115"
        ><ButtonSecondary :text="'Contact Us'"></ButtonSecondary
      ></a>
    </div>

    <div class="w-full flex items-center mt-32">
      <img src="@/assets/imgs/book.png" class="w-1/2 mt-10" alt="book-image" />
      <p class="font-bold text-3xl">Let's Study Guyss!!!</p>
    </div>
  </nav>
</template>

<script>
import ButtonSecondary from "../button/ButtonSecondary.vue";
import NavLink from "../Nav/NavLink.vue";

export default {
  name: "RightHero",
  components: {
    ButtonSecondary,
    NavLink,
  },
};
</script>
