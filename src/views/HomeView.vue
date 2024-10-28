<script>
import Card from '@/components/Card.vue';
export default {
    name: 'HomeView',
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
            <h1 class=" text-center">Nuestros productos</h1>
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
        </div>
    </section>
</template>