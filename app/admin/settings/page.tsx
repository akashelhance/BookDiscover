"use client"

import { useState } from "react"
import { siteConfig } from "../../../config/site"
import {
  Save,
  UploadCloud,
  Check,
  Globe,
  User,
  Link as LinkIcon,
  Search,
  DollarSign,
  Navigation,
  Mail,
  Megaphone,
  Target,
  Image as ImageIcon
} from "lucide-react"

export default function SettingsPage() {
  const [isSaving, setIsSaving] = useState(false)
  const [showToast, setShowToast] = useState(false)

  // Example Settings State synced from siteConfig
  const [settings, setSettings] = useState({
    siteName: siteConfig.name,
    tagline: siteConfig.tagline,
    description: siteConfig.seo.defaultDesc,
    founderName: siteConfig.founder.name,
    founderTitle: siteConfig.founder.title,
    founderBio: siteConfig.founder.bio.join('\n\n'),
    socialLinkedin: siteConfig.social.linkedin,
    socialTwitter: siteConfig.social.twitter,
    socialGithub: siteConfig.social.github,
    socialInstagram: siteConfig.social.instagram || "",
    socialYoutube: "",
    metaTitle: siteConfig.seo.defaultTitle,
    metaDesc: siteConfig.seo.defaultDesc,
    affiliateTag: siteConfig.affiliate.amazonTag,
    buyButtonText: siteConfig.affiliate.buyButtonText,
    affiliateDisclaimer: siteConfig.affiliate.disclaimer,
    contactEmail: siteConfig.contact.email,
    contactFormUrl: siteConfig.contact.formUrl,
    announcementEnabled: siteConfig.layout.announcementEnabled,
    announcementText: siteConfig.layout.announcementText,
    ctaText: "Start Your Reading Journey Today",
    ctaLabel: "Explore Books",
    ctaLink: "/books"
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setSettings(prev => ({ ...prev, [name]: value }))
  }

  const handleToggle = () => {
    setSettings(prev => ({ ...prev, announcementEnabled: !prev.announcementEnabled }))
  }

  const handleSave = () => {
    setIsSaving(true)
    // Mock save delay
    setTimeout(() => {
      setIsSaving(false)
      setShowToast(true)
      setTimeout(() => setShowToast(false), 3000)
    }, 800)
  }

  // UI Component: Section wrapper
  const Section = ({ title, description, icon: Icon, children }: any) => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-8">
      <div className="border-b border-gray-100 bg-gray-50/50 px-6 py-5 flex flex-col sm:flex-row sm:items-center">
        <div className="w-10 h-10 rounded-lg bg-white border border-gray-200 shadow-sm flex flex-shrink-0 items-center justify-center mr-4 text-gray-500 mb-4 sm:mb-0">
          <Icon size={18} />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
          <p className="text-sm text-gray-500 mt-0.5">{description}</p>
        </div>
      </div>
      <div className="p-6 md:p-8 space-y-6">
        {children}
      </div>
    </div>
  )

  // UI Component: Input Field
  const InputField = ({ label, name, type = "text", placeholder, isTextArea = false, value, onChange, desc }: any) => (
    <div>
      <label className="block text-sm font-medium text-gray-900 mb-1.5">{label}</label>
      {isTextArea ? (
        <textarea
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          rows={4}
          className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors sm:text-sm"
        />
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors sm:text-sm"
        />
      )}
      {desc && <p className="mt-2 text-xs text-gray-500">{desc}</p>}
    </div>
  )

  // UI Component: Upload Zone
  const UploadZone = ({ label }: { label: string }) => (
    <div>
      <label className="block text-sm font-medium text-gray-900 mb-2">{label}</label>
      <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center hover:bg-gray-50 transition-colors flex flex-col items-center justify-center cursor-pointer group">
        <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-3 group-hover:bg-emerald-100 transition-colors">
          <UploadCloud size={20} />
        </div>
        <p className="text-sm font-medium text-emerald-600 mb-1">Click to upload <span className="text-gray-500">or drag and drop</span></p>
        <p className="text-xs text-gray-400">SVG, PNG, JPG or GIF (max. 2MB)</p>
      </div>
    </div>
  )

  return (
    <div className="min-h-full bg-gray-50/50 pb-20 relative">

      {/* Toast Notification */}
      <div className={`fixed top-4 right-4 z-50 bg-gray-900 text-white px-5 py-3 rounded-xl shadow-xl flex items-center space-x-3 transform transition-all duration-300 ${showToast ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'}`}>
        <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
          <Check size={14} strokeWidth={3} className="text-white" />
        </div>
        <p className="text-sm font-medium">Settings saved successfully</p>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 pt-4 sm:pt-10">

        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Global Settings</h1>
            <p className="text-gray-500 text-sm mt-1">Manage core website configurations and variables.</p>
          </div>
          <button
            onClick={handleSave}
            disabled={isSaving}
            className="inline-flex items-center justify-center px-4 py-2 bg-emerald-600 text-white text-sm font-medium rounded-lg hover:bg-emerald-700 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 disabled:opacity-70 flex-shrink-0"
          >
            {isSaving ? (
              <span className="flex items-center">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                Saving...
              </span>
            ) : (
              <span className="flex items-center">
                <Save className="w-4 h-4 mr-2" />
                Save Changes
              </span>
            )}
          </button>
        </div>

        <div className="space-y-8">

          {/* 1. Website Information */}
          <Section title="Website Information" description="Basic details about your publication." icon={Globe}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField label="Website Name" name="siteName" value={settings.siteName} onChange={handleChange} />
              <InputField label="Tagline" name="tagline" value={settings.tagline} onChange={handleChange} />
            </div>
            <InputField label="Description (SEO-friendly)" name="description" value={settings.description} onChange={handleChange} isTextArea />
            <UploadZone label="Website Logo" />
          </Section>

          {/* 2. Founder Information */}
          <Section title="Founder Information" description="Details displayed on the About and team pages." icon={User}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField label="Founder Name" name="founderName" value={settings.founderName} onChange={handleChange} />
              <InputField label="Job Title" name="founderTitle" value={settings.founderTitle} onChange={handleChange} />
            </div>
            <InputField label="Founder Bio" name="founderBio" value={settings.founderBio} onChange={handleChange} isTextArea desc="Supports rich text rendering on the frontend." />
            <UploadZone label="Profile Photo" />
          </Section>

          {/* 3. Social Links */}
          <Section title="Social Profiles" description="Links to be used in the footer and founder sections." icon={LinkIcon}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField label="LinkedIn URL" name="socialLinkedin" value={settings.socialLinkedin} onChange={handleChange} placeholder="https://linkedin.com/..." />
              <InputField label="Twitter (X) URL" name="socialTwitter" value={settings.socialTwitter} onChange={handleChange} placeholder="https://twitter.com/..." />
              <InputField label="GitHub URL" name="socialGithub" value={settings.socialGithub} onChange={handleChange} placeholder="https://github.com/..." />
              <InputField label="Instagram URL" name="socialInstagram" value={settings.socialInstagram} onChange={handleChange} placeholder="https://instagram.com/..." desc="Optional" />
              <InputField label="YouTube URL" name="socialYoutube" value={settings.socialYoutube} onChange={handleChange} placeholder="https://youtube.com/..." desc="Optional" />
            </div>
          </Section>

          {/* 4. SEO Settings */}
          <Section title="SEO Settings" description="Global defaults for meta tags and Open Graph data." icon={Search}>
            <InputField label="Default Meta Title" name="metaTitle" value={settings.metaTitle} onChange={handleChange} desc={`${settings.metaTitle.length}/60 characters recommended`} />
            <InputField label="Default Meta Description" name="metaDesc" value={settings.metaDesc} onChange={handleChange} isTextArea desc={`${settings.metaDesc.length}/160 characters recommended`} />
            <div className="pt-4 border-t border-gray-100">
              <UploadZone label="Default Open Graph Image (For social sharing)" />
            </div>
          </Section>

          {/* 5. Affiliate Settings */}
          <Section title="Affiliate Settings" description="Monetization and link tracking." icon={DollarSign}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField label="Amazon Affiliate Tag" name="affiliateTag" value={settings.affiliateTag} onChange={handleChange} placeholder="bookdiscover-20" />
              <InputField label="Default Buy Button Text" name="buyButtonText" value={settings.buyButtonText} onChange={handleChange} />
            </div>
            <InputField label="Affiliate Disclaimer" name="affiliateDisclaimer" value={settings.affiliateDisclaimer} onChange={handleChange} isTextArea desc="Displayed at the bottom of book pages." />
          </Section>

          {/* 6. Navigation & Topbar */}
          <Section title="Navigation Links" description="Manage header menu items." icon={Navigation}>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium text-gray-900">Header Menu Configuration</p>
                  <p className="text-xs text-gray-500 mt-1">Home, Books, Categories, People.</p>
                </div>
                <button className="px-3 py-1.5 bg-white border border-gray-200 text-xs font-medium rounded-md hover:bg-gray-50 text-gray-700 shadow-sm transition-colors">Edit Links</button>
              </div>
              <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium text-gray-900">Footer Links Configuration</p>
                  <p className="text-xs text-gray-500 mt-1">Privacy, Terms, Sitemap, Help.</p>
                </div>
                <button className="px-3 py-1.5 bg-white border border-gray-200 text-xs font-medium rounded-md hover:bg-gray-50 text-gray-700 shadow-sm transition-colors">Edit Links</button>
              </div>
            </div>
          </Section>

          {/* 7. Announcement Bar */}
          <Section title="Announcement Bar" description="A global banner displayed at the very top of the site." icon={Megaphone}>
            <div className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
              <div>
                <h4 className="text-sm font-medium text-gray-900">Enable Announcement Bar</h4>
                <p className="text-xs text-gray-500 mt-0.5">Show a promotional banner globally.</p>
              </div>
              <button
                type="button"
                onClick={handleToggle}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 ${settings.announcementEnabled ? 'bg-emerald-500' : 'bg-gray-300'}`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${settings.announcementEnabled ? 'translate-x-6' : 'translate-x-1'}`} />
              </button>
            </div>
            {settings.announcementEnabled && (
              <InputField label="Message Text" name="announcementText" value={settings.announcementText} onChange={handleChange} />
            )}
          </Section>

          {/* 7. Contact Information */}
          <Section title="Contact Information" description="Where users can reach you." icon={Mail}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField label="Support Email" name="contactEmail" value={settings.contactEmail} onChange={handleChange} />
              <InputField label="Contact Form URL path" name="contactFormUrl" value={settings.contactFormUrl} onChange={handleChange} />
            </div>
          </Section>

          {/* 8. CTA Settings */}
          <Section title="Global Call To Action" description="Settings for the prominent bottom sections on marketing pages." icon={Target}>
            <InputField label="Default CTA Heading" name="ctaText" value={settings.ctaText} onChange={handleChange} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <InputField label="Button Label" name="ctaLabel" value={settings.ctaLabel} onChange={handleChange} />
              <InputField label="Destination Link" name="ctaLink" value={settings.ctaLink} onChange={handleChange} />
            </div>
          </Section>

        </div>
      </div>
    </div>
  )
}
