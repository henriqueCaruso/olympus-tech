export interface AgentPrompt {
  id: string;
  title: string;
  description: string;
  category: string;
  mdContent: string;
  variables: string[];
  agentId: string;
}

export interface AgentCapability {
  id: string;
  name: string;
  description: string;
  category: string;
  prompts: string[]; // Array of prompt IDs
}

export interface ConfigurableAgent {
  id: string;
  name: string;
  role: string;
  mythology: string;
  description: string;
  gods: string;
  iconType: "leadership" | "technical" | "design" | "product";
  capabilities: AgentCapability[];
  prompts: AgentPrompt[];
  isActive: boolean;
  avatar?: string;
}

export const agentPrompts: AgentPrompt[] = [
  {
    id: "prompt-zeus-1",
    title: "Análise Estratégica de Projeto",
    description: "Análise completa da viabilidade e estratégia de um novo projeto",
    category: "Estratégia",
    mdContent: `# Análise Estratégica de Projeto

Como Zeus, CEO do Olympus Tech, preciso analisar:

## Contexto do Projeto
**Nome do Projeto:** {{project_name}}
**Descrição:** {{project_description}}
**Objetivo:** {{project_objective}}

## Análise a Realizar

### 1. Viabilidade Técnica
- Avalie a complexidade técnica
- Identifique riscos tecnológicos
- Estime recursos necessários

### 2. Análise de Mercado
- Valide a proposta de valor
- Analise concorrência
- Identifique oportunidades

### 3. Recursos e Timeline
- Estime tempo de desenvolvimento
- Defina equipe necessária
- Calcule orçamento aproximado

### 4. Recomendações Estratégicas
- Prioridade do projeto (1-5)
- Próximos passos recomendados
- Riscos a mitigar

Forneça uma análise detalhada e conclusiva com recomendações claras.`,
    variables: ["project_name", "project_description", "project_objective"],
    agentId: "agent-1"
  },
  {
    id: "prompt-athena-1",
    title: "Arquitetura de Sistema",
    description: "Design de arquitetura técnica para aplicações",
    category: "Arquitetura",
    mdContent: `# Arquitetura de Sistema

Como Atena, CTO do Olympus Tech, vou projetar a arquitetura para:

## Especificações do Sistema
**Projeto:** {{project_name}}
**Tipo de Aplicação:** {{app_type}}
**Requisitos Funcionais:** {{functional_requirements}}
**Requisitos Não-Funcionais:** {{non_functional_requirements}}

## Arquitetura Proposta

### 1. Stack Tecnológico
- Frontend: {{frontend_tech}}
- Backend: {{backend_tech}}
- Banco de Dados: {{database_tech}}
- Infraestrutura: {{infrastructure}}

### 2. Padrões Arquiteturais
- Arquitetura geral (MVC, Microservices, etc.)
- Padrões de design aplicáveis
- Estrutura de pastas e organização

### 3. Integrations e APIs
- APIs externas necessárias
- Protocolos de comunicação
- Autenticação e autorização

### 4. Performance e Escalabilidade
- Estratégias de cache
- Load balancing
- Monitoramento e logs

### 5. Segurança
- Medidas de segurança essenciais
- Proteção de dados
- Compliance necessário

Deliverable: Diagrama de arquitetura e documentação técnica detalhada.`,
    variables: ["project_name", "app_type", "functional_requirements", "non_functional_requirements", "frontend_tech", "backend_tech", "database_tech", "infrastructure"],
    agentId: "agent-2"
  },
  {
    id: "prompt-apollo-1",
    title: "Design de Interface",
    description: "Criação de wireframes e protótipos de UI",
    category: "Design UI",
    mdContent: `# Design de Interface

Como Apolo, especialista em UX/UI do Olympus Tech, vou criar:

## Briefing do Design
**Projeto:** {{project_name}}
**Tipo de Interface:** {{interface_type}}
**Público-alvo:** {{target_audience}}
**Plataformas:** {{platforms}}

## Processo de Design

### 1. Research e Análise
- Análise de usuários e personas
- Benchmarking de concorrentes
- Definição de jornada do usuário

### 2. Wireframes
- Estrutura de páginas/telas
- Fluxos de navegação
- Hierarquia de informações

### 3. Design System
- Paleta de cores
- Tipografia
- Componentes reutilizáveis
- Iconografia

### 4. Protótipo Interativo
- Telas de alta fidelidade
- Interações e animações
- Estados de loading e erro

### 5. Especificações Técnicas
- Guia de estilos para developers
- Assets exportados
- Documentação de componentes

**Resultado:** {{deliverable_type}} com especificações completas para desenvolvimento.`,
    variables: ["project_name", "interface_type", "target_audience", "platforms", "deliverable_type"],
    agentId: "agent-3"
  }
];

export const agentCapabilities: AgentCapability[] = [
  {
    id: "cap-zeus-strategy",
    name: "Planejamento Estratégico",
    description: "Análise e definição de estratégias de projeto",
    category: "Liderança",
    prompts: ["prompt-zeus-1"]
  },
  {
    id: "cap-athena-architecture",
    name: "Arquitetura de Sistemas",
    description: "Design e planejamento de arquitetura técnica",
    category: "Técnico",
    prompts: ["prompt-athena-1"]
  },
  {
    id: "cap-apollo-design",
    name: "Design de Interface",
    description: "Criação de wireframes, protótipos e design systems",
    category: "Design",
    prompts: ["prompt-apollo-1"]
  }
];

export const configurableAgents: ConfigurableAgent[] = [
  {
    id: "agent-1",
    name: "Zeus",
    role: "CEO",
    mythology: "Rei dos deuses do Olimpo, Zeus representa a liderança suprema e a capacidade de tomar decisões estratégicas. Sua sabedoria e visão abrangente o tornam o líder ideal para guiar projetos complexos.",
    description: "Lidera a visão estratégica e objetivos do projeto",
    gods: "Zeus",
    iconType: "leadership",
    capabilities: [agentCapabilities[0]],
    prompts: [agentPrompts[0]],
    isActive: true
  },
  {
    id: "agent-2",
    name: "Atena",
    role: "CTO",
    mythology: "Deusa da sabedoria e estratégia militar, Atena simboliza a inteligência prática e o planejamento técnico. Sua expertise em guerra estratégica se traduz em arquitetura de sistemas robustos.",
    description: "Gerencia a arquitetura técnica e escolhas tecnológicas",
    gods: "Atena • Hefesto",
    iconType: "technical",
    capabilities: [agentCapabilities[1]],
    prompts: [agentPrompts[1]],
    isActive: true
  },
  {
    id: "agent-3",
    name: "Apolo",
    role: "UX Designer",
    mythology: "Deus das artes, música e harmonia, Apolo representa a busca pela perfeição estética e a criação de experiências harmoniosas. Sua sensibilidade artística cria interfaces belas e funcionais.",
    description: "Cria interfaces intuitivas e experiências de usuário",
    gods: "Apolo • Afrodite",
    iconType: "design",
    capabilities: [agentCapabilities[2]],
    prompts: [agentPrompts[2]],
    isActive: true
  },
  {
    id: "agent-4",
    name: "Hermes",
    role: "Product Manager",
    mythology: "Mensageiro dos deuses e protetor do comércio, Hermes simboliza a comunicação eficaz e a gestão de negócios. Sua agilidade e versatilidade o tornam ideal para gerenciar produtos.",
    description: "Define recursos e prioriza o backlog do produto",
    gods: "Hermes • Deméter",
    iconType: "product",
    capabilities: [],
    prompts: [],
    isActive: true
  },
  {
    id: "agent-5",
    name: "Hefesto",
    role: "DevOps",
    mythology: "Deus da forja e da tecnologia, Hefesto representa a criação e manutenção de infraestrutura. Sua habilidade em construir ferramentas e sistemas é fundamental para operações eficientes.",
    description: "Configura infraestrutura e pipelines de implantação",
    gods: "Hefesto • Poseidon",
    iconType: "technical",
    capabilities: [],
    prompts: [],
    isActive: true
  }
];

export const getAgentById = (agentId: string): ConfigurableAgent | undefined => {
  return configurableAgents.find(agent => agent.id === agentId);
};

export const getPromptsByAgent = (agentId: string): AgentPrompt[] => {
  return agentPrompts.filter(prompt => prompt.agentId === agentId);
};

export const getCapabilitiesByAgent = (agentId: string): AgentCapability[] => {
  const agent = getAgentById(agentId);
  return agent ? agent.capabilities : [];
};