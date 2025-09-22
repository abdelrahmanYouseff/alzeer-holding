<?php

namespace App\Http\Controllers;

use App\Models\Brand;
use App\Models\ContactInformation;
use App\Models\SocialMediaLink;
use App\Models\WebsiteSetting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class WebsiteController extends Controller
{
    /**
     * Display the website settings page
     */
    public function index()
    {
        $websiteSettings = WebsiteSetting::first();
        $contactInfo = ContactInformation::first();
        $socialMedia = SocialMediaLink::first();
        $brands = Brand::where('is_active', true)->orderBy('sort_order')->get();

        return Inertia::render('settings/Website', [
            'websiteSettings' => $websiteSettings,
            'contactInfo' => $contactInfo,
            'socialMedia' => $socialMedia,
            'brands' => $brands,
        ]);
    }

    /**
     * Get website data for footer and other components
     */
    public function getWebsiteData()
    {
        $socialMedia = SocialMediaLink::first();
        
        return response()->json([
            'socialMedia' => $socialMedia,
        ]);
    }

    /**
     * Update general website settings
     */
    public function updateGeneralSettings(Request $request)
    {
        $request->validate([
            'site_title' => 'nullable|string|max:255',
            'site_description' => 'nullable|string',
        ]);

        $settings = WebsiteSetting::firstOrNew();
        $settings->fill($request->only(['site_title', 'site_description']));
        $settings->save();

        return back()->with('success', 'General settings updated successfully.');
    }

    /**
     * Update contact information
     */
    public function updateContactInfo(Request $request)
    {
        $request->validate([
            'email' => 'nullable|email|max:255',
            'phone' => 'nullable|string|max:255',
            'address' => 'nullable|string',
        ]);

        $contactInfo = ContactInformation::firstOrNew();
        $contactInfo->fill($request->only(['email', 'phone', 'address']));
        $contactInfo->save();

        return back()->with('success', 'Contact information updated successfully.');
    }

    /**
     * Update social media links
     */
    public function updateSocialMedia(Request $request)
    {
        $request->validate([
            'facebook' => 'nullable|url|max:255',
            'twitter' => 'nullable|url|max:255',
            'linkedin' => 'nullable|url|max:255',
            'instagram' => 'nullable|url|max:255',
        ]);

        $socialMedia = SocialMediaLink::firstOrNew();
        $socialMedia->fill($request->only(['facebook', 'twitter', 'linkedin', 'instagram']));
        $socialMedia->save();

        return back()->with('success', 'Social media links updated successfully.');
    }

    /**
     * Store a new brand
     */
    public function storeBrand(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'logo' => 'required|image|mimes:jpeg,png,jpg,gif|max:5120', // 5MB max
            'website_url' => 'nullable|url|max:255',
        ]);

        // Handle logo upload
        if ($request->hasFile('logo')) {
            $logoPath = $request->file('logo')->store('brands/logos', 'public');
        }

        $brand = Brand::create([
            'name' => $request->name,
            'logo_path' => $logoPath,
            'website_url' => $request->website_url,
            'sort_order' => Brand::max('sort_order') + 1,
            'is_active' => true,
        ]);

        return back()->with('success', 'Brand added successfully.');
    }

    /**
     * Update an existing brand
     */
    public function updateBrand(Request $request, Brand $brand)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'logo' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:5120',
            'website_url' => 'nullable|url|max:255',
        ]);

        $data = $request->only(['name', 'website_url']);

        // Handle logo upload if new logo is provided
        if ($request->hasFile('logo')) {
            // Delete old logo
            if ($brand->logo_path && Storage::disk('public')->exists($brand->logo_path)) {
                Storage::disk('public')->delete($brand->logo_path);
            }
            $data['logo_path'] = $request->file('logo')->store('brands/logos', 'public');
        }

        $brand->update($data);

        return back()->with('success', 'Brand updated successfully.');
    }

    /**
     * Delete a brand
     */
    public function deleteBrand(Brand $brand)
    {
        // Delete logo file
        if ($brand->logo_path && Storage::disk('public')->exists($brand->logo_path)) {
            Storage::disk('public')->delete($brand->logo_path);
        }

        $brand->delete();

        return back()->with('success', 'Brand deleted successfully.');
    }

    /**
     * Update brand sort order
     */
    public function updateBrandOrder(Request $request)
    {
        $request->validate([
            'brands' => 'required|array',
            'brands.*.id' => 'required|exists:brands,id',
            'brands.*.sort_order' => 'required|integer',
        ]);

        foreach ($request->brands as $brandData) {
            Brand::where('id', $brandData['id'])
                ->update(['sort_order' => $brandData['sort_order']]);
        }

        return back()->with('success', 'Brand order updated successfully.');
    }

    /**
     * Toggle brand active status
     */
    public function toggleBrand(Brand $brand)
    {
        $brand->update(['is_active' => !$brand->is_active]);

        return back()->with('success', 'Brand status updated successfully.');
    }
}
