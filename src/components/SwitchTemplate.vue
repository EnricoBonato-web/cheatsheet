<template>
    <div class="relative inline-block w-10 mr-2 align-middle select-none" @click="toggle">
        <input
            type="checkbox"
            class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
            v-model="isChecked"
        />
        <label
            class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
            :style="isChecked ? { backgroundColor: 'var(--page-accent)' } : ''"
        ></label>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const isChecked = ref(true)
const emits = defineEmits(['onToggle'])
const toggle = () => {
    isChecked.value = !isChecked.value
}
</script>

<style scoped>
.toggle-checkbox:checked {
    transform: translateX(1.25rem);
}
</style>
