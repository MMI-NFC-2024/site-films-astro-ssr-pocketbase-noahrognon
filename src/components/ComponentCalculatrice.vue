<script setup lang="ts">
import { ref } from "vue";
import BtnCalc from "./BtnCalc.vue";
const nombre = ref("0")
const hasDecimal = ref(false)

const addDecimal = () => {
    if (!hasDecimal.value) {
        nombre.value = nombre.value + "."
        hasDecimal.value = true
    }
}

const reset = () => {
    nombre.value = "0"
    hasDecimal.value = false
}
</script>
<template>
        <h1>Calculatrice</h1>
        <p>afficheur : {{ nombre }}</p>
        <div class="grid">
                <BtnCalc v-model="nombre" :chiffre="0"/>
                <BtnCalc v-for="chiffre in 9" v-model="nombre" :chiffre="chiffre"/>
                <button @click="addDecimal">.</button>
                <button @click="nombre = nombre.toString().slice(0, -1) || '0'"><-</button>
        </div>
        <button @click="reset">Reset</button>
</template>

<style scoped>
.grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 10px;
        margin: 20px 0;
}
</style>
