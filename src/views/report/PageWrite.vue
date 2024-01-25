<template>
  <title>
    신고 글 쓰기
  </title>
      <div id="main"><br><br><br><br><br><br><br><br><br>
        <div class="fof">
          <h1>글 쓰기</h1>
        </div>
      </div><hr><br>

  <v-app>
    <v-main>
      <v-container>
        <v-row>
          <v-col cols="12" md="1" />
          <v-col cols="12" md="10">
            <v-card>
              <v-form ref="form" @submit.prevent="onSubmitForm">
                <!-- rules를 통해 작성자와 제목을 안 쓰면 제출 못하게끔 함 -->
                <v-text-field v-model="title" dense outlined label="제목" style="width: 500px; margin-left: 100px;"
                              :rules="[v => !!v || '제목은 필수입니다']"></v-text-field>
                <v-textarea v-model="text" label="내용" outlined rows="13" style="width: 730px; margin-left: 100px;"></v-textarea>
                <v-btn width="100px" style="margin-left: 600px; margin-bottom:30px;" @click="moveback">취소</v-btn>
                <v-btn width="100px" style="margin-left: 30px; margin-bottom:30px;" type="submit">제출</v-btn>
              </v-form>
            </v-card>
          </v-col>
          <v-col cols="12" md="1"/>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import axios from 'axios'

export default {
  data(){
    return {
      auth: '',
      title: '',
      text: '',
    }
  },
  methods: {
    onSubmitForm(){
      if(this.$refs.form.validate()) {        // 위에 써준 rules를 만족하면 실행
        axios({
          url: "https://api.hamwiki.kr/board/report/write.php",
          method: "POST",
          data: {
            auth: this.auth,
            title: this.title,
            text: this.text,
          },
        }).then(res => {
          alert("처리 되었습니다.");
          window.history.back();
        }).catch(err => {
          alert(err);
        });
      }
    },
    moveback() {
      window.history.back();
    },
    movetomain() {
      window.location.href='/';
    },
  },
};

</script>
