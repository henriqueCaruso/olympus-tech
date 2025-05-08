
export interface Project {
  id: string;
  title: string;
  description: string;
  status: "Em Progresso" | "Finalizado" | "Planejamento";
  progress: number;
  startDate: string;
  estimatedEndDate: string;
  tokensUsed: number;
  tokensTotal: number;
  costCurrent: number;
  costTotal: number;
  category: string;
  lastModified?: string;
  teamIds: string[]; // References to agent IDs
}

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "E-commerce Olympus",
    description: "Plataforma de e-commerce completa com carrinho, pagamentos e dashboard administrativo.",
    status: "Em Progresso",
    progress: 78,
    startDate: "01/05/2025",
    estimatedEndDate: "15/05/2025",
    tokensUsed: 98720,
    tokensTotal: 125000,
    costCurrent: 92.5,
    costTotal: 120,
    category: "E-commerce",
    lastModified: "08/05/2025",
    teamIds: ["agent-1", "agent-2", "agent-3"]
  },
  {
    id: "proj-2",
    title: "App de Finanças Pessoais",
    description: "Aplicativo mobile para tracking de despesas e visualização de orçamento.",
    status: "Planejamento",
    progress: 35,
    startDate: "05/05/2025",
    estimatedEndDate: "20/05/2025",
    tokensUsed: 45000,
    tokensTotal: 150000,
    costCurrent: 42,
    costTotal: 140,
    category: "Aplicativo Mobile",
    lastModified: "07/05/2025",
    teamIds: ["agent-2", "agent-3", "agent-4"]
  },
  {
    id: "proj-3",
    title: "Website Corporativo",
    description: "Website responsivo para empresa de tecnologia com blog integrado.",
    status: "Finalizado",
    progress: 100,
    startDate: "15/04/2025",
    estimatedEndDate: "01/05/2025",
    tokensUsed: 85000,
    tokensTotal: 85000,
    costCurrent: 80,
    costTotal: 80,
    category: "Website",
    lastModified: "02/05/2025",
    teamIds: ["agent-1", "agent-3"]
  },
  {
    id: "proj-4",
    title: "Sistema de Vendas",
    description: "Sistema completo para gestão de vendas, estoque e clientes.",
    status: "Em Progresso",
    progress: 45,
    startDate: "20/04/2025",
    estimatedEndDate: "25/05/2025",
    tokensUsed: 65000,
    tokensTotal: 175000,
    costCurrent: 60,
    costTotal: 160,
    category: "Sistema Web",
    lastModified: "06/05/2025",
    teamIds: ["agent-1", "agent-2", "agent-4", "agent-5"]
  }
];
