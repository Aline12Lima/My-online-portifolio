import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Entre em Contato
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
            <p className="text-xl text-muted-foreground">
              Vamos conversar! Estou disponível para oportunidades e novos projetos.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 bg-card border-border hover:border-primary transition-all duration-300 hover:scale-105">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-4 text-center"
              >
                <div className="p-4 bg-primary/10 rounded-full">
                  <Linkedin className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">LinkedIn</h3>
                  <p className="text-sm text-muted-foreground">
                    Conecte-se comigo
                  </p>
                </div>
              </a>
            </Card>

            <Card className="p-6 bg-card border-border hover:border-primary transition-all duration-300 hover:scale-105">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-4 text-center"
              >
                <div className="p-4 bg-primary/10 rounded-full">
                  <Github className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">GitHub</h3>
                  <p className="text-sm text-muted-foreground">
                    Veja meus projetos
                  </p>
                </div>
              </a>
            </Card>

            <Card className="p-6 bg-card border-border hover:border-primary transition-all duration-300 hover:scale-105">
              <a
                href="mailto:ads.alinelima@gmail.com"
                className="flex flex-col items-center gap-4 text-center"
              >
                <div className="p-4 bg-primary/10 rounded-full">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <p className="text-sm text-muted-foreground break-all">
                    ads.alinelima@gmail.com
                  </p>
                </div>
              </a>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
