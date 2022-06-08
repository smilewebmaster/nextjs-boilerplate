##
## Docker Configuration
##

# Linux + Node + Source + Project dependencies
FROM node:lts-buster-slim AS base
RUN apt-get update && apt-get install libssl-dev ca-certificates -y
WORKDIR /app
COPY . .
COPY package.json .
RUN yarn add --dev @swc/cli @swc/core
RUN yarn add next
RUN yarn add prisma --dev   
RUN yarn install --frozen-lockfile --force
RUN yarn prisma:gen
RUN yarn prisma:push

# Linux + Node + Source + Project dependencies + build assets
FROM base AS build
ENV NODE_ENV=production
WORKDIR /build
COPY --from=base /app .
RUN yarn build

# We keep some artifacts from build
FROM node:lts-buster-slim AS production
RUN apt-get update && apt-get install libssl-dev ca-certificates -y
ENV NODE_ENV=production
WORKDIR /app
COPY --from=build /build/package*.json .
COPY --from=build /build/.next ./.next
COPY --from=build /build/public ./public
RUN yarn add next

EXPOSE 3000
CMD yarn start
HEALTHCHECK CMD curl --fail http://localhost:3000

##
## END
##