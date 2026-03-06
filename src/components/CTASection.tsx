import ScrollReveal from './ScrollReveal';

const CTASection = () => {
  return (
    <section className="section-padding bg-foreground" id="contact">
      <div className="container-site text-center">
        <ScrollReveal>
          <div className="sub-title mb-6 text-background/50">WORK WITH ME</div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h2 className="heading-xl text-background max-w-[800px] mx-auto">
            Ready to<br />hear more <span className="text-accent">"yes"</span>?
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <a
            href="mailto:hello@bogdankolomiyets.com"
            className="inline-block mt-12 px-12 py-5 bg-primary text-primary-foreground heading-md rounded-full hover:scale-105 transition-transform duration-300"
          >
            Hell yes!
          </a>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <a
            href="mailto:hello@bogdankolomiyets.com"
            className="block mt-8 text-sm text-background/40 hover:text-background/70 transition-colors"
          >
            hello@bogdankolomiyets.com
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTASection;
