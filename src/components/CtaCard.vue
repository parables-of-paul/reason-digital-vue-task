<template>
<div class="cta-card">
    <h2>{{cardHeading}}</h2>
    <p>{{cardSubheading}}</p>
    <a :href="cardButtonUrl"><Button :button_text="cardButtonText" button_color="red-on-white--border"/></a>
  </div>
</template>

<script>
import Button from './Button.vue'

export default {
    name: "CtaCard",
    components: {
        Button
    },
    props: {
        cardHeading: String,
        cardSubheading: String,
        cardButtonText: String,
        cardButtonUrl: String
    }
}
</script>

<style lang="scss" scoped>
    .cta-card {
        display: flex;
        flex-flow: column nowrap;
        background-color: #fff;
        color: #000;
        @media screen and (min-width: 769px){
            justify-content: center;
            align-items: center;
            padding: 20px;
            gap: 15px 0px;
        }
        @media screen and (max-width: 768px){
            justify-content: flex-start;
            align-items: flex-start;
            flex-basis: 100%;
            padding: 20px;
            gap: 20px;
        }
        h2 {
            font-weight: 900;
        }
    }
</style>