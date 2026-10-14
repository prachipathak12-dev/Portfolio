import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, AlertCircle, Loader2 } from 'lucide-react';
import { LinkedInIcon } from './icons/LinkedInIcon';

export const ContactSection: React.FC = () => {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);
    setIsSubmitted(false);

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY?.trim();

    if (!accessKey) {
      setIsSubmitting(false);
      setErrorMessage(
        'Web3Forms access key is not set in .env yet. Click below to send directly via your mail client, or add your key to .env.'
      );
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          subject: formData.subject || `Inquiry from ${formData.name} via Portfolio`,
          message: formData.message,
          from_name: `${formData.name} (Portfolio Inquiry)`,
          botcheck: ''
        })
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setErrorMessage(
          data.message || 'Failed to send message. Please try again or open your email app.'
        );
      }
    } catch {
      setErrorMessage(
        'Network error occurred while sending. Please try again or open your email app.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-6 md:p-10 lg:p-12 animate-fade-in space-y-12">
      {/* Page Title */}
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white section-heading">
          Contact
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Contact Cards */}
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-[#202027] p-5 rounded-2xl border border-[#2e2e38] flex items-center gap-4">
            <div className="w-11 h-11 rounded-xl bg-[#00a3e0]/10 text-[#00a3e0] flex items-center justify-center shrink-0">
              <MapPin size={22} />
            </div>
            <div>
              <span className="text-[11px] text-[#7f7f90] uppercase font-semibold block">
                Location
              </span>
              <span className="text-sm text-white font-medium">
                {personal.address}
              </span>
            </div>
          </div>

          <a
            href={`mailto:${personal.email}`}
            className="bg-[#202027] p-5 rounded-2xl border border-[#2e2e38] flex items-center gap-4 hover:border-[#00a3e0]/50 transition-colors group block"
          >
            <div className="w-11 h-11 rounded-xl bg-[#00a3e0]/10 text-[#00a3e0] flex items-center justify-center shrink-0 group-hover:bg-[#00a3e0] group-hover:text-white transition-colors">
              <Mail size={22} />
            </div>
            <div className="overflow-hidden">
              <span className="text-[11px] text-[#7f7f90] uppercase font-semibold block">
                Email
              </span>
              <span className="text-sm text-white font-medium truncate block group-hover:text-[#00a3e0] transition-colors">
                {personal.email}
              </span>
            </div>
          </a>

          <a
            href={`tel:${personal.phone}`}
            className="bg-[#202027] p-5 rounded-2xl border border-[#2e2e38] flex items-center gap-4 hover:border-[#00a3e0]/50 transition-colors group block"
          >
            <div className="w-11 h-11 rounded-xl bg-[#00a3e0]/10 text-[#00a3e0] flex items-center justify-center shrink-0 group-hover:bg-[#00a3e0] group-hover:text-white transition-colors">
              <Phone size={22} />
            </div>
            <div>
              <span className="text-[11px] text-[#7f7f90] uppercase font-semibold block">
                Phone
              </span>
              <span className="text-sm text-white font-medium group-hover:text-[#00a3e0] transition-colors">
                +91 {personal.phone}
              </span>
            </div>
          </a>

          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#202027] p-5 rounded-2xl border border-[#2e2e38] flex items-center gap-4 hover:border-[#00a3e0]/50 transition-colors group block"
          >
            <div className="w-11 h-11 rounded-xl bg-[#00a3e0]/10 text-[#00a3e0] flex items-center justify-center shrink-0 group-hover:bg-[#00a3e0] group-hover:text-white transition-colors">
              <LinkedInIcon size={22} />
            </div>
            <div className="overflow-hidden">
              <span className="text-[11px] text-[#7f7f90] uppercase font-semibold block">
                LinkedIn
              </span>
              <span className="text-sm text-white font-medium truncate block group-hover:text-[#00a3e0] transition-colors">
                {personal.linkedinHandle}
              </span>
            </div>
          </a>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-8 bg-[#202027] p-6 sm:p-8 rounded-3xl border border-[#2e2e38] shadow-xl">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-white mb-1 flex items-center gap-2">
              <MessageSquare size={20} className="text-[#00a3e0]" />
              How Can I <span className="text-[#00a3e0]">Help You?</span>
            </h3>
            <p className="text-xs sm:text-sm text-[#8c8c9c]">
              Feel free to reach out for collaboration, opportunities, or technical inquiries.
            </p>
          </div>

          {isSubmitted && (
            <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center gap-3 text-sm animate-fade-in">
              <CheckCircle2 size={18} className="shrink-0" />
              <span>Thank you! Your message has been sent successfully to Prachi Pathak. I will get back to you shortly.</span>
            </div>
          )}

          {errorMessage && (
            <div className="mb-6 p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm animate-fade-in">
              <div className="flex items-start sm:items-center gap-2.5">
                <AlertCircle size={18} className="shrink-0 text-amber-400 mt-0.5 sm:mt-0" />
                <span>{errorMessage}</span>
              </div>
              <a
                href={`mailto:${personal.email}?subject=${encodeURIComponent(
                  formData.subject || 'Portfolio Inquiry'
                )}&body=${encodeURIComponent(
                  `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
                )}`}
                className="shrink-0 px-3.5 py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-white font-medium transition-colors text-center inline-flex items-center justify-center gap-1.5 self-start sm:self-auto"
              >
                <Mail size={14} />
                <span>Open in Mail App</span>
              </a>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Honeypot for spam protection */}
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#8b8b9c] uppercase mb-1.5">
                  Full Name <span className="text-[#00a3e0]">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-xl bg-[#191920] border border-[#2e2e38] text-white text-sm focus:outline-none focus:border-[#00a3e0] transition-colors placeholder-[#555562]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#8b8b9c] uppercase mb-1.5">
                  Email Address <span className="text-[#00a3e0]">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-[#191920] border border-[#2e2e38] text-white text-sm focus:outline-none focus:border-[#00a3e0] transition-colors placeholder-[#555562]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#8b8b9c] uppercase mb-1.5">
                Subject <span className="text-[#00a3e0]">*</span>
              </label>
              <input
                type="text"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                placeholder="AI/ML Project Opportunity"
                className="w-full px-4 py-3 rounded-xl bg-[#191920] border border-[#2e2e38] text-white text-sm focus:outline-none focus:border-[#00a3e0] transition-colors placeholder-[#555562]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#8b8b9c] uppercase mb-1.5">
                Message <span className="text-[#00a3e0]">*</span>
              </label>
              <textarea
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                className="w-full px-4 py-3 rounded-xl bg-[#191920] border border-[#2e2e38] text-white text-sm focus:outline-none focus:border-[#00a3e0] transition-colors placeholder-[#555562] resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="px-7 py-3 rounded-full bg-[#00a3e0] text-white font-medium text-sm hover:bg-[#008fca] transition-all duration-300 shadow-lg shadow-[#00a3e0]/25 flex items-center gap-2 disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  <span>Sending Message...</span>
                </>
              ) : (
                <>
                  <Send size={16} />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

