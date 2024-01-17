FROM node:21-alpine AS base


# stage builder
FROM base AS builder
RUN apk add --no-cache libc6-compat
RUN apk update
WORKDIR /app
RUN npm install turbo --global
COPY . .
RUN npm install
RUN turbo prune ${WEB_NAME} --docker


# Add lockfile and package.json's of isolated subworkspace
FROM base AS installer
RUN apk add --no-cache libc6-compat
RUN apk update
WORKDIR /app

# First install the dependencies (as they change less often)
COPY .gitignore .gitignore
COPY --from=builder /app/out/json/ .
COPY apps/api/package.json /app/apps/api/package.json
COPY --from=builder /app/out/package-lock.json ./package-lock.json
COPY --from=builder /app/turbo.json ./turbo.json
RUN npm install
COPY --from=builder /app/out/full/ .
COPY turbo.json turbo.json
RUN npx turbo build --filter=${WEB_NAME}...

FROM base AS runner
WORKDIR /app
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs
COPY --from=installer /app/apps/${WEB_NAME}/next.config.js ./
COPY --from=installer /app/apps/${WEB_NAME}/package.json .

# Automatically leverage output traces to reduce image size
COPY --from=installer --chown=nextjs:nodejs /app/apps/${WEB_NAME}/.next/standalone ./
COPY --from=installer --chown=nextjs:nodejs /app/apps/${WEB_NAME}/.next/static ./apps/${WEB_NAME}/.next/static
COPY --from=installer --chown=nextjs:nodejs /app/apps/${WEB_NAME}/public ./apps/${WEB_NAME}/public

EXPOSE ${WEB_PORT}
CMD node apps/${WEB_NAME}/server.js