import ScrollReveal from './ScrollReveal';

const IntroSection = () => {
  return (
    <section className="section-padding" id="intro">
      <div className="container-site">
        <ScrollReveal>
          <div className="sub-title mb-8">What I do</div>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <h2 className="heading-lg text-center max-w-[1100px] mx-auto">
            I build websites for{' '}
            <span className="text-accent">expertise-led</span>{' '}
            companies that make their value undeniable and{' '}
            <span className="text-accent">"yes"</span> inevitable.
          </h2>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default IntroSection;
