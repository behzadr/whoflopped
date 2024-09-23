FROM node:20-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY prisma ./prisma
RUN npx prisma generate

COPY . .

# Build the app for production
RUN npm run build

EXPOSE 3000

# Run the production build
CMD sh -c "npx prisma migrate deploy && npm run start"
