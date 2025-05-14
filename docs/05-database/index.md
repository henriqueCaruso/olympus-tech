
# Banco de Dados do Olympus Tech

Esta seção contém informações sobre o modelo de dados e esquema do banco de dados do Olympus Tech.

## Modelo de Dados

O Olympus Tech utiliza um modelo de dados que reflete as principais entidades do sistema:

- **Usuários**: Informações dos usuários da plataforma
- **Projetos**: Dados sobre projetos criados
- **Agentes**: Configurações e características dos agentes
- **Conversas**: Histórico de interações entre usuários e agentes
- **Artefatos**: Documentos e outros recursos gerados durante as interações
- **Analytics**: Dados coletados para métricas e análises

## Esquema Planejado

### Tabela: Users

| Campo        | Tipo        | Descrição                      |
|--------------|-------------|--------------------------------|
| id           | UUID        | Identificador único do usuário |
| name         | VARCHAR     | Nome completo do usuário       |
| email        | VARCHAR     | Email do usuário               |
| password     | VARCHAR     | Senha criptografada            |
| role         | VARCHAR     | Papel do usuário no sistema    |
| company      | VARCHAR     | Empresa do usuário             |
| bio          | TEXT        | Biografia do usuário           |
| avatar       | VARCHAR     | URL para avatar do usuário     |
| created_at   | TIMESTAMP   | Data de criação                |
| updated_at   | TIMESTAMP   | Data de atualização            |

### Tabela: Projects

| Campo        | Tipo        | Descrição                        |
|--------------|-------------|----------------------------------|
| id           | UUID        | Identificador único do projeto   |
| name         | VARCHAR     | Nome do projeto                  |
| description  | TEXT        | Descrição do projeto             |
| status       | VARCHAR     | Status atual do projeto          |
| template_id  | UUID        | Template utilizado               |
| owner_id     | UUID        | ID do usuário proprietário       |
| created_at   | TIMESTAMP   | Data de criação                  |
| updated_at   | TIMESTAMP   | Data de atualização              |

### Tabela: Agents

| Campo        | Tipo        | Descrição                       |
|--------------|-------------|---------------------------------|
| id           | UUID        | Identificador único do agente   |
| name         | VARCHAR     | Nome do agente                  |
| role         | VARCHAR     | Papel/função do agente          |
| description  | TEXT        | Descrição do agente             |
| icon_type    | VARCHAR     | Tipo de ícone do agente         |
| active       | BOOLEAN     | Se o agente está ativo          |

### Tabela: Conversations

| Campo        | Tipo        | Descrição                         |
|--------------|-------------|-----------------------------------|
| id           | UUID        | Identificador único da conversa   |
| user_id      | UUID        | ID do usuário                     |
| agent_id     | UUID        | ID do agente                      |
| project_id   | UUID        | ID do projeto relacionado         |
| started_at   | TIMESTAMP   | Data de início da conversa        |
| updated_at   | TIMESTAMP   | Última atualização da conversa    |

### Tabela: Messages

| Campo        | Tipo        | Descrição                        |
|--------------|-------------|----------------------------------|
| id           | UUID        | Identificador único da mensagem  |
| conversation_id | UUID     | ID da conversa                   |
| sender_type  | VARCHAR     | Tipo do remetente (user/agent)   |
| sender_id    | UUID        | ID do remetente                  |
| content      | TEXT        | Conteúdo da mensagem             |
| timestamp    | TIMESTAMP   | Data e hora da mensagem          |

### Tabela: Artifacts

| Campo        | Tipo        | Descrição                        |
|--------------|-------------|----------------------------------|
| id           | UUID        | Identificador único do artefato  |
| name         | VARCHAR     | Nome do artefato                 |
| type         | VARCHAR     | Tipo do artefato                 |
| project_id   | UUID        | ID do projeto                    |
| conversation_id | UUID     | ID da conversa de origem         |
| content      | TEXT/BLOB   | Conteúdo do artefato             |
| created_at   | TIMESTAMP   | Data de criação                  |
| created_by_agent_id | UUID | ID do agente criador             |

## Relações

- Um **Usuário** pode ter muitos **Projetos**
- Um **Projeto** pode ter muitas **Conversas**
- Um **Agente** pode participar de muitas **Conversas**
- Uma **Conversa** contém muitas **Mensagens**
- Uma **Conversa** pode gerar muitos **Artefatos**

## Tecnologias de Banco de Dados

O Olympus Tech utilizará:

- **PostgreSQL** como banco de dados principal
- **Redis** para cache e gerenciamento de sessões
- **Vector Database** (como Pinecone ou Weaviate) para armazenamento de embeddings e busca semântica

## Migração e Versionamento

O esquema do banco de dados será gerenciado com:

- **Ferramentas de migração** para controle de versão do esquema
- **Scripts de seed** para dados iniciais
- **Backups regulares** e estratégias de recuperação

## Diagrama ER

Um diagrama de Entidade-Relacionamento detalhado será adicionado nesta seção à medida que o modelo de dados for finalizado.
