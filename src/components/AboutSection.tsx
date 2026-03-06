import ScrollReveal from './ScrollReveal';
import aboutPhoto from '@/assets/about-polaroid.webp';

const AboutSection = () => {
  return (
    <section className="section-padding" id="about">
      <div className="container-site">
        <ScrollReveal>
          <div className="sub-title mb-8">About</div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-7">
            <ScrollReveal delay={100}>
              <p className="text-xl md:text-2xl lg:text-3xl font-heading font-medium leading-snug text-foreground">
                Hi, I'm Bogdan. I create websites that position expertise-led service businesses as the obvious choice — without overexplaining or overselling.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="body-text mt-8">
                Most expertise-led companies websites are like bad first dates. They try too hard, confuse everyone, and nobody wants to commit. I build websites that communicate clearly, project confidence, and make "yes" feel natural.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <a
                href="#about"
                className="inline-flex items-center gap-2 mt-8 text-sm font-medium text-foreground hover:text-primary transition-colors uppercase tracking-wider"
              >
                Learn about me →
              </a>
            </ScrollReveal>
          </div>

          <div className="md:col-span-5 flex justify-center">
            <ScrollReveal delay={200}>
              <div className="relative">
                <div className="bg-card p-3 pb-12 rounded-sm shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                  <img
                    src={aboutPhoto}
                    alt="Person with dog and laptop"
                    className="w-full max-w-[320px] aspect-square object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
