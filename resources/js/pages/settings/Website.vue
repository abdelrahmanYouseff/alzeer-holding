<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue';
import { website } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head, useForm, usePage } from '@inertiajs/vue3';
import { ref, computed } from 'vue';

interface WebsiteSetting {
    id?: number;
    site_title?: string;
    site_description?: string;
}

interface ContactInformation {
    id?: number;
    email?: string;
    phone?: string;
    address?: string;
}

interface SocialMediaLink {
    id?: number;
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
    youtube?: string;
}

interface Brand {
    id: number;
    name: string;
    logo_path?: string;
    website_url?: string;
    sort_order: number;
    is_active: boolean;
}

const page = usePage();
const websiteSettings = computed(() => page.props.websiteSettings as WebsiteSetting);
const contactInfo = computed(() => page.props.contactInfo as ContactInformation);
const socialMedia = computed(() => page.props.socialMedia as SocialMediaLink);
const brands = computed(() => page.props.brands as Brand[]);

// Forms
const generalForm = useForm({
    site_title: '',
    site_description: '',
});

const contactForm = useForm({
    email: '',
    phone: '',
    address: '',
});

const socialMediaForm = useForm({
    facebook: '',
    twitter: '',
    linkedin: '',
    instagram: '',
});

// Initialize forms with existing data
generalForm.site_title = websiteSettings.value?.site_title || '';
generalForm.site_description = websiteSettings.value?.site_description || '';

contactForm.email = contactInfo.value?.email || '';
contactForm.phone = contactInfo.value?.phone || '';
contactForm.address = contactInfo.value?.address || '';

socialMediaForm.facebook = socialMedia.value?.facebook || '';
socialMediaForm.twitter = socialMedia.value?.twitter || '';
socialMediaForm.linkedin = socialMedia.value?.linkedin || '';
socialMediaForm.instagram = socialMedia.value?.instagram || '';

const brandForm = useForm({
    name: '',
    logo: null as File | null,
    website_url: '',
});

// Brand management
const editingBrand = ref<Brand | null>(null);
const brandEditForm = useForm({
    name: '',
    logo: null as File | null,
    website_url: '',
});

// Form submission handlers
const submitGeneralSettings = () => {
    generalForm.post('/settings/website/general', {
        preserveScroll: true,
        onSuccess: () => {
            // Handle success
        }
    });
};

const submitContactInfo = () => {
    contactForm.post('/settings/website/contact', {
        preserveScroll: true,
    });
};

const submitSocialMedia = () => {
    socialMediaForm.post('/settings/website/social-media', {
        preserveScroll: true,
    });
};

const submitBrand = () => {
    brandForm.post('/settings/website/brands', {
        preserveScroll: true,
        onSuccess: () => {
            brandForm.reset();
        }
    });
};

const editBrand = (brand: Brand) => {
    editingBrand.value = brand;
    brandEditForm.name = brand.name;
    brandEditForm.website_url = brand.website_url || '';
};

const updateBrand = (brand: Brand) => {
    brandEditForm.put(`/settings/website/brands/${brand.id}`, {
        preserveScroll: true,
        onSuccess: () => {
            editingBrand.value = null;
            brandEditForm.reset();
        }
    });
};

const deleteBrand = (brand: Brand) => {
    if (confirm('Are you sure you want to delete this brand?')) {
        brandForm.delete(`/settings/website/brands/${brand.id}`, {
            preserveScroll: true,
        });
    }
};

const cancelEdit = () => {
    editingBrand.value = null;
    brandEditForm.reset();
};

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
    {
        title: 'Website Settings',
        href: website().url,
    },
];
</script>

<template>
    <Head title="Website Settings">
        <meta name="csrf-token" :content="$page.props.csrf_token">
    </Head>

    <AppLayout :breadcrumbs="breadcrumbs">
        <div class="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
            <div class="space-y-6">
                <div>
                    <h1 class="text-2xl font-bold text-foreground">Website Settings</h1>
                    <p class="text-muted-foreground">Configure your website settings and preferences.</p>

                    <!-- Success Message -->
                    <div v-if="$page.props.flash?.success" class="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
                        {{ $page.props.flash.success }}
                    </div>

                    <!-- Error Message -->
                    <div v-if="$page.props.flash?.error" class="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
                        {{ $page.props.flash.error }}
                    </div>
                </div>

                <div class="grid gap-6">
                    <!-- General Settings -->
                    <form @submit.prevent="submitGeneralSettings" class="rounded-lg border border-sidebar-border/70 dark:border-sidebar-border p-6">
                        <h2 class="text-lg font-semibold mb-4">General Settings</h2>
                        <div class="space-y-4">
                            <div>
                                <label class="block text-sm font-medium mb-2">Site Title</label>
                                <input
                                    v-model="generalForm.site_title"
                                    type="text"
                                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter site title"
                                />
                                <div v-if="generalForm.errors.site_title" class="text-red-500 text-sm mt-1">
                                    {{ generalForm.errors.site_title }}
                                </div>
                            </div>
                            <div>
                                <label class="block text-sm font-medium mb-2">Site Description</label>
                                <textarea
                                    v-model="generalForm.site_description"
                                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    rows="3"
                                    placeholder="Enter site description"
                                ></textarea>
                                <div v-if="generalForm.errors.site_description" class="text-red-500 text-sm mt-1">
                                    {{ generalForm.errors.site_description }}
                                </div>
                            </div>
                            <div class="flex justify-end">
                                <button
                                    type="submit"
                                    :disabled="generalForm.processing"
                                    class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
                                >
                                    {{ generalForm.processing ? 'Saving...' : 'Save Settings' }}
                                </button>
                            </div>
                        </div>
                    </form>

                    <!-- Contact Information -->
                    <form @submit.prevent="submitContactInfo" class="rounded-lg border border-sidebar-border/70 dark:border-sidebar-border p-6">
                        <h2 class="text-lg font-semibold mb-4">Contact Information</h2>
                        <div class="space-y-4">
                            <div>
                                <label class="block text-sm font-medium mb-2">Email</label>
                                <input
                                    v-model="contactForm.email"
                                    type="email"
                                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="contact@example.com"
                                />
                                <div v-if="contactForm.errors.email" class="text-red-500 text-sm mt-1">
                                    {{ contactForm.errors.email }}
                                </div>
                            </div>
                            <div>
                                <label class="block text-sm font-medium mb-2">Phone</label>
                                <input
                                    v-model="contactForm.phone"
                                    type="tel"
                                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="+1 (555) 123-4567"
                                />
                                <div v-if="contactForm.errors.phone" class="text-red-500 text-sm mt-1">
                                    {{ contactForm.errors.phone }}
                                </div>
                            </div>
                            <div>
                                <label class="block text-sm font-medium mb-2">Address</label>
                                <textarea
                                    v-model="contactForm.address"
                                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    rows="3"
                                    placeholder="Enter full address"
                                ></textarea>
                                <div v-if="contactForm.errors.address" class="text-red-500 text-sm mt-1">
                                    {{ contactForm.errors.address }}
                                </div>
                            </div>
                            <div class="flex justify-end">
                                <button
                                    type="submit"
                                    :disabled="contactForm.processing"
                                    class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
                                >
                                    {{ contactForm.processing ? 'Saving...' : 'Save Contact Info' }}
                                </button>
                            </div>
                        </div>
                    </form>

                    <!-- Social Media -->
                    <form @submit.prevent="submitSocialMedia" class="rounded-lg border border-sidebar-border/70 dark:border-sidebar-border p-6">
                        <h2 class="text-lg font-semibold mb-4">Social Media Links</h2>
                        <div class="space-y-4">
                            <div>
                                <label class="block text-sm font-medium mb-2">Facebook</label>
                                <input
                                    v-model="socialMediaForm.facebook"
                                    type="url"
                                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="https://facebook.com/yourpage"
                                />
                                <div v-if="socialMediaForm.errors.facebook" class="text-red-500 text-sm mt-1">
                                    {{ socialMediaForm.errors.facebook }}
                                </div>
                            </div>
                            <div>
                                <label class="block text-sm font-medium mb-2">Twitter</label>
                                <input
                                    v-model="socialMediaForm.twitter"
                                    type="url"
                                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="https://twitter.com/yourhandle"
                                />
                                <div v-if="socialMediaForm.errors.twitter" class="text-red-500 text-sm mt-1">
                                    {{ socialMediaForm.errors.twitter }}
                                </div>
                            </div>
                            <div>
                                <label class="block text-sm font-medium mb-2">LinkedIn</label>
                                <input
                                    v-model="socialMediaForm.linkedin"
                                    type="url"
                                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="https://linkedin.com/company/yourcompany"
                                />
                                <div v-if="socialMediaForm.errors.linkedin" class="text-red-500 text-sm mt-1">
                                    {{ socialMediaForm.errors.linkedin }}
                                </div>
                            </div>
                            <div>
                                <label class="block text-sm font-medium mb-2">Instagram</label>
                                <input
                                    v-model="socialMediaForm.instagram"
                                    type="url"
                                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="https://instagram.com/yourhandle"
                                />
                                <div v-if="socialMediaForm.errors.instagram" class="text-red-500 text-sm mt-1">
                                    {{ socialMediaForm.errors.instagram }}
                                </div>
                            </div>
                            <div class="flex justify-end">
                                <button
                                    type="submit"
                                    :disabled="socialMediaForm.processing"
                                    class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
                                >
                                    {{ socialMediaForm.processing ? 'Saving...' : 'Save Social Media' }}
                                </button>
                            </div>
                        </div>
                    </form>

                    <!-- Our Brands Management -->
                    <div class="rounded-lg border border-sidebar-border/70 dark:border-sidebar-border p-6">
                        <h2 class="text-lg font-semibold mb-4">Our Brands Management</h2>
                        <p class="text-sm text-gray-600 mb-6">Manage the company logos that appear in the "Our Brands" section of your website.</p>

                        <div class="space-y-6">
                            <!-- Add New Brand -->
                            <form @submit.prevent="submitBrand">
                                <h3 class="text-md font-medium mb-3">Add New Brand Logo</h3>
                                <div class="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                                    <div class="space-y-2">
                                        <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                                            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <div class="text-sm text-gray-600">
                                            <label for="brand-logo" class="cursor-pointer">
                                                <span class="font-medium text-blue-600 hover:text-blue-500">Click to upload brand logo</span>
                                                or drag and drop
                                            </label>
                                            <input
                                                id="brand-logo"
                                                name="brand-logo"
                                                type="file"
                                                class="sr-only"
                                                accept="image/*"
                                                @change="brandForm.logo = $event.target.files[0]"
                                            />
                                        </div>
                                        <p class="text-xs text-gray-500">PNG, JPG, GIF up to 5MB (Recommended: 200x200px square)</p>
                                        <div v-if="brandForm.errors.logo" class="text-red-500 text-sm mt-1">
                                            {{ brandForm.errors.logo }}
                                        </div>
                                    </div>
                                </div>

                                <!-- Brand Details Form -->
                                <div class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label class="block text-sm font-medium mb-2">Brand Name</label>
                                        <input
                                            v-model="brandForm.name"
                                            type="text"
                                            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="Enter brand name"
                                        />
                                        <div v-if="brandForm.errors.name" class="text-red-500 text-sm mt-1">
                                            {{ brandForm.errors.name }}
                                        </div>
                                    </div>
                                    <div>
                                        <label class="block text-sm font-medium mb-2">Website URL (Optional)</label>
                                        <input
                                            v-model="brandForm.website_url"
                                            type="url"
                                            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="https://example.com"
                                        />
                                        <div v-if="brandForm.errors.website_url" class="text-red-500 text-sm mt-1">
                                            {{ brandForm.errors.website_url }}
                                        </div>
                                    </div>
                                </div>

                                <div class="mt-4">
                                    <button
                                        type="submit"
                                        :disabled="brandForm.processing"
                                        class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
                                    >
                                        {{ brandForm.processing ? 'Adding...' : 'Add Brand' }}
                                    </button>
                                </div>
                            </form>

                            <!-- Current Brands -->
                            <div class="border-t pt-6">
                                <h3 class="text-md font-medium mb-4">Current Brands</h3>
                                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                                    <div
                                        v-for="brand in brands"
                                        :key="brand.id"
                                        class="border border-gray-200 rounded-lg p-4 text-center bg-white hover:shadow-md transition-shadow"
                                    >
                                        <div class="w-full h-20 bg-gray-100 rounded-lg flex items-center justify-center mb-3">
                                            <img
                                                v-if="brand.logo_path"
                                                :src="`/storage/${brand.logo_path}`"
                                                :alt="brand.name"
                                                class="max-w-full max-h-full object-contain"
                                            />
                                            <div v-else class="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center">
                                                <span class="text-white font-bold text-xs">No Logo</span>
                                            </div>
                                        </div>
                                        <h4 class="font-medium text-sm mb-1">{{ brand.name }}</h4>
                                        <p v-if="brand.website_url" class="text-xs text-gray-500 mb-3">{{ brand.website_url }}</p>
                                        <div class="flex space-x-1">
                                            <button
                                                @click="editBrand(brand)"
                                                class="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded hover:bg-blue-200"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                @click="deleteBrand(brand)"
                                                class="px-2 py-1 text-xs bg-red-100 text-red-700 rounded hover:bg-red-200"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Preview Section -->
                            <div class="border-t pt-6">
                                <h3 class="text-md font-medium mb-4">Preview - Our Brands Section</h3>
                                <div class="bg-gray-50 rounded-lg p-6">
                                    <div class="text-center mb-6">
                                        <h2 class="text-2xl font-bold text-gray-900 mb-2">Our Brands</h2>
                                        <p class="text-gray-600">Discover the diverse portfolio of Alzeer Holding</p>
                                    </div>
                                    <div class="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
                                        <div
                                            v-for="brand in brands"
                                            :key="brand.id"
                                            class="bg-white rounded-lg p-3 shadow-sm"
                                        >
                                            <div class="w-full h-16 bg-white rounded-lg flex items-center justify-center">
                                                <img
                                                    v-if="brand.logo_path"
                                                    :src="`/storage/${brand.logo_path}`"
                                                    :alt="brand.name"
                                                    class="max-w-full max-h-full object-contain"
                                                />
                                                <div v-else class="w-12 h-12 bg-gray-400 rounded-lg flex items-center justify-center">
                                                    <span class="text-white font-bold text-xs">No Logo</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div v-if="brands.length === 0" class="col-span-full text-center text-gray-500 py-8">
                                            No brands added yet. Add some brands to see the preview.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </AppLayout>
</template>
