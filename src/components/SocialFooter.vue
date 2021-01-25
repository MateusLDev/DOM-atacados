<template>
    <div id="social">
        <h1 class="title">{{ social.title }}</h1>
        <div class="social-networks">
            <ul class="social-list">
                <li class="social-item" v-for="item in social.link" :key="item.id">
                    <a class="social-link" :href="item.link"><img src="@/assets/img/facebook.svg" :alt="item.alt"></a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            social: {
                title: 'Dom na mídia',
                link: [
                    { src: '@/assets/img/facebook.svg', link: '#', alt: 'Facebook' },
                    { src: '@/assest/img/linkedin.svg', link: '#', alt: 'LinkedIn' },
                    { src: 'assest/img/instagram.svg', link: '#', alt: 'Instagram' }
                ]
            }
        }
    }
}
</script>

<style>

</style>