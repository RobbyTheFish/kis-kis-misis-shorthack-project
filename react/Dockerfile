FROM node:lts-alpine as build
WORKDIR /app
COPY ./kis-kis/package*.json ./
RUN npm i
COPY ./kis-kis .
RUN npm run build

FROM nginx:latest as prod

COPY --from=build /kis-kis/build /usr/share/nginx/html
COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80/tcp
EXPOSE 443/tcp

CMD ["/usr/sbin/nginx", "-g", "daemon off;"]