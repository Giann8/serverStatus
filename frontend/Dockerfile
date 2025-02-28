FROM node:latest as development
WORKDIR /app/frontend
RUN npm init -y
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3001
CMD ["npm","start"]