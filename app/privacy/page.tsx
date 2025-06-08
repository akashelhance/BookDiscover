import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy - How We Protect Your Data",
  description:
    "Learn how BookDiscover collects, uses, and protects your personal information. Our comprehensive privacy policy explains your rights and our data practices.",
  keywords: [
    "privacy policy",
    "data protection",
    "user privacy",
    "GDPR compliance",
    "data collection",
    "cookies policy",
    "user rights",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Privacy Policy - BookDiscover",
    description: "Learn how BookDiscover protects your personal information and respects your privacy rights.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy - BookDiscover",
    description: "Learn how BookDiscover protects your personal information and respects your privacy rights.",
  },
}

export default function PrivacyPolicyPage() {
  const lastUpdated = "December 8, 2024"

  // Schema.org structured data for legal document
  const privacyPolicySchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Privacy Policy",
    description: "BookDiscover's privacy policy explaining how we collect, use, and protect user data.",
    url: "https://bookdiscover.com/privacy",
    dateModified: lastUpdated,
    publisher: {
      "@type": "Organization",
      name: "BookDiscover",
      url: "https://bookdiscover.com",
    },
  }

  return (
    <>
      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(privacyPolicySchema) }} />

      <main className="min-h-screen bg-white">
        {/* Header Section */}
        <header className="bg-gradient-to-br from-slate-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <nav className="mb-8" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2 text-sm text-gray-500">
                <li>
                  <Link href="/" className="hover:text-gray-700 transition-colors">
                    Home
                  </Link>
                </li>
                <li className="text-gray-400">/</li>
                <li className="text-gray-900 font-medium">Privacy Policy</li>
              </ol>
            </nav>

            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal
              information.
            </p>
            <p className="text-sm text-gray-500 mt-6">
              <strong>Last updated:</strong> {lastUpdated}
            </p>
          </div>
        </header>

        {/* Content Section */}
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              {/* Introduction Section */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Introduction</h2>
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p>
                    Welcome to BookDiscover ("we," "our," or "us"). This Privacy Policy explains how we collect, use,
                    disclose, and safeguard your information when you visit our website and use our services. We are
                    committed to protecting your privacy and ensuring that your personal information is handled in a
                    safe and responsible manner.
                  </p>
                  <p>
                    By accessing or using our website, you acknowledge that you have read, understood, and agree to be
                    bound by the terms of this Privacy Policy. If you do not agree with the terms of this Privacy
                    Policy, please do not access or use our services.
                  </p>
                  <p>
                    This Privacy Policy applies to all information collected through our website, mobile applications,
                    and any related services, sales, marketing, or events (collectively, the "Services"). It does not
                    apply to information collected by third parties, including through any application or content that
                    may link to or be accessible from our Services.
                  </p>
                  <p>
                    We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will
                    alert you about any changes by updating the "Last updated" date of this Privacy Policy. Any changes
                    or modifications will be effective immediately upon posting the updated Privacy Policy on our
                    website.
                  </p>
                </div>
              </section>

              {/* Data Collection Section */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Data Collection</h2>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Information We Collect</h3>
                <div className="space-y-6 text-gray-700 leading-relaxed mb-8">
                  <p>
                    We may collect information about you in a variety of ways. The information we may collect on our
                    website includes both personal and non-personal information that you voluntarily provide to us when
                    you register with the Services, express an interest in obtaining information about us or our
                    products and services, or otherwise contact us.
                  </p>
                  <p>
                    <strong>Personal Data:</strong> Personally identifiable information, such as your name, email
                    address, postal address, and telephone number, that you voluntarily give to us when you choose to
                    participate in various activities related to the Services, such as creating an account, subscribing
                    to our newsletter, or contacting us with inquiries.
                  </p>
                  <p>
                    <strong>Derivative Data:</strong> Information our servers automatically collect when you access the
                    Services, such as your IP address, browser type, operating system, access times, and the pages you
                    have viewed directly before and after accessing the Services.
                  </p>
                </div>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">How We Use Your Information</h3>
                <div className="space-y-6 text-gray-700 leading-relaxed mb-8">
                  <p>
                    Having accurate information about you permits us to provide you with a smooth, efficient, and
                    customized experience. Specifically, we may use information collected about you via the Services to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Create and manage your account and provide you with customer support</li>
                    <li>Process your transactions and send you related information</li>
                    <li>Send you administrative information, such as changes to our terms, conditions, and policies</li>
                    <li>
                      Personalize your experience and deliver content and product offerings relevant to your interests
                    </li>
                    <li>
                      Generate a personal profile about you to make future visits to the Services more personalized
                    </li>
                    <li>Increase the efficiency and operation of the Services</li>
                    <li>Monitor and analyze usage and trends to improve your experience with the Services</li>
                  </ul>
                </div>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Information Sharing and Disclosure</h3>
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p>
                    We may share information we have collected about you in certain situations. Your information may be
                    disclosed as follows:
                  </p>
                  <p>
                    <strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is
                    necessary to respond to legal process, to investigate or remedy potential violations of our
                    policies, or to protect the rights, property, and safety of others, we may share your information as
                    permitted or required by any applicable law, rule, or regulation.
                  </p>
                  <p>
                    <strong>Business Transfers:</strong> We may share or transfer your information in connection with,
                    or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a
                    portion of our business to another company.
                  </p>
                </div>
              </section>

              {/* Cookies Policy Section */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Cookies Policy</h2>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">What Are Cookies</h3>
                <div className="space-y-6 text-gray-700 leading-relaxed mb-8">
                  <p>
                    Cookies are small text files that are placed on your computer or mobile device when you visit a
                    website. They are widely used to make websites work more efficiently and to provide information to
                    website owners. Cookies allow us to recognize your device and store some information about your
                    preferences or past actions.
                  </p>
                  <p>
                    We use cookies and similar tracking technologies to track activity on our Services and hold certain
                    information. These technologies are used to collect and track information and to improve and analyze
                    our Services.
                  </p>
                </div>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Types of Cookies We Use</h3>
                <div className="space-y-6 text-gray-700 leading-relaxed mb-8">
                  <p>
                    <strong>Essential Cookies:</strong> These cookies are necessary for the website to function and
                    cannot be switched off in our systems. They are usually only set in response to actions made by you
                    which amount to a request for services, such as setting your privacy preferences, logging in, or
                    filling in forms.
                  </p>
                  <p>
                    <strong>Performance Cookies:</strong> These cookies allow us to count visits and traffic sources so
                    we can measure and improve the performance of our site. They help us to know which pages are the
                    most and least popular and see how visitors move around the site.
                  </p>
                  <p>
                    <strong>Functional Cookies:</strong> These cookies enable the website to provide enhanced
                    functionality and personalization. They may be set by us or by third-party providers whose services
                    we have added to our pages.
                  </p>
                  <p>
                    <strong>Targeting Cookies:</strong> These cookies may be set through our site by our advertising
                    partners. They may be used by those companies to build a profile of your interests and show you
                    relevant adverts on other sites.
                  </p>
                </div>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Managing Cookies</h3>
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p>
                    You can control and manage cookies in various ways. Please note that removing or blocking cookies
                    can impact your user experience and parts of our website may no longer be fully accessible. Most web
                    browsers automatically accept cookies, but you can usually modify your browser setting to decline
                    cookies if you prefer.
                  </p>
                  <p>
                    If you choose to decline cookies, you may not be able to fully experience the interactive features
                    of our Services or websites you visit. You can learn more about cookies and how to manage them by
                    visiting your browser's help section or by visiting www.allaboutcookies.org.
                  </p>
                </div>
              </section>

              {/* User Rights Section */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">User Rights</h2>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Your Privacy Rights</h3>
                <div className="space-y-6 text-gray-700 leading-relaxed mb-8">
                  <p>
                    Depending on your location and applicable laws, you may have certain rights regarding your personal
                    information. These rights may include the right to access, correct, delete, or restrict the
                    processing of your personal data, as well as the right to data portability and to object to certain
                    processing activities.
                  </p>
                  <p>
                    <strong>Right to Access:</strong> You have the right to request copies of your personal data. We may
                    charge you a small fee for this service to cover administrative costs.
                  </p>
                  <p>
                    <strong>Right to Rectification:</strong> You have the right to request that we correct any
                    information you believe is inaccurate or complete information you believe is incomplete.
                  </p>
                  <p>
                    <strong>Right to Erasure:</strong> You have the right to request that we erase your personal data,
                    under certain conditions. This is sometimes known as the "right to be forgotten."
                  </p>
                </div>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">How to Exercise Your Rights</h3>
                <div className="space-y-6 text-gray-700 leading-relaxed mb-8">
                  <p>
                    If you would like to exercise any of your rights, please contact us using the contact information
                    provided below. We will respond to your request within a reasonable timeframe and in accordance with
                    applicable law. Please note that we may need to verify your identity before processing your request.
                  </p>
                  <p>
                    To protect your privacy and security, we take reasonable steps to verify your identity before
                    granting access to your personal information or making corrections. You may be required to provide
                    additional information to verify your identity.
                  </p>
                </div>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Data Retention</h3>
                <div className="space-y-6 text-gray-700 leading-relaxed mb-8">
                  <p>
                    We will retain your personal information only for as long as is necessary for the purposes set out
                    in this Privacy Policy. We will retain and use your information to the extent necessary to comply
                    with our legal obligations, resolve disputes, and enforce our policies.
                  </p>
                  <p>
                    When we no longer need your personal information, we will securely delete or destroy it in
                    accordance with our data retention policies and applicable law. Some information may be retained in
                    our backup systems for a limited period as part of our disaster recovery procedures.
                  </p>
                </div>

                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Security of Your Information</h3>
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p>
                    We use administrative, technical, and physical security measures to help protect your personal
                    information. While we have taken reasonable steps to secure the personal information you provide to
                    us, please be aware that despite our efforts, no security measures are perfect or impenetrable.
                  </p>
                  <p>
                    Any information disclosed online is vulnerable to interception and misuse by unauthorized parties.
                    Therefore, we cannot guarantee complete security if you provide personal information online. We
                    encourage you to use caution when sharing personal information online and to use strong, unique
                    passwords for your accounts.
                  </p>
                </div>
              </section>

              {/* Contact Information */}
              <section className="mb-12 bg-gray-50 rounded-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
                <div className="space-y-4 text-gray-700">
                  <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
                  <div className="space-y-2">
                    <p>
                      <strong>Email:</strong> privacy@bookdiscover.com
                    </p>
                    <p>
                      <strong>Phone:</strong> +1 (234) 567-890
                    </p>
                    <p>
                      <strong>Address:</strong> 123 Book Street, Reading City, RC 12345
                    </p>
                  </div>
                  <p className="text-sm text-gray-600 mt-6">
                    We will make every effort to respond to your inquiry within 30 days of receipt.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
