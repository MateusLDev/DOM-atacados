<template>
    <div class="cards">
        <div class="card" v-for="item in card" :key="item.id">
            <h2 class="title">{{ item.title }}</h2>
            <div v-html="item.desc" class="description"></div>
            <button class="card-btn">
                {{ item.button }} 
                <div class="arrow">
                    <img src="@/assets/img/seta.png" alt="">
                </div>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    props: ['card']
}
</script>

<style>

</style>