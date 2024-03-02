# FROM node:20.11 as base
# RUN npm i -g pnpm


# FROM base as dev
# WORKDIR /usr/src/app

FROM node:20.11 AS base
RUN corepack enable

WORKDIR /app
#COPY --link .npmrc package.json ./
#COPY . .
#RUN pnpm install
#
#FROM base
#COPY --from=base /app/node_modules /app/node_modules
#FROM base AS prod-deps
#RUN #--mount=type=cache,id=pnpm,target=/pnpm/store pnpm install
#
#
#
#FROM base
#COPY --from=prod-deps /app/node_modules /app/node_modules
#RUN #chmod -R 777 /app/node_modules/
