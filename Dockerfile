FROM node:18
RUN mkdir /app
WORKDIR /app
COPY . .
RUN npm i -g pnpm
RUN pnpm install
RUN pnpm run build
CMD ["node", "index.js"]
