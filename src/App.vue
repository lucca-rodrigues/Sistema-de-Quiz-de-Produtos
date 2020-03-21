<template>
  <v-app>
    <v-content>      
      <router-view></router-view>
    </v-content>
  </v-app>
</template>
<script>
export default {
  el: '#app',
  data() {
    return { Imgcafe: "./assets/img-cafe.jpg"}
  },
  /*components: {
    'nomeCliente: nomeCLiente'
  }*/
}
</script>


