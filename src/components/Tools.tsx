import { Card } from "@/components/ui/card";
import { Code2, Database, Brain, Cloud, Workflow, Bot } from "lucide-react";

const Tools = () => {
  const skills = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Front-end & Estrutura",
      items: [
        "React.js",
        "Next.js",
        "JavaScript",
        "TypeScript",
        "Tailwind CSS",
        "SPA Architecture",
      ],
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Back-end & Banco de Dados",
      items: [
        "Supabase (SQL)",
        "APIs REST",
        "Autenticação",
        "Form Integration",
        "Validação de Dados",
      ],
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Deploy & Infraestrutura",
      items: [
        "Vercel",
        "Netlify",
        "Render",
        "GitHub Pages",
        "Cloudflare (DNS & Segurança)",
      ],
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "IA Aplicada ao Desenvolvimento",
      items: [
        "GitHub Copilot Students",
        "ChatGPT Pro",
        "Gemini Plus Student",
        "Prompt Engineering",
        "Revisão de Código com IA",
      ],
    },
    {
      icon: <Workflow className="w-8 h-8" />,
      title: "Workflow & Produtividade",
      items: [
        "VS Code + Copilot",
        "Notion (Organização)",
        "Resumo Manual Estratégico",
        "Gestão de Prompt",
        "Padronização de Código",
      ],
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Metodologia de Trabalho",
      items: [
        "Revisão Ortográfica",
        "Limpeza e Refatoração",
        "Boas Práticas",
        "Otimização para Produção",
        "Qualidade + Velocidade + Custo Inteligente",
      ],
    },
  ];

  return (
    <section id="tools" className="py-20 px-4 bg-secondary/10">
      <div className="container mx-auto max-w-6xl space-y-12">
        {/* Cabeçalho */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Ferramentas & Metodologia
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </div>

        {/* Introdução estratégica */}
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Utilizo inteligência artificial como ferramenta estratégica para
            acelerar desenvolvimento, reduzir custos e manter alto padrão de
            qualidade. Não compito com a IA utilizo-a como aliada para construir
            soluções sólidas e profissionais.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Cada prompt é revisado, ajustado e refinado até alcançar o ponto
            ideal do projeto. A validação técnica é sempre baseada no domínio de
            JavaScript, TypeScript, CSS e arquitetura correta para evitar falhas
            em produção.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Com essa metodologia, consigo desenvolver Landing Pages entre 1 a 3
            dias, dependendo da complexidade e requisitos do projeto.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border hover:border-primary transition-all duration-300 hover:scale-105"
            >
              <div className="space-y-4">
                <div className="text-primary">{skill.icon}</div>

                <h3 className="font-semibold text-lg">{skill.title}</h3>

                <ul className="space-y-2">
                  {skill.items.map((item, i) => (
                    <li key={i} className="text-sm text-muted-foreground">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
