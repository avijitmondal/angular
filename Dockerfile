FROM nginx:1.19-alpine
LABEL maintainer="avijitmondal38@gmail.com"

ADD dist/angular-grpc/ /etc/nginx/html/
ADD nginx/conf.d/default-ssl.conf /etc/nginx/conf.d/default.conf
ADD nginx/ssl/ /etc/nginx/

EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
