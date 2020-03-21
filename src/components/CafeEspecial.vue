<template>
  <div class="container cafe-especial">
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
        <h2 v-once class="text-uppercase">{{nome}}, você já <br> Consome café especial?</h2>
        <div class="row">
          <div class="col-3">
            <router-link class="text-decoration-none p-30" to="/cafe-especial-Sim"><v-btn block large>Sim</v-btn></router-link>
          </div>
          <div class="col-3">
            <router-link class="text-decoration-none p-30" to="/cafe-especial-nao">
              <button block color="primary" class="btn btn-primary btn-lg btn-block full-width" type="button">
                Não
              </button>
            </router-link>
          </div>
        </div>
         <div class="row">
            <div class="col-md-12">
              <button block color="secondary" class="btn btn-primary btn-lg btn-block saiba mais" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                Clique e Saiba a diferença entre café comum e especial
              </button>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
                <div class="collapse" id="collapseExample">
                  <div class="card card-body">
                      <p>
                        Cafés tradicionais são aqueles consumidos há décadas aqui no Brasil. Costumam mesclar grãos arábica e robusta de qualidade inferior e malcuidados desde o manejo no cafezal, até a colheita, beneficiamento, embalagem e preparo. O resultado são grãos cheios de defeitos e xícaras mais amargas, adstringentes e que lembram alguns remédios no retrogosto. Por isso, queremos colocar açúcar. Por isso, fazemos careta ao prová-los.
                      </p>
                      <p>
                         Os cafés especiais são cafés 100% arábica ou 100% robustas, sem defeitos e muito bem cuidados desde a fazenda. Manejo adequado, colheita seletiva, pós-colheita rigorosa, armazenamento e transporte em ambientes controlados, torra e preparos personalizados para cada grão e com profissionais especializados, focando na qualidade e na rastreabilidade, resultam em cafés bastante diferenciados no sabor e no aroma. A bebida fica mais saborosa, complexa, aromática. Mais prazer e mais sorrisos a cada gole.
                      </p>
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
  computed: {
    nome () {
      return this.$store.state.nome
    }
  }
}
</script>

