
FROM node:24-alpine


WORKDIR /app


COPY package*.json yarn.lock ./

# 4. Install all dependencies
RUN yarn install


COPY . .


EXPOSE 8080


CMD ["yarn", "dev"]
