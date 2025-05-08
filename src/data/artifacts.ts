
export interface Artifact {
  id: string;
  projectId: string;
  title: string;
  type: "document" | "requirements" | "analysis" | "design" | "code";
  format: "markdown" | "pdf" | "code" | "image";
  createdAt: string;
  createdBy: string;
}

export const artifacts: Artifact[] = [
  {
    id: "art-1",
    projectId: "proj-1",
    title: "Visão do Projeto",
    type: "document",
    format: "markdown",
    createdAt: "10:36",
    createdBy: "CEO"
  },
  {
    id: "art-2",
    projectId: "proj-1",
    title: "Arquitetura Técnica",
    type: "analysis",
    format: "markdown",
    createdAt: "10:42",
    createdBy: "CTO"
  },
  {
    id: "art-3",
    projectId: "proj-1",
    title: "Wireframes Iniciais",
    type: "design",
    format: "image",
    createdAt: "11:15",
    createdBy: "UX Designer"
  },
  {
    id: "art-4",
    projectId: "proj-1",
    title: "Requisitos Funcionais",
    type: "requirements",
    format: "markdown",
    createdAt: "11:30",
    createdBy: "Product Manager"
  },
  {
    id: "art-5",
    projectId: "proj-2",
    title: "Estudo de Viabilidade",
    type: "analysis",
    format: "pdf",
    createdAt: "09:22",
    createdBy: "CTO"
  },
  {
    id: "art-6",
    projectId: "proj-2",
    title: "Fluxo de Usuário",
    type: "design",
    format: "image",
    createdAt: "09:45",
    createdBy: "UX Designer"
  }
];
