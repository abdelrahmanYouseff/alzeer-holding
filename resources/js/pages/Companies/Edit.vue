<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, useForm } from '@inertiajs/vue3';
import { ArrowLeft, Building2, Globe, Mail, MapPin, Phone, Save } from 'lucide-vue-next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { FileUpload } from '@/components/ui/file-upload';
import InputError from '@/components/InputError.vue';

interface Company {
    id: number;
    name: string;
    name_ar?: string;
    description: string;
    description_ar?: string;
    location: string;
    location_ar?: string;
    logo_path?: string;
    website?: string;
    linkedin?: string;
    twitter?: string;
    instagram?: string;
    facebook?: string;
    youtube?: string;
    whatsapp?: string;
    email?: string;
    phone?: string;
    sort_order: number;
    is_active: boolean;
}

interface Props {
    company: Company;
}

const props = defineProps<Props>();

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Companies',
        href: '/companies',
    },
    {
        title: 'Edit Company',
        href: `/companies/${props.company.id}/edit`,
    },
];

const form = useForm({
    name: props.company.name,
    name_ar: props.company.name_ar || '',
    description: props.company.description,
    description_ar: props.company.description_ar || '',
    location: props.company.location,
    location_ar: props.company.location_ar || '',
    logo: null as File | null,
    website: props.company.website || '',
    linkedin: props.company.linkedin || '',
    twitter: props.company.twitter || '',
    instagram: props.company.instagram || '',
    facebook: props.company.facebook || '',
    youtube: props.company.youtube || '',
    whatsapp: props.company.whatsapp || '',
    email: props.company.email || '',
    phone: props.company.phone || '',
    sort_order: props.company.sort_order,
    is_active: props.company.is_active,
});

const submit = () => {
    form.put(`/companies/${props.company.id}`, {
        forceFormData: true,
        onSuccess: () => {
            // Redirect handled by Inertia
        },
        onError: (errors) => {
            console.log('Form errors:', errors);
        }
    });
};
</script>

<template>
    <Head title="Edit Company" />

    <AppLayout :breadcrumbs="breadcrumbs">
        <div class="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
            <!-- Header Section -->
            <div class="flex items-center justify-between">
                <div class="flex items-center space-x-4">
                    <Link :href="'/companies'">
                        <Button variant="outline" size="sm">
                            <ArrowLeft class="mr-2 h-4 w-4" />
                            Back to Companies
                        </Button>
                    </Link>
                    <div>
                        <h1 class="text-2xl font-bold tracking-tight">Edit Company</h1>
                        <p class="text-muted-foreground">Update company information</p>
                    </div>
                </div>
            </div>

            <!-- Form -->
            <div class="max-w-4xl">
                <form @submit.prevent="submit" class="space-y-6">
                    <!-- Basic Information -->
                    <Card>
                        <CardHeader>
                            <CardTitle class="flex items-center space-x-2">
                                <Building2 class="h-5 w-5" />
                                <span>Basic Information</span>
                            </CardTitle>
                            <CardDescription>
                                Enter the basic details about the company
                            </CardDescription>
                        </CardHeader>
                        <CardContent class="space-y-4">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div class="space-y-2">
                                    <Label for="name">Company Name *</Label>
                                    <Input
                                        id="name"
                                        v-model="form.name"
                                        type="text"
                                        placeholder="Enter company name"
                                        required
                                    />
                                    <InputError :message="form.errors.name" />
                                </div>
                                <div class="space-y-2">
                                    <Label for="name_ar">Company Name (Arabic)</Label>
                                    <Input
                                        id="name_ar"
                                        v-model="form.name_ar"
                                        type="text"
                                        placeholder="اسم الشركة"
                                    />
                                    <InputError :message="form.errors.name_ar" />
                                </div>
                            </div>

                            <div class="space-y-2">
                                <Label for="description">Description *</Label>
                                <Textarea
                                    id="description"
                                    v-model="form.description"
                                    placeholder="Enter company description"
                                    rows="3"
                                    required
                                />
                                <InputError :message="form.errors.description" />
                            </div>

                            <div class="space-y-2">
                                <Label for="description_ar">Description (Arabic)</Label>
                                <Textarea
                                    id="description_ar"
                                    v-model="form.description_ar"
                                    placeholder="وصف الشركة"
                                    rows="3"
                                />
                                <InputError :message="form.errors.description_ar" />
                            </div>
                        </CardContent>
                    </Card>

                    <!-- Logo Upload -->
                    <Card>
                        <CardHeader>
                            <CardTitle>Company Logo</CardTitle>
                            <CardDescription>
                                Upload a logo for the company (optional)
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <FileUpload
                                v-model="form.logo"
                                label="Logo"
                                description="Upload a company logo (PNG, JPG, GIF, SVG - max 2MB)"
                                accept="image/*"
                                :max-size="2"
                            />
                            <InputError :message="form.errors.logo" />
                        </CardContent>
                    </Card>

                    <!-- Location Information -->
                    <Card>
                        <CardHeader>
                            <CardTitle class="flex items-center space-x-2">
                                <MapPin class="h-5 w-5" />
                                <span>Location</span>
                            </CardTitle>
                            <CardDescription>
                                Company location details
                            </CardDescription>
                        </CardHeader>
                        <CardContent class="space-y-4">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div class="space-y-2">
                                    <Label for="location">Location *</Label>
                                    <Input
                                        id="location"
                                        v-model="form.location"
                                        type="text"
                                        placeholder="Enter location"
                                        required
                                    />
                                    <InputError :message="form.errors.location" />
                                </div>
                                <div class="space-y-2">
                                    <Label for="location_ar">Location (Arabic)</Label>
                                    <Input
                                        id="location_ar"
                                        v-model="form.location_ar"
                                        type="text"
                                        placeholder="الموقع"
                                    />
                                    <InputError :message="form.errors.location_ar" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <!-- Contact Information -->
                    <Card>
                        <CardHeader>
                            <CardTitle class="flex items-center space-x-2">
                                <Mail class="h-5 w-5" />
                                <span>Contact Information</span>
                            </CardTitle>
                            <CardDescription>
                                Company contact details
                            </CardDescription>
                        </CardHeader>
                        <CardContent class="space-y-4">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div class="space-y-2">
                                    <Label for="email">Email</Label>
                                    <Input
                                        id="email"
                                        v-model="form.email"
                                        type="email"
                                        placeholder="company@example.com"
                                    />
                                    <InputError :message="form.errors.email" />
                                </div>
                                <div class="space-y-2">
                                    <Label for="phone">Phone</Label>
                                    <Input
                                        id="phone"
                                        v-model="form.phone"
                                        type="tel"
                                        placeholder="+1234567890"
                                    />
                                    <InputError :message="form.errors.phone" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <!-- Social Media & Website -->
                    <Card>
                        <CardHeader>
                            <CardTitle class="flex items-center space-x-2">
                                <Globe class="h-5 w-5" />
                                <span>Online Presence</span>
                            </CardTitle>
                            <CardDescription>
                                Company website and social media links
                            </CardDescription>
                        </CardHeader>
                        <CardContent class="space-y-4">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div class="space-y-2">
                                    <Label for="website">Website</Label>
                                    <Input
                                        id="website"
                                        v-model="form.website"
                                        type="url"
                                        placeholder="https://company.com"
                                    />
                                    <InputError :message="form.errors.website" />
                                </div>
                                <div class="space-y-2">
                                    <Label for="linkedin">LinkedIn</Label>
                                    <Input
                                        id="linkedin"
                                        v-model="form.linkedin"
                                        type="url"
                                        placeholder="https://linkedin.com/company/company"
                                    />
                                    <InputError :message="form.errors.linkedin" />
                                </div>
                            </div>

                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div class="space-y-2">
                                    <Label for="twitter">Twitter</Label>
                                    <Input
                                        id="twitter"
                                        v-model="form.twitter"
                                        type="url"
                                        placeholder="https://twitter.com/company"
                                    />
                                    <InputError :message="form.errors.twitter" />
                                </div>
                                <div class="space-y-2">
                                    <Label for="instagram">Instagram</Label>
                                    <Input
                                        id="instagram"
                                        v-model="form.instagram"
                                        type="url"
                                        placeholder="https://instagram.com/company"
                                    />
                                    <InputError :message="form.errors.instagram" />
                                </div>
                            </div>

                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div class="space-y-2">
                                    <Label for="facebook">Facebook</Label>
                                    <Input
                                        id="facebook"
                                        v-model="form.facebook"
                                        type="url"
                                        placeholder="https://facebook.com/company"
                                    />
                                    <InputError :message="form.errors.facebook" />
                                </div>
                                <div class="space-y-2">
                                    <Label for="youtube">YouTube</Label>
                                    <Input
                                        id="youtube"
                                        v-model="form.youtube"
                                        type="url"
                                        placeholder="https://youtube.com/company"
                                    />
                                    <InputError :message="form.errors.youtube" />
                                </div>
                            </div>

                            <div class="space-y-2">
                                <Label for="whatsapp">WhatsApp</Label>
                                <Input
                                    id="whatsapp"
                                    v-model="form.whatsapp"
                                    type="text"
                                    placeholder="+1234567890"
                                />
                                <InputError :message="form.errors.whatsapp" />
                            </div>
                        </CardContent>
                    </Card>

                    <!-- Settings -->
                    <Card>
                        <CardHeader>
                            <CardTitle>Settings</CardTitle>
                            <CardDescription>
                                Company display and ordering settings
                            </CardDescription>
                        </CardHeader>
                        <CardContent class="space-y-4">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div class="space-y-2">
                                    <Label for="sort_order">Sort Order</Label>
                                    <Input
                                        id="sort_order"
                                        v-model="form.sort_order"
                                        type="number"
                                        min="0"
                                        placeholder="0"
                                    />
                                    <InputError :message="form.errors.sort_order" />
                                </div>
                                <div class="flex items-center space-x-2">
                                    <Checkbox
                                        id="is_active"
                                        v-model:checked="form.is_active"
                                    />
                                    <Label for="is_active">Active</Label>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <!-- Form Actions -->
                    <div class="flex items-center justify-end space-x-4">
                        <Link :href="'/companies'">
                            <Button type="button" variant="outline">
                                Cancel
                            </Button>
                        </Link>
                        <Button type="submit" :disabled="form.processing">
                            <Save class="mr-2 h-4 w-4" />
                            {{ form.processing ? 'Updating...' : 'Update Company' }}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    </AppLayout>
</template>
