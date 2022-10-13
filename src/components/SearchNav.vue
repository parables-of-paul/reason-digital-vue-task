<template>
  <div class="search-donate-nav">
    <button class="search-nav__button">
      Search
    </button>
    <div class="learn-donate__wrapper">
      <button class="learn-btn">
        Learn
      </button>
      <button class="donate-btn">
        Donate
      </button>
    </div>
  </div>
</template>

<script>
export default {
    name: 'SearchNav',

}
</script>

<style lang="scss" scoped>
.search-donate-nav {
    @media screen and (min-width: 769px){
    width: 100vw;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    padding: 0px 8%;
    max-width: 100vw;
    }
    @media screen and (max-width: 768px){
      width: 100%;
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
  }
  border-bottom: solid 1px #e5e5e5;
  }

  .search-donate-nav {
    button {
      outline: 0;
      border-top: none;
      border-left: solid 1px #e5e5e5;
      border-right: solid 1px #e5e5e5;
      border-bottom: none;
      padding: 8px 12px;
      font-weight: 900;
    }
    .search-nav__button {
      background-color: #fff;
      color: #000;
      position: relative;
      padding-left: 30px;
      &:hover {
        background-color: #e2e2e2;
      }
      &::before {
        content: '';
        position: absolute;
        background-image: url('../assets/search-icon.png');
        background-size: contain;
        background-repeat: no-repeat;
        height: 20px;
        width: 20px;
        left: 5px;
      }
    }
    .learn-btn {
      border-bottom: solid 3px #993400;
    }
    .donate-btn {
      background-color: #993400;
      color: #fff;
      border-bottom: solid 3px #993400;
    }
  }
</style>