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
        <span v-once class="">Se você é daqueles que curte uma doçura extra, sugerimos o nosso <a href="http://www.distintocafe.web7075.uni5.net/product/grao-moca/">Mocada Distinto.</a> Este é um café que apresenta notas achocolatadas e acolhe com carinho quem está descobrindo agora esse universo do café especial. </span>
        <div class="row">
          <div class="col-6">
            <router-link class="text-decoration-none p-30" to="/finish"><v-btn block large>Finalizar</v-btn></router-link>
          </div>
        </div>
      </div>
    </div>
  </div>       
</template>
 

