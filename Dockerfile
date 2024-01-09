# Install dependencies only when needed
FROM node:16.14.2-alpine AS deps

RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
#COPY package.json package-lock.json* ./
#RUN npm ci

COPY package.json ./
RUN npm i

# Rebuild the source code only when needed
FROM node:16.14.2-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_PUBLIC_API_BASE_PATH=NEXT_PUBLIC_API_BASE_PATH_VALUE
ENV NEXT_PUBLIC_BASE_PATH=NEXT_PUBLIC_BASE_PATH_VALUE
ENV NEXT_PUBLIC_SECRET_TOKEN_KEY=NEXT_PUBLIC_SECRET_TOKEN_KEY_VALUE
ENV NEXT_PUBLIC_RECAPTCHA_KEY=NEXT_PUBLIC_RECAPTCHA_KEY_VALUE
ENV NEXT_PUBLIC_SENTRY_ENV=NEXT_PUBLIC_SENTRY_ENV_VALUE
ENV SENTRY_AUTH_TOKEN=SENTRY_AUTH_TOKEN_VALUE

RUN npm run build

FROM node:16.14.2-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

# Automatically leverage output traces to reduce image size
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

ENV PORT 3000

CMD ["node", "server.js"]
