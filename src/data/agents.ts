
export interface Agent {
  id: string;
  role: string;
  description: string;
  gods: string;
  iconType: "leadership" | "technical" | "design" | "product";
}

export const agents: Agent[] = [
  {
    id: "agent-1",
    role: "CEO",
    description: "Lidera a visão estratégica e objetivos do projeto",
    gods: "Zeus",
    iconType: "leadership"
  },
  {
    id: "agent-2",
    role: "CTO",
    description: "Gerencia a arquitetura técnica e escolhas tecnológicas",
    gods: "Atena • Hefesto",
    iconType: "technical"
  },
  {
    id: "agent-3",
    role: "UX Designer",
    description: "Cria interfaces intuitivas e experiências de usuário",
    gods: "Apolo • Afrodite",
    iconType: "design"
  },
  {
    id: "agent-4",
    role: "Product Manager",
    description: "Define recursos e prioriza o backlog do produto",
    gods: "Hermes • Deméter",
    iconType: "product"
  },
  {
    id: "agent-5",
    role: "DevOps",
    description: "Configura infraestrutura e pipelines de implantação",
    gods: "Hefesto • Poseidon",
    iconType: "technical"
  }
];
