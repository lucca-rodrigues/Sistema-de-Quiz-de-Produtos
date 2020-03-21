<template>
  <div class="container cadastro">
    <div class="row">
      <div class="col-md-4 cafe p-100">
        <v-img
          :src="require('../assets/cafe.png')"
          class="my-3"
          contain
          height="200"
        ></v-img>
      </div>
       <div class="col-md-2">

      </div>
      <div class="col-md-6 p-100">
        <h2 v-once>OLÁ!</h2>
        <p class="p-30">É a sua primeira compra em nosso site?<br>
          Se sim, gostaríamos de ser mais assertivos<br>
          na nossa sugestão de café para o seu paladar.<br>
          Em poucos cliques, conseguimos conhecer <br>
          melhor suas preferências e te ajudar nessa escolha. <br>
          Vamos?
        </p>
        <div class="row botoes-login" v-if="!selecionadoTipoLogin">
          <div class="col-sm-12 col-md-6 col-lg-6">
              <v-btn block large>Continuar com o Facebook</v-btn>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-6">
                <button block color="primary" class="btn btn-primary btn-lg btn-block full-width" type="button" @click="continuarSemFacebook">
                  CONTINUAR SEM O FACEBOOK
                </button>
            </div>
        </div>
        <div class="row" v-if="selecionadoTipoLogin">
          <div class="col-md-12">
              <div id="collapseExample">
                <div class="card card-body">
                  <input class="form-control form-control-lg" type="text" v-model="nome" placeholder="Nome">
                    <v-btn id="btn-continuar" class="btn btn-lg btn-block full-width" @click="cadastrarSemFacebook">Continuar</v-btn>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>       
</template>

<script>
export default {
  name: "Cadastro",
  data() {
    return {
      selecionadoTipoLogin : false,
      nome: ""
    }
  },
  methods: {
    continuarSemFacebook() {
      this.selecionadoTipoLogin = true;
    },
    cadastrarSemFacebook() {
      this.$store.commit("setNome",this.nome)
      this.$router.push("/cafe-especial","/cafe-especial-sim","/acidez-sim")
    }
  }
}
</script>
<style scoped>
#btn-continuar {
  margin-top: 15px;
}
</style>


 

