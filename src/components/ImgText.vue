<template>
  <div class="image-text__wrapper">
    <div class="image-text__image">
      <img src="../assets/lady-on-computer.jpeg" alt="Lady smiling at a computer" />
    </div>
    <div class="image-text__text-wrapper">
      <h2 class="image-text__heading">
        {{heading}}
      </h2>
      <p class="image-text__body">
        We tackle the most pressing issues of out time, working with partners in thousands of communities across the UK and further afield.
      </p>
      <Button button_text="Learn more about us" button_url="/about" button_color="white-on-green" />
    </div>
  </div>
</template>

<script>

import Button from './Button.vue';

export default {
  name: 'ImgText',
  components: {
    Button
  },
  props: {
    heading: String
  }
}
</script>

<style lang="scss" scoped>
.image-text__wrapper {
    display: flex;
    background-color: var(--good-things-green);
  @media(min-width: 769px){
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 768px){
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .image-text__text-wrapper {
    display: flex;
    flex-flow: column nowrap;
    flex: 0 0 50%;
    padding: 20px;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 30px 0px;
    .image-text__heading {
      color: #fff;
      @media screen and (min-width: 769px){
      font-size: 2.5rem;
    }
    @media screen and (max-width: 768px){
      font-size: 1.5rem;
    }
    }
    .image-text__body {
      color: #fff;
      font-size: 1rem;
    }
  }
  .image-text__image {
    display: flex;
    flex: 0 0 50%;
      img {
        width: 100%;
        height: auto;
      }
  }
  
}

</style>