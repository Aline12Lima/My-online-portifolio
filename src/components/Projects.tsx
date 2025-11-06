import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import img1 from "@/assets/Acuracia.jpg";
import img2 from "@/assets/CBAM.jpg";
import img3 from "@/assets/Mari.Nutri.jpg";
import img4 from "@/assets/Tinder_clone.jpg";
import img5 from "@/assets/my-portfolio.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Detecção de Pneumonia com Deep Learning",
      image: img2,
      tag: "Iniciação Científica",
      description:
        "Desenvolvi modelos para classificar radiografias de tórax (Normal vs. Pneumonia). Apliquei técnicas de processamento de imagem e segmentação pulmonar, implementando e comparando arquiteturas de CNN (como DenseNet121, CBAM e U-net) usando PyTorch.",
      tags: ["Python", "PyTorch", "Deep Learning", "CNN", "DenseNet121"],
      featured: true,
      github: "https://github.com/Aline12Lima/treino-3-Xray-pneumonia",
    },
    {
      title: "SPA - Site Pessoal de uma Nutricionista",
      image: img3,
      tag: "Freelancer",
      description:
        "Landing Page desenvolvida como Single Page Application (SPA) para uma nutricionista, utilizando React, TypeScript, Vite e Tailwind CSS. O projeto destaca design responsivo, animações e arquitetura simples e moderna.",
      tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "SPA"],
      featured: false,
      github: "https://github.com/Aline12Lima/marianne-nutricionista",
    },
    {
      title: "App Clone do Tinder",
      image: img4,
      tag: "Projeto para Estudo",
      description:
        " Projeto Clone do Tinder desenvolvido para estudo de Next.js com React, TypeScript e Supabase. Explora rotas de API, autenticação e renderização dinâmica. Estilizado com Tailwind CSS, com foco em performance e arquitetura moderna.",
      tags: ["Next.js", "React", "TypeScript", "Supabase", "Tailwind CSS"],
      featured: false,
      github: "https://github.com/Aline12Lima/Clone-App-Datting",
    },
    {
      title: "Meu Portfólio Online",
      image: img5,
      tag: "Projeto Pessoal",
      description:
        " Portfólio pessoal desenvolvido como Single Page Application (SPA) com React, React-dom, TypeScript, Vite e Tailwind CSS, baseada em componentes, destacando minha trajetória e projetos.O site apresenta design responsivo, animações modernas e alternância de tema.Hospedado no GitHub Pages, oferece uma navegação fluida e profissional.",
      tags: [
        "React",
        "TypeScript",
        "Vite",
        "Tailwind CSS",
        "SPA",
        "GitHub Pages",
        "Build",
      ],
      github: "https://github.com/Aline12Lima/My-online-portifolio",
      featured: false,
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

                      {project.featured && (
                        <a
                          href="https://link-do-artigo.com" // opcional
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-primary text-primary hover:bg-primary hover:text-white"
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Ver Artigo
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
