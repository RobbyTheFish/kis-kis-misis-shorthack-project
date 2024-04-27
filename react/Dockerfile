FROM node:lts-alpine as build
WORKDIR /app
COPY ./kis-kis/package*.json ./
RUN npm i
COPY ./app .
RUN npm start

FROM nginx:latest as prod

COPY --from=build /app/build /usr/share/nginx/html
COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80/tcp
EXPOSE 443/tcp

CMD ["/usr/sbin/nginx", "-g", "daemon off;"]