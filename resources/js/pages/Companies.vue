<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, router } from '@inertiajs/vue3';
import { Building2, Plus, Edit, Trash2, Eye, Globe, Mail, Phone, MapPin } from 'lucide-vue-next';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

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
    companies: Company[];
}

defineProps<Props>();

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Companies',
        href: '/companies',
    },
];

const deleteCompany = (id: number) => {
    router.delete(`/companies/${id}`, {
        onSuccess: () => {
            // Success handled by Inertia
        }
    });
};
</script>

<template>
    <Head title="Companies" />

    <AppLayout :breadcrumbs="breadcrumbs">
        <div class="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
            <!-- Header Section -->
            <div class="flex items-center justify-between">
                <div>
                    <h1 class="text-2xl font-bold tracking-tight">Companies</h1>
                    <p class="text-muted-foreground">Manage your company portfolio</p>
                </div>
                <Link :href="'/companies/create'">
                    <Button>
                        <Plus class="mr-2 h-4 w-4" />
                        Add Company
                    </Button>
                </Link>
            </div>

            <!-- Companies Grid -->
            <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card v-for="company in companies" :key="company.id" class="relative">
                    <CardHeader class="pb-3">
                        <div class="flex items-start justify-between">
                            <div class="flex items-center space-x-3">
                                <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 overflow-hidden">
                                    <img
                                        v-if="company.logo_path"
                                        :src="`/storage/${company.logo_path}`"
                                        :alt="company.name"
                                        class="h-full w-full object-cover"
                                    />
                                    <Building2 v-else class="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <CardTitle class="text-lg">{{ company.name }}</CardTitle>
                                    <CardDescription v-if="company.name_ar" class="text-sm">
                                        {{ company.name_ar }}
                                    </CardDescription>
                                </div>
                            </div>
                            <Badge :variant="company.is_active ? 'default' : 'secondary'">
                                {{ company.is_active ? 'Active' : 'Inactive' }}
                            </Badge>
                        </div>
                    </CardHeader>

                    <CardContent class="space-y-3">
                        <p class="text-sm text-muted-foreground line-clamp-2">
                            {{ company.description }}
                        </p>

                        <div class="flex items-center space-x-2 text-sm text-muted-foreground">
                            <MapPin class="h-4 w-4" />
                            <span>{{ company.location }}</span>
                        </div>

                        <div v-if="company.email" class="flex items-center space-x-2 text-sm text-muted-foreground">
                            <Mail class="h-4 w-4" />
                            <span>{{ company.email }}</span>
                        </div>

                        <div v-if="company.phone" class="flex items-center space-x-2 text-sm text-muted-foreground">
                            <Phone class="h-4 w-4" />
                            <span>{{ company.phone }}</span>
                        </div>

                        <div v-if="company.website" class="flex items-center space-x-2 text-sm text-muted-foreground">
                            <Globe class="h-4 w-4" />
                            <a :href="company.website" target="_blank" class="hover:text-primary">
                                {{ company.website }}
                            </a>
                        </div>

                        <!-- Action Buttons -->
                        <div class="flex items-center justify-between pt-3">
                            <div class="flex space-x-2">
                                <Link :href="`/companies/${company.id}`">
                                    <Button variant="outline" size="sm">
                                        <Eye class="h-4 w-4" />
                                    </Button>
                                </Link>
                                <Link :href="`/companies/${company.id}/edit`">
                                    <Button variant="outline" size="sm">
                                        <Edit class="h-4 w-4" />
                                    </Button>
                                </Link>
                            </div>

                            <Dialog>
                                <DialogTrigger as-child>
                                    <Button variant="outline" size="sm" class="text-destructive hover:text-destructive">
                                        <Trash2 class="h-4 w-4" />
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
                                            @click="deleteCompany(company.id)"
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

            <!-- Empty State -->
            <div v-if="companies.length === 0" class="flex flex-col items-center justify-center py-12">
                <Building2 class="h-12 w-12 text-muted-foreground mb-4" />
                <h3 class="text-lg font-semibold">No companies found</h3>
                <p class="text-muted-foreground mb-4">Get started by adding your first company.</p>
                <Link :href="'/companies/create'">
                    <Button>
                        <Plus class="mr-2 h-4 w-4" />
                        Add Company
                    </Button>
                </Link>
            </div>
        </div>
    </AppLayout>
</template>
