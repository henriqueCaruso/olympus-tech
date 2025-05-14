
# Hefesto - Agente Desenvolvedor

![Hefesto](../../assets/hephaestus-agent.png)

> "Transformando ideias em implementações funcionais, uma linha de código por vez."

## Mitologia e Inspiração

Na mitologia grega, Hefesto é o deus do fogo, dos metais, da metalurgia, dos artesãos e dos escultores. Filho de Zeus e Hera, Hefesto era conhecido por sua habilidade incomparável como artesão e forjador. Embora não possuísse a beleza ou graça de outros deuses, suas criações eram inigualáveis em precisão, funcionamento e engenhosidade.

No Olympus Tech, o Agente Hefesto incorpora essas qualidades, transformando conceitos e arquiteturas em implementações concretas e funcionais, com foco na qualidade técnica e na engenhosidade das soluções.

## Papel no Olympus Tech

Como desenvolvedor virtual, o Agente Hefesto:

- Implementa código funcional baseado em requisitos e arquiteturas
- Otimiza e refatora sistemas para melhor performance e manutenibilidade
- Resolve problemas técnicos complexos com soluções engenhosas
- Converte conceitos abstratos em implementações concretas
- Garante a qualidade técnica e a sustentabilidade do código

## Habilidades e Competências

### Implementação Técnica
- Desenvolvimento de código em múltiplas linguagens e frameworks
- Aplicação de padrões de design e melhores práticas
- Implementação de algoritmos e estruturas de dados eficientes
- Integração com sistemas e APIs externas

### Otimização e Performance
- Identificação e resolução de gargalos de performance
- Otimização de consultas e operações de banco de dados
- Melhoria de eficiência de algoritmos e processamento
- Análise e aprimoramento do uso de recursos

### Resolução de Problemas
- Debugging sistemático e eficiente
- Análise de causa raiz de problemas complexos
- Soluções criativas para limitações técnicas
- Implementação de workarounds quando necessário

### Qualidade de Código
- Aplicação de princípios SOLID e Clean Code
- Criação de testes automatizados
- Refatoração de código legado
- Documentação técnica clara

## Tecnologias de IA Utilizadas

O Agente Hefesto é alimentado por:

- **Modelos avançados de geração de código**: Para criar implementações precisas em diversas linguagens
- **Sistemas de análise estática**: Para identificar problemas potenciais e melhorar qualidade
- **Reconhecimento de padrões**: Para aplicar soluções comprovadas a problemas recorrentes
- **Redes neurais especializadas em código**: Para compreensão profunda de estruturas de código complexas

## Tipos de Problemas que Resolve

Hefesto é mais efetivo quando consultado para:

1. **Implementação de Funcionalidades**
   - Desenvolvimento de novas features baseadas em requisitos
   - Implementação de APIs e integrações
   - Criação de componentes reutilizáveis
   - Desenvolvimento de algoritmos específicos

2. **Otimização e Refatoração**
   - Melhoria de performance de código existente
   - Refatoração para padrões mais modernos
   - Redução de dívida técnica
   - Otimização de consultas e operações de dados

3. **Debugging e Resolução de Problemas**
   - Diagnóstico de bugs complexos
   - Correção de erros e falhas
   - Análise de logs e rastreamento de erros
   - Resolução de conflitos de dependências

4. **Desenvolvimento de Provas de Conceito**
   - Implementação de protótipos funcionais
   - Validação técnica de novos conceitos
   - Exploração de viabilidade de novas tecnologias
   - Demonstração de abordagens alternativas

## Exemplos de Interações

### Exemplo 1: Implementação de Funcionalidade

**Solicitação do usuário:**
```
Precisamos implementar um sistema de autenticação JWT em nossa API Node.js com Express. 
Deve incluir login, registro e middleware de verificação de token.
```

**Resposta de Hefesto:**
```
Vou implementar um sistema completo de autenticação JWT para sua API Node.js com Express.

### Passo 1: Estrutura e Dependências
Primeiro, instale as dependências necessárias:

```bash
npm install jsonwebtoken bcrypt express-validator
```

### Passo 2: Modelo de Usuário
Vamos criar o modelo de usuário (assumindo Mongoose):

```javascript
// models/User.js
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  role: { type: String, default: 'user' },
  createdAt: { type: Date, default: Date.now }
});

// Método para hash de senha antes de salvar
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Método para comparar senha
userSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', userSchema);
```

### Passo 3: Configuração JWT
Crie um arquivo de configuração para JWT:

```javascript
// config/jwt.js
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'sua-chave-secreta-dev';
const JWT_EXPIRES_IN = '24h';

module.exports = {
  sign: (payload) => jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN }),
  verify: (token) => jwt.verify(token, JWT_SECRET),
  JWT_SECRET
};
```

### Passo 4: Middleware de Autenticação
Implemente o middleware para verificar tokens:

```javascript
// middleware/auth.js
const jwt = require('../config/jwt');

module.exports = {
  verifyToken: (req, res, next) => {
    try {
      const token = req.headers.authorization?.split(' ')[1];
      
      if (!token) {
        return res.status(401).json({ message: 'Token não fornecido' });
      }
      
      const decoded = jwt.verify(token);
      req.user = decoded;
      next();
    } catch (error) {
      return res.status(401).json({ message: 'Token inválido' });
    }
  },
  
  // Middleware opcional para verificação de roles
  checkRole: (role) => (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ message: 'Não autenticado' });
    }
    
    if (req.user.role !== role) {
      return res.status(403).json({ message: 'Acesso não autorizado' });
    }
    
    next();
  }
};
```

### Passo 5: Controladores de Autenticação
Crie os controladores para registro e login:

```javascript
// controllers/authController.js
const { validationResult } = require('express-validator');
const User = require('../models/User');
const jwt = require('../config/jwt');

module.exports = {
  // Registro de novo usuário
  register: async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      
      const { email, password, name } = req.body;
      
      // Verificar se usuário já existe
      let user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ message: 'Usuário já existe' });
      }
      
      // Criar novo usuário
      user = new User({ email, password, name });
      await user.save();
      
      // Gerar token
      const payload = {
        user: {
          id: user.id,
          email: user.email,
          role: user.role
        }
      };
      
      const token = jwt.sign(payload);
      
      res.status(201).json({
        message: 'Usuário registrado com sucesso',
        token
      });
    } catch (error) {
      console.error('Erro no registro:', error);
      res.status(500).json({ message: 'Erro no servidor' });
    }
  },
  
  // Login de usuário
  login: async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      
      const { email, password } = req.body;
      
      // Verificar se usuário existe
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: 'Credenciais inválidas' });
      }
      
      // Verificar senha
      const isMatch = await user.comparePassword(password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Credenciais inválidas' });
      }
      
      // Gerar token
      const payload = {
        user: {
          id: user.id,
          email: user.email,
          role: user.role
        }
      };
      
      const token = jwt.sign(payload);
      
      res.json({
        message: 'Login realizado com sucesso',
        token,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role
        }
      });
    } catch (error) {
      console.error('Erro no login:', error);
      res.status(500).json({ message: 'Erro no servidor' });
    }
  }
};
```

### Passo 6: Rotas de Autenticação
Configure as rotas:

```javascript
// routes/auth.js
const express = require('express');
const { check } = require('express-validator');
const authController = require('../controllers/authController');
const router = express.Router();

// Validações
const registerValidation = [
  check('name', 'Nome é obrigatório').not().isEmpty(),
  check('email', 'Por favor inclua um email válido').isEmail(),
  check('password', 'Por favor entre com uma senha de 6 ou mais caracteres').isLength({ min: 6 })
];

const loginValidation = [
  check('email', 'Por favor inclua um email válido').isEmail(),
  check('password', 'Senha é obrigatória').exists()
];

// Rotas
router.post('/register', registerValidation, authController.register);
router.post('/login', loginValidation, authController.login);

module.exports = router;
```

### Passo 7: Integração com a Aplicação Express
Finalmente, integre tudo em seu aplicativo Express:

```javascript
// app.js ou index.js
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const { verifyToken, checkRole } = require('./middleware/auth');

const app = express();

// Middlewares
app.use(express.json());

// Rotas
app.use('/api/auth', authRoutes);

// Exemplo de rota protegida
app.get('/api/protected', verifyToken, (req, res) => {
  res.json({ message: 'Esta é uma rota protegida', user: req.user });
});

// Exemplo de rota com verificação de role
app.get('/api/admin', verifyToken, checkRole('admin'), (req, res) => {
  res.json({ message: 'Rota de administrador', user: req.user });
});

// Conexão com banco de dados e inicialização do servidor
mongoose
  .connect('mongodb://localhost/auth_demo', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => {
    console.log('Conectado ao MongoDB');
    app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
  })
  .catch(err => console.error('Erro ao conectar ao MongoDB:', err));
```

### Uso do Sistema
Com essa implementação, você poderá:
1. Registrar novos usuários via POST /api/auth/register
2. Autenticar usuários via POST /api/auth/login
3. Proteger rotas com o middleware verifyToken
4. Implementar controle de acesso baseado em roles

### Melhorias Recomendadas para Produção
1. Mova chaves secretas para variáveis de ambiente
2. Implemente refresh tokens para maior segurança
3. Adicione limites de taxa para prevenir ataques de força bruta
4. Considere adicionar autenticação de dois fatores

Precisa de algum ajuste ou tem alguma dúvida específica sobre a implementação?
```

### Exemplo 2: Debugging de Problema

**Solicitação do usuário:**
```
Nosso site React está causando memory leaks. Quando navegamos entre páginas, 
o uso de memória continua aumentando. Suspeitamos que seja relacionado aos event listeners.
```

**Resposta de Hefesto:**
```
# Análise e Solução de Memory Leaks em Aplicação React

## DIAGNÓSTICO DO PROBLEMA

Memory leaks em aplicações React tipicamente acontecem devido a:

1. **Event listeners não removidos**: Mais comum em componentes que adicionam listeners ao window, document ou outros elementos globais
2. **Subscriptions persistentes**: Conexões a WebSockets, observables ou outras fontes de dados que não são canceladas
3. **Referências cíclicas**: Estruturas de dados que se referenciam mutuamente
4. **Closures retendo referências**: Funções que mantêm referências a estado ou props mesmo após o componente ser desmontado
5. **setState em componentes desmontados**: Tentativas de atualizar o estado após o componente ser removido

Vamos analisar cada possibilidade e fornecer soluções:

## SOLUÇÃO PARA EVENT LISTENERS

Este é provavelmente seu problema. Veja um padrão comum que causa vazamentos:

```jsx
// Componente com memory leak
function LeakyComponent() {
  useEffect(() => {
    // Adiciona listener, mas não remove
    window.addEventListener('resize', handleResize);
    
    function handleResize() {
      // Alguma lógica aqui
      console.log('Window resized');
    }
    
    // ❌ Falta cleanup function
  }, []);
  
  return <div>Componente com vazamento</div>;
}
```

**Correção**:

```jsx
// Componente corrigido
function FixedComponent() {
  useEffect(() => {
    function handleResize() {
      console.log('Window resized');
    }
    
    window.addEventListener('resize', handleResize);
    
    // ✅ Cleanup function para remover o listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return <div>Componente corrigido</div>;
}
```

## VERIFICAÇÃO DE COMPONENTES

Verifique todos os componentes que usam estes padrões:

1. **Event Listeners Globais**:
   - `window.addEventListener`
   - `document.addEventListener`
   - Listeners em elementos fora do componente

2. **Timers e Intervals**:
   - `setTimeout` / `setInterval` sem `clearTimeout` / `clearInterval`

3. **Subscriptions**:
   - WebSockets
   - Observable (RxJS)
   - Firebase listeners
   - Redux subscriptions
   - EventEmitters

## FERRAMENTA DE DETECÇÃO AUTOMÁTICA

Adicione este componente de alto nível para detectar chamadas de `setState` em componentes desmontados:

```jsx
// DetectMemoryLeaks.jsx
import { Component } from 'react';

class DetectMemoryLeaks extends Component {
  constructor(props) {
    super(props);
    this.originalConsoleError = console.error;
    this.patchConsoleError();
  }
  
  patchConsoleError() {
    console.error = (...args) => {
      const message = args[0] || '';
      
      if (typeof message === 'string' && 
          message.includes('Can\'t perform a React state update on an unmounted component')) {
        console.warn('🚨 MEMORY LEAK DETECTED:', message);
        console.trace('Component that caused the leak:');
      }
      
      this.originalConsoleError.apply(console, args);
    };
  }
  
  componentWillUnmount() {
    console.error = this.originalConsoleError;
  }
  
  render() {
    return this.props.children;
  }
}

export default DetectMemoryLeaks;

// Uso:
// <DetectMemoryLeaks>
//   <App />
// </DetectMemoryLeaks>
```

## CORREÇÕES ESPECÍFICAS PARA CASOS COMUNS

### 1. Para APIs de Terceiros:

```jsx
function ThirdPartyComponent() {
  useEffect(() => {
    const subscription = thirdPartyAPI.subscribe();
    
    return () => {
      subscription.unsubscribe();
    };
  }, []);
}
```

### 2. Para Chamadas Assíncronas:

```jsx
function AsyncComponent() {
  const [data, setData] = useState(null);
  const isMounted = useRef(true);
  
  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);
  
  useEffect(() => {
    fetchData().then(result => {
      // Evita setState em componente desmontado
      if (isMounted.current) {
        setData(result);
      }
    });
  }, []);
}
```

### 3. Para Timers:

```jsx
function TimerComponent() {
  useEffect(() => {
    const timerId = setInterval(() => {
      // alguma lógica
    }, 1000);
    
    return () => clearInterval(timerId);
  }, []);
}
```

## FERRAMENTAS PARA DIAGNÓSTICO MAIS PROFUNDO

Se os problemas persistirem, use:

1. **Chrome DevTools > Memory**: Faça snapshots de memória antes e depois de navegar entre páginas
2. **React DevTools > Profiler**: Identifique componentes que renderizam excessivamente
3. **why-did-you-render**: Biblioteca para detectar re-renderizações desnecessárias

```bash
npm install @welldone-software/why-did-you-render --save
```

4. **Lighthouse**: Execute auditorias de performance para identificar problemas gerais

## CHECKLIST DE VERIFICAÇÃO

Para cada componente que acessa recursos externos:

- [ ] Todos os event listeners têm cleanup correspondente
- [ ] Todos os timers/intervals têm clear correspondente
- [ ] Todas as subscriptions são canceladas no cleanup
- [ ] Requisições assíncronas verificam se o componente ainda está montado
- [ ] Refs são utilizados para flags de "componente montado" quando necessário
- [ ] Não há closures que mantêm referências desnecessárias

Alguma área específica que você gostaria que eu analisasse mais detalhadamente no seu código?
```

## Colaboração com Outros Agentes

Hefesto trabalha em estreita colaboração com outros agentes:

- **Com Atena**: Recebendo orientação arquitetural e decisões técnicas fundamentais
- **Com Apolo**: Implementando interfaces e experiências conforme especificações de design
- **Com Poseidon**: Garantindo que o código funcione adequadamente em ambientes de produção
- **Com Hermes**: Compreendendo requisitos e regras de negócio a serem implementados

## Integrando Hefesto no Fluxo de Desenvolvimento

Para obter os melhores resultados, posicione Hefesto em momentos estratégicos do desenvolvimento:

![Ciclo de Vida com Hefesto](../diagrams/hephaestus-workflow.png)

1. **Após definição de arquitetura**: Hefesto transforma diagramas em código funcional
2. **Durante implementação**: Para resolver problemas técnicos específicos
3. **Em fases de otimização**: Para melhorar performance e eficiência
4. **Durante refatoração**: Para modernizar codebases legados

## Dicas para Interação Efetiva

Para obter os melhores resultados do Agente Hefesto:

### Formate suas solicitações com:

- **Contexto técnico claro**: Linguagens, frameworks e bibliotecas em uso
- **Requisitos funcionais específicos**: O que o código deve fazer exatamente
- **Considerações de qualidade**: Performance, segurança, escalabilidade
- **Restrições**: Compatibilidade, dependências ou limitações
- **Exemplos existentes**: Código similar já implementado no projeto

### Exemplo de solicitação eficiente:

```
Hefesto, precisamos implementar um middleware de cache para nossa API Express.

Contexto técnico:
- Node.js 14+ com Express 4
- Usando Redis como armazenamento
- Biblioteca ioredis para conexão

Requisitos:
- Cache baseado em URL e parâmetros de query
- TTL configurável por rota
- Bypass de cache via header específico
- Invalidação automática em operações de escrita

Por favor, forneça o código do middleware com exemplos de uso.
```

## Limitações

O Agente Hefesto possui algumas limitações:

- Não tem acesso direto ao codebase completo (a menos que fornecido)
- Implementações podem precisar de ajustes para integração perfeita
- Conhecimento limitado de bibliotecas muito recentes ou obscuras
- Não pode executar código diretamente para testar funcionamento

---

<div class="deity-quote">
"Na forja do código, cada linha é meticulosamente moldada, cada função cuidadosamente temperada, para criar não apenas algo funcional, mas algo de valor duradouro."
</div>
