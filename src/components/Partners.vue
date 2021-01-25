<template>
    <div id="parceiros">
        <h1 class="title">Marcas parceiras</h1>
        <div class="slider">
            <swiper :options="swiperOption" >
                <swiper-slide>
                    <ul class="slide-list">
                        <li class="slide-item">
                            <img src="@/assets/img/pioneiro.svg" alt="">
                        </li>
                        <li class="slide-item">
                            <img src="@/assets/img/pioneiro.svg" alt="">
                        </li>
                        <li class="slide-item">
                            <img src="@/assets/img/pioneiro.svg" alt="">
                        </li>
                    </ul>
                </swiper-slide>
                <swiper-slide>
                    <ul class="slide-list">
                        <li class="slide-item">
                            <img src="@/assets/img/pioneiro.svg" alt="">
                        </li>
                        <li class="slide-item">
                            <img src="@/assets/img/pioneiro.svg" alt="">
                        </li>
                        <li class="slide-item">
                            <img src="@/assets/img/pioneiro.svg" alt="">
                        </li>
                    </ul>
                </swiper-slide>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/swiper-bundle.css'

export default {
    components: {
        Swiper,
        SwiperSlide
    },
    data(){
        return{
            swiperOption: {
                slidesPerView: 1,
                spaceBetween: 30,
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }
            }
        }
    }
}
</script>

<style>

</style>