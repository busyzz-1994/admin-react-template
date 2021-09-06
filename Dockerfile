# build environment
FROM node:alpine as builder

WORKDIR /usr/src/app
ENV PATH ./node_modules/.bin:$PATH
COPY . .
RUN yarn install
RUN yarn build

# production environment
FROM nginx:stable

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/src/app/build /usr/share/nginx/html



