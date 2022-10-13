<template>
  <div class="mixed-cta__wrapper">
    <div class="mixed-cta__heading-wrapper">
      <h2 class="mixed-cta__heading">{{heading}}</h2>
      <p class="mixed-cta__body">You might not have heard of us, but we're the people behind the following impactful programmes.</p>
    </div>
    <div class="mixed-cta__card-wrapper">
      <CtaCard v-for="card in allCtaCards" :key="card.heading" :cardHeading="card.heading" :cardSubheading="card.subheading" :cardButtonText="card.button_text" :cardButtonUrl="card.button_url" />
    </div>
    <Button button_color="red-on-white" link_class="center" button_text="More about what we do" button_url="/about"/>
  </div>
</template>

<script>

import CtaCard from './CtaCard.vue';
import Button from './Button.vue'

import { mapGetters } from 'vuex';

export default {
    name: 'MixCta',
    components: {
      CtaCard,
      Button
    },
    props: {
      heading: String
    },
    computed: mapGetters(['allCtaCards'])
}
</script>

<style lang="scss" scoped>
.mixed-cta__wrapper {
  display: flex;
  flex-flow: column nowrap;
  background-color: var(--good-things-teal);
  color: #fff;
  @media screen and (min-width: 769px){
    padding: 30px 50px;
    gap: 30px 0px;
  }
  @media screen and (max-width: 768px){
    padding: 20px;
    gap: 20px;
  }
  .mixed-cta__card-wrapper {
    display: flex;
    @media screen and (min-width: 769px){
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
    }
    @media screen and (max-width: 768px){
      flex-flow: row wrap;
      justify-content: space-evenly;
      align-items: flex-start;
      gap: 20px;
    }
  }
  h2 {
    @media screen and (min-width: 769px){
    font-size: 2.5rem;
    }
    @media screen and (max-width: 768px){
      font-size: 1.5rem;
    }
  }
}

</style>