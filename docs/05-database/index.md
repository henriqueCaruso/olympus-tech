# **Banco de Dados do Olympus Tech**

**Last Updated:** 2025-09-02

## **Visão Geral**

A base de dados do Olympus Tech foi projetada para ser modular e escalável, suportando a complexa interação entre usuários, projetos e os agentes de IA ("Deuses"). Utilizamos um modelo relacional para garantir a integridade e a consistência dos dados.

Esta documentação serve como um índice central para o esquema da nossa base de dados. Cada tabela listada abaixo terá seu próprio arquivo README.md detalhado, que será criado e mantido através de um processo de **ARD (Architecture Decision Record)** específico para a base de dados.

## **Diagrama de Entidade-Relacionamento (ERD)**

O diagrama abaixo oferece uma visão de alto nível de como as principais entidades do sistema se conectam.

erDiagram  
    Users ||--o{ Projects : "é dono de"  
    Users ||--o{ User\_Preferences : "tem"  
    Users ||--o{ Api\_Keys : "possui"  
    Projects ||--|{ Tasks : "contém"  
    Projects ||--o{ Conversations : "possui"  
    Projects ||--o{ Artifacts : "gera"  
    Tasks ||--o{ Agents : "é atribuída a"  
    Agents ||--o{ Agent\_Prompts : "usa"  
    Agents ||--o{ Agent\_Capabilities : "tem"  
    Agents ||--o{ Rag\_Sources : "usa"  
    Conversations ||--|{ Messages : "contém"  
    Messages ||--o{ Agents : "enviada por"  
    Messages ||--o{ Users : "enviada por"

## **Esquema da Base de Dados**

A seguir estão as tabelas que compõem a nossa base de dados. Clique em cada uma para aceder à sua documentação detalhada (a ser criada).

### **Tabelas Principais (Core)**

* [**Users**](./tables/users.md)  
  * Armazena as informações de perfil e autenticação para cada usuário da plataforma.  
* [**Projects**](./tables/projects.md)  
  * Contém os detalhes de cada projeto criado por um usuário, servindo como o container principal para tarefas, conversas e artefatos.  
* [**Tasks**](./tables/tasks.md)  
  * Representa as unidades de trabalho dentro de um projeto, utilizadas no quadro Kanban e para atribuição aos agentes.

### **Configurações de Usuário**

* [**User\_Preferences**](./tables/user_preferences.md)  
  * Guarda as configurações de personalização da interface para cada usuário, como tema, idioma e preferências de notificação.  
* [**Api\_Keys**](./tables/api_keys.md)  
  * Armazena de forma segura as chaves de API fornecidas pelo usuário para diferentes provedores de IA (integrado com o backend LiteLLM).

### **Configuração dos Agentes (Deuses)**

* [**Agents**](./tables/agents.md)  
  * Define os "Deuses" disponíveis na plataforma, incluindo seus nomes, papéis, mitologia e configurações base.  
* [**Agent\_Prompts**](./tables/agent_prompts.md)  
  * Uma biblioteca de templates de prompts que podem ser personalizados e atribuídos aos agentes para guiar seu comportamento.  
* [**Agent\_Capabilities**](./tables/agent_capabilities.md)  
  * Define os "Poderes" (MCP \- Mission, Capabilities, Powers) de cada agente, ligando um agente a um conjunto de prompts e habilidades.  
* [**Rag\_Sources**](./tables/rag_sources.md)  
  * Armazena as fontes de dados (documentos, URLs, etc.) para o sistema RAG (Retrieval-Augmented Generation) de cada agente, garantindo conhecimento especializado.

### **Interação e Outputs**

* [**Conversations**](./tables/conversations.md)  
  * Agrupa as mensagens trocadas entre um usuário e os agentes dentro do contexto de um projeto.  
* [**Messages**](./tables/messages.md)  
  * Armazena cada mensagem individual enviada por um usuário ou agente.  
* [**Artifacts**](./tables/artifacts.md)  
  * Guarda os outputs gerados pelos agentes, como código, documentos e diagramas.

## **Processo de Documentação e Alteração**

Cada tabela neste esquema é acompanhada por um README.md detalhado em sua respectiva pasta. Qualquer proposta de alteração ou criação de uma nova tabela deve ser precedida pela criação ou atualização de um **ARD (Architecture Decision Record)**. Este processo garante que nossa base de dados evolua de forma consistente, documentada e alinhada com os objetivos do produto.
