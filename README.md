# Desafio Corelab

## Descrição

Este projeto é uma aplicação web para criar e gerenciar listas de tarefas. A aplicação é composta por um frontend em React e uma API backend em Node.js. O frontend permite aos usuários visualizar, criar, atualizar e excluir tarefas, além de marcar tarefas como favoritas e definir cores para elas. O backend fornece uma API RESTfull para gerenciar essas operações e se conecta a um banco de dados PostgreSQL.

## Requisitos

  - A API backend deve ser construída em um framework Node.js e usar um banco de dados de sua escolha (por exemplo, MongoDB, PostgreSQL, etc.).

## Tecnologias Utilizadas

- **Backend:**
  - Node.js
  - Express
  - TypeScript
  - Prisma
  - PostgreSQL
  - Docker

## Estrutura do Projeto

### Backend

- `src/controllers/`: Contém os controladores da API para gerenciar tarefas.
- `src/prisma/`: Configuração do Prisma Client.
- `src/services/`: Lógica de negócios e interações com o banco de dados.
- `src/routes.ts`: Definição das rotas da API.
- `src/server.ts`: Configuração do servidor da API.
- `docker-compose.yml`: Configuração para rodar o backend e o PostgreSQL em containers Docker.

## Instalação e Execução

### Backend

1. **Clone o repositório do projeto e entre no diretório backend:**
   ```bash
   git clone https://github.com/jhondharkyson520/corelab.git
   cd backend

2. **Instale as dependências:**
   ```bash
   npm install

3. **Configure o banco de dados:**
- Crie um arquivo `.env` na raiz do projeto `backend` com as seguintes variáveis:
   ```bash
   
    POSTGRES_PASSWORD="admin"

    PGADMIN_PASSWORD="admin"

    PGADMIN_EMAIL="admin@admin.com"

4. **Inicie o backend e o banco de dados usando Docker Compose:**
   ```bash
   docker-compose up

### Funcionalidades

- `Backend`: API RESTfull para gerenciar tarefas, incluindo criação, leitura, atualização, exclusão, marcação de favoritos e definição de cores.

### Testes

- `Backend`: Acesse a API em http://localhost:3333 para testar as rotas.