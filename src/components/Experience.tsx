import { Card } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "Administrativo de Obras",
      company: "Diase Construtora",
      period: "2021 - 2023",
      description:
        "Gestão de equipe de 12 funcionários, aplicando controles administrativos e de RH. Responsável pelo lançamento de notas fiscais e apoio à equipe de compras e suprimentos.",
      highlights: [
        "Gestão de equipe de 12 funcionários",
        "Controles administrativos e RH",
        "Gestão de notas fiscais",
        "Apoio à compras e suprimentos",
      ],
    },
    {
      role: "Analista de Atendimento (Logística)",
      company: "Grupo CRM - Kopenhagen",
      period: "2021",
      description:
        "Atuação no centro de distribuição, realizando tratativas com clientes e franquias, gestão de cancelamentos e logística reversa durante o período de Páscoa.",
      highlights: [
        "Atendimento a clientes e franquias",
        "Gestão de cancelamentos",
        "Logística reversa",
        "Centro de distribuição",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Experiência Profissional
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="p-6 md:p-8 bg-card border-border hover:border-primary transition-all duration-300"
              >
                <div className="flex gap-6">
                  <div className="hidden md:flex items-start">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Briefcase className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-1">
                        {exp.role}
                      </h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                      <p className="text-sm text-muted-foreground">{exp.period}</p>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>

                    <ul className="grid md:grid-cols-2 gap-2">
                      {exp.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          {highlight}
                        </li>
                      ))}
                    </ul>
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

export default Experience;
