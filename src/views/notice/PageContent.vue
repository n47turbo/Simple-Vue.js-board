<template>
  <title v-for="(row, i) in content" :key="i">
    공지사항 - {{row.title}}
  </title>
  <div id="main"><br><br><br><br><br><br><br><br><br>
    <div class="fof">
      <h1 v-for="(row, i) in content" :key="i">{{row.title}}</h1>
      <div class="text-overline mb-1" v-for="(row, i) in content" :key="i">작성자: {{row.writer}} | 작성시간: {{row.time}}</div>
    </div>
  </div>
  <hr><br><br>

  <v-container class="notosanskr">
    <v-card
        class="mx-auto"
        max-width="1000"
        variant="outlined"
    >
      <v-card-item><br>
        <div v-for="(row, i) in content" :key="i" class="subheading mx-3">
          <div class="mb-1">
            {{ row.text }}
          </div><br>
        </div>
      </v-card-item><hr />
      <v-card-actions>
        &nbsp;<br>
        <router-link to="/" style=text-decoration:none;>
        <v-btn variant="outlined">
          목록
        </v-btn>
          </router-link>
      </v-card-actions>
    </v-card>
      </v-container>
</template>

<script>
import axios from 'axios';

export default {
  data: () => ({
    content:[]
  }),
  mounted: function() {
    axios.get(''+ this.$route.params.id )
        .then(response => {
          this.content = response.data;
          console.log(this.temp)
        })
        .catch(error => {
          console.log(error);
        })
  },

}
</script>
<style>
/* Content 전용 띄어쓰기 적용 */
.mb-1 {
  white-space: pre-line
}
</style>