<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}"  @class(['dark' => ($appearance ?? 'system') == 'dark'])>
    <head>
        <meta property="og:title" content="Alzeer Holding" />
        <meta property="og:description" content="الموقع الرسمي لشركة فهد نواف الزير القابضة" />
        <meta property="og:image" content="{{ asset('asset/Screenshot_1447-03-29_at_10.51.05_AM-removebg-preview.png') }}" />
        <meta property="og:url" content="{{ url('/') }}" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        {{-- Inline script to detect system dark mode preference and apply it immediately --}}
        <script>
            (function() {
                const appearance = '{{ $appearance ?? "system" }}';

                if (appearance === 'system') {
                    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

                    if (prefersDark) {
                        document.documentElement.classList.add('dark');
                    }
                }
            })();
        </script>

        {{-- Inline style to set the HTML background color based on our theme in app.css --}}
        <style>
            html {
                background-color: oklch(1 0 0);
            }

            html.dark {
                background-color: oklch(0.145 0 0);
            }
        </style>

        <title inertia>Alzeer Holding</title>

        <link rel="icon" href="/favicon.ico" sizes="any">
        <link rel="icon" href="/favicon.svg" type="image/svg+xml">
        <link rel="apple-touch-icon" href="/apple-touch-icon.png">

        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600|family=cairo:200,300,400,500,600,700,800,900|family=roboto:300,400,500,700,900" rel="stylesheet" />
        <link rel="stylesheet" href="/fonts/avenir-arabic.css" />

        <!-- Force Avenir Arabic font -->
        <style>
            /* Arabic text - Avenir Arabic */
            [dir="rtl"] * {
                font-family: 'Avenir Arabic', 'Cairo', sans-serif !important;
            }

            /* English text - Roboto */
            [dir="ltr"] * {
                font-family: 'Roboto', sans-serif !important;
            }

            /* Default for all elements */
            * {
                font-family: 'Roboto', 'Avenir Arabic', 'Cairo', sans-serif !important;
            }

            body {
                font-family: 'Roboto', 'Avenir Arabic', 'Cairo', sans-serif !important;
            }

            html {
                font-family: 'Roboto', 'Avenir Arabic', 'Cairo', sans-serif !important;
            }

            /* Specific elements */
            h1, h2, h3, h4, h5, h6, p, span, div, a, button, input, textarea, select {
                font-family: 'Roboto', 'Avenir Arabic', 'Cairo', sans-serif !important;
            }

            /* Language-specific styling */
            .lang-en * {
                font-family: 'Roboto', sans-serif !important;
            }

            .lang-ar * {
                font-family: 'Avenir Arabic', 'Cairo', sans-serif !important;
            }

            /* Force hero content positioning for both languages */
            .hero-content {
                position: absolute !important;
                top: 20% !important;
                z-index: 20 !important;
            }

            [dir="rtl"] .hero-content {
                position: absolute !important;
                top: 20% !important;
                right: 5% !important;
                left: auto !important;
                transform: none !important;
                z-index: 20 !important;
            }

            [dir="ltr"] .hero-content {
                position: absolute !important;
                top: 20% !important;
                left: 5% !important;
                right: auto !important;
                transform: none !important;
                z-index: 20 !important;
            }
        </style>

        <!-- FontAwesome Icons -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />

        @vite(['resources/js/app.ts', "resources/js/pages/{$page['component']}.vue"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
