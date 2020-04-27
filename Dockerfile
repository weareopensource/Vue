# build step
FROM node:lts-alpine as build-stage

# Create app directory
WORKDIR /app

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