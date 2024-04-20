<template>
  <button
    class="hover:outline-blue-logo hover:transition hover:ease-in-out hover:delay-100 hover:scale-90 hover:outline hover:bg-opacity-0 hover:text-black-logo text-white-logo rounded-md pt-5 pb-5 pl-9 pr-9 shadow-2xl drop-shadow-lg bg-blue-logo"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "ButtonPrimary",
  props: {
    text: String,
  },
};
</script>
