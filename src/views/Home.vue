<template>
    <div class="home">
        <div class="col-md-6 center">
            <tv-series/>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src

    import 'bootstrap/dist/css/bootstrap.min.css'
    import TvSeries from "../components/TvSeries";

    export default {
        name: 'home',
        components: {
            TvSeries
        }
    }
</script>

<style scoped>
    .center {
        margin: 0 auto;
        float: none;
    }
</style>
