<template>
<ImgText heading="What makes a Digital Divide?" />
<Hero heading="Purely as proof of implementation" />
<MixedCta heading="These headings are passed via props" />
<HelpForm heading="So you can tell each view is different" />
</template>

<script>
import Hero from '../components/Hero.vue';
import ImgText from '../components/ImgText.vue';
import HelpForm from '../components/HelpForm.vue'
import MixedCta from '../components/MixedCta.vue';

export default {
    name: 'DigitalDivide',
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