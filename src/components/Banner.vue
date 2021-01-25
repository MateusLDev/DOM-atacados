<template>
    <div id="banner">
        <h3 class="pre-title">{{ banner.preTitle }}</h3>
        <h1 class="title">{{ banner.title }}</h1>
        <h2 class="sub-title">{{ banner.subTitle }}</h2>
        <div class="contador">
            <Counter />
        </div>
        <div v-html="banner.desc" class="banner desc"></div>
    </div>
</template>

<script>
import Counter from './Counter';
export default {
    components: {
       Counter 
    },
    data(){
        return{
            banner: {
                preTitle: 'FALTA POUCO PARA',
                title: 'SÃO JOÃO DE MERITI',
                subTitle: 'TER O DOM DO PREÇO BAIXO!',
                desc: 'Anote a data: <span>03/dezembro/2020</span>'
            }
        }
    }
}
</script>

<style>

</style>