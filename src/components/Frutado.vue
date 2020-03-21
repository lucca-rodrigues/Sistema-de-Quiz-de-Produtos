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
            <p>
              Um grão perfeito para quem gosta de notas frutadas é o nosso <a href="http://www.distintocafe.web7075.uni5.net/product/catuai-amarelo/">Catuaí Amarelo</a>. 
            </p>
            <p>  
              Ele tem notas de frutas amarelas, como damasco, corpo médio e uma acidez cítrica bem marcada. 
            </p>
            <p>
              <b>O que é um café orgânico?</b>
            </p>
            <p>
              Café orgânico é aquele produzido sem o uso de aditivos químicos e agrotóxicos e de maneira sustentável, em plantações consorciadas com outros cultivos agrícolas, que preservam o solo e a água. Além disso, o cultivo orgânico também pressupõe responsabilidade social, com uma produção que respeita e valoriza todos os envolvidos no plantar, cuidar e colher o fruto. 
            </p>
          <div class="row">
              <div class="col-6">
                <router-link class="text-decoration-none p-30" to="/finish"><v-btn block large>Finalizar</v-btn></router-link>
              </div>
          </div>
      </div>    
    </div>
  </div>       
</template>
 

