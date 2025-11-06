import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Análise e Desenvolvimento de Sistemas",
      institution: "Universidade São Francisco (USF)",
      period: "Previsão de Conclusão: Junho de 2027",
      status: "Em andamento",
      highlight: true,
    },
    {
      degree: "Tecnólogo em Gestão de Recursos Humanos",
      institution: "Centro Universitário do Distrito Federal (UDF)",
      period: "2015 - 2017",
      status: "Concluído",
      highlight: true,
    },
    {
      degree: "Formação em Programação web",
      institution: "Rocketseat",
      period:
        "Html, CSS, JavaScript, React, Node.js  e projetos práticos - 2024 ",
      status: "concluído",
      highlight: true,
    },
    {
      degree: "Python Basics for Data Science",
      institution: "IBM",
      period:
        "Introduction to Python programming, data structures, and data analysis - 2024",
      status: "Concluído",
      highlight: true,
    },
    {
      degree: "Introdução à Ciência da Computação (CS50)/2024",
      institution: "Harvard University",
      period:
        "Fundamentos de programação, algoritmos, estruturas de dados e desenvolvimento de software - 2024",
      status: "Concluído 2024 iniciando novo modulo de 2025",
      highlight: true,
    },
    {
      degree: "Python for Beginners",
      institution: "OpenCV",
      period:
        "Introduction to Python Language, Basiscs, and Fundamentals -  2025",
      status: "Concluído",
      highlight: true,
    },
  ];

  return (
    <section id="education" className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Formação Acadêmica
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <Card
                key={index}
                className={`p-6 md:p-8 bg-card border-border hover:border-primary transition-all duration-300 ${
                  edu.highlight ? "border-primary/50" : ""
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-full shrink-0">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {edu.degree}
                      </h3>
                      <p className="text-primary font-medium mb-1">
                        {edu.institution}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {edu.period}
                      </p>
                      {edu.highlight && (
                        <span className="inline-block mt-3 px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                          {edu.status}
                        </span>
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

export default Education;
