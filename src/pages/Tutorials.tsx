
import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, BookOpen, Code, MessageSquare } from "lucide-react";

const Tutorials = () => {
  const tutorialCategories = [
    {
      title: "Primeiros Passos",
      description: "Aprenda os fundamentos da plataforma Olympus",
      icon: <Play className="h-5 w-5" />,
      tutorials: [
        { title: "Introdução à Olympus", duration: "5 min", link: "#" },
        { title: "Criando seu primeiro projeto", duration: "8 min", link: "#" },
        { title: "Navegando pela interface", duration: "6 min", link: "#" },
      ]
    },
    {
      title: "Trabalhando com Agentes",
      description: "Aprenda a colaborar eficientemente com agentes IA",
      icon: <MessageSquare className="h-5 w-5" />,
      tutorials: [
        { title: "Conversando com agentes", duration: "7 min", link: "#" },
        { title: "Personalização de prompts", duration: "10 min", link: "#" },
        { title: "Avaliação de resultados", duration: "9 min", link: "#" },
      ]
    },
    {
      title: "Desenvolvimento Avançado",
      description: "Técnicas avançadas para maximizar sua produtividade",
      icon: <Code className="h-5 w-5" />,
      tutorials: [
        { title: "Gerando código complexo", duration: "12 min", link: "#" },
        { title: "Integração com APIs", duration: "15 min", link: "#" },
        { title: "Automação de fluxos de trabalho", duration: "11 min", link: "#" },
      ]
    },
    {
      title: "Documentação",
      description: "Documentação técnica completa da plataforma",
      icon: <BookOpen className="h-5 w-5" />,
      tutorials: [
        { title: "API de Agentes", duration: "Referência", link: "#" },
        { title: "Configurações avançadas", duration: "Guia", link: "#" },
        { title: "Limites e cotas", duration: "Referência", link: "#" },
      ]
    },
  ];

  return (
    <MainLayout>
      <div className="container mx-auto">
        <h1 className="font-playfair text-2xl font-semibold mb-6">Tutoriais</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tutorialCategories.map((category, index) => (
            <Card key={index} className="bg-olympus-card-bg border-slate-800">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="bg-olympus-accent/20 p-2 rounded-md text-olympus-accent">
                      {category.icon}
                    </div>
                    <CardTitle>{category.title}</CardTitle>
                  </div>
                </div>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {category.tutorials.map((tutorial, idx) => (
                    <li key={idx} className="flex justify-between items-center border-b border-slate-800 pb-2">
                      <span>{tutorial.title}</span>
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-olympus-text-secondary">{tutorial.duration}</span>
                        <Button variant="ghost" size="sm" className="text-olympus-accent hover:text-white hover:bg-olympus-accent/20">
                          Ver
                        </Button>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Tutorials;
