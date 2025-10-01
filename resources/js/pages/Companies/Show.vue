<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/vue3';
import { ArrowLeft, Building2, Edit, Globe, Mail, MapPin, Phone, Trash2 } from 'lucide-vue-next';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { router } from '@inertiajs/vue3';

interface Company {
    id: number;
    name: string;
    name_ar?: string;
    description: string;
    description_ar?: string;
    location: string;
    location_ar?: string;
    logo_path?: string;
    logo_original_name?: string;
    logo_mime_type?: string;
    logo_size?: number;
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
    created_at: string;
    updated_at: string;
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
        title: props.company.name,
        href: `/companies/${props.company.id}`,
    },
];

const deleteCompany = () => {
    router.delete(`/companies/${props.company.id}`, {
        onSuccess: () => {
            // Redirect handled by Inertia
        }
    });
};
</script>

<template>
    <Head :title="company.name" />

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
                        <h1 class="text-2xl font-bold tracking-tight">{{ company.name }}</h1>
                        <p class="text-muted-foreground">Company Details</p>
                    </div>
                </div>
                <div class="flex items-center space-x-2">
                    <Badge :variant="company.is_active ? 'default' : 'secondary'">
                        {{ company.is_active ? 'Active' : 'Inactive' }}
                    </Badge>
                    <Link :href="`/companies/${company.id}/edit`">
                        <Button variant="outline" size="sm">
                            <Edit class="mr-2 h-4 w-4" />
                            Edit
                        </Button>
                    </Link>
                </div>
            </div>

            <!-- Company Information -->
            <div class="max-w-4xl space-y-6">
                <!-- Company Logo -->
                <Card v-if="company.logo_path">
                    <CardHeader>
                        <CardTitle>Company Logo</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div class="flex justify-center">
                            <img
                                :src="`/storage/${company.logo_path}`"
                                :alt="company.name"
                                class="max-h-48 max-w-48 object-contain rounded-lg border"
                            />
                        </div>
                    </CardContent>
                </Card>

                <!-- Basic Information -->
                <Card>
                    <CardHeader>
                        <CardTitle class="flex items-center space-x-2">
                            <Building2 class="h-5 w-5" />
                            <span>Basic Information</span>
                        </CardTitle>
                    </CardHeader>
                    <CardContent class="space-y-4">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <Label class="text-sm font-medium text-muted-foreground">Company Name</Label>
                                <p class="text-lg font-semibold">{{ company.name }}</p>
                            </div>
                            <div v-if="company.name_ar">
                                <Label class="text-sm font-medium text-muted-foreground">Company Name (Arabic)</Label>
                                <p class="text-lg font-semibold">{{ company.name_ar }}</p>
                            </div>
                        </div>

                        <div>
                            <Label class="text-sm font-medium text-muted-foreground">Description</Label>
                            <p class="mt-1">{{ company.description }}</p>
                        </div>

                        <div v-if="company.description_ar">
                            <Label class="text-sm font-medium text-muted-foreground">Description (Arabic)</Label>
                            <p class="mt-1">{{ company.description_ar }}</p>
                        </div>
                    </CardContent>
                </Card>

                <!-- Location Information -->
                <Card>
                    <CardHeader>
                        <CardTitle class="flex items-center space-x-2">
                            <MapPin class="h-5 w-5" />
                            <span>Location</span>
                        </CardTitle>
                    </CardHeader>
                    <CardContent class="space-y-4">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <Label class="text-sm font-medium text-muted-foreground">Location</Label>
                                <p class="text-lg">{{ company.location }}</p>
                            </div>
                            <div v-if="company.location_ar">
                                <Label class="text-sm font-medium text-muted-foreground">Location (Arabic)</Label>
                                <p class="text-lg">{{ company.location_ar }}</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <!-- Contact Information -->
                <Card v-if="company.email || company.phone">
                    <CardHeader>
                        <CardTitle class="flex items-center space-x-2">
                            <Mail class="h-5 w-5" />
                            <span>Contact Information</span>
                        </CardTitle>
                    </CardHeader>
                    <CardContent class="space-y-4">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div v-if="company.email">
                                <Label class="text-sm font-medium text-muted-foreground">Email</Label>
                                <p class="text-lg">
                                    <a :href="`mailto:${company.email}`" class="text-primary hover:underline">
                                        {{ company.email }}
                                    </a>
                                </p>
                            </div>
                            <div v-if="company.phone">
                                <Label class="text-sm font-medium text-muted-foreground">Phone</Label>
                                <p class="text-lg">
                                    <a :href="`tel:${company.phone}`" class="text-primary hover:underline">
                                        {{ company.phone }}
                                    </a>
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <!-- Online Presence -->
                <Card v-if="company.website || company.linkedin || company.twitter || company.instagram || company.facebook || company.youtube || company.whatsapp">
                    <CardHeader>
                        <CardTitle class="flex items-center space-x-2">
                            <Globe class="h-5 w-5" />
                            <span>Online Presence</span>
                        </CardTitle>
                    </CardHeader>
                    <CardContent class="space-y-4">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div v-if="company.website">
                                <Label class="text-sm font-medium text-muted-foreground">Website</Label>
                                <p class="text-lg">
                                    <a :href="company.website" target="_blank" class="text-primary hover:underline">
                                        {{ company.website }}
                                    </a>
                                </p>
                            </div>
                            <div v-if="company.linkedin">
                                <Label class="text-sm font-medium text-muted-foreground">LinkedIn</Label>
                                <p class="text-lg">
                                    <a :href="company.linkedin" target="_blank" class="text-primary hover:underline">
                                        {{ company.linkedin }}
                                    </a>
                                </p>
                            </div>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div v-if="company.twitter">
                                <Label class="text-sm font-medium text-muted-foreground">Twitter</Label>
                                <p class="text-lg">
                                    <a :href="company.twitter" target="_blank" class="text-primary hover:underline">
                                        {{ company.twitter }}
                                    </a>
                                </p>
                            </div>
                            <div v-if="company.instagram">
                                <Label class="text-sm font-medium text-muted-foreground">Instagram</Label>
                                <p class="text-lg">
                                    <a :href="company.instagram" target="_blank" class="text-primary hover:underline">
                                        {{ company.instagram }}
                                    </a>
                                </p>
                            </div>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div v-if="company.facebook">
                                <Label class="text-sm font-medium text-muted-foreground">Facebook</Label>
                                <p class="text-lg">
                                    <a :href="company.facebook" target="_blank" class="text-primary hover:underline">
                                        {{ company.facebook }}
                                    </a>
                                </p>
                            </div>
                            <div v-if="company.youtube">
                                <Label class="text-sm font-medium text-muted-foreground">YouTube</Label>
                                <p class="text-lg">
                                    <a :href="company.youtube" target="_blank" class="text-primary hover:underline">
                                        {{ company.youtube }}
                                    </a>
                                </p>
                            </div>
                        </div>

                        <div v-if="company.whatsapp">
                            <Label class="text-sm font-medium text-muted-foreground">WhatsApp</Label>
                            <p class="text-lg">
                                <a :href="`https://wa.me/${company.whatsapp}`" target="_blank" class="text-primary hover:underline">
                                    {{ company.whatsapp }}
                                </a>
                            </p>
                        </div>
                    </CardContent>
                </Card>

                <!-- Settings -->
                <Card>
                    <CardHeader>
                        <CardTitle>Settings</CardTitle>
                    </CardHeader>
                    <CardContent class="space-y-4">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <Label class="text-sm font-medium text-muted-foreground">Sort Order</Label>
                                <p class="text-lg">{{ company.sort_order }}</p>
                            </div>
                            <div>
                                <Label class="text-sm font-medium text-muted-foreground">Status</Label>
                                <p class="text-lg">
                                    <Badge :variant="company.is_active ? 'default' : 'secondary'">
                                        {{ company.is_active ? 'Active' : 'Inactive' }}
                                    </Badge>
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <!-- Actions -->
                <Card>
                    <CardHeader>
                        <CardTitle>Actions</CardTitle>
                        <CardDescription>
                            Manage this company
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div class="flex items-center justify-between">
                            <div class="flex items-center space-x-2">
                                <Link :href="`/companies/${company.id}/edit`">
                                    <Button>
                                        <Edit class="mr-2 h-4 w-4" />
                                        Edit Company
                                    </Button>
                                </Link>
                            </div>

                            <Dialog>
                                <DialogTrigger as-child>
                                    <Button variant="destructive">
                                        <Trash2 class="mr-2 h-4 w-4" />
                                        Delete Company
                                    </Button>
                                </DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle>Are you sure?</DialogTitle>
                                        <DialogDescription>
                                            This action cannot be undone. This will permanently delete the company
                                            "{{ company.name }}" and remove all associated data.
                                        </DialogDescription>
                                    </DialogHeader>
                                    <DialogFooter>
                                        <Button variant="outline">Cancel</Button>
                                        <Button
                                            @click="deleteCompany"
                                            variant="destructive"
                                        >
                                            Delete
                                        </Button>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    </AppLayout>
</template>
