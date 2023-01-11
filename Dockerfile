# production environment
FROM node:16.15.0
# Create app directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
# Create env variables
ENV PATH /usr/src/app/node_modules/.bin:$PATH
ARG GENERATE_SOURCEMAP=${GENERATE_SOURCEMAP}
ENV GENERATE_SOURCEMAP=${GENERATE_SOURCEMAP}
ARG VITE_BACKEND_URL=${VITE_BACKEND_URL}
ENV VITE_BACKEND_URL=${VITE_BACKEND_URL}
ARG VITE_IMAGES_URL=${VITE_IMAGES_URL}
ENV VITE_IMAGES_URL=${VITE_IMAGES_URL}
ARG APP_PORT=${APP_PORT}
ENV APP_PORT=${APP_PORT}
ARG DB_HOST=${DB_HOST}
ENV DB_HOST=${DB_HOST}
ARG DB_USER=${DB_USER}
ENV DB_USER=${DB_USER}
ARG DB_PASSWORD=${DB_PASSWORD}
ENV DB_PASSWORD=${DB_PASSWORD}
ARG DB_NAME=${DB_NAME}
ENV DB_NAME=${DB_NAME}
ARG FRONTEND_URL=${FRONTEND_URL}
ENV FRONTEND_URL=${FRONTEND_URL}

COPY ./ /usr/src/app
RUN npm install -g pnpm
# Create front app
RUN cd ./frontend && pnpm i && pnpm build
RUN mkdir -p ./frontend/dist/src && cp -r ./frontend/src/assets ./frontend/dist/src
# Create back app
RUN cd ./backend && pnpm i --prod

# expose full app on APP_PORT
EXPOSE ${APP_PORT}
CMD ["node", "backend/index.js"]
