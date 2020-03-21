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
        <div class="row">
          <div class="col-md-12">
            <p>
              Por não adoçar o seu café, entendemos que você pode apreciar um grão como o <a href="http://www.distintocafe.web7075.uni5.net/product/mundo-novo/">Mundo Novo da Distinto</a>, que possui notas de caramelo. 
            </p>
            <p>
              <b>Por que não colocamos açúcar no café?</b>
            </p>
            <p>
              Nossos cafés são especiais, selecionados de forma rigorosa e ganham uma torra personalizada para cada grão. O perfil escolhido para cada café potencializa suas melhores características, incluindo a doçura, em diferentes níveis de intensidade. Por isso sugerimos que, antes de adoçar a sua bebida, você dê o primeiro gole. Experimente o seu café sem açúcar. Assim, poderá avaliar de forma mais atenta se o dulçor artificial é realmente necessário. Se sentir necessidade realmente, tente utilizar uma quantidade menor do que está acostumado. Você vai treinando o seu paladar a perceber com mais atenção cada sabor e ganha, de quebra, mais saúde. 
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-6">
            <router-link class="text-decoration-none p-30" to="/finish"><v-btn block large>Finalizar</v-btn></router-link>
          </div>
        </div>
      </div>
    </div>
  </div>       
</template>
 

