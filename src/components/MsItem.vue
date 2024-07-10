<template>
    <div>
        <h1 class="bg">
            {{ title }}
        </h1>
        <p v-html="desc" />
    </div>
</template>
<script setup lang="ts">
import { watch } from 'vue';
const { title , desc =[] } = defineProps({
    title: String,
    desc: String
})


</script>
