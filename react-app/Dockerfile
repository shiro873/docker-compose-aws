# Use an official Node.js runtime as a build stage
FROM node:16-alpine as builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:16-alpine
RUN npm install -g serve
COPY --from=builder /app/build /app
EXPOSE 3000

# CMD ["serve", "-s", "/app", "-l", "3000"]
CMD [ "npm", "run", "start:dev" ]  # Replace with your hot reload script
