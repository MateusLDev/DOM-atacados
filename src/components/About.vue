<template>
    <div id="sobre">
        <div class="about-image">
            <img src="@/assets/img/about.png" :alt="about.alt">
            <!-- <img src="assets/img/about.png" alt="Sobre Nós"> -->
        </div>
        <div class="content">
            <h1 class="title">{{ about.title }}</h1>
            <div v-html="about.desc" class="description"></div>
            <div v-html="about.text" class="text"></div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            about: {
                image: '@/assets/about.png',
                alt: 'Sobre Nós',
                title: 'DOM E SÃO JOÃO DE MERITI: TUDO A VER!',
                desc: 'O Dom Atacadista é o atacarejo 100% do Rio de Janeiro.<br><br>',
                text: 'Somos de todo o estado e amamos todas as regiões do Rio, por isso, era um <span>grande desejo chegar à Baixada Fluminense</span> e estar próximo dos meritienses.<br><br> E o Dom tem tudo a ver com São João de Meriti! Afinal, o setor de comércio e serviços se destaca como principal atividade econômica da cidade e o nosso Dom é oferecer os melhores preços e condições para o comércio local e, assim, <span>crescer junto com a cidade de São João!</span> <br><br> Mas não é só isso, aqui no Dom as famílias encontram a oportunidade de economizar nas compras de mês, com uma <span>loja segura, confortável e com bom atendimento!”</span>  '
            }
        }
    }
}
</script>

<style>

</style>