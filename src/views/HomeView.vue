<template>
  <HeaderView />
  <SliderOne />
  <SliderTwo />
  <FooterView />
</template>

<script>
// @ is an alias to /src
import HeaderView from "@/components/HeaderView.vue";
import SliderOne from "@/components/SliderView/SliderOne.vue";
import SliderTwo from "@/components/SliderView/SliderTwo.vue";
import FooterView from "@/components/FooterView.vue";

export default {
  name: "HomeView",
  components: {
    HeaderView,
    SliderOne,
    SliderTwo,
    FooterView,
  },
};
</script>
