<template>
  <v-app>
    <v-main>
      <Pageheader/>
      <router-view/>
      <PageFooter/>
    </v-main>
  </v-app>
</template>

<script>
import Pageheader from '@/components/Pageheader'
import PageFooter from '@/components/PageFooter'

export default {
  name: 'App',
  components: {
    Pageheader,
    PageFooter,
  },
  data: () => ({
    //
  }),
}
</script>
