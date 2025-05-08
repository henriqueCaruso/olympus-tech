
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Recommendation {
  id: string;
  title: string;
  description: string;
  priority: "alta" | "média" | "baixa";
  category: "desempenho" | "custo" | "eficiência" | "qualidade";
  impact: number; // 1-10
}

// Sample data for recommendations
const generateRecommendations = (projectId: string): Recommendation[] => {
  return [
    {
      id: "rec-1",
      title: "Otimizar prompts para reduzir consumo de tokens",
      description: "Os prompts atuais estão consumindo mais tokens que o necessário. Reduza a verbosidade e seja mais específico nas instruções para melhorar a eficiência.",
      priority: "alta",
      category: "custo",
      impact: 8
    },
    {
      id: "rec-2",
      title: "Incluir agente de revisão no fluxo de trabalho",
      description: "A inclusão de um agente revisor pode melhorar significativamente a qualidade dos artefatos gerados, reduzindo a necessidade de múltiplas iterações.",
      priority: "média",
      category: "qualidade",
      impact: 7
    },
    {
      id: "rec-3",
      title: "Dividir tarefas complexas em subtarefas",
      description: "As tarefas atuais são muito abrangentes. Dividi-las em componentes menores pode melhorar a precisão e eficiência dos agentes.",
      priority: "média",
      category: "eficiência",
      impact: 6
    },
    {
      id: "rec-4",
      title: "Ajustar parâmetros de temperatura dos agentes",
      description: "Os agentes estão configurados com temperatura muito alta, resultando em respostas criativas demais. Reduza para melhorar a consistência.",
      priority: "baixa",
      category: "desempenho",
      impact: 5
    }
  ];
};

interface RecommendationsProps {
  projectId: string;
}

export const Recommendations = ({ projectId }: RecommendationsProps) => {
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setIsLoading(true);
    setTimeout(() => {
      setRecommendations(generateRecommendations(projectId));
      setIsLoading(false);
    }, 1000);
  }, [projectId]);

  const getPriorityClass = (priority: string) => {
    switch (priority) {
      case "alta":
        return "bg-red-800 text-white";
      case "média":
        return "bg-amber-700 text-white";
      case "baixa":
        return "bg-blue-800 text-white";
      default:
        return "bg-slate-700 text-white";
    }
  };

  const getCategoryClass = (category: string) => {
    switch (category) {
      case "desempenho":
        return "bg-purple-900 text-white";
      case "custo":
        return "bg-emerald-900 text-white";
      case "eficiência":
        return "bg-blue-900 text-white";
      case "qualidade":
        return "bg-pink-900 text-white";
      default:
        return "bg-slate-800 text-white";
    }
  };

  return (
    <Card className="bg-olympus-card-bg border-slate-800">
      <CardHeader>
        <CardTitle>Recomendações Inteligentes</CardTitle>
        <CardDescription>Sugestões personalizadas para otimizar seu projeto</CardDescription>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="h-80 flex items-center justify-center">
            <div className="animate-pulse text-olympus-text-secondary">Carregando recomendações...</div>
          </div>
        ) : recommendations.length > 0 ? (
          <div className="space-y-6">
            {recommendations.map((rec) => (
              <div key={rec.id} className="bg-olympus-background border border-slate-800 rounded-lg p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-xs px-2 py-0.5 rounded-full ${getPriorityClass(rec.priority)}`}>
                        Prioridade: {rec.priority}
                      </span>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${getCategoryClass(rec.category)}`}>
                        {rec.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-medium">{rec.title}</h3>
                  </div>
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-olympus-card-bg border border-slate-700">
                    <span className={`text-sm font-semibold ${rec.impact > 7 ? 'text-olympus-accent' : 'text-olympus-text-primary'}`}>
                      {rec.impact}/10
                    </span>
                  </div>
                </div>
                <p className="text-olympus-text-secondary mt-2">{rec.description}</p>
                <div className="mt-4 flex justify-end">
                  <Button variant="outline" className="text-olympus-accent border-olympus-accent hover:bg-olympus-accent/10 mr-2">
                    Ignorar
                  </Button>
                  <Button className="bg-olympus-accent text-black hover:bg-olympus-accent/90">
                    Implementar
                  </Button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center p-8">
            <p className="text-olympus-text-secondary">Não há recomendações disponíveis no momento.</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
