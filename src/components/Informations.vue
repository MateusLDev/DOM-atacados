<template>
    <div id="informacao">
        <div class="round">
            <div class="televendas">
                <Card :card="card" />
            </div>
        </div>
        <div class="container">
            <h1 class="title">Nosso endereço</h1>
            <div class="locations">
                <div class="map">
                    <img src="@/assets/img/mapa.png" alt="Endereço DOM">
                </div>
                <div class="general-adress">
                    <h1 class="adress">
                        <svg width="30" height="30" viewBox="0 0 35 46" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M15.9994 44.9315C2.99327 26.0765 0.579102 24.1414 0.579102 17.2119C0.579102 7.72004 8.27375 0.0253906 17.7656 0.0253906C27.2575 0.0253906 34.9522 7.72004 34.9522 17.2119C34.9522 24.1414 32.538 26.0765 19.5319 44.9315C18.6784 46.1645 16.8528 46.1644 15.9994 44.9315ZM17.7656 24.373C21.7206 24.373 24.9267 21.1669 24.9267 17.2119C24.9267 13.257 21.7206 10.0509 17.7656 10.0509C13.8107 10.0509 10.6046 13.257 10.6046 17.2119C10.6046 21.1669 13.8107 24.373 17.7656 24.373Z" fill="#FFD30B"/></svg>
                        {{ local.title }}
                    </h1>
                    <h2 class="location">Rua Maria Soares Sendas, <br> 4.200 - São João de Meriti</h2>
                    <ul class="location-list">
                        <li class="location-item" v-for="item in local.list" :key="item.id">{{item.content}}</li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- <Map /> -->
    </div>
</template>

<script>
import Card from './Card';
// import Map from './Map';
export default {
    components: {
        Card,
        // Map
    },
    data(){
        return{
            card: [
                { title: 'Televendas para empresas', desc:'Tem empresa e quer comprar com condições e preços exclusivos? Entre em contato com a nossa equipe!', button: 'Televendas DOM' },
                { title: 'Programe sua economia', desc:'Quer receber nossas ofertas em primeira mão? <br>Cadastre-se agora!', button: 'Quero me cadastrar!' }
            ],
            local: {
                title: 'São João de Meriti',
                list: [
                    { content: 'AO LADO DO SHOPPING GRANDE RIO' },
                    { content: 'ENTRADA PELO VIADULTO SÃO JOÃO CAXIAS' }
                ]
            }
        }
    }
}
</script>

<style>

</style>