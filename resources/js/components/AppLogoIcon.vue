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
    <img
        src="/asset/Screenshot_1447-03-29_at_10.51.05_AM-removebg-preview.png"
        alt="Alzeer Holding"
        :class="className"
        v-bind="$attrs"
    />
</template>
