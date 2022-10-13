<template>
<Hero heading="Lorem Ipsum" />
<ImgText heading="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut labore impedit, laudantium eligendi quasi nam quis sed unde, libero eos, accusantium harum modi. Quisquam, amet expedita aliquam accusamus fuga in!" /> 
<HelpForm heading="Lorem ipsum dolor sit amet." />
<MixedCta heading="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
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
