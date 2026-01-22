'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  CheckCircle2,
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  Users,
  Building,
  Calendar,
} from 'lucide-react';

const benefits = [
  'Personalized walkthrough of all features',
  'See how CLIMATRIX fits your specific needs',
  'Get answers to your questions in real-time',
  'Learn about implementation and onboarding',
  'Discuss pricing and volume discounts',
];

const companySizes = [
  '1-10 employees',
  '11-50 employees',
  '51-200 employees',
  '201-500 employees',
  '500+ employees',
];

export default function DemoPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    companySize: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setLoading(false);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 lg:pt-28">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left side - Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6">
                See CLIMATRIX
                <span className="block gradient-text">in Action</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Schedule a personalized demo with our team to see how CLIMATRIX
                can help you track, report, and reduce your carbon footprint.
              </p>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  What you&apos;ll get:
                </h3>
                <ul className="space-y-3">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Duration</p>
                    <p className="font-semibold text-gray-900">30 minutes</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary-100 flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-secondary-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Response Time</p>
                    <p className="font-semibold text-gray-900">Within 24 hours</p>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="mt-8 space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Or reach out directly:
                </h3>
                <a
                  href="mailto:luvchik@climatrix.com"
                  className="flex items-center gap-3 text-gray-600 hover:text-primary-600 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  luvchik@climatrix.com
                </a>
              </div>
            </motion.div>

            {/* Right side - Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
            >
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-accent-100 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8 text-accent-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Thank You!
                  </h2>
                  <p className="text-gray-600 mb-6">
                    We&apos;ve received your request and will be in touch within 24 hours
                    to schedule your personalized demo.
                  </p>
                  <a
                    href="https://app.climatrix.com/register"
                    className="inline-flex items-center gap-2 gradient-bg text-white font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-all"
                  >
                    Start Free Trial Now
                  </a>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Request a Demo
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1.5">
                          First Name *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1.5">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                        placeholder="john@company.com"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1.5">
                          Company *
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          required
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                          placeholder="ACME Inc."
                        />
                      </div>
                      <div>
                        <label htmlFor="companySize" className="block text-sm font-medium text-gray-700 mb-1.5">
                          Company Size *
                        </label>
                        <select
                          id="companySize"
                          name="companySize"
                          required
                          value={formData.companySize}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all bg-white"
                        >
                          <option value="">Select size</option>
                          {companySizes.map((size) => (
                            <option key={size} value={size}>
                              {size}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Phone (optional)
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                        What are you looking to achieve? (optional)
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all resize-none"
                        placeholder="Tell us about your carbon accounting needs..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full inline-flex items-center justify-center gap-2 gradient-bg text-white font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Request Demo
                        </>
                      )}
                    </button>

                    <p className="text-xs text-center text-gray-500">
                      By submitting this form, you agree to our{' '}
                      <a href="/privacy" className="text-primary-600 hover:underline">
                        Privacy Policy
                      </a>
                      .
                    </p>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Companies Choose CLIMATRIX
            </h2>
            <p className="text-lg text-gray-600">
              Join leading organizations that trust CLIMATRIX for their carbon accounting needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: 'Expert Support',
                description: 'Our team of sustainability experts is here to help you every step of the way.',
              },
              {
                icon: Building,
                title: 'Enterprise Ready',
                description: 'Built for scale with SOC 2 ready security, GDPR compliance, and 99.9% uptime.',
              },
              {
                icon: CheckCircle2,
                title: 'Proven Results',
                description: 'Companies using CLIMATRIX have reduced their reporting time by up to 80%.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center"
              >
                <div className="inline-flex p-4 rounded-xl bg-primary-100 mb-4">
                  <item.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
