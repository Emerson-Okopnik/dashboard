# Dashboard de Vendas - Vue.js 3 + PostgreSQL

Sistema completo de dashboard de vendas com diferentes níveis de acesso (Vendedor, Supervisor, Gestor).

## 🚀 Tecnologias Utilizadas

### Frontend
- **Vue.js 3** - Framework JavaScript reativo
- **Pinia** - Gerenciamento de estado
- **Vue Router** - Roteamento
- **Chart.js** - Visualização de dados
- **Tailwind CSS** - Estilização
- **Axios** - Cliente HTTP

### Backend
- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web
- **PostgreSQL** - Banco de dados
- **JWT** - Autenticação
- **pg** - Cliente PostgreSQL

## 📋 Pré-requisitos

- Node.js 16+ instalado
- Acesso ao banco PostgreSQL (credenciais fornecidas)
- npm ou yarn

## 🔧 Instalação e Configuração

### 1. Clone e instale dependências
\`\`\`bash
git clone <repository-url>
cd sales-dashboard
npm install
\`\`\`

### 2. Configure as variáveis de ambiente
Crie um arquivo `.env` na raiz do projeto com as credenciais do banco:

### 4. Inicie a aplicação
\`\`\`bash
# Inicia tanto o backend quanto o frontend
npm run dev

# Ou separadamente:
npm run server  # Backend na porta 3001
npm run client  # Frontend na porta 5173
\`\`\`

## 🔐 Credenciais de Teste

O login agora valida suas credenciais na API externa da Aprrudnik. Utilize o
mesmo email e senha cadastrados na plataforma.

## 📊 Funcionalidades por Papel

### 👤 Vendedor
- Visualização de propostas feitas
- Número de vendas fechadas
- Faturamento gerado
- Taxa de conversão
- Ticket médio
- Gráficos de performance mensal

### 👥 Supervisor
- Todos os indicadores da equipe supervisionada
- Ranking de vendedores
- Comparação de performance
- Gráficos consolidados da equipe

### 🏢 Gestor
- Indicadores globais da empresa
- Top 10 vendedores
- Faturamento mensal consolidado
- Visão estratégica completa

## 🎯 Endpoints da API

### Autenticação
- `POST /api/auth/login` - Login do usuário

### Dashboards
- `GET /api/dashboard/vendedor/:id?period=YYYY-MM` - Dashboard do vendedor
- `GET /api/dashboard/supervisor/:id?period=YYYY-MM` - Dashboard do supervisor
 - `GET /api/dashboard/gerente_comercial?period=YYYY-MM` - Dashboard do gerente comercial

### Metas
- `GET /api/goals?period=YYYY-MM` - Metas gerais e individuais
- `GET /api/goals/general?period=YYYY-MM` - Apenas meta geral e progresso
- `POST /api/goals/general` - Definir meta geral
- `POST /api/goals/individual` - Definir meta individual

O Painel de Metas pode ser acessado por usuários dos tipos `admin`, `gerente_comercial` ou `gestor`.

## 📈 Gráficos Disponíveis

- **Linha**: Faturamento ao longo do tempo
- **Barras**: Vendas por período, ranking de vendedores
- **Tabelas**: Detalhamento de performance e rankings

## 🔒 Segurança

- Autenticação JWT
- Middleware de proteção de rotas
- Validação de papéis de usuário
- Conexão segura com PostgreSQL via SSL

## 🚀 Deploy

### Frontend
\`\`\`bash
npm run build
# Deploy da pasta dist/ para seu servidor web
\`\`\`

### Backend
\`\`\`bash
# Configure as variáveis de ambiente no servidor
# Inicie com PM2 ou similar
pm2 start server/index.js --name "sales-dashboard-api"
\`\`\`

## 📝 Estrutura do Projeto

\`\`\`
sales-dashboard/
├── server/
│   └── index.js          # Backend Express.js
├── src/
│   ├── components/       # Componentes Vue
│   ├── views/           # Páginas/Views
│   ├── stores/          # Pinia stores
│   ├── services/        # Serviços API
│   └── router/          # Configuração de rotas
├── scripts/
│   └── create-sample-data.sql  # Dados de exemplo
└── package.json
\`\`\`

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT.
