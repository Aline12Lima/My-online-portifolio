import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Detecção de Pneumonia com Deep Learning",
      tag: "Iniciação Científica",
      description:
        "Desenvolvi modelos para classificar radiografias de tórax (Normal vs. Pneumonia). Apliquei técnicas de processamento de imagem e segmentação pulmonar, implementando e comparando arquiteturas de CNN (como DenseNet e U-Net) usando PyTorch.",
      tags: ["Python", "PyTorch", "Deep Learning", "CNN"],
      featured: true,
    },
    {
      title: "Projeto Voluntário - Liderança e Cidadania",
      tag: "Extensão Universitária",
      description:
        "Liderei o ciclo completo de um projeto voluntário na universidade, desde o planejamento até a execução e relatório final. Arrecadei e doei mais de 200 mudas de plantas, gerenciando a logística e apresentação no campus.",
      tags: ["Gestão de Projetos", "Liderança", "Logística"],
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Projetos
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="space-y-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`p-6 md:p-8 bg-card border-border hover:border-primary transition-all duration-300 ${
                  project.featured ? "border-primary/50" : ""
                }`}
              >
                <div className="space-y-4">
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
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

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

                  {project.featured && (
                    <div className="flex gap-3 pt-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-primary text-primary hover:bg-primary hover:text-white"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Ver no GitHub
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-primary text-primary hover:bg-primary hover:text-white"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Ver Artigo
                      </Button>
                    </div>
                  )}
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
