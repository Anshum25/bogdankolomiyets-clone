import { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import { ChevronUp } from 'lucide-react';

const faqs = [
  {
    q: 'Who is this for?',
    a: "I work with companies built on expertise — consultants, studios, firms, and specialists. The kind of businesses where trust and reputation really drive results. If your work is strong but your website doesn't show it, I help close that gap so your online presence actually matches your level.",
  },
  {
    q: 'Who is this not for?',
    a: "If you're after \"Apple vibes\" on a ramen budget, or hoping a redesign will revive a business that hasn't had clients in years, I'll have to pass. But if you want something thoughtful, real, and built to last — that's where I come in.",
  },
  {
    q: 'Do you only do design, or development as well?',
    a: "Both, so you get a complete, ready-to-use website. I handle everything from start to finish and deliver a finished product that's ready to go live.",
  },
  {
    q: 'How much does a website cost?',
    a: 'It really depends on the size and complexity of your project, but most websites I design and build land somewhere between $2.5K and $8K USD.',
  },
  {
    q: 'How long does it take to create a website?',
    a: "Most projects take around 4–8 weeks, depending on size and feedback speed. Smaller sites are usually done in about a month, while bigger builds can take closer to two.",
  },
  {
    q: 'Do you guarantee results?',
    a: "Absolutely! I'll create a website that attracts the right clients, highlights your expertise, and earns genuine trust — all before a single conversation happens. Everything under my control is guaranteed.",
  },
  {
    q: 'How do we start?',
    a: "If this sounds like something that fits, just fill up the form or email me at hello@bogdankolomiyets.com. We'll have a quick chat to see if we're a good fit.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section-padding" id="faq">
      <div className="container-site max-w-[900px]">
        <ScrollReveal>
          <h2 className="heading-lg text-center mb-16">
            Got questions?
          </h2>
        </ScrollReveal>

        <div className="divide-y divide-border">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <div className="py-6">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 text-left group"
                >
                  <div className="flex items-center gap-4">
                    <span className="sub-title text-primary">(Q{i + 1})</span>
                    <h3 className="text-lg md:text-xl font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
                      {faq.q}
                    </h3>
                  </div>
                  <ChevronUp
                    className={`w-6 h-6 text-muted-foreground transition-transform duration-300 flex-shrink-0 ${
                      openIndex === i ? '' : 'rotate-180'
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-out ${
                    openIndex === i ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="body-text text-sm pl-16">{faq.a}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
