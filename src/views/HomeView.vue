<template>
  <section class="container" id="productos">
    <h1 class=" text-center">Nuestros Productos</h1>
    <Card 
      name="Colaciones"
      descripcion="Some quick example text to build on the card title and make up the
                bulk of the card's content."
      precio="$5000"
      cantidad="Dapibus ac facilisis in"
      :imagen="imagen"
    />
  </section>

</template>

<script>
// @ is an alias to /src
import Card from '../components/Card.vue'
import imagen from '../assets/img/colaciones.jpg'
export default {
  components: {
    Card
  },
  data() {
    return {
      imagen
    };
  }
}
</script>
