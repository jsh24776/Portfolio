import React, { useState } from 'react';
import { Mail, Github, Copy, Check, Send, ArrowUpRight, MessageSquare, Info } from 'lucide-react';

export const Contact: React.FC = () => {
  const contactEmail = 'joshuaregidor57@gmail.com';
  const githubProfile = 'https://github.com/jsh24776';

  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      // Construct mailto link as direct fallback
      const mailtoUrl = `mailto:${contactEmail}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(
        `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
      )}`;
      window.location.href = mailtoUrl;
    }, 800);
  };

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#E5E5E5] dark:border-[#262626]">
          <div className="space-y-2">
            <div className="text-xs font-semibold tracking-wider text-[#737373] dark:text-[#A3A3A3] uppercase">
              Initiate Dialogue
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#171717] dark:text-[#F5F5F5]">
              Looking for dependable support?
            </h2>
          </div>
          <p className="text-sm text-[#737373] dark:text-[#A3A3A3] max-w-md">
            I'm open to Virtual Assistant opportunities and entry-level technology roles where I can bring practical experience, digital skills, and a willingness to learn.
          </p>
        </div>

        {/* Contact Layout: Split Info & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Direct Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              <h3 className="text-sm font-semibold tracking-wide uppercase text-[#737373] dark:text-[#A3A3A3]">
                Direct Contact Channels
              </h3>
              <p className="text-sm text-[#737373] dark:text-[#A3A3A3] leading-relaxed">
                If you're hiring a Virtual Assistant or have an entry-level technology opportunity, feel free to get in touch.
              </p>
            </div>

            {/* Email Card with Copy Button */}
            <div className="p-5 rounded-xl border border-[#E5E5E5] dark:border-[#262626] bg-white/40 dark:bg-neutral-900/30 space-y-3">
              <div className="flex items-center justify-between text-xs text-[#737373] dark:text-[#A3A3A3]">
                <span className="flex items-center gap-1.5 font-medium">
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email Address</span>
                </span>
                <span className="font-mono text-[11px]">Primary</span>
              </div>

              <div className="flex items-center justify-between gap-3">
                <span className="font-mono text-sm font-semibold text-[#171717] dark:text-[#F5F5F5] truncate">
                  {contactEmail}
                </span>

                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 text-xs font-medium border border-[#E5E5E5] dark:border-[#262626] hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors flex items-center gap-1.5 shrink-0"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-500">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#737373] dark:text-[#A3A3A3]" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* GitHub Card */}
            <div className="p-5 rounded-xl border border-[#E5E5E5] dark:border-[#262626] bg-white/40 dark:bg-neutral-900/30 space-y-3">
              <div className="flex items-center justify-between text-xs text-[#737373] dark:text-[#A3A3A3]">
                <span className="flex items-center gap-1.5 font-medium">
                  <Github className="w-3.5 h-3.5" />
                  <span>Version Control & Repositories</span>
                </span>
                <span className="font-mono text-[11px]">Public</span>
              </div>

              <div className="flex items-center justify-between gap-3">
                <span className="font-mono text-sm font-semibold text-[#171717] dark:text-[#F5F5F5]">
                  github.com/jsh24776
                </span>

                <a
                  href={githubProfile}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 text-xs font-medium border border-[#E5E5E5] dark:border-[#262626] hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors flex items-center gap-1.5 shrink-0"
                >
                  <span>Visit Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Availability Badge */}
            <div className="p-4 rounded-xl border border-[#E5E5E5] dark:border-[#262626] bg-neutral-100/50 dark:bg-neutral-900/40 text-xs text-[#737373] dark:text-[#A3A3A3] space-y-1">
              <div className="font-semibold text-[#171717] dark:text-[#F5F5F5]">
                Current Availability
              </div>
              <div>
                Open to Virtual Assistant opportunities and entry-level technology roles.
              </div>
            </div>
          </div>

          {/* Interactive Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl border border-[#E5E5E5] dark:border-[#262626] bg-white/40 dark:bg-neutral-900/30 space-y-6">
              <div className="space-y-1 pb-4 border-b border-[#E5E5E5] dark:border-[#262626]">
                <h3 className="text-lg font-bold text-[#171717] dark:text-[#F5F5F5]">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-[#737373] dark:text-[#A3A3A3]">
                  Fill out the form below to initiate communication.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-[#E5E5E5] dark:border-[#262626] space-y-3 text-center">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto">
                    <Check className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-[#171717] dark:text-[#F5F5F5]">
                    Message Prepared
                  </h4>
                  <p className="text-xs text-[#737373] dark:text-[#A3A3A3] max-w-sm mx-auto">
                    Your email client has been prompted to send this message to {contactEmail}. Thank you for connecting!
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="mt-2 px-4 py-1.5 text-xs font-semibold text-[#171717] dark:text-[#F5F5F5] border border-[#E5E5E5] dark:border-[#262626] rounded-lg hover:bg-white dark:hover:bg-neutral-700 transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-[#171717] dark:text-[#E5E5E5]">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Jane Doe"
                        className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-[#E5E5E5] dark:border-[#262626] bg-white dark:bg-neutral-900 text-[#171717] dark:text-[#F5F5F5] placeholder:text-[#A3A3A3] focus:outline-none focus:ring-1 focus:ring-[#171717] dark:focus:ring-white"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-[#171717] dark:text-[#E5E5E5]">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="jane@example.com"
                        className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-[#E5E5E5] dark:border-[#262626] bg-white dark:bg-neutral-900 text-[#171717] dark:text-[#F5F5F5] placeholder:text-[#A3A3A3] focus:outline-none focus:ring-1 focus:ring-[#171717] dark:focus:ring-white"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-[#171717] dark:text-[#E5E5E5]">
                      Subject / Topic
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Virtual Assistant opportunity / Entry-level tech role"
                      className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-[#E5E5E5] dark:border-[#262626] bg-white dark:bg-neutral-900 text-[#171717] dark:text-[#F5F5F5] placeholder:text-[#A3A3A3] focus:outline-none focus:ring-1 focus:ring-[#171717] dark:focus:ring-white"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-[#171717] dark:text-[#E5E5E5]">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Gabriel, I came across your portfolio..."
                      className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-[#E5E5E5] dark:border-[#262626] bg-white dark:bg-neutral-900 text-[#171717] dark:text-[#F5F5F5] placeholder:text-[#A3A3A3] focus:outline-none focus:ring-1 focus:ring-[#171717] dark:focus:ring-white resize-y"
                    />
                  </div>

                  {/* Delivery Note */}
                  <div className="flex items-start gap-2 text-[11px] text-[#737373] dark:text-[#A3A3A3] p-3 rounded-lg bg-neutral-100/60 dark:bg-neutral-800/40 border border-[#E5E5E5] dark:border-[#262626]">
                    <Info className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                    <span>
                      Direct message submissions open your local email client addressed to {contactEmail}. In production, this can also hook into standard serverless endpoints (e.g. Resend, SendGrid, or Cloud Run API).
                    </span>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3 text-xs font-semibold text-white bg-[#171717] dark:bg-white dark:text-[#111111] hover:bg-neutral-800 dark:hover:bg-neutral-200 rounded-lg transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {submitting ? (
                      <span>Preparing Transmission...</span>
                    ) : (
                      <>
                        <span>Submit Message</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
