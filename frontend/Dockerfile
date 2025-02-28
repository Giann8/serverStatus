FROM node:latest as development
ARG S_PORT
ENV S_PORT $S_PORT
WORKDIR /app/frontend/
RUN npm init -y
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3001
CMD ["npm","start"]