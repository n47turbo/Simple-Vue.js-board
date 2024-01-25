<template>
  <title>
    신고 게시판
  </title>
  <div id="main"><br><br><br><br><br><br><br><br><br>
    <div class="fof">
      <h1>신고 게시판</h1>
    </div>
  </div><hr>
  <v-container class="notosanskr">
  <v-table>
    <thead>
    <tr>
      <th class="text-left">
        No
      </th>
      <th class="text-left">
        제목
      </th>
      <th class="text-left">
        작성자
      </th>
      <th class="text-left">
        작성시간
      </th>
    </tr>
    </thead>
    <tbody>
    <tr
        v-for="(row, i) in board" :key="i" class="subheading mx-3"
    >
      <td>{{ row.idx }}</td>
      <td><router-link v-bind:to="'/report/' + row.idx" style=text-decoration:none;>{{ row.title }}</router-link></td>
      <td>{{ row.writer }}</td>
      <td>{{ row.time }}</td>
    </tr>
    </tbody><br>
    <router-link to="/report/write" style=text-decoration:none;>
      <v-btn variant="outlined">
        작성
      </v-btn>
    </router-link>
  </v-table>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  data: () => ({
    board:[]
  }),
  mounted: function() {
    axios.get('')
        .then(response => {
          this.board = response.data;
          console.log(this.temp)
        })
        .catch(error => {
          console.log(error);
        })
  }
};
</script>