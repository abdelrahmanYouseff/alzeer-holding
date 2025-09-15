<script setup lang="ts">
import type { HTMLAttributes } from 'vue';

defineOptions({
    inheritAttrs: false,
});

interface Props {
    className?: HTMLAttributes['class'];
}

defineProps<Props>();
</script>

<template>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" :class="className" v-bind="$attrs">
        <!-- Background Circle -->
        <circle cx="20" cy="20" r="20" fill="currentColor"/>

        <!-- Letter A -->
        <path d="M20 8L24 28H22.5L21.5 24H18.5L17.5 28H16L20 8ZM20.5 10.5L19 18H21L20.5 10.5Z" fill="white"/>

        <!-- Letter Z -->
        <path d="M12 8H26V10H14.5L25.5 24H12V22H23.5L12 8Z" fill="white"/>

        <!-- Decorative Elements -->
        <circle cx="10" cy="10" r="1" fill="white" opacity="0.6"/>
        <circle cx="30" cy="30" r="1" fill="white" opacity="0.6"/>
        <circle cx="30" cy="10" r="0.5" fill="white" opacity="0.4"/>
        <circle cx="10" cy="30" r="0.5" fill="white" opacity="0.4"/>
    </svg>
</template>
