<template>
    <div class="disc p-3 text-center">
        <div class="p-3">
            <img class="img-fluid mb-3" :src="disc.poster" :alt="disc.name" />
            <p class="title text-uppercase fw-bold">{{ disc.title }}</p>
            <p class="author lead mb-0">{{ disc.author }}</p> 
            <!-- mancava una coppia di parentesi graffe -->
            <p class="year">{{ disc.year }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "Disc",
    props: {
        disc: Object,
        // Passo un oggetto, non una stringa
    },
};
</script>

<style lang="scss" scoped>
.disc {
    margin: 5px;
    flex-basis: calc(100% / 5 - 10px);

    .author,
    .year {
        color: #7d7977;
    }
}

div {
    background-color: #2e3a46;
    // height: 100%;
}
</style>