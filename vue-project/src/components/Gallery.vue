<template>
    <div>
        <div class="gallery">
            <img :src="big_img" alt="photo" class="gallery__big">
            <div class="gallery__small">
                <img class="gallery__small__img" @click='changeImage(img)' v-for="img in imgs" :key="img.id" :src="img" alt="photo">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'GalleryComponent',

    data() {
        return {
            imgs: [
                'https://funart.pro/uploads/posts/2022-05/1653270216_25-funart-pro-p-kotik-rizhik-krasivo-zhivotnie-foto-29.jpg',
                'https://foni.club/uploads/posts/2023-02/1676170522_foni-club-p-krasivie-oboi-kartinki-s-kotikami-44.jpg',
                'https://w.forfun.com/fetch/ee/ee0d5f99d8019b43e31f261fb5701f2d.jpeg?w=1470&r=0.5625'],

            big_img: "https://funart.pro/uploads/posts/2022-05/1653270216_25-funart-pro-p-kotik-rizhik-krasivo-zhivotnie-foto-29.jpg",

        };
    },

    methods: {
        changeImage(img){
            this.big_img = img;
        },
    },
};
</script>

<style lang="scss" scoped>
.gallery {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;

    &__big {
        width: 450px;
        height: 300px;
    }

    &__small {
        display: flex;
        justify-content: center;
        gap: 20px;

        &__img {
            width: 150px;
            height: 100px;
        }
    }
}
</style>
