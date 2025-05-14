
# Guia de Contribuição

Agradecemos seu interesse em contribuir com o Olympus Tech! Este documento fornece as diretrizes e processos que esperamos que os colaboradores sigam.

## Código de Conduta

Este projeto e todos os participantes estão sob o [Código de Conduta](CODE_OF_CONDUCT.md). Ao participar, espera-se que você cumpra este código.

## Como Contribuir

### Reportando Bugs

- Verifique se o bug já não foi reportado na seção de Issues do repositório
- Se não encontrar uma issue aberta relacionada, crie uma nova
- Use o template para bug report, fornecendo o máximo de informações possível
- Inclua passos para reproduzir, comportamento esperado e atual, screenshots se possível

### Sugerindo Melhorias

- Verifique se a melhoria já não foi sugerida na seção de Issues
- Crie uma nova issue usando o template de feature request
- Descreva claramente a melhoria e seus benefícios
- Inclua qualquer informação adicional que possa ser relevante

### Contribuindo com Código

1. **Fork o repositório**
   ```bash
   git clone https://github.com/seu-usuario/olympus-tech.git
   cd olympus-tech
   ```

2. **Crie uma branch**
   ```bash
   git checkout -b feature/nome-da-sua-feature
   ```

3. **Faça suas alterações**
   - Siga os padrões de código estabelecidos
   - Adicione testes para novas funcionalidades
   - Atualize a documentação conforme necessário

4. **Confirme suas alterações**
   ```bash
   git add .
   git commit -m "feat: descrição clara e concisa da mudança"
   ```
   
   Usamos [Conventional Commits](https://www.conventionalcommits.org/):
   - `feat:` para novas funcionalidades
   - `fix:` para correções de bugs
   - `docs:` para alterações na documentação
   - `style:` para formatação, ponto e vírgula, etc.
   - `refactor:` para refatoração de código
   - `test:` para adição ou correção de testes
   - `chore:` para tarefas de manutenção

5. **Push para o seu fork**
   ```bash
   git push origin feature/nome-da-sua-feature
   ```

6. **Abra um Pull Request**
   - Preencha o template do pull request
   - Referencie qualquer issue relacionada
   - Descreva claramente o que foi alterado e por quê

## Processo de Review

- Todos os PRs serão revisados por pelo menos um mantenedor
- Os revisores podem solicitar alterações ou fornecer sugestões
- Após aprovação, um mantenedor fará o merge

## Atualização de Documentação

- Ao fazer alterações que impactam os usuários, atualize a documentação correspondente
- Para alterações de arquitetura, considere criar ou atualizar um ADR
- Use o formato Markdown e siga os padrões de documentação existentes

## Ambiente de Desenvolvimento

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Executar testes
npm test

# Iniciar servidor da documentação localmente
mkdocs serve
```

## Estrutura do Projeto

Familiarize-se com a estrutura de diretórios do projeto:

```
olympus-tech/
├── docs/             # Documentação (MkDocs)
├── src/              # Código fonte
│   ├── components/   # Componentes React
│   ├── pages/        # Componentes de página
│   ├── hooks/        # React hooks
│   ├── data/         # Tipos de dados e interfaces
│   └── lib/          # Funções utilitárias
└── ...
```

## Dúvidas?

Se você tiver dúvidas sobre como contribuir, sinta-se à vontade para abrir uma issue com a tag `question`.

Agradecemos suas contribuições para tornar o Olympus Tech cada vez melhor!
