FROM node:12.13-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install glob rimraf
RUN npm install
COPY . .
RUN npm run build
CMD [ "npm", "run", "start" ]
