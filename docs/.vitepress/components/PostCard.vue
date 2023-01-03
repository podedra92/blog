<script>
export default{
  props: {
    post: {
      type: Object
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
  }
}
</script>

<template>
  <div class="card"
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
  display: block;
  object-fit: cover;
  height: auto;
}

.card {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  height: 100%;
  box-shadow: 0 .1rem 1rem #cee1ce;
  border-radius: 1em;
  background: linear-gradient(to right, #ffffff, #fffafa);
}

.card:hover {
  background: #e3ecf0;
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