#!/bin/sh

echo "Aguardando o banco de dados iniciar..."
until nc -z db_corelab 5432; do
  sleep 2
done

echo "Banco de dados pronto! Rodando as migrações..."
npx prisma migrate deploy

echo "Iniciando a aplicação..."
npm run start
