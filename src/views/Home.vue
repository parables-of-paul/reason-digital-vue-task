<template>
<Hero heading="Get Online Week 2021" />
<ImgText heading="We are a social change charity, helping people to improve their lives through digital." />
<HelpForm heading="How can we help you?" />
<MixedCta heading="What do we do?" />
</template>

<script>
import Hero from '../components/Hero.vue';
import ImgText from '../components/ImgText.vue';
import HelpForm from '../components/HelpForm.vue'
import MixedCta from '../components/MixedCta.vue';

// @ is an alias to /src
export default {

  name: "Home",
  components: {
    Hero,
    ImgText,
    MixedCta,
    HelpForm
  },
};
</script>
