# build step
FROM node:lts-alpine as build-stage

# Create app directory
WORKDIR /app

# args
ARG WAOS_VUE_app_title='WAOS Docker'
ENV WAOS_VUE_app_title $WAOS_VUE_app_title
ARG WAOS_VUE_api_protocol='http'
ENV WAOS_VUE_api_protocol $WAOS_VUE_api_protocol
ARG WAOS_VUE_api_host='localhost'
ENV WAOS_VUE_api_host $WAOS_VUE_api_host
ARG WAOS_VUE_api_port='3000'
ENV WAOS_VUE_api_port $WAOS_VUE_api_port
ARG WAOS_VUE_api_base='api'
ENV WAOS_VUE_api_base $WAOS_VUE_api_base
ARG WAOS_VUE_cookie='waos'
ENV WAOS_VUE_cookie $WAOS_VUE_cookie

# Install app dependencies & build
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# prod step
FROM nginx:stable-alpine as production-stage

# Copy all build
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Add nginx config
COPY nginx.example.conf /temp/prod.conf
RUN envsubst /app < /temp/prod.conf > /etc/nginx/conf.d/default.conf

# Expose
EXPOSE 80

# Command to run
CMD ["nginx", "-g", "daemon off;"]