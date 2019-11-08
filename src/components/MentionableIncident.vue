<template>
    <div class="row" style="padding: 5px;">
        <div class="col-md-12">
            <div class="container-fluid">
                <span>
                    <strong>{{mention.serial}} </strong> - {{mention.subject}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "mentionable-incident",
        props:{
            mention: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style scoped>

</style>