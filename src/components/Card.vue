<template lang="">
  <!-- cartas -->
  <section class="container" id="productos">
    <div class="row">
      <!-- primera -->
      <div class="col-4  col-12 px-5 mb-4">
        <div class="card">
          <img :src="imagen" class="card-img-top" :alt="name" />
          <div class="card-body">
            <h5 class="card-title fw-bold">{{name}}</h5>
            <p class="card-text"> {{descripcion}}</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">{{cantidad}}</li>
            <li class="list-group-item">{{precio}}</li>
          </ul>
          <div class="card-body">
            <a href="#" class="card-link">Ver más</a>
            <a href="#" class="card-link">Comprar</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
    name: 'Card',
    props: {
        name: String,
        descripcion: String,
        precio: String,
        cantidad: String,
        imagen: String 
    }
}
</script>
<style lang="">
  
</style>