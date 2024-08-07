FROM node:20.14.0-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:stable-alpine
EXPOSE 80
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

COPY ./scripts/env.sh /docker-entrypoint.d/
RUN chmod +x /docker-entrypoint.d/env.sh