<template>
    <div id="videos">
        <div class="video-frame">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/ZV7GhlAkflA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="content">
            <h1 class="title">Sobre o <span> Dom</span> de <span>São João de Meriti</span></h1>
            <div v-html="video.desc" class="description"></div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            video: {
                desc: 'Na nova loja do Dom Atacadista, você vai encontrar cerca de 9 mil itens de grandes marcas de mercearia, perecíveis, embalagens, bazar, higiene, bebidas e limpeza. E o melhor, tudo com a nossa garantia de <span> Só Preço Baixo! </span>'
            }
        }
    }
}
</script>

<style>

</style>