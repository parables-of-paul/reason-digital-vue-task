<template>
<MixedCta heading="So I'm able to just shuffle the components around" />
  <ImgText heading="Although this has been built differently to a full project" />
<HelpForm heading="I think it covers proof of capability" />
<Hero heading="Although I do need to think of more headings" />
</template>

<script>
import Hero from '../components/Hero.vue';
import ImgText from '../components/ImgText.vue';
import HelpForm from '../components/HelpForm.vue'
import MixedCta from '../components/MixedCta.vue';

export default {
    name: 'OurNetwork',
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