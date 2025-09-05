export interface Task {
  id: string;
  title: string;
  description: string;
  status: "Todo" | "Em Progresso" | "Em Revisão" | "Concluído" | "Bloqueado";
  priority: "Baixa" | "Média" | "Alta" | "Crítica";
  assignedAgent: string; // Agent ID
  projectId: string;
  dueDate?: string;
  createdAt: string;
  updatedAt: string;
  tags: string[];
}

export const tasks: Task[] = [
  {
    id: "task-1",
    title: "Implementar autenticação JWT",
    description: "Desenvolver sistema de autenticação com JWT para proteger rotas da API",
    status: "Em Progresso",
    priority: "Alta",
    assignedAgent: "agent-2", // CTO
    projectId: "proj-1",
    dueDate: "2025-05-12",
    createdAt: "2025-05-01",
    updatedAt: "2025-05-08",
    tags: ["backend", "segurança", "autenticação"]
  },
  {
    id: "task-2",
    title: "Design da página de checkout",
    description: "Criar wireframes e protótipo para fluxo de checkout do e-commerce",
    status: "Todo",
    priority: "Alta",
    assignedAgent: "agent-3", // UX Designer
    projectId: "proj-1",
    dueDate: "2025-05-10",
    createdAt: "2025-05-02",
    updatedAt: "2025-05-02",
    tags: ["ui/ux", "checkout", "conversão"]
  },
  {
    id: "task-3",
    title: "Integração com gateway de pagamento",
    description: "Integrar Stripe para processar pagamentos online",
    status: "Bloqueado",
    priority: "Crítica",
    assignedAgent: "agent-2", // CTO
    projectId: "proj-1",
    dueDate: "2025-05-15",
    createdAt: "2025-05-03",
    updatedAt: "2025-05-07",
    tags: ["pagamentos", "integração", "stripe"]
  },
  {
    id: "task-4",
    title: "Tela de tracking de gastos",
    description: "Desenvolver interface para visualizar gastos por categoria",
    status: "Em Progresso",
    priority: "Média",
    assignedAgent: "agent-3", // UX Designer
    projectId: "proj-2",
    dueDate: "2025-05-18",
    createdAt: "2025-05-05",
    updatedAt: "2025-05-08",
    tags: ["mobile", "dashboard", "finanças"]
  },
  {
    id: "task-5",
    title: "API de categorização automática",
    description: "Implementar ML para categorizar transações automaticamente",
    status: "Todo",
    priority: "Média",
    assignedAgent: "agent-2", // CTO
    projectId: "proj-2",
    dueDate: "2025-05-20",
    createdAt: "2025-05-04",
    updatedAt: "2025-05-04",
    tags: ["ml", "api", "categorização"]
  },
  {
    id: "task-6",
    title: "Configurar CI/CD pipeline",
    description: "Setup do pipeline de deploy automático com GitHub Actions",
    status: "Concluído",
    priority: "Alta",
    assignedAgent: "agent-5", // DevOps
    projectId: "proj-4",
    createdAt: "2025-04-20",
    updatedAt: "2025-05-01",
    tags: ["devops", "ci/cd", "automação"]
  },
  {
    id: "task-7",
    title: "Dashboard de vendas",
    description: "Criar painel com métricas de vendas e relatórios",
    status: "Em Revisão",
    priority: "Alta",
    assignedAgent: "agent-4", // Product Manager
    projectId: "proj-4",
    dueDate: "2025-05-14",
    createdAt: "2025-04-25",
    updatedAt: "2025-05-07",
    tags: ["dashboard", "vendas", "analytics"]
  }
];

export const getTasksByProject = (projectId: string): Task[] => {
  return tasks.filter(task => task.projectId === projectId);
};

export const getTasksByStatus = (status: Task["status"]): Task[] => {
  return tasks.filter(task => task.status === status);
};

export const getTasksByAgent = (agentId: string): Task[] => {
  return tasks.filter(task => task.assignedAgent === agentId);
};

export const getPriorityTasks = (): Task[] => {
  return tasks.filter(task => task.priority === "Alta" || task.priority === "Crítica");
};