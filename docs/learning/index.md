# Latest Additions

<script setup>
import { useData } from 'vitepress'

const { page } = useData()
</script>

<pre>{{ page }}</pre>

<v-card outlined>
  <v-card-title>Chunk Bytes</v-card-title>
  <v-card-subtitle>Learn Web Development In Chunks</v-card-subtitle>
  <v-card-text>Joke of the Week: How many programmers does it take to change a light bulb? None, that's a hardware problem.</v-card-text>
  <v-card-actions>
    <v-btn color="red lighten-2" ripple text>
      Don't Click Me
    </v-btn>
  </v-card-actions>
</v-card>