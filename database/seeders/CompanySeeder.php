<?php

namespace Database\Seeders;

use App\Models\Company;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CompanySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Company::create([
            'name' => 'ADVANCED LINE CHEMICALS',
            'name_ar' => 'أدفانسد لاين للكيماويات',
            'description' => 'ADV One of the leading national companies working in the manufacture and trade of chemicals, and as we are making unremitting efforts and allocating a lot of time and resources to establish unique, integrated and world-class value products in the chemical sector.',
            'description_ar' => 'أدفانسد لاين إحدى الشركات الوطنية الرائدة في تصنيع وتجارة الكيماويات، ونحن نبذل جهوداً حثيثة ونخصص الكثير من الوقت والموارد لإقامة منتجات قيمة فريدة ومتكاملة وعالمية المستوى في القطاع الكيميائي.',
            'location' => 'Saudi Arabia, Riyadh',
            'location_ar' => 'المملكة العربية السعودية، الرياض',
            'logo_path' => null,
            'website' => 'https://www.advancedlinechemicals.com',
            'linkedin' => 'https://linkedin.com/company/advanced-line-chemicals',
            'twitter' => 'https://twitter.com/advancedlinechem',
            'instagram' => 'https://instagram.com/advancedlinechemicals',
            'facebook' => 'https://facebook.com/advancedlinechemicals',
            'youtube' => 'https://youtube.com/@advancedlinechemicals',
            'whatsapp' => '+966501234567',
            'email' => 'info@advancedlinechemicals.com',
            'phone' => '+966112345678',
            'sort_order' => 1,
            'is_active' => true
        ]);

        // Add more companies as needed
        Company::create([
            'name' => 'Coming Soon',
            'name_ar' => 'قريباً',
            'description' => 'We are continuously expanding our portfolio with new strategic investments and partnerships across various sectors.',
            'description_ar' => 'نحن نوسع محفظتنا باستمرار من خلال استثمارات وشراكات استراتيجية جديدة عبر مختلف القطاعات.',
            'location' => 'Various Locations',
            'location_ar' => 'مواقع متعددة',
            'logo_path' => null,
            'website' => null,
            'linkedin' => null,
            'twitter' => null,
            'instagram' => null,
            'facebook' => null,
            'youtube' => null,
            'whatsapp' => null,
            'email' => null,
            'phone' => null,
            'sort_order' => 2,
            'is_active' => false
        ]);
    }
}
