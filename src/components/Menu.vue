<template>
    <div id="menu">
        <div class="logo">
            <img src="@/assets/img/logo.svg" alt="Logo DOM">
        </div>
        <div class="list-items">
            <ul class="menu-list">
                <li class="menu-item" v-for="item in menu" :key="item.id">
                    <a class="menu-link" :href="item.link">{{ item.name }}</a>
                </li>
            </ul>
        </div>
        <div class="menu-collapse">
            <img src="@/assets/img/menu.png" alt="Menu">
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            menu: [
                { name: 'Sobre o DOM', link: '' },
                { name: 'Nova loja', link: '' },
                { name: 'Fotos', link: '' },
                { name: 'Sobre o DOM em São João', link: '' },
                { name: 'Televendas', link: '' },
                { name: 'Nosso endereço', link: '' }
            ]
        }
    }
}
</script>

<style>

</style>