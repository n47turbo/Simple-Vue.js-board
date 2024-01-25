<!-- PageFooter.vue -->
<template>
  <v-footer class="bg-grey-lighten-5 notosanskr" app>
    <hr />
    <v-row justify="center" no-gutters>
      <router-link to="/contact" style="color: inherit; text-decoration:none;">
        <v-btn
            :key="link"
            color="black"
            variant="text"
            class="mx-2"
            rounded="xl"
        >Contact us</v-btn>
      </router-link>
      <v-col class="text-center mt-4" cols="12">
       &copy; {{ new Date().getFullYear() }} N47Turbo | <a href="https://github.com/n47turbo/Simple-Vue.js-board" style="color: inherit; text-decoration:none;">Github</a>
      </v-col>
    </v-row>
  </v-footer>
  <br><br><br>
</template>

<script>

</script>