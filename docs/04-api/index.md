
# API do Olympus Tech

Esta seção contém a documentação da API do Olympus Tech.

## Visão Geral

O Olympus Tech fornece uma API RESTful para interagir com o sistema. Esta documentação será expandida à medida que a API for implementada.

## Endpoints Planejados

### Autenticação

- `POST /api/auth/login` - Autenticação de usuário
- `POST /api/auth/logout` - Logout de usuário
- `POST /api/auth/refresh` - Atualização de token

### Projetos

- `GET /api/projects` - Lista de projetos
- `GET /api/projects/:id` - Detalhes de um projeto
- `POST /api/projects` - Criação de projeto
- `PUT /api/projects/:id` - Atualização de projeto
- `DELETE /api/projects/:id` - Exclusão de projeto

### Agentes

- `GET /api/agents` - Lista de agentes disponíveis
- `POST /api/agents/:id/chat` - Envio de mensagem para um agente
- `GET /api/conversations/:id` - Histórico de conversas

### Análises

- `GET /api/analytics/projects/:id` - Analytics de um projeto
- `GET /api/analytics/usage` - Analytics de uso da plataforma

## Autenticação

A API utiliza autenticação baseada em JWT (JSON Web Tokens). Para acessar endpoints protegidos, um token válido deve ser incluído no cabeçalho Authorization:

```
Authorization: Bearer {seu_token_jwt}
```

## Formatos de Resposta

Todas as respostas são retornadas no formato JSON. Respostas de sucesso normalmente seguem este formato:

```json
{
  "success": true,
  "data": { ... }
}
```

Respostas de erro seguem este formato:

```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Descrição do erro"
  }
}
```

## Códigos de Status HTTP

- `200 OK` - Requisição bem-sucedida
- `201 Created` - Recurso criado com sucesso
- `400 Bad Request` - Parâmetros inválidos
- `401 Unauthorized` - Autenticação necessária
- `403 Forbidden` - Sem permissão para acessar o recurso
- `404 Not Found` - Recurso não encontrado
- `500 Internal Server Error` - Erro interno do servidor

## Versionamento

A API é versionada através do caminho da URL. A versão atual é v1:

```
https://api.olympus-tech.com/v1/
```

## Rate Limiting

Para garantir a estabilidade do serviço, implementamos limites de taxa em todos os endpoints da API. Os limites específicos serão documentados em cada endpoint.

## Documentação Detalhada

Uma documentação mais detalhada será gerada com Swagger/OpenAPI e disponibilizada nesta seção à medida que a API for implementada.
