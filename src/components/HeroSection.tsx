import { motion } from 'framer-motion';
import heroImage from '@/assets/hero-photo.webp';
import ScrollReveal from './ScrollReveal';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="container-site relative z-10 pt-32 pb-20">
        <div className="max-w-[1200px]">
          <motion.h1
            className="heading-xl"
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <span className="block">Websites that make</span>
            <span className="block">
              <span className="text-foreground">clients </span>
              <span className="text-foreground">say </span>
              <span className="text-accent">"Yes!"</span>
            </span>
          </motion.h1>

          <motion.div
            className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-12 gap-6 items-end"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="body-text md:col-span-5 max-w-md">
              Your website sets your level before you speak. I build the kind that puts you a step above.
            </p>
            <div className="md:col-span-7 flex justify-end">
              <span className="sub-title">(SCROLL TO SEE HOW)</span>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute right-0 bottom-0 w-[300px] md:w-[400px] lg:w-[500px] xl:w-[600px] pointer-events-none"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.4 }}
      >
        <img
          src={heroImage}
          alt="Portrait photo"
          className="w-full h-auto object-cover"
          loading="eager"
        />
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
