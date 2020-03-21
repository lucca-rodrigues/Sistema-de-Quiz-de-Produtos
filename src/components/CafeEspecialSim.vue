<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4 cafe p-100">
        <v-img
          :src="require('../assets/cafe.png')"
          class="my-3"
          contain
          height="200"
        ></v-img>
      </div>
      <div class="col-md-2"></div>
      <div class="col-md-6 p-100">
        <h2 v-once class="text-uppercase">{{nome}}, você Gosta de Acidez no café?</h2>
          <p>
            <b>O que é acidez?</b>
          </p>
          <p>
            Alguns cafés causam no nosso paladar uma sensação que lembra aquele azedinho de algumas frutas, como limão, laranja, tangerina, morango, maçã, abacaxi.</p>
          <p> 
            Essa sensação,que às vezes confundimos com um leve ardido na língua,é chamada de acidez. A presença dessa acidez é considerada um atributo positivo, interessante e gostoso no café. Ela faz com que nossa boca salive mais e, por conta disso, potencializa inclusive a nossa percepção de outras notas. Um detalhe: a acidez que gostamos no café é diferente do azedo incômodo do vinagre. 
          </p>
          <div class="row">
          <div class="col-3">
            <router-link class="text-decoration-none p-30" to="/acidez-Sim"><v-btn block large @click="cadastrarSemFacebook">Sim</v-btn></router-link>
          </div>
          <div class="col-3">
            <router-link class="text-decoration-none p-30" to="/acidez-Nao">
              <button block color="primary" class="btn btn-primary btn-lg btn-block full-width" type="button">
                Não
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>       
</template>
<script>
  export default {
  computed: {
    nome () {
      return this.$store.state.nome
    }
  }
}
</script>
 

