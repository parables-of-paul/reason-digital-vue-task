<template>
  <a :href="button_url" :class="link_class"><button :class="button_color">{{button_text}}</button></a>
</template>

<script>
export default {
    name: 'Button',
    props: {
        button_text: String,
        button_url: String,
        button_color: String,
        link_class: String
    }
}
</script>

<style lang="scss" scoped>
button {
    border-radius: 30px;
    padding: 12px 22px;
    font-weight: 700;
    cursor: pointer;
}
.red-on-white:not(a) {
    border: solid 1px #fff;
    background-color: #fff;
    color: var(--good-things-red);
    &:hover {
        background-color: var(--good-things-red);
        color: #fff;
    }
}

.white-on-green:not(a) {
    border: solid 1px #fff;
    background-color: var(--good-things-green);
    color: #fff;
    &:hover {
        background-color: #fff;
        color: var(--good-things-green);
    }
}

.red-on-white--border:not(a) {
    border: solid 1px #000;
    background-color: #fff;
    color: var(--good-things-red);
    &:hover {
        background-color: var(--good-things-red);
        color: #fff;
    }
}

.center {
    text-align: center;
}
</style>