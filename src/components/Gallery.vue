<template>
    <div id="fotos">
        <div class="content" v-for="item in fotos" :key="item.id">
            <img :src="item.image" :alt="item.alt">
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            fotos: [
                { image: '@/img/small1.png', alt: 'Imagem 1' },
                { image: '@/assets/img/small2.png', alt: 'Imagem 2' },
                { image: '@/assets/img/big.png', alt: 'Imagem 3' },
                { image: '@/assets/img/small1.png', alt: 'Imagem 4' },
                { image: '@/assets/img/small2.png', alt: 'Imagem 5' },
                { image: '@/assets/img/big.png', alt: 'Imagem 6' }
            ]
        }
    }
}
</script>

<style>

</style>