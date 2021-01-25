<template>
    <div id="store">
        <h1 class="title">Nossa <span>nova loja</span> em números:</h1>
        <div class="store-informations">
            <ul class="store-list">
                <li class="store-item" v-for="item in social" :key="item.id">
                    <div class="content">
                        <h1 class="store-title">{{ item.qtd }}</h1>
                        <div v-html="item.desc" class="description"></div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            social: [
                { qtd: '5.552 m²', desc: 'Área de Venda' },
                { qtd: '26', desc: 'Caixas' },
                { qtd: '324', desc: 'Vagas de Estacionamento' },
                { qtd: '250', desc: 'Colaboradores' }
            ]
        }
    }
}
</script>

<style>

</style>