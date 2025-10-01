<script setup lang="ts">
import { cn } from '@/lib/utils';
import { computed, ref } from 'vue';
import { Upload, X, Image as ImageIcon } from 'lucide-vue-next';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

interface Props {
    modelValue?: File | null;
    accept?: string;
    maxSize?: number; // in MB
    class?: string;
    label?: string;
    description?: string;
    preview?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    accept: 'image/*',
    maxSize: 2, // 2MB
    preview: true,
});

const emit = defineEmits<{
    'update:modelValue': [value: File | null];
}>();

const fileInput = ref<HTMLInputElement>();
const dragOver = ref(false);
const error = ref<string>('');

const filePreview = computed(() => {
    if (props.modelValue && props.preview) {
        return URL.createObjectURL(props.modelValue);
    }
    return null;
});

const handleFileSelect = (event: Event) => {
    const target = event.target as HTMLInputElement;
    const file = target.files?.[0];

    if (file) {
        validateAndSetFile(file);
    }
};

const handleDrop = (event: DragEvent) => {
    event.preventDefault();
    dragOver.value = false;

    const file = event.dataTransfer?.files[0];
    if (file) {
        validateAndSetFile(file);
    }
};

const handleDragOver = (event: DragEvent) => {
    event.preventDefault();
    dragOver.value = true;
};

const handleDragLeave = () => {
    dragOver.value = false;
};

const validateAndSetFile = (file: File) => {
    error.value = '';

    // Check file type
    if (!file.type.startsWith('image/')) {
        error.value = 'Please select an image file.';
        return;
    }

    // Check file size
    const maxSizeBytes = props.maxSize * 1024 * 1024;
    if (file.size > maxSizeBytes) {
        error.value = `File size must be less than ${props.maxSize}MB.`;
        return;
    }

    emit('update:modelValue', file);
};

const removeFile = () => {
    emit('update:modelValue', null);
    if (fileInput.value) {
        fileInput.value.value = '';
    }
};

const openFileDialog = () => {
    fileInput.value?.click();
};
</script>

<template>
    <div class="space-y-2">
        <Label v-if="label" :for="fileInput?.id">{{ label }}</Label>
        <p v-if="description" class="text-sm text-muted-foreground">{{ description }}</p>

        <div
            :class="cn(
                'relative border-2 border-dashed rounded-lg p-6 transition-colors',
                dragOver ? 'border-primary bg-primary/5' : 'border-muted-foreground/25',
                error ? 'border-destructive' : '',
                props.class
            )"
            @drop="handleDrop"
            @dragover="handleDragOver"
            @dragleave="handleDragLeave"
        >
            <input
                ref="fileInput"
                type="file"
                :accept="accept"
                class="hidden"
                @change="handleFileSelect"
            />

            <!-- File Preview -->
            <div v-if="filePreview" class="flex items-center justify-center mb-4">
                <img :src="filePreview" alt="Preview" class="max-h-32 max-w-32 object-contain rounded" />
            </div>

            <!-- Upload Area -->
            <div v-if="!modelValue" class="text-center">
                <div class="flex flex-col items-center space-y-2">
                    <div class="p-3 rounded-full bg-muted">
                        <Upload class="h-6 w-6 text-muted-foreground" />
                    </div>
                    <div class="text-sm text-muted-foreground">
                        <button
                            type="button"
                            @click="openFileDialog"
                            class="text-primary hover:underline"
                        >
                            Click to upload
                        </button>
                        or drag and drop
                    </div>
                    <p class="text-xs text-muted-foreground">
                        {{ accept }} (max {{ maxSize }}MB)
                    </p>
                </div>
            </div>

            <!-- File Selected -->
            <div v-else class="flex items-center justify-between">
                <div class="flex items-center space-x-3">
                    <div class="p-2 rounded-full bg-muted">
                        <ImageIcon class="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div>
                        <p class="text-sm font-medium">{{ modelValue.name }}</p>
                        <p class="text-xs text-muted-foreground">
                            {{ (modelValue.size / 1024 / 1024).toFixed(2) }} MB
                        </p>
                    </div>
                </div>
                <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    @click="removeFile"
                >
                    <X class="h-4 w-4" />
                </Button>
            </div>
        </div>

        <p v-if="error" class="text-sm text-destructive">{{ error }}</p>
    </div>
</template>
