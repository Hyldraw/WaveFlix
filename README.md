# PrimeFlix

## Deploy no Render.com

### Passo 1: Criar Database PostgreSQL no Render
1. Acesse [Render.com](https://render.com) e faça login
2. Clique em "New +" e selecione "PostgreSQL"
3. Escolha um nome para o database e selecione o plano (Free disponível)
4. Após criar, copie a "External Database URL" 

### Passo 2: Deploy da Aplicação
1. No Render, clique em "New +" e selecione "Web Service"
2. Conecte seu repositório GitHub/GitLab
3. Configure:
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm run start`

### Passo 3: Configurar Variáveis de Ambiente
Na aba "Environment" do seu Web Service, adicione:

| Key | Value |
|-----|-------|
| `DATABASE_URL` | (cole a External Database URL do PostgreSQL) |
| `NODE_ENV` | `production` |

### Passo 4: Deploy
Clique em "Deploy" e aguarde. O Render vai:
1. Instalar dependências
2. Fazer build do frontend e backend
3. Iniciar o servidor na porta definida pelo Render

## Scripts Disponíveis

- `npm run dev` - Desenvolvimento local
- `npm run build` - Build para produção
- `npm run start` - Iniciar servidor de produção
- `npm run db:push` - Sincronizar schema do banco

## Variáveis de Ambiente Necessárias

- `DATABASE_URL` - URL de conexão PostgreSQL
- `NODE_ENV` - `development` ou `production`
- `PORT` - Porta do servidor (Render define automaticamente)
