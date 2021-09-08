FROM node:lts-alpine as build-stage
WORKDIR /webhimapersis-kbb
COPY package*.json ./
RUN npm install
COPY . .
ARG VUE_APP_MAIN_URL
ENV VUE_APP_MAIN_URL ${VUE_APP_MAIN_URL}
RUN npm run build

FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /webhimapersis-kbb/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
