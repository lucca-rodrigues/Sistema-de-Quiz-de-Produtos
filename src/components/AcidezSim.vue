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
      <div class="col-md-2">

      </div>
      <div class="col-md-6 p-100">
        <h2 v-once class="text-uppercase m-20">{{nome}}, você prefere notas aromaticas florais ou frutadas</h2>
          <p>
            <b>O que são notas florais e frutadas no café?</b>
          </p>
          <p>
            Alguns cafés apresentam notas de aroma e sabor que nos remetem a flores e também a um diversificado leque de frutas. No caso das flores, já foram identificados no café toques floraisque lembram de jasmim a violeta, de rosa a camomila. Em geral, aparecem em cafés de excelente qualidade, por serem notas bastante delicadas e elegantes, requerendo uma atenção maior do cafeicultor, do mestre de torras e do barista, para serem mantidas até a xícara. 
          </p>
          <p>
            Uva-passa, pêssego, morango, romã, banana e coco são algumas das centenas de frutas que também podem ser percebidas no café, tanto no aroma quanto no sabor. Importante ressaltar que aqui estamos falando de cafés especiais que apresentam essas notas naturalmente e não são aromatizados. Mas como naturalmente um café pode lembrar um suco de morango ou ter sabor de laranja muito presente? Diversas são as razões: vão desde características de clima e solo à variedadeda planta, incidência solar, umidade e presença de plantações de outros produtos emsistema agroflorestal (pés de café ao lado de pés de outras frutas). Decisões de pós-colheita, como secar o café de forma natural (no terreiro) ou lavado (em tanques de fermentação), também podem resultar em diferentes notas no café. 
          </p>
        <div class="row">
          <div class="col-3">
            <router-link class="text-decoration-none p-30" to="/floral"><v-btn block large>Floral</v-btn></router-link>
          </div>
          <div class="col-3">
            <router-link class="text-decoration-none p-30" to="/frutado">
              <button block color="primary" class="btn btn-primary btn-lg btn-block full-width" type="button">
                Frutado
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

