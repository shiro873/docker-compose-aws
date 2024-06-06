# Use the official Node.js 18 image as a parent image
FROM node:20-alpine

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3001

# CMD ["node", "app.js"]

RUN ["npm", "install", "-g", "nodemon"]

CMD ["nodemon", "index.js"]
