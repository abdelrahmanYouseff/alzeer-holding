<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';

interface SocialMediaLink {
    id?: number;
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
}

const socialMedia = ref<SocialMediaLink | null>(null);

// Fetch social media data from API
const fetchSocialMediaData = async () => {
    try {
        const response = await fetch('/api/website-data');
        const data = await response.json();
        console.log('Social media data fetched:', data);
        socialMedia.value = data.socialMedia;
        console.log('Social media value set:', socialMedia.value);
    } catch (error) {
        console.error('Error fetching social media data:', error);
    }
};

onMounted(() => {
    fetchSocialMediaData();
});

// Debug: Watch for changes in social media data
watch(socialMedia, (newValue) => {
    console.log('Social media data changed:', newValue);
}, { deep: true });

// Function to open social media links
const openSocialLink = (url: string, platform: string) => {
    console.log(`${platform} clicked:`, url);
    console.log('Current socialMedia data:', socialMedia.value);

    if (!url || url.trim() === '') {
        console.error(`No URL found for ${platform}`);
        alert(`No URL found for ${platform}`);
        return;
    }

    // Simple and direct approach
    console.log(`Opening ${url}`);
    window.open(url, '_blank', 'noopener,noreferrer');
};

// Helper function to check if a URL exists
const hasUrl = (url?: string) => url && url.trim() !== '';

// Social media icons data
const socialMediaIcons = [
    {
        name: 'facebook',
        icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
        color: '#1877F2'
    },
    {
        name: 'twitter',
        icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
        color: '#1DA1F2'
    },
    {
        name: 'linkedin',
        icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
        color: '#0077B5'
    },
    {
        name: 'instagram',
        icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
        color: '#E4405F'
    }
];

// Get URL for each social media platform
const getSocialMediaUrl = (platform: string) => {
    if (!socialMedia.value) {
        console.log('No social media data available');
        return '';
    }

    const url = (() => {
        switch (platform) {
            case 'facebook':
                return socialMedia.value.facebook || '';
            case 'twitter':
                return socialMedia.value.twitter || '';
            case 'linkedin':
                return socialMedia.value.linkedin || '';
            case 'instagram':
                return socialMedia.value.instagram || '';
            default:
                return '';
        }
    })();

    console.log(`URL for ${platform}:`, url);
    return url;
};
</script>

<template>
    <footer class="bg-gray-800 text-white py-12">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <!-- Left Section - Logo and Description -->
                <div class="space-y-4">
                    <!-- Logo -->
                    <div class="flex items-center space-x-2">
                        <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                            <svg class="w-8 h-8 text-gray-800" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                            </svg>
                        </div>
                        <span class="text-2xl font-bold">Fahad Nawaf Al-Zeer Holding</span>
                        <span class="text-xs">™</span>
                    </div>

                    <!-- Description -->
                    <p class="text-gray-300 text-sm leading-relaxed max-w-md">
                        <span class="font-bold">Fahad Nawaf Al-Zeer Holding, we redefine</span> the future of investment through strategic partnerships, innovative solutions, and sustainable growth across diverse sectors.
                    </p>

                    <!-- Social Media Icons -->
                    <div class="flex space-x-3">
                        <!-- Debug info -->
                        <div v-if="!socialMedia" class="text-red-500 text-xs">
                            Loading social media data...
                        </div>
                        <div v-else class="text-green-500 text-xs">
                            Data loaded: {{ socialMedia ? 'Yes' : 'No' }}
                        </div>
                        <!-- Facebook -->
                        <button
                            v-if="socialMedia?.facebook"
                            class="w-10 h-10 rounded-full border-2 border-yellow-400 flex items-center justify-center hover:bg-yellow-400 hover:text-gray-800 transition-all duration-300 cursor-pointer bg-transparent"
                            @click="openSocialLink(socialMedia.facebook, 'Facebook')"
                        >
                            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                        </button>

                        <!-- Twitter/X -->
                        <button
                            v-if="socialMedia?.twitter"
                            class="w-10 h-10 rounded-full border-2 border-yellow-400 flex items-center justify-center hover:bg-yellow-400 hover:text-gray-800 transition-all duration-300 cursor-pointer bg-transparent"
                            @click="openSocialLink(socialMedia.twitter, 'Twitter')"
                        >
                            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                            </svg>
                        </button>

                        <!-- LinkedIn -->
                        <button
                            v-if="socialMedia?.linkedin"
                            class="w-10 h-10 rounded-full border-2 border-yellow-400 flex items-center justify-center hover:bg-yellow-400 hover:text-gray-800 transition-all duration-300 cursor-pointer bg-transparent"
                            @click="openSocialLink(socialMedia.linkedin, 'LinkedIn')"
                        >
                            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                        </button>

                        <!-- Instagram -->
                        <button
                            v-if="socialMedia?.instagram"
                            class="w-10 h-10 rounded-full border-2 border-yellow-400 flex items-center justify-center hover:bg-yellow-400 hover:text-gray-800 transition-all duration-300 cursor-pointer bg-transparent"
                            @click="openSocialLink(socialMedia.instagram, 'Instagram')"
                        >
                            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                        </button>
                    </div>
                </div>

                <!-- Right Section - Quick Links -->
                <div class="space-y-4">
                    <h3 class="text-yellow-400 text-lg font-semibold border-b border-yellow-400 pb-2 inline-block">
                        Quick Links
                    </h3>

                    <nav class="space-y-2">
                        <a href="/" class="block text-gray-300 hover:text-white transition-colors duration-300">
                            Home
                        </a>
                        <a href="#about-us" class="block text-gray-300 hover:text-white transition-colors duration-300">
                            About Us
                        </a>
                        <a href="/portfolio" class="block text-gray-300 hover:text-white transition-colors duration-300">
                            Portfolio
                        </a>
                        <a href="/contact" class="block text-gray-300 hover:text-white transition-colors duration-300">
                            Contact Us
                        </a>
                    </nav>
                </div>
            </div>

            <!-- Bottom Section -->
            <div class="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
                <p>&copy; {{ new Date().getFullYear() }} Alzeer Holding. All rights reserved.</p>
            </div>
        </div>
    </footer>
</template>
