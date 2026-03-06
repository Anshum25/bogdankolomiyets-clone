import ScrollReveal from './ScrollReveal';
import projectEstelle from '@/assets/project-estelle-1.avif';
import projectKivra from '@/assets/project-kivra-1.avif';
import projectShovk from '@/assets/project-shovk-1.avif';

const projects = [
  {
    name: 'Estelle',
    number: '01',
    description: 'Portfolio website for a sophisticated, high-end architectural firm.',
    image: projectEstelle,
  },
  {
    name: 'Kivra',
    number: '02',
    description: 'Website for architecture studio whose bold vision demands attention.',
    image: projectKivra,
  },
  {
    name: 'SHOVK STUDIO',
    number: '03',
    description: 'Website concept maximizing impact through minimal modern form.',
    image: projectShovk,
  },
];

const PortfolioSection = () => {
  return (
    <section className="section-padding" id="portfolio">
      <div className="container-site">
        <ScrollReveal>
          <div className="sub-title mb-4">What saying "YES!" looks like</div>
        </ScrollReveal>

        <div className="mt-12 space-y-0">
          {projects.map((project, i) => (
            <ScrollReveal key={project.name} delay={i * 100}>
              <div className="group border-t border-border py-8 md:py-12 cursor-pointer">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-1">
                    <span className="sub-title text-primary">({project.number})</span>
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="heading-md group-hover:text-primary transition-colors duration-300">
                      {project.name}
                    </h3>
                  </div>
                  <div className="md:col-span-4">
                    <p className="body-text text-sm">{project.description}</p>
                  </div>
                  <div className="md:col-span-3 flex justify-end">
                    <div className="overflow-hidden rounded-lg w-full max-w-[240px] aspect-[4/3]">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={300}>
          <div className="mt-12 flex justify-center">
            <a
              href="#portfolio"
              className="sub-title text-foreground hover:text-primary transition-colors flex items-center gap-3"
            >
              See all (05)
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PortfolioSection;
