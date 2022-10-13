<template>
<HelpForm heading="I want to get involved!" />
  <ImgText heading="Getting involved is what makes it work" />
<Hero heading="Another prop passed heading" />
<MixedCta heading="Each Section is a seperate components" />
</template>

<script>
import Hero from '../components/Hero.vue';
import ImgText from '../components/ImgText.vue';
import HelpForm from '../components/HelpForm.vue'
import MixedCta from '../components/MixedCta.vue';

export default {
    name: 'GetInvolved',
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