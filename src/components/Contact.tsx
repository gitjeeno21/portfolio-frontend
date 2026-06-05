import { ChangeEvent, FormEvent, useState } from 'react';
import { ArrowUpRight, CheckCircle2, Mail, MapPin } from 'lucide-react';

import { Section } from '@/components/Section';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const contactEmail = 'jeenojk01@gmail.com';

const contactInfo = [
  {
    label: 'Email',
    value: contactEmail,
    href: `mailto:${contactEmail}`,
    icon: Mail,
  },
  {
    label: 'Location',
    value: 'India / Remote',
    icon: MapPin,
  },
];

const serviceOptions = ['Website', 'Web App', 'SEO', 'Digital Marketing'];
const timelineOptions = ['As soon as possible', 'This month', 'Next 1-2 months', 'Just exploring'];

const initialState = {
  name: '',
  business: '',
  email: '',
  service: serviceOptions[0],
  timeline: timelineOptions[0],
  message: '',
};

const Contact = () => {
  const [formData, setFormData] = useState(initialState);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const isFormValid =
    formData.name.trim().length > 0 &&
    formData.email.trim().length > 0 &&
    formData.service.trim().length > 0 &&
    formData.message.trim().length > 0;

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (isSubmitted) {
      setIsSubmitted(false);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subjectSource = formData.business.trim() || formData.name.trim();
    const messageBody = [
      `Name: ${formData.name}`,
      `Business: ${formData.business || 'Not provided'}`,
      `Email: ${formData.email}`,
      `Service needed: ${formData.service}`,
      `Timeline: ${formData.timeline}`,
      '',
      'Project details:',
      formData.message,
    ].join('\n');

    const mailtoLink = `mailto:${contactEmail}?subject=${encodeURIComponent(
      `Project enquiry from ${subjectSource}`,
    )}&body=${encodeURIComponent(messageBody)}`;

    setIsSubmitted(true);
    setFormData(initialState);
    window.location.href = mailtoLink;
  };

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Tell me about your business and what you need online"
      description="Send a short message and I will help you choose the right website, landing page, web app, or update for your goals."
    >
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="space-y-8">
          <div>
            <h3 className="text-3xl font-semibold leading-tight text-foreground">
              A strong first message can be short.
            </h3>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Share what your business does, what you want to build or improve, and what kind of
              result you want. I will reply with a practical next step.
            </p>
          </div>

          <div className="space-y-4">
            {contactInfo.map((info) => {
              const content = (
                <>
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <info.icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-base text-muted-foreground">{info.label}</p>
                    <p className="truncate text-lg font-semibold text-foreground">{info.value}</p>
                  </div>
                </>
              );

              if (info.href) {
                return (
                  <a key={info.label} href={info.href} className="flex items-center gap-4">
                    {content}
                  </a>
                );
              }

              return (
                <div key={info.label} className="flex items-center gap-4">
                  {content}
                </div>
              );
            })}
          </div>

          <div className="border-t border-border pt-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-secondary">
              Helpful details
            </p>
            <div className="mt-4 space-y-3">
              {[
                'Your business or brand name',
                'The kind of website or service you need',
                'What you want the website to help you achieve',
                'Any current website links or references',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-base leading-7 text-foreground">
                  <span className="mt-2 h-2 w-2 rounded-full bg-secondary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-lg border border-border bg-white p-5 shadow-[var(--shadow-soft)] sm:p-7" noValidate>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="name" className="text-base font-semibold text-foreground">
                Name
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="field-base"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="business" className="text-base font-semibold text-foreground">
                Business
              </label>
              <Input
                id="business"
                name="business"
                type="text"
                placeholder="Business or brand name"
                value={formData.business}
                onChange={handleInputChange}
                className="field-base"
              />
            </div>
          </div>

          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="email" className="text-base font-semibold text-foreground">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@business.com"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="field-base"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="service" className="text-base font-semibold text-foreground">
                Service
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                className="field-base w-full appearance-none"
              >
                {serviceOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-5 space-y-2">
            <label htmlFor="timeline" className="text-base font-semibold text-foreground">
              Timeline
            </label>
            <select
              id="timeline"
              name="timeline"
              value={formData.timeline}
              onChange={handleInputChange}
              className="field-base w-full appearance-none"
            >
              {timelineOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-5 space-y-2">
              <label htmlFor="message" className="text-base font-semibold text-foreground">
              Project details
              </label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell me about your business, the kind of website or feature you need, and what you want customers to do."
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={7}
              className="field-base min-h-[180px] resize-y py-3"
            />
          </div>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-base leading-7 text-muted-foreground">
              Submitting opens your email app with your message already prepared.
            </p>
            <Button type="submit" disabled={!isFormValid} className="btn-premium w-full sm:w-auto">
              Open email draft
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </div>

          {isSubmitted ? (
            <div className="mt-5 flex items-start gap-3 rounded-lg border border-emerald-500/20 bg-emerald-50 p-4 text-base text-emerald-900">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
              <div>
                <p className="font-semibold text-emerald-900">Email draft ready</p>
                <p className="mt-1 text-emerald-800">
                  Your default mail app should open so you can review and send the message directly.
                </p>
              </div>
            </div>
          ) : null}
        </form>
      </div>
    </Section>
  );
};

export default Contact;
