<script>
import Card from '@/components/Card.vue';
export default {
    name: 'ProductosView',
    props: {
        name: String,
        descripcion: String,
        precio: String,
        cantidad: String,
        imagen: String
    },
    components: {
        Card
    }
}
</script>

<template>
    <section class="container" id="productos">
        <div>
            <h1 class=" text-center">Productos</h1>
            <div class="d-flex justify-content-center">
                <Card
                    :name="name"
                    :descripcion="descripcion"
                    :precio="precio"
                    :cantidad="precio"
                    :imagen="imagen"
                />
            </div>
            <router-link to="/" class="btn btn-secondary mb-4">Volver a Inicio</router-link> <!-- Enlace de redirección -->
        </div>
    </section>
</template>