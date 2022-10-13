<template>
<HelpForm heading="Final page with fresh headers" />
<MixedCta heading="Still the same 4 sections though" />
  <ImgText heading="This project's been a lot of fun" />
<Hero heading="Hope you enjoy it" />
</template>

<script>
import Hero from '../components/Hero.vue';
import ImgText from '../components/ImgText.vue';
import HelpForm from '../components/HelpForm.vue'
import MixedCta from '../components/MixedCta.vue';

export default {
    name: 'Insights',
    components: {
        Hero,
        ImgText,
        HelpForm,
        MixedCta
    }
}
</script>

<style>

</style>