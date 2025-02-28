FROM node:lts-alpine as development
WORKDIR /app/backend
COPY package.json .
RUN npm install
COPY . .
CMD ["node","Index.js"]
EXPOSE 3000