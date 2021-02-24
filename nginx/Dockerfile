FROM nginx:latest

COPY ./build /opt/app/
COPY ./default.conf /etc/nginx/nginx.conf

CMD ["nginx", "-g", "daemon off;", "-c", "/etc/nginx/nginx.conf"]