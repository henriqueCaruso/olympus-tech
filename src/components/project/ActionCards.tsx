
import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, BarChart, FileText } from 'lucide-react';

interface ActionCard {
  title: string;
  description: string;
  icon: React.ReactNode;
  linkTo: string;
  linkText: string;
}

interface ActionCardsProps {
  projectId: string;
}

export function ActionCards({ projectId }: ActionCardsProps) {
  const actions: ActionCard[] = [
    {
      title: "Chat com Agentes",
      description: "Converse com os agentes de IA para obter orientações e recomendações sobre o projeto.",
      icon: <MessageSquare size={24} className="text-olympus-accent" />,
      linkTo: `/projeto/${projectId}/chat`,
      linkText: "Acessar Chat"
    },
    {
      title: "Analytics",
      description: "Visualize métricas, tendências e insights detalhados sobre o progresso do projeto.",
      icon: <BarChart size={24} className="text-olympus-accent" />,
      linkTo: `/projeto/${projectId}/analytics`,
      linkText: "Ver Analytics"
    },
    {
      title: "Documentação",
      description: "Acesse todos os artefatos e documentos gerados pelos agentes durante o projeto.",
      icon: <FileText size={24} className="text-olympus-accent" />,
      linkTo: `/projeto/${projectId}/documentos`,
      linkText: "Ver Documentos"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {actions.map((action, index) => (
        <div key={index} className="bg-olympus-card-bg rounded-lg p-5 shadow-md animate-fade-in">
          <div className="mb-3">
            {action.icon}
          </div>
          <h3 className="font-playfair text-lg mb-2">{action.title}</h3>
          <p className="text-sm text-olympus-text-secondary mb-4">{action.description}</p>
          <Link 
            to={action.linkTo}
            className="inline-flex items-center justify-center px-4 py-2 border border-olympus-accent text-olympus-accent rounded-md hover:bg-olympus-accent hover:text-black transition-colors"
          >
            {action.linkText}
          </Link>
        </div>
      ))}
    </div>
  );
}
