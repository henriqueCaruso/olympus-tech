
# Design com Apolo

Este guia apresenta como trabalhar efetivamente com o Agente Apolo para criar experiências de usuário intuitivas, atraentes e funcionais para seus projetos.

## O Papel de Apolo no Design

Como deus da luz, das artes e da harmonia, Apolo traz ao Olympus Tech:

- Sensibilidade estética e harmonia visual
- Clareza e intuitividade na comunicação
- Equilíbrio entre beleza e funcionalidade
- Atenção aos detalhes que elevam a experiência do usuário

Junto com Afrodite, que aporta elementos de beleza e desejo, Apolo transforma requisitos funcionais em interfaces que cativam e deleitam os usuários.

## Quando Consultar Apolo

Os momentos ideais para consultar Apolo incluem:

- **Concepção inicial de interfaces** - Para definição de conceitos visuais
- **Criação de componentes de UI** - Para desenho de elementos específicos
- **Fluxos de usuário** - Para sequências de interação intuitivas
- **Revisão de designs** - Para aprimoramento de interfaces existentes
- **Sistemas de design** - Para criação de bibliotecas de componentes consistentes

## Processo de Trabalho com Apolo

### 1. Preparação para Consulta

**Reúna as informações necessárias:**

- Personas e características dos usuários-alvo
- Requisitos funcionais que a interface deve atender
- Restrições técnicas e de plataforma (web, mobile, tamanhos de tela)
- Identidade visual existente ou diretrizes de marca
- Referências de interfaces admiradas ou desejadas como inspiração

### 2. Estruturando a Consulta

Formule sua solicitação a Apolo seguindo este modelo:

```
Apolo, preciso criar [tipo de interface] para [objetivo/função].

Contexto:
- Usuários: [descrição do público-alvo]
- Principais ações: [o que os usuários precisam realizar]
- Plataformas: [web, mobile, responsive, etc.]
- Estilo visual: [minimalista, vibrante, corporativo, etc.]
- Referências: [exemplos que admira ou deseja seguir]

Por favor, proponha um design que equilibre estética e usabilidade para este contexto.
```

### 3. Iterando e Refinando

Após receber a proposta inicial de Apolo:

1. **Avalie a resposta aos requisitos funcionais** - O design permite todas as ações necessárias?
2. **Analise a hierarquia visual** - Os elementos mais importantes têm destaque adequado?
3. **Considere o fluxo de atenção** - O olhar do usuário é guiado naturalmente?
4. **Verifique a consistência** - Os padrões visuais são mantidos ao longo da interface?
5. **Explore variações** - Peça alternativas para áreas específicas ou compare abordagens

### 4. Documentação de Design

Peça a Apolo para formalizar o design definido em:

- **Wireframes** - Estrutura básica e organização de conteúdo
- **Mockups visuais** - Representações detalhadas com estilo visual aplicado
- **Protótipos** - Descrições de como a interatividade deve funcionar
- **Guias de estilo** - Definições de cores, tipografia, espaçamento e componentes
- **Anotações de implementação** - Orientações para desenvolvedores

## Exemplo Prático: Dashboard Analítico

### Consulta Inicial

```
Apolo, precisamos criar um dashboard analítico para gestores de marketing acompanharem 
o desempenho de campanhas digitais.

Contexto:
- Usuários: Gerentes de marketing com pouca experiência técnica
- Principais métricas: ROI, conversões, engajamento e custos por canal
- Plataforma: Web desktop (principalmente) com versão responsiva
- Estilo visual: Profissional mas moderno, alinhado à identidade do Olympus
- Desafio: Apresentar dados complexos de forma clara e acionável
- Funcionalidades: Filtros por período, comparação entre campanhas, exportação de dados

Por favor, sugira uma estrutura de dashboard que seja tanto informativa quanto intuitiva.
```

### Resposta Estruturada de Apolo

```
# Dashboard Analítico para Gestores de Marketing

## CONCEITO VISUAL

Proponho um dashboard que equilibre clareza informacional com elegância visual, 
seguindo estas diretrizes:

- **Esquema de cores**: Base em tons escuros (#10152B) para reduzir fadiga visual com 
  acentos dourados (#D4AF37) para destacar informações críticas e ações primárias
- **Tipografia**: Sans-serif (Roboto) para leitura confortável com hierarquia clara:
  - Títulos: 24px, peso 500
  - Subtítulos: 18px, peso 400
  - Corpo: 14px, peso 400
  - Dados destacados: 32px, peso 700
- **Espaçamento**: Layout arejado com margens consistentes (24px entre seções)
- **Iconografia**: Ícones lineares com estilo consistente, 24x24px

## ESTRUTURA DO DASHBOARD

### 1. Cabeçalho e Navegação
- Barra superior fixa com logo, título do dashboard e controles globais
- Menu lateral colapsável para navegação entre diferentes dashboards
- Dropdown para seleção rápida de campanhas ativas

### 2. Controles e Filtros
- Filtro de período proeminente (últimos 7/30/90 dias + customizado)
- Seletor de campanhas para comparação (múltipla seleção)
- Filtros secundários colapsáveis (plataformas, geografia, demografia)
- Botão de exportação de dados com opções (CSV, PDF, programação de relatórios)

### 3. KPIs Principais
- Linha de cards destacados com métricas essenciais:
  - ROI geral (com tendência vs período anterior)
  - Total de conversões
  - Custo médio por aquisição
  - Orçamento utilizado (progresso visual)
- Cada card com: valor atual, variação percentual, micro-gráfico de tendência

### 4. Visualizações Primárias
- **Gráfico principal**: Performance temporal das métricas selecionadas
  - Eixo Y duplo para métricas de escalas diferentes
  - Possibilidade de alternar entre tipos (linha, barra, área)
  - Tooltips detalhados ao passar o mouse
- **Breakdown por canais**: Gráfico de barras horizontais ou treemap
  - Código de cores consistente por canal
  - Ordenação configurável (valor, alfabética, ROI)

### 5. Análises Detalhadas
- Sistema de cards em grid (2x2 ou 3x2) com visualizações menores:
  - Funil de conversão
  - Mapa de calor geográfico
  - Distribuição demográfica
  - Desempenho por dispositivo/plataforma
- Cada card expansível para análise detalhada em tela cheia

### 6. Insights Automatizados
- Seção dedicada a insights gerados por IA
- Alertas sobre anomalias ou oportunidades
- Recomendações acionáveis com clareza

## CONSIDERAÇÕES DE USABILIDADE

### Hierarquia Visual
- Informações críticas para tomada de decisão sempre visíveis sem rolagem
- Dados contextuais secundários acessíveis com um clique
- Sinalização clara de estados (carregando, filtrando, erro)

### Responsividade
- Abordagem "mobile-last": otimizado para desktop, adaptável a tablets
- Em telas menores: reorganização vertical dos elementos
- Menus colapsáveis para maximizar área de visualização

### Acessibilidade
- Contraste de cores adequado (WCAG AA)
- Feedback não dependente apenas de cor
- Suporte a navegação por teclado
- Texto alternativo para elementos visuais

## PROTÓTIPO VISUAL

Eis como o layout se organizaria visualmente:

```ascii
+-------------------------------------------------------+
|  Logo   Dashboard Marketing     Filtros  Usuário  ?   |
+-------+-------------------------------------------+---+
|       |  Período: Últimos 30 dias    ▼   Export  |   |
|       |                                           |   |
| N     |  +-------+  +-------+  +-------+  +-----+|   |
| A     |  |  ROI  |  | Conv. |  |  CPA  |  | Orç ||   |
| V     |  | +22%↑ |  |  1.2k |  | $24.8 |  | 68% ||   |
| E     |  +-------+  +-------+  +-------+  +-----+|   |
| G     |                                           | O |
| A     |  [Gráfico de Performance Temporal]        | U |
| Ç     |                                           | T |
| Ã     |                                           | R |
| O     |  [Breakdown por Canal]   [Funil de Conv.] | A |
|       |                                           | S |
|       |                                           |   |
|       |  [Mapa Geográfico]      [Demografia]     | V |
|       |                                           | I |
|       |                                           | S |
|       |  +---------------------------------+      | T |
|       |  |  Insights Automáticos           |      | A |
|       |  |  • Campanha X superando em 40%  |      | S |
|       |  |  • Oportunidade identificada... |      |   |
|       |  +---------------------------------+      |   |
+-------+-------------------------------------------+---+
```

## SISTEMA DE ESTADOS E FEEDBACK

O dashboard incorporaria os seguintes estados visuais:

- **Carregamento**: Skeletons para dados em carregamento
- **Vazio**: Estados zero-data com sugestões de ação
- **Erro**: Mensagens claras e recuperação fácil
- **Threshold**: Codificação de cores para métricas abaixo/acima de metas
- **Destaque**: Sutis animações em hover para elementos interativos

## COMPONENTES DETALHADOS

### Cards de KPI
Cada card de KPI seguiria este padrão:
- Título claro e sucinto (ex: "Retorno sobre Investimento")
- Valor destacado (ex: "324%")
- Indicador de tendência (seta para cima/baixo + porcentagem)
- Micro-sparkline mostrando histórico recente
- Código de cor contextual (verde para positivo, vermelho para negativo)

### Gráficos Interativos
Os gráficos principais teriam as seguintes interações:
- Seleção de séries de dados por clique na legenda
- Zoom em períodos específicos por seleção de área
- Tooltips contextuais com dados completos ao hover
- Opções de exportação da visualização específica

## IMPLEMENTAÇÃO TÉCNICA

Recomendo implementar este dashboard com:

- **Bibliotecas**: Recharts ou D3.js para visualizações
- **Componentes**: Sistemas de design como MUI ou Chakra UI
- **Responsividade**: Grid system flexível com breakpoints em 768px e 1200px
- **Estado**: Context API para filtros globais e seleções
- **Performance**: Virtualização para listas longas, carregamento lazy de dados

O design proposto equilibra a riqueza informacional necessária para gestores de marketing 
com clareza visual e hierarquia de informação que facilita a tomada de decisão rápida.
```

## Colaboração com Outros Agentes

Apolo trabalha em sinergia com outros agentes para criar experiências completas:

- **Com Atena**: Para garantir que o design seja tecnicamente viável
- **Com Hermes**: Para alinhar a interface aos objetivos do produto
- **Com Hefesto**: Para assegurar que a implementação preserve a visão de design
- **Com Afrodite**: Para aprimorar aspectos estéticos e emocionais do design

### Fluxo ideal de colaboração:

1. **Zeus e Hermes** definem os objetivos e requisitos
2. **Apolo** cria o conceito visual e wireframes
3. **Atena e Hefesto** avaliam viabilidade técnica
4. **Apolo** refina e detalha o design final
5. **Hefesto** implementa a interface

## Criando um Sistema de Design

Para projetos maiores, considere pedir a Apolo para criar um sistema de design completo:

```
Apolo, precisamos criar um sistema de design para nosso produto que possa 
crescer consistentemente. Por favor, defina os componentes essenciais, 
diretrizes de uso e princípios que devem guiar nossa linguagem visual.
```

Um sistema de design completo normalmente inclui:

- **Princípios de design** - Valores e filosofia que guiam decisões
- **Fundações visuais** - Cores, tipografia, grid, espaçamento, iconografia
- **Componentes** - Biblioteca de elementos reutilizáveis com variações
- **Padrões** - Soluções recorrentes para problemas comuns de interface
- **Voz e tom** - Guia para comunicação textual consistente

## Equilibrando Estética e Usabilidade

Apolo é especialmente habilidoso em encontrar o equilíbrio entre beleza visual e funcionalidade:

![Equilíbrio na UX](../diagrams/apollo-balance.png)

Para interfaces complexas, peça explicitamente este equilíbrio:

```
Apolo, preciso de um design que seja visualmente atraente mas que também 
priorize a usabilidade para [tipo de usuário]. Como podemos equilibrar 
a estética sofisticada que desejamos com a facilidade de uso que nossos 
usuários necessitam?
```

## Testando Designs com Usuários

Apolo pode ajudar a preparar e interpretar testes de usabilidade:

1. **Preparação**: Peça a Apolo para identificar áreas críticas a testar
2. **Condução**: Use os designs de Apolo como protótipos para testes
3. **Análise**: Retorne com feedback dos usuários para refinamento

```
Apolo, recebemos o seguinte feedback dos testes de usabilidade: [feedback].
Como podemos ajustar o design para endereçar essas questões mantendo 
a integridade visual que criamos?
```

## Dicas para Interação Efetiva

1. **Forneça contexto rico** - Quanto mais Apolo entender sobre usuários e objetivos, melhores serão os designs
2. **Compartilhe referências visuais** - Exemplos concretos do que você gosta ajudam a alinhar expectativas
3. **Seja específico sobre restrições** - Limitações técnicas, de plataforma ou de marca
4. **Itere progressivamente** - Comece com wireframes básicos antes de pedir designs detalhados
5. **Peça explicações, não apenas outputs** - Entenda o raciocínio por trás das decisões de design

---

<div class="olympus-card">
Lembre-se: O melhor design não é necessariamente o mais bonito, mas aquele que melhor serve às necessidades dos usuários enquanto atinge os objetivos do produto. Apolo busca este equilíbrio em cada interação.
</div>
