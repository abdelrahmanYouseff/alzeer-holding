<script setup lang="ts">
import { cn } from '@/lib/utils';
import { type VariantProps, cva } from 'class-variance-authority';
import { computed } from 'vue';

const textareaVariants = cva(
  'flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'border-input',
        destructive: 'border-destructive focus-visible:ring-destructive',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

interface Props {
  variant?: VariantProps<typeof textareaVariants>['variant'];
  class?: string;
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
});

const delegatedProps = computed(() => {
  const { variant, class: _, ...delegated } = props;
  return delegated;
});
</script>

<template>
  <textarea
    v-bind="delegatedProps"
    :class="cn(textareaVariants({ variant }), props.class)"
  />
</template>
