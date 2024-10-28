<script>
import Card from '@/components/Card.vue';
export default {
    name: 'ProductosView',
    props: {
        productos: Array
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
                v-for="(producto, index) in productos" :key="index"
                    :name="producto.name"
                    :descripcion="producto.descripcion"
                    :precio="producto.precio"
                    :cantidad="producto.cantidad"
                    :imagen="producto.imagen"
                />
            </div>
            <div class="text-center mt-4">
                <router-link to="/" class="btn btn-secondary mb-4">Volver a Inicio</router-link>
            </div>
        </div>
    </section>
</template>