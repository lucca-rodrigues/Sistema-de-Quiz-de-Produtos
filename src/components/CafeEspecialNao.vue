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
        <h2 v-once class="text-uppercase">Você coloca açucar no café?</h2>
        <div class="row">
          <div class="col-3">
            <router-link class="text-decoration-none p-30" to="/acucar-Sim">
              <v-btn block large>Sim</v-btn>
            </router-link>
          </div>
          <div class="col-3">
            <router-link class="text-decoration-none p-30" to="/acucar-nao">
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
 

