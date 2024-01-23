FROM node:21-alpine AS base


# stage builder
FROM base AS builder
RUN apk add --no-cache libc6-compat
RUN apk update

# Set  workind directory
WORKDIR /app
RUN npm install turbo --global
COPY . .
RUN npm install
RUN turbo prune web --docker


# Add lockfile and package.json's of isolated subworkspace
FROM base AS installer
RUN apk add --no-cache libc6-compat
RUN apk update
WORKDIR /app

# First install the dependencies (as they change less often)
COPY .gitignore .gitignore
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/package-lock.json ./package-lock.json
RUN npm install 
COPY --from=builder /app/out/full/ .
COPY turbo.json turbo.json

# RUN npm turbo run build --filter=web
RUN npm run build --filter=web...

FROM base AS runner
WORKDIR /app

# Don't run root in production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

COPY --from=installer /app/apps/web/next.config.js .
COPY --from=installer /app/apps/web/package.json .

# Automatically leverage output traces to reduce image size
COPY --from=installer --chown=nextjs:nodejs /app/apps/web/.next/standalone ./
COPY --from=installer --chown=nextjs:nodejs /app/apps/web/.next/static ./apps/web/.next/static
COPY --from=installer --chown=nextjs:nodejs /app/apps/web/public ./apps/web/public

EXPOSE ${WEB_PORT}
WORKDIR /app/apps/web/
CMD node server.js