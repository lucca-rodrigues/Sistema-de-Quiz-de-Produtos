<template>
  <div class="container home">
    <div class="row p-0">
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
        <h2 v-once class="text-uppercase">O gosto de cada um</h2>
          <p>
            Quando a gente fala de gosto não há certo ou errado. Há diferentes percepções das mesmas coisas e situações. Para mim, algo que aconteceu pode ser maravilhoso. Para você o mesmo fato já não foi lá aquelas coisas. No café também é assim. A fisiologia da nossa boca e do nosso nariz, nossa trajetória pessoal, nosso conhecimento e até o nosso humor naquele dia... tudo pode influenciar em como percebemos cada xícara.  
          </p>
          <p>
            Há sim cafés de qualidade superior e de qualidade inferior. Mas, sendo um café bem cuidado, todos temos de beber o café que nos traz mais prazer, que mais conforta o nosso coração. 
          </p>
          <p>
            Por isso, a <b>Distinto Cafés Especiais </b>criou este Mapa do Paladar para entender quais são os cafés que mais combinam com as suas preferências, respeitando suas peculiaridades. 
          </p>
          <router-link class="text-decoration-none" to="/cadastro"><v-btn>Continuar</v-btn></router-link>
      </div>
    </div>
  </div>       
</template>
<script>
  
</script>

 

