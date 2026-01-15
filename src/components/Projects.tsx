import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import img2 from "@/assets/Cbam.png";
import img3 from "@/assets/Mari.Nutri.jpg";
import img4 from "@/assets/capa-zoonese.png";
import img5 from "@/assets/Capa_ande_card.png";
import { features } from "process";

const Projects = () => {
  const projects = [
    {
      title: "Landing Page - ONG Ande",
      image: img5,
      tag: "Ações Sociais - Extrema-MG",
      description:
        " Projeto ONG ANDE: Aplicação web institucional desenvolvida com React, JavaScript e Tailwind CSS. Foco em performance (Vite), design responsivo e monitoramento de erros integrado com Sentry.",
      tags: [
        "React",
        "TypeScript",
        "Vite",
        "Tailwind CSS",
        "SPA",
        "Vercel",
        "Deploy",
      ],
      github:
        "https://github.com/Aline12Lima/Projetos_Voluntarios/tree/main/Ande-projeto",
      site: "https://ong-ande.vercel.app/",
      featured: true,
    },
    {
      title: "Projeto de Iniciação Científica - Artigo em Conferência",
      image: img2,
      tag: "Mitigação de viés de luminosidade em classificação de raio-X",
      description:
        "Este projeto mitiga o shortcut learning em diagnósticos de pneumonia via Deep Learning, integrando o módulo de atenção CBAM à arquitetura DenseNet121 para neutralizar o viés de luminosidade. Enquanto o modelo baseline agrupa dados por brilho em apenas três macro-clusters, o Modelo B reorganiza o espaço latente em 47 micro-clusters morfológicos, focando em padrões patológicos reais. Com o uso de UMAP e HDBSCAN, comprovou-se que a atenção espacial e de canal reduz a influência de artefatos técnicos, elevando a sensibilidade para 94,1%. Assim, os erros tornam-se clinicamente coerentes, garantindo maior estabilidade e interpretabilidade ao diagnóstico automatizado.",
      tags: [
        "Python",
        "PyTorch",
        "Deep Learning",
        "OpenCV",
        "DenseNet121",
        "CBAM",
        "UMAP",
        "HDBSCAN",
        "Kaggle",
      ],

      github: "https://github.com/Aline12Lima/pneumonia-xray-bias-mitigation",
    },
    {
      title: "Landing Page - Nutricionista",
      image: img3,
      tag: "Freelancer",
      description:
        "Landing Page desenvolvida  para uma nutricionista, utilizando React, TypeScript, Vite e Tailwind CSS. O projeto destaca design responsivo, animações e arquitetura simples e moderna.",
      tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "SPA"],
      featured: false,
      github: "https://github.com/Aline12Lima/marianne-nutricionista",
      site: "https://marianne-nutricionista.vercel.app/",
      feature: true,
    },
    {
      title: "Web App - Beauty Salon",
      image: img4,
      tag: "Site Profissional",
      description:
        " Website institucional premium com interface responsiva, sistema de depoimentos dinâmico e performance otimizada, garantindo uma experiência de navegação fluida e conversão de clientes.",
      tags: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "GitHub Pages",
        "Build",
        "Deploy",
        "vite",
      ],
      featured: false,
      github: "https://github.com/Aline12Lima/SalonX",
      site: "https://salon-x-nu.vercel.app/",
      feature: true,
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          {/* Cabeçalho da seção */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Projetos
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>

          {/* Cards de projetos */}
          <div className="space-y-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`p-4 md:p-6 bg-card border-border hover:border-primary transition-all duration-300 ${
                  project.featured ? "border-primary/50" : ""
                }`}
              >
                <div className="md:flex md:items-start md:gap-6">
                  {/* Miniatura */}
                  {project.image && (
                    <div className="w-full mb-4 md:mb-0 md:w-40 flex-shrink-0">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-24 md:h-24 object-cover rounded-md"
                      />
                    </div>
                  )}

                  <div className="flex-1 space-y-3">
                    {/* Título e categoria */}
                    <div className="flex flex-wrap gap-2 items-center justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-1">
                          {project.title}
                        </h3>
                        <span className="text-sm text-primary font-medium">
                          {project.tag}
                        </span>
                      </div>

                      {project.featured && (
                        <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full">
                          Destaque
                        </span>
                      )}
                    </div>

                    {/* Descrição */}
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-secondary text-foreground text-sm rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Botões */}
                    <div className="flex gap-3 pt-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-primary text-primary hover:bg-primary hover:text-white"
                          >
                            <Github className="w-4 h-4 mr-2" />
                            Ver no GitHub
                          </Button>
                        </a>
                      )}

                      {project.site && (
                        <a
                          href={project.site}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-primary text-primary hover:bg-primary hover:text-white"
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Ver Resultado
                          </Button>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
