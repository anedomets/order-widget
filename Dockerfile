FROM node:16-alpine as build-stage

WORKDIR /app

COPY package*.json ./

COPY . .

RUN npm run build

FROM nginx:1.19.1-alpine as production-stage

COPY --from=build-stage /app/dist /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 3010

CMD [ "nginx", "-g", "daemon off;" ]