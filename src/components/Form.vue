<script>
export default {
    data(){
        return{
            nombre: "",
            email: "",
            mensaje:""
        }
    },
    methods:{
        verificarDatos() {
            return this.nombre && this.email && this.mensaje;
        },
        enviar(){
            if(this.verificarDatos()){
                alert(`Gracias ${this.nombre} nos contactaremos contigo`);
            }else{
                alert(`Debes completar el formulario`);
            }
            
        }
    }
}
</script>
<template>
        <!-- Formulario de Contacto -->
    <form @submit.prevent="enviarFormulario">
        <div class="mb-3">
            <label for="nombre" class="form-label">Nombre</label>
            <input type="text" class="form-control" id="nombre" v-model="nombre" required>
        </div>
        <div class="mb-3">
            <label for="email" class="form-label">Correo Electrónico</label>
            <input type="email" class="form-control" id="email" v-model="email" required>
        </div>
        <div class="mb-3">
            <label for="mensaje" class="form-label">Mensaje</label>
            <textarea class="form-control" id="mensaje" v-model="mensaje" rows="4" required></textarea>
        </div>
        <button type="submit" class="btn btn-primary btn-lg w-100" @click="enviar">Enviar Mensaje</button>
    </form>
</template>