<template>
  <button
    class="hover:outline-white-button hover:transition hover:ease-in-out hover:delay-100 hover:scale-90 hover:outline hover:bg-opacity-0 hover:text-white rounded-md pt-5 pb-5 pl-9 pr-9 shadow-2xl drop-shadow-lg bg-white-button"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "ButtonSecondary",
  props: {
    text: String,
  },
};
</script>
