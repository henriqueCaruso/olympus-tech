
# Frontend do Olympus Tech

## Visão Geral

O frontend do Olympus Tech é construído com React e TypeScript, utilizando Tailwind CSS para estilização e shadcn/ui para componentes base. A arquitetura segue o padrão de componentes, com uma clara separação entre componentes de UI, componentes de página e lógica de negócio.

## Estrutura de Diretórios

```
src/
├── components/       # Componentes reutilizáveis
│   ├── ui/           # Componentes de UI base
│   ├── chat/         # Componentes específicos para o chat
│   ├── analytics/    # Componentes para visualizações analíticas
│   ├── layout/       # Componentes de layout
│   ├── project/      # Componentes relacionados a projetos
│   ├── settings/     # Componentes de configurações
│   └── new-project/  # Componentes para criação de projetos
├── pages/            # Componentes de página
├── hooks/            # Hooks personalizados
├── data/             # Interfaces e tipos de dados
└── lib/              # Funções utilitárias
```

## Componentes Principais

### Layout

- **MainLayout**: Container principal que inclui o Sidebar e renderiza o conteúdo das páginas
- **Sidebar**: Navegação principal da aplicação

### Chat

- **ChatThread**: Visualização da conversa com os agentes
- **MessageBubble**: Componente para exibição de mensagens
- **ChatInput**: Input para envio de mensagens
- **AgentSelector**: Seletor de agentes para conversa

### Analytics

- **ProgressMetrics**: Métricas de progresso do projeto
- **TokenUsageChart**: Gráfico de uso de tokens
- **ResourceAllocation**: Visualização de alocação de recursos

### Páginas

- **Index**: Página inicial com overview do sistema
- **Projects**: Listagem de projetos
- **ProjectDetail**: Detalhes de um projeto específico
- **ProjectChat**: Interface de chat de um projeto
- **NewProject**: Criação de novo projeto
- **Settings**: Configurações do usuário

## Estado da Aplicação

O gerenciamento de estado é realizado principalmente com React Query para dados remotos e useState/useContext para estado local. Não utilizamos um gerenciador de estado global como Redux, optando por uma abordagem mais leve e específica para cada contexto.

## Estilo e Design

Todo o estilo da aplicação é baseado em Tailwind CSS, com um tema personalizado que reflete a identidade visual do Olympus Tech:

- **Cores principais**: Azul marinho (#10152B) e dourado (#D4AF37)
- **Tema**: Dark mode como padrão
- **Tipografia**: Fontes variadas para diferentes elementos (Playfair Display, Inter, Cinzel)

## Roteamento

O roteamento é implementado com React Router, com a seguinte estrutura:

- `/` - Dashboard principal
- `/projetos` - Lista de projetos
- `/projetos/:id` - Detalhes do projeto
- `/projetos/:id/chat` - Chat do projeto
- `/projetos/:id/artefatos` - Artefatos do projeto
- `/projetos/:id/analytics` - Analytics do projeto
- `/novo-projeto` - Criação de novo projeto
- `/configuracoes` - Configurações do usuário
- `/ajuda` - Página de ajuda e tutoriais
- `/templates` - Templates de projeto disponíveis

## Acessibilidade

Utilizamos componentes base do Radix UI (via shadcn/ui) para garantir acessibilidade em toda a aplicação. Isso inclui suporte completo a teclado, leitores de tela e outras tecnologias assistivas.

## Requisitos de Implementação

Para desenvolver novos componentes ou funcionalidades, siga estas diretrizes:

1. Utilize TypeScript para tipagem estática
2. Componentes devem ser funcionais e utilizar hooks
3. Estilização com Tailwind CSS
4. Testes com React Testing Library
5. Documentação em JSDoc para funções e componentes importantes
