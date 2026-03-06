import ScrollReveal from './ScrollReveal';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: '"A website that finally matched the level of our business"',
    text: "Bogdan was exceptional from start to finish! He didn't just design and build our website, he helped us figure out what we really wanted to say and how to bring it to life. The process was clear and collaborative, and the final site feels like us: professional, confident, and true to what we do.",
    name: 'Khris',
    role: 'Founder, Marketing Agency',
    rotation: -3,
  },
  {
    quote: '"From generic to premium"',
    text: "Bogdan completely transformed our old, generic website into something that finally represents who we are. The difference was clear right away. The new site feels premium, focused, and much more aligned with the level we operate at.",
    name: 'Clara',
    role: 'Founder, Consulting Firm',
    rotation: 2,
  },
  {
    quote: '"A premium presence, without trying too hard"',
    text: "Bogdan helped us move from a generic Squarespace website to something much more refined and confident. The new design feels premium without trying too hard, and it perfectly captures the balance we were aiming for.",
    name: 'Ariel',
    role: 'Director, Interior Design Studio',
    rotation: -2,
  },
  {
    quote: '"A website that feels intentional"',
    text: "Everything about the final result feels thoughtful and deliberate. Bogdan brought real structure and clarity to our website, helping us express what we do and why it matters in a simple, confident way.",
    name: 'Mattias',
    role: 'Principal, Architecture Firm',
    rotation: 3,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding overflow-hidden" id="testimonials">
      <div className="container-site">
        <ScrollReveal>
          <h2 className="heading-lg text-center mb-16">
            They said <span className="text-accent">"yes!"</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1000px] mx-auto">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 150}>
              <div
                className="bg-card rounded-xl p-8 md:p-10 hover:bg-secondary transition-colors duration-300"
                style={{ transform: `rotate(${t.rotation}deg)` }}
              >
                <h3 className="heading-md mb-4 text-foreground">{t.quote}</h3>
                <p className="body-text text-sm mb-8">{t.text}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold font-heading">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
