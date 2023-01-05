<script>
export default{
  props: {
    post: {
      type: Object
    },
    isDark: {
      type: Boolean
    }
  },
  methods: {
    clickMethod(link) {
      window.location.assign(link)
    },
    getImgUrl(name) {
      if(name.includes("http")){
        return name
      }
      return new URL(`../../learning/assets/${name}`, import.meta.url).href
    }
  },
  computed: {
    cssVars () {
      return {
        '--box-shadow': this.isDark ? '#525252' : '#cee1ce',
        '--hover-background': this.isDark ? '#525252' : '#f1f3f3'
      }
    }
  }
}
</script>

<template>
  <div class="card" :style="cssVars"
    @click="clickMethod(post.link)">
    <div class="card__header">
      <img :src=getImgUrl(post.image) alt="card__image">
    </div>
    <div class="card__body">
      <h3>{{ post.title }}</h3>
      <p>{{ post.description }}</p>
      <small>{{ post.date }}</small>
    </div>
  </div>
</template>

<style lang="css" scoped>
img {
  max-width: 100%;
  max-height: 0.01fr;
  display: block;
  object-fit: cover;
  height: auto;
}

.card {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  height: 100%;
  box-shadow: 0 .1rem 1rem var(--box-shadow);
  border-radius: 1em;
}

.card:hover {
  background: var(--hover-background);
  cursor: pointer;
  transform: scale(102%);
}

.card__body {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: .5rem;
}
</style>