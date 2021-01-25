<template>
    <div id="footer">
        <div v-html="footer.text" class="text"></div>
        <img src="@/assets/img/logoVx.svg" alt="Logo VX">
    </div>
</template>

<script>
export default {
    data(){
        return{
            footer: {
                text: '© 2019 Copyright • Dom atacadista Todos os direitos reservados',
            }
        }
    }
}
</script>

<style>

</style>