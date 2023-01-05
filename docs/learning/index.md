<script setup>
import PostCard from "../.vitepress/components/PostCard.vue"
import posts from './posts.json'
import { useData } from 'vitepress'
const { isDark } = useData()
</script>

# Latest Additions

<div class="container">
<PostCard
  v-for="post in posts"
  :key="post.name"
  :post="post"
  :isDark=isDark
/>
</div>

<style lang="css" scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
</style>