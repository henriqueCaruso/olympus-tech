
export interface ChatMessage {
  id: string;
  projectId: string;
  agentId: string | null; // null for user messages
  content: string;
  timestamp: string;
  sender: "user" | "agent";
}

export const chatMessages: Record<string, ChatMessage[]> = {
  "proj-1": [
    {
      id: "msg-1",
      projectId: "proj-1",
      agentId: "agent-1",
      content: "Olá! Como CEO deste projeto, estou aqui para ajudá-lo a definir a visão estratégica do E-commerce Olympus. Quais são suas principais prioridades para este produto?",
      timestamp: "10:30",
      sender: "agent"
    },
    {
      id: "msg-2",
      projectId: "proj-1",
      agentId: null,
      content: "Precisamos focar em uma experiência de usuário intuitiva e um sistema de pagamento seguro. Quais são suas recomendações?",
      timestamp: "10:32",
      sender: "user"
    },
    {
      id: "msg-3",
      projectId: "proj-1",
      agentId: "agent-1",
      content: "Excelentes prioridades. Para a experiência do usuário, sugiro:\n\n1. Layout minimalista com foco em imagens de produtos\n2. Processo de checkout em etapa única\n3. Sistema de busca avançada com filtros intuitivos\n\nPara pagamentos seguros, recomendo implementar:\n\n- Integração com múltiplas gateways de pagamento\n- Certificados SSL de alta segurança\n- Conformidade com PCI DSS\n\nVou solicitar que nossa equipe de UX e nosso CTO forneçam detalhes técnicos para implementação.",
      timestamp: "10:35",
      sender: "agent"
    }
  ],
  "proj-2": [
    {
      id: "msg-1",
      projectId: "proj-2",
      agentId: "agent-2",
      content: "Como CTO, analisei a estrutura do aplicativo de finanças pessoais. Sugiro utilizar React Native para desenvolvimento multiplataforma com Firebase para o backend. O que acha desta abordagem técnica?",
      timestamp: "09:15",
      sender: "agent"
    },
    {
      id: "msg-2",
      projectId: "proj-2",
      agentId: null,
      content: "Parece ótimo. Quais são os benefícios de usar React Native em vez de desenvolver apps nativos separados?",
      timestamp: "09:17",
      sender: "user"
    },
    {
      id: "msg-3",
      projectId: "proj-2",
      agentId: "agent-2",
      content: "Ótima pergunta! As principais vantagens do React Native incluem:\n\n- Código compartilhado entre iOS e Android (até 90%)\n- Tempo de desenvolvimento reduzido em aproximadamente 30%\n- Custo mais baixo de manutenção\n- Acesso a uma grande comunidade de desenvolvedores\n- Performance próxima à nativa para a maioria dos casos\n\nO trade-off é uma pequena redução de performance em comparação com código completamente nativo, mas para este aplicativo, as vantagens superam significativamente esta limitação.",
      timestamp: "09:20",
      sender: "agent"
    }
  ]
};
