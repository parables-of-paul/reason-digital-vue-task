<template>
  <div class="hero__wrapper">
    <h1 class="hero__wrapper--heading">{{heading}}</h1>
    <p class="hero__wrapper--subheading">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt maxime praesentium adipisci quas aperiam veritatis voluptatem placeat repellendus.</p>
    <Button button_text="Get involved now!" button_url="/get-involved" button_color="red-on-white" />
  </div>
</template>

<script>
import Button from './Button.vue'

export default {
    name: 'Hero',
    components: {
        Button
    },
    props: {
        heading: String
    }
}
</script>

<style lang="scss" scoped>
    .hero__wrapper {
            background-image: url('../assets/hero_image.png');
            background-size: cover;
            background-repeat: no-repeat;
            max-height: 80vh;
            display: flex;
            flex-flow: column nowrap;
            gap: 30px 0px;
            padding: 10% 5%;
    }
    .hero__wrapper--heading {
            width: fit-content;
            background-color: var(--good-things-teal);
            color: #fff;
            padding: 30px 15px;
            display: inline;
        @media screen and (min-width: 769px){
            font-size: 4.5rem;
        }
        @media screen and (max-width: 768px){
            font-size: 1.5rem;
        }
    }
    .hero__wrapper--subheading {
            background-color: #fff;
            color: var(--good-things-green);
            padding: 30px 15px;
        @media screen and (min-width: 769px){
            width: 50%;
            font-size: 22px;
        }
         @media screen and (max-width: 768px){
            width: 90%;
            font-size: 1rem;
        }
    }
</style>