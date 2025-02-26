FROM node:alpine AS build
RUN apk add --no-cache openssl

WORKDIR /usr/src/corelab
COPY package*.json ./
RUN npm install -g npm@11.1.0
RUN npm i --save-dev prisma@latest
RUN npm i @prisma/client@latest
COPY . .
RUN npx prisma generate
RUN npm run build

FROM node:alpine
WORKDIR /usr/src/corelab
COPY --from=build /usr/src/corelab/dist ./dist
COPY --from=build /usr/src/corelab/node_modules ./node_modules
COPY --from=build /usr/src/corelab/package*.json ./
COPY --from=build /usr/src/corelab/prisma ./prisma
COPY --from=build /usr/src/corelab/init.sh ./
RUN apk add --no-cache openssl
RUN npm i --save-dev prisma@latest
RUN npm i @prisma/client@latest
EXPOSE 3333
CMD ["sh", "init.sh"]
