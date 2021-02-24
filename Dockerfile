FROM node:latest

RUN mkdir /opt/app
WORKDIR /opt/app

FROM nginx:latest

COPY ./build /opt/app
COPY ./nginx/default.conf /etc/nginx/nginx.conf

CMD ["nginx", "-g", "daemon off;", "-c", "/etc/nginx/nginx.conf"]
