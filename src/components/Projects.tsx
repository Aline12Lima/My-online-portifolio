import { Card } from "@/components/ui/card";
import img3 from "@/assets/Mari.Nutri.jpg";
import img4 from "@/assets/Saloncapa.png";
import img5 from "@/assets/Capa_ande_card.png";
import img6 from "@/assets/odonto.png";
import img7 from "@/assets/capaPsi.png";
import img8 from "@/assets/capaJB.png";
import img9 from "@/assets/heroBG.png";

const Projects = () => {
  const projects = [
    {
      title: "Site - Genevieve",
      type: "Projeto Principal",
      image: img9,
      site: "https://www.genevieve.com.br/",
      repository: "https://github.com/Aline12Lima/Genevieve",
    },
    {
      title: "Site - JB Construtora",
      type: "Site completo",
      image: img8,
      site: "https://jb-construtech.vercel.app/",
      repository: "https://github.com/Aline12Lima/JB_Construtech",
    },
    {
      title: "Psicóloga Angela",
      type: "Landing Page com Formulário",
      image: img7,
      site: "https://psi-angela.alinelima.dev/",
      repository: "https://github.com/Aline12Lima/PsiAngela",
    },
    {
      title: "Beauty Salon",
      type: "Site completo",
      image: img4,
      site: "https://salon-x-nu.vercel.app/",
      repository: "https://github.com/Aline12Lima/SalonX",
    },
    {
      title: "ONG ANDE",
      type: "Landing Page",
      image: img5,
      site: "https://ong-ande.vercel.app/",
      repository: "https://github.com/Aline12Lima/Projeto_Voluntario",
    },
    {
      title: "Nutricionista",
      type: "Landing Page",
      image: img3,
      site: "https://marianne-nutricionista.vercel.app/",
      repository: "https://github.com/Aline12Lima/marianne-nutricionista",
    },
    {
      title: "Clínica Odontológica",
      type: "SPA - Single Page Application",
      image: img6,
      site: "https://odonto-care.alinelima.dev/",
      repository: "https://github.com/Aline12Lima/OralCare",
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
            <Card
              key={index}
              className="overflow-hidden border-border hover:border-primary transition-all duration-300 group"
            >
              {/* Imagem */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Conteúdo */}
              <div className="p-4 space-y-3">
                <div>
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <span className="text-sm text-primary">{project.type}</span>
                </div>

                {/* Botões */}
                <div className="flex gap-3 pt-2">
                  <a
                    href={project.site}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm px-4 py-2 bg-primary text-white rounded-md hover:opacity-90 transition"
                  >
                    Conferir Site
                  </a>

                  {project.repository && (
                    <a
                      href={project.repository}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm px-4 py-2 border border-primary text-primary rounded-md hover:bg-primary hover:text-white transition"
                    >
                      Repositório
                    </a>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
