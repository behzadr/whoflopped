FROM node:20-alpine AS base

WORKDIR /app
COPY package*.json ./

FROM base AS dependencies
ARG NODE_ENV=production
RUN npm install --if-present

COPY prisma ./prisma
RUN npx prisma generate

FROM dependencies AS build
COPY . .
RUN npm run build

FROM node:20-alpine AS production
WORKDIR /app

COPY --from=build /app /app

EXPOSE 3000

CMD ["sh", "-c", "npx prisma migrate deploy && npm run start"]

# Development
FROM node:20-alpine AS development
WORKDIR /app
COPY package*.json ./
RUN npm install

COPY prisma ./prisma
RUN npx prisma generate

COPY . .

EXPOSE 3000
CMD npm run dev
