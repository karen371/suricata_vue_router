<script>
import  Form from "../components/Form.vue"
export default {
    components:{
          Form
    }
} 
</script>
<!-- src/views/ContactView.vue -->
<template>
  <section class="container" id="productos" >
    <div class="row justify-content-center">
      <div class="col-md-8">
        <h1 class="text-center mb-4">Contacto</h1>
        <p class="text-center mb-5">No dudes en contactarnos. Completa el formulario a continuación y nos pondremos en contacto contigo.</p>
          <Form/>
          <!-- Enlace para regresar al inicio -->
        <div class="text-center mt-4">
          <router-link to="/" class="btn btn-secondary mb-4">Volver a Inicio</router-link>
        </div>
      </div>
    </div>
  </section>
 </template>


