import { Card } from "@/components/ui/card";
import img3 from "@/assets/Mari.Nutri.jpg";
import img4 from "@/assets/Saloncapa.png";
import img5 from "@/assets/Capa_ande_card.png";
import img6 from "@/assets/odonto.png";
import img7 from "@/assets/capaPsi.png";

const Projects = () => {
  const projects = [
    {
      title: "Psicóloga Angela ",
      type: "LP- Landing Page com Formulário",
      image: img7,
      site: "https://psi-angela.alinelima.dev/",
    },
    {
      title: "Beauty Salon",
      type: "Site completo",
      image: img4,
      site: "https://salon-x-nu.vercel.app/",
    },
    {
      title: "ONG ANDE",
      type: "Landing Page",
      image: img5,
      site: "https://ong-ande.vercel.app/",
    },
    {
      title: "Nutricionista",
      type: "Landing Page",
      image: img3,
      site: "https://marianne-nutricionista.vercel.app/",
    },
    {
      title: "Clínica Odontológica",
      type: "SPA - Single Page Application",
      image: img6,
      site: "https://odonto-care.alinelima.dev/",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-6xl space-y-12">
        {/* Cabeçalho */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Projetos</h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.site}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="overflow-hidden border-border hover:border-primary transition-all duration-300">
                {/* Imagem */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Texto mínimo */}
                <div className="p-4 space-y-1">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <span className="text-sm text-primary">{project.type}</span>
                </div>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
