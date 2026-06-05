import { ArrowUpRight } from 'lucide-react';

import { Section } from '@/components/Section';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What kinds of businesses do you work with?',
    answer:
      'I work with small businesses, local brands, consultants, startups, and service-based companies that want a clearer and more professional online presence.',
  },
  {
    question: 'Can you redesign my current website?',
    answer:
      'Yes. If your current site has a usable foundation, I can improve the messaging, layout, mobile experience, and key pages without rebuilding everything from zero.',
  },
  {
    question: 'Can you build MERN projects too?',
    answer:
      'Yes. Alongside business websites and landing pages, I can also build custom web apps with dashboards, forms, and database-backed features when the project needs more functionality.',
  },
  {
    question: 'Do you provide SEO and digital marketing support?',
    answer:
      'Yes. I can set up your website with search-friendly page structure and support your marketing efforts with clearer landing pages, messaging, and page updates.',
  },
  {
    question: 'How do we get started?',
    answer:
      'Send a short project brief through the contact form or by email. I will review your goals, recommend the right scope, and outline the next practical steps.',
  },
];

const FAQ = () => {
  return (
    <Section
      id="faq"
      eyebrow="FAQ"
      title="Common questions before we start"
      description="A few quick answers to help you decide whether the project is the right fit before you get in touch."
    >
      <div className="mx-auto max-w-4xl border-y border-border">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((item, index) => (
            <AccordionItem key={item.question} value={`faq-${index}`} className="border-border">
              <AccordionTrigger className="py-6 text-left text-lg font-semibold text-foreground hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="pb-6 pr-6 text-base leading-8 text-muted-foreground sm:text-lg">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="mt-10 flex flex-col items-center justify-center gap-4 text-center sm:flex-row">
        <p className="text-lg font-semibold text-foreground">Not sure which kind of project fits your business?</p>
        <a href="#contact" className="btn-premium">
          Ask about your project
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </Section>
  );
};

export default FAQ;
