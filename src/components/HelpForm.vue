<template>
  <div class="help-form__wrapper">
    <h2 class="help-form__heading">{{heading}}</h2>
    <p class="help-form__subheading">Let us know who you are and what you're looking for, and we'll help get you to the right place.</p>
    <form @submit="onSubmit" class="help-form__form">
      <p class="help-form__form-content">I am </p>
        <select class="help-form__dropdown--iam">
          <option v-for="item in allHelpFormInputsIam" :key="item.value">{{item.label}}</option>
        </select>
      <p class="help-form__form-content">and I want</p>
        <select class="help-form__dropdown--iam" @change="onSubmit">
          <option v-for="item in allHelpFormInputsWants" :key="item.value">{{item.label}}</option>
        </select>
    </form>
  </div>
</template>

<script>

import { mapGetters } from 'vuex';

export default {
  name: 'HelpForm',
  components: {

  },
  props: {
    heading: String
  },
  computed: mapGetters(['allHelpFormInputsIam', 'allHelpFormInputsWants']),
  methods: {
    onSubmit(e) {
      e.preventDefault;
      console.log('form submitted');
    }
  }
}
</script>

<style lang="scss" scoped>
.help-form__wrapper {
  background-color: #e5e5e5;
  display: flex;
  flex-flow: column nowrap;
  @media screen and (min-width: 769px){
  justify-content: flex-start;
  align-items: flex-start;
  gap: 30px 0px;
  padding: 50px;
  }
  @media screen and (max-width: 768px){
    justify-content: center;
    gap: 30px 0px;
    padding: 20px;
  }
}
  .help-form__heading {
    @media screen and (min-width: 769px){
      font-size: 2.5rem;
    }
    @media screen and (max-width: 768px){
      font-size: 1.5rem;
    }
  }
  .help-form__form {
    display: flex;
    background-color: #fff;
    padding: 20px;
    width: 100%;
    gap: 10px;
    @media screen and (min-width: 769px){
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
  }
    @media screen and (max-width: 768px){
      flex-flow: column wrap;
      justify-content: flex-start;
      align-items: flex-start;
    }
  }
  .help-form__form-content {
    @media screen and (min-width: 769px){
        font-size: 1.5rem;
    }
  }

  .help-form__dropdown--iam,
  .help-form__dropdown--wants {
        border: none;
        border-bottom: solid 2px var(--good-things-teal);
        color: var(--good-things-teal);
        outline: none;
        width: fit-content;
        @media screen and (min-width: 769px){
          font-size: 1.5rem;
          text-align: center;
        }
        @media screen and (max-width: 768px){
          font-size: 1rem;
          text-align: left;
        }
  }

</style>