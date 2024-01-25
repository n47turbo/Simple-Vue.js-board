<template>
      <v-app-bar>

        <v-toolbar-title><router-link to="/" style="color: inherit; text-decoration:none;">Board</router-link></v-toolbar-title>

        <v-spacer></v-spacer>

        <router-link to="/" style="color: inherit; text-decoration:none;">
        <v-btn variant="text">
          메인
        </v-btn>
        </router-link>

        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn v-bind="props">
              게시판&nbsp;<i class="fas fa-list"></i>
            </v-btn>
          </template>
          <v-list>
            <v-list-item>

              <v-list-item-title>
                <router-link to="/free" style="color: inherit; text-decoration:none;">
                  <v-btn variant="text">
                    자유 게시판
                  </v-btn>
                </router-link>
              </v-list-item-title>

              <v-list-item-title>
                <router-link to="/report" style="color: inherit; text-decoration:none;">
                  <v-btn variant="text">
                    신고 게시판
                  </v-btn>
                </router-link>
              </v-list-item-title>

            </v-list-item>
          </v-list>
        </v-menu>
      </v-app-bar>


</template>

<script>
export default {

}
</script>

<style>
@import url("../css/main.css");
</style>
